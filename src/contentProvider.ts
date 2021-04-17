/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Alessandro Fragnani. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// tslint:disable-next-line:max-line-length
import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, Sponsor, IssueKind, SupportChannel, SocialMediaProvider, SponsorProvider } from "./vscode-whats-new/src/ContentProvider";

export class BookmarksContentProvider implements ContentProvider {
	public provideHeader(logoUrl: string): Header {
		return <Header>{
			logo: <Image>{ src: logoUrl, height: 50, width: 50 },
			message: `<b>Bookmarks</b> helps you to navigate in your code, <b>moving</b>
            between important positions easily and quickly. No more need
            to <i>search for code</i>. It also supports a set of <b>selection</b>
            commands, which allows you to select bookmarked lines and regions between
            lines.`,
		};
	}

	public provideChangeLog(): ChangeLogItem[] {
		const changeLog: ChangeLogItem[] = [];

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.4", releaseDate: "March 2021" } });
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Bookmarks on deleted/missing files breaks jumping",
				id: 390,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Toggling bookmarks on Untitled documents does not work",
				id: 391,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.3", releaseDate: "March 2021" } });
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: "Update Tabnine URL",
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.2", releaseDate: "February 2021" } });
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Command `bookmarks.toggle` not found - loading empty workspace with random files",
				id: 395,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.1", releaseDate: "February 2021" } });
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Command `bookmarks.toggle` not found - extension was not activated",
				id: 387,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.0", releaseDate: "February 2021" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Support <b>Remote Development</b>",
				id: 230,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Improvements on <b>multi-root</b> support",
				id: 193,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Group bookmarks by folder on multi-root in Side Bar",
				id: 249,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Cross-platform support",
				id: 205,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Do not show welcome page if installed by Settings Sync",
				id: 377,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.1.4", releaseDate: "January 2021" } });
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: "Update Tabnine URL",
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.1.3", releaseDate: "January 2021" } });
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Added new translations",
				id: 367,
				kind: IssueKind.PR,
				kudos: "@loniceras",
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: "Update Tabnine URL",
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.1.2", releaseDate: "January 2021" } });
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: "Tabnine becomes a Sponsor",
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.1.0", releaseDate: "December 2020" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Support submenu for editor commands",
				id: 351,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.CHANGED,
			detail: {
				message: "Setting <b>bookmarks.navigateThroughAllFiles</b> is now <b>true</b> by default",
				id: 102,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Remove unnecessary files from extension package",
				id: 355,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.0.0", releaseDate: "November 2020" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Adds <b>Open Settings</b> command to the Side Bar",
				id: 352,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Adds <b>Toggle Labeled</b> command to the Context Menu",
				id: 342,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.CHANGED,
			detail: {
				message: "Switch initialization to <b>onStartupFinished</b> API",
				id: 343,
				kind: IssueKind.PR,
				kudos: "@jasonwilliams",
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Clearing bookmark label through <b>Toggle Labeled</b> command leaving leading spaces",
				id: 344,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Leading spaces while using Move Line Up/Down",
				id: 348,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "<b>Ghost</b> Bookmarks after renaming files",
				id: 209,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Use <b>vscode-ext-help-and-feedback</b> package",
				id: 346,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "11.4.0", releaseDate: "October 2020" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Support clear the bookmark label in <b>Toggle Labeled</b> and <b>Edit Label</b> commands",
				id: 320,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.CHANGED,
			detail: {
				message: "Localization support - zh-cn",
				id: 327,
				kind: IssueKind.PR,
				kudos: "@loniceras",
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Typo in Side Bar welcome page",
				id: 316,
				kind: IssueKind.PR,
				kudos: "@osteele",
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "11.3.1", releaseDate: "June 2020" } });
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "<b>Open Folder</b> command in Welcome view not working on Windows",
				id: 310,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Stars visibility on Marketplace",
				id: 314,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "11.3.0", releaseDate: "June 2020" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Auto-save bookmarks when changing <b>saveBookmarksInProject</b> setting",
				id: 242,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.CHANGED,
			detail: {
				message: "Internal commands can't be customisable",
				id: 306,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Migrate from TSLint to ESLint",
				id: 290,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Remove <b>vscode</b> dependency",
				id: 296,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.INTERNAL,
			detail: {
				message: "Use <b>vscode-ext-codicons</b> package",
				id: 309,
				kind: IssueKind.Issue,
			},
		});

		changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "11.2.0", releaseDate: "May 2020" } });
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "Adds <b>Label suggestion</b> based on selection",
				id: 239,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.NEW,
			detail: {
				message: "<b>Side bar</b> welcome message",
				id: 284,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.CHANGED,
			detail: {
				message: "The <b>Bookmark position</b> in the <b>Side Bar</b> became more subtle",
				id: 295,
				kind: IssueKind.Issue,
			},
		});
		changeLog.push({
			kind: ChangeLogKind.FIXED,
			detail: {
				message: "Avoid Bookmarks from being toggled in the new Search Editor",
				id: 279,
				kind: IssueKind.Issue,
			},
		});

		return changeLog;
	}

	public provideSupportChannels(): SupportChannel[] {
		const supportChannels: SupportChannel[] = [];
		supportChannels.push({
			title: "Become a sponsor on Patreon",
			link: "https://www.patreon.com/alefragnani",
			message: "Become a Sponsor",
		});
		supportChannels.push({
			title: "Donate via PayPal",
			link: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted",
			message: "Donate via PayPal",
		});
		return supportChannels;
	}
}

export class BookmarksSponsorProvider implements SponsorProvider {
	public provideSponsors(): Sponsor[] {
		const sponsors: Sponsor[] = [];
		const sponsorCodeStream: Sponsor = <Sponsor>{
			title: "Learn more about Codestream",
			link: "https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=bookmarks&utm_medium=banner",
			image: {
				dark: "https://alt-images.codestream.com/codestream_logo_bookmarks.png",
				light: "https://alt-images.codestream.com/codestream_logo_bookmarks.png",
			},
			width: 52,
			// message: `<p>Eliminate context switching and costly distractions.
			//     Create and merge PRs and perform code reviews from inside your
			//     IDE while using jump-to-definition, your keybindings, and other IDE favorites.</p>`,
			// extra:
			//     `<a title="Learn more about CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=bookmarks&utm_medium=banner">
			//     Learn more</a>`
		};
		sponsors.push(sponsorCodeStream);
		const sponsorTabnine: Sponsor = <Sponsor>{
			title: "Learn more about Tabnine",
			link: "http://wd5a.2.vu/Bookmarks",
			image: {
				dark: "https://github.com/alefragnani/oss-resources/raw/master/images/sponsors/tabnine-hi-res.png",
				light: "https://github.com/alefragnani/oss-resources/raw/master/images/sponsors/tabnine-hi-res.png",
			},
			width: 40,
			// message: `<p>Improve your Bookmarks experience with Tabnine code
			//     completions! Tabnine is a free powerful Artificial Intelligence
			//     assistant designed to help you code faster, reduce mistakes,
			//     and discover best coding practices - without ever leaving the
			//     comfort of VSCode.</p>`,
			// extra:
			//     `<a title="Learn more about Tabnine" href="https://www.tabnine.com">
			//     Get it now</a>`
		};
		sponsors.push(sponsorTabnine);
		return sponsors;
	}
}

export class BookmarksSocialMediaProvider implements SocialMediaProvider {
	public provideSocialMedias() {
		return [
			{
				title: "Follow me on Twitter",
				link: "https://www.twitter.com/alefragnani",
			},
		];
	}
}
