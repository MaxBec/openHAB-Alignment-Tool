"use strict";
import { ConfigurationTarget, env, MessageItem, Uri, window } from "vscode";

export enum SuppressedMessages {
	CommitHasNoPreviousCommitWarning = "suppressCommitHasNoPreviousCommitWarning",
	CommitNotFoundWarning = "suppressCommitNotFoundWarning",
	CreatePullRequestPrompt = "suppressCreatePullRequestPrompt",
	SuppressDebugLoggingWarning = "suppressDebugLoggingWarning",
	FileNotUnderSourceControlWarning = "suppressFileNotUnderSourceControlWarning",
	GitDisabledWarning = "suppressGitDisabledWarning",
	GitMissingWarning = "suppressGitMissingWarning",
	GitVersionWarning = "suppressGitVersionWarning",
	IncorrectWorkspaceCasingWarning = "suppressImproperWorkspaceCasingWarning",
	LineUncommittedWarning = "suppressLineUncommittedWarning",
	NoRepositoryWarning = "suppressNoRepositoryWarning",
	RebaseSwitchToTextWarning = "suppressRebaseSwitchToTextWarning",
}

export class Messages {

	static showCommitNotFoundWarningMessage(message: string): Promise<MessageItem | undefined> {
		return Messages.showMessage("warn", `${message}. The commit could not be found.`, SuppressedMessages.CommitNotFoundWarning);
	}

	static async showCreatePullRequestPrompt(branch: string): Promise<boolean> {
		const create = { title: "Create Pull Request..." };
		const result = await Messages.showMessage("info", `Would you like to create a Pull Request for branch '${branch}'?`, SuppressedMessages.CreatePullRequestPrompt, { title: "Don't Show Again" }, create);
		return result === create;
	}

	static async showDebugLoggingWarningMessage(): Promise<boolean> {
		const disable = { title: "Disable Debug Logging" };
		const result = await Messages.showMessage("warn", "GitLens debug logging is currently enabled. Unless you are reporting an issue, it is recommended to be disabled. Would you like to disable it?", SuppressedMessages.SuppressDebugLoggingWarning, { title: "Don't Show Again" }, disable);

		return result === disable;
	}

	static async showGenericErrorMessage(message: string): Promise<MessageItem | undefined> {
		const actions: MessageItem[] = [{ title: "Open Output Channel" }];
		const result = await Messages.showMessage("error", `${message}. See output channel for more details`, undefined, null, ...actions);

		if (result !== undefined) {
		}
		return result;
	}

	static showFileNotUnderSourceControlWarningMessage(message: string): Promise<MessageItem | undefined> {
		return Messages.showMessage("warn", `${message}. The file is probably not under source control.`, SuppressedMessages.FileNotUnderSourceControlWarning);
	}

	static showGitDisabledErrorMessage() {
		return Messages.showMessage("error", "GitLens requires Git to be enabled. Please re-enable Git \u2014 set `git.enabled` to true and reload.", SuppressedMessages.GitDisabledWarning);
	}

	static showGitMissingErrorMessage() {
		return Messages.showMessage("error", "GitLens was unable to find Git. Please make sure Git is installed. Also ensure that Git is either in the PATH, or that 'git.path' is pointed to its installed location.", SuppressedMessages.GitMissingWarning);
	}

	static showGitVersionUnsupportedErrorMessage(version: string, required: string): Promise<MessageItem | undefined> {
		return Messages.showMessage("error", `GitLens requires a newer version of Git (>= ${required}) than is currently installed (${version}). Please install a more recent version of Git.`, SuppressedMessages.GitVersionWarning);
	}

	static async showIncorrectWorkspaceCasingWarningMessage(): Promise<void> {
		void (await Messages.showMessage(
			"warn",
			"This workspace was opened with a different casing than what exists on disk. Please re-open this workspace with the exact casing as it exists on disk, otherwise you may experience issues with certain Git features, such as missing blame or history.",
			SuppressedMessages.IncorrectWorkspaceCasingWarning
		));
	}

	static showInsidersErrorMessage() {
		return Messages.showMessage("error", "GitLens (Insiders) cannot be used while GitLens is also installed. Please ensure that only one version of GitLens is installed.", SuppressedMessages.GitDisabledWarning);
	}

	static showLineUncommittedWarningMessage(message: string): Promise<MessageItem | undefined> {
		return Messages.showMessage("warn", `${message}. The line has uncommitted changes.`, SuppressedMessages.LineUncommittedWarning);
	}

	static showNoRepositoryWarningMessage(message: string): Promise<MessageItem | undefined> {
		return Messages.showMessage("warn", `${message}. No repository could be found.`, SuppressedMessages.NoRepositoryWarning);
	}

	static showRebaseSwitchToTextWarningMessage(): Promise<MessageItem | undefined> {
		return Messages.showMessage("warn", "Closing either the git-rebase-todo file or the Rebase Editor will start the rebase.", SuppressedMessages.RebaseSwitchToTextWarning);
	}

	static async showWhatsNewMessage(version: string) {
		const actions: MessageItem[] = [{ title: "What's New" }, { title: "❤ Sponsor" }];

		const result = await Messages.showMessage("info", `GitLens has been updated to v${version} — check out what's new!`, undefined, null, ...actions);

		if (result != null) {
			if (result === actions[0]) {
				await env.openExternal(Uri.parse("https://gitlens.amod.io/#whats-new"));
			} else if (result === actions[1]) {
				await env.openExternal(Uri.parse("https://gitlens.amod.io/#sponsor"));
			}
		}
	}

	private static async showMessage(type: "info" | "warn" | "error", message: string, suppressionKey?: SuppressedMessages, dontShowAgain: MessageItem | null = { title: "Don't Show Again" }, ...actions: MessageItem[]): Promise<MessageItem | undefined> {

		if (suppressionKey !== undefined) {
			return undefined;
		}

		if (suppressionKey !== undefined && dontShowAgain !== null) {
			actions.push(dontShowAgain);
		}

		let result: MessageItem | undefined = undefined;
		switch (type) {
			case "info":
				result = await window.showInformationMessage(message, ...actions);
				break;

			case "warn":
				result = await window.showWarningMessage(message, ...actions);
				break;

			case "error":
				result = await window.showErrorMessage(message, ...actions);
				break;
		}

		if ((suppressionKey !== undefined && dontShowAgain === null) || result === dontShowAgain) {

			if (result === dontShowAgain) return undefined;
		}

		return result;
	}
}