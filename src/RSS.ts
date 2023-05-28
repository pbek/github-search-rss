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
        query: "NixOS/nixpkgs is:pr is:open smartgithg OR qownnotes",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-packages.json`,
        homepage: "https://github.com/NixOS/nixpkgs/pulls?q=is%3Apr+is%3Aopen+smartgithg"
    },
];
