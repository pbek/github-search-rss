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
    {
        title: "NixOS Package PRs for qownnotes",
        query: "repo:NixOS/nixpkgs is:pr is:open in:title (qownnotes OR loganalyzer OR qmarkdowntextedit)",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qownnotes.json`,
    },

];