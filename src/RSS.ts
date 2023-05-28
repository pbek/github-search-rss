/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

export const BASE_URL = "https://pbek.github.io/github-search-rss";

// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github
// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection
export const SEARCH_ITEMS: RSSItem[] = [
    // Issue
    {
        title: "NixOS Packages PRs",
        query: "NixOS/nixpkgs is:pr is:open smartgithg",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-packages.json`,
    },
    {
        title: "NixOS Packages PRs MORE",
        query: "NixOS/nixpkgs (is:pr is:open in:title (smartgithg OR qownnotes OR qmarkdowntextedit))",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-packages-more.json`,
    },
];
