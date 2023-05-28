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
        "title": "NixOS Packages PRs for kexec-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kexec-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kexec-tools.json"
    },
    {
        "title": "NixOS Packages PRs for iptables",
        "query": "NixOS\/nixpkgs is:pr is:open in:title iptables",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-iptables.json"
    },
    {
        "title": "NixOS Packages PRs for gnutar",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnutar",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnutar.json"
    },
    {
        "title": "NixOS Packages PRs for ncurses",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ncurses",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ncurses.json"
    },
    {
        "title": "NixOS Packages PRs for bash-interactive-5.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bash-interactive-5.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bash-interactive-5.2.json"
    },
    {
        "title": "NixOS Packages PRs for linux-pam",
        "query": "NixOS\/nixpkgs is:pr is:open in:title linux-pam",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-linux-pam.json"
    },
    {
        "title": "NixOS Packages PRs for kmod",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kmod",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kmod.json"
    },
    {
        "title": "NixOS Packages PRs for gnugrep",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnugrep",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnugrep.json"
    },
    {
        "title": "NixOS Packages PRs for zstd-1.5.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title zstd-1.5.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-zstd-1.5.5.json"
    },
    {
        "title": "NixOS Packages PRs for xz-5.4.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xz-5.4.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xz-5.4.3.json"
    },
    {
        "title": "NixOS Packages PRs for bzip2-1.0.8",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bzip2-1.0.8",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bzip2-1.0.8.json"
    },
    {
        "title": "NixOS Packages PRs for gzip",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gzip",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gzip.json"
    },
    {
        "title": "NixOS Packages PRs for kbd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kbd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kbd.json"
    },
    {
        "title": "NixOS Packages PRs for systemd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title systemd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-systemd.json"
    },
    {
        "title": "NixOS Packages PRs for qttools-5.15.9",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qttools-5.15.9",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qttools-5.15.9.json"
    },
    {
        "title": "NixOS Packages PRs for shared-mime-info",
        "query": "NixOS\/nixpkgs is:pr is:open in:title shared-mime-info",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-shared-mime-info.json"
    },
    {
        "title": "NixOS Packages PRs for dbus",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dbus",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dbus.json"
    },
    {
        "title": "NixOS Packages PRs for kcoreaddons-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kcoreaddons-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kcoreaddons-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kauth",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kauth",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kauth.json"
    },
    {
        "title": "NixOS Packages PRs for kwidgetsaddons",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwidgetsaddons",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwidgetsaddons.json"
    },
    {
        "title": "NixOS Packages PRs for kguiaddons",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kguiaddons",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kguiaddons.json"
    },
    {
        "title": "NixOS Packages PRs for kconfigwidgets",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kconfigwidgets",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kconfigwidgets.json"
    },
    {
        "title": "NixOS Packages PRs for breeze-icons",
        "query": "NixOS\/nixpkgs is:pr is:open in:title breeze-icons",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-breeze-icons.json"
    },
    {
        "title": "NixOS Packages PRs for kdoctools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdoctools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdoctools.json"
    },
    {
        "title": "NixOS Packages PRs for kiconthemes-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kiconthemes-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kiconthemes-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kservice-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kservice-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kservice-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kglobalaccel",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kglobalaccel",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kglobalaccel.json"
    },
    {
        "title": "NixOS Packages PRs for knotifications-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title knotifications-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-knotifications-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for ktextwidgets-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ktextwidgets-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ktextwidgets-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kxmlgui-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kxmlgui-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kxmlgui-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for sonnet-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sonnet-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sonnet-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for cups",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cups",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cups.json"
    },
    {
        "title": "NixOS Packages PRs for kded",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kded",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kded.json"
    },
    {
        "title": "NixOS Packages PRs for kjobwidgets-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kjobwidgets-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kjobwidgets-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for media-player-info",
        "query": "NixOS\/nixpkgs is:pr is:open in:title media-player-info",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-media-player-info.json"
    },
    {
        "title": "NixOS Packages PRs for solid-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title solid-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-solid-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kwallet-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwallet-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwallet-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kio",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kio",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kio.json"
    },
    {
        "title": "NixOS Packages PRs for kactivities-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kactivities-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kactivities-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kpackage-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kpackage-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kpackage-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kdeclarative-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdeclarative-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdeclarative-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for qtgraphicaleffects",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qtgraphicaleffects",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qtgraphicaleffects.json"
    },
    {
        "title": "NixOS Packages PRs for kirigami2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kirigami2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kirigami2.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-framework-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-framework-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-framework-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for krunner-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title krunner-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-krunner-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kaccounts-integration",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kaccounts-integration",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kaccounts-integration.json"
    },
    {
        "title": "NixOS Packages PRs for akonadi",
        "query": "NixOS\/nixpkgs is:pr is:open in:title akonadi",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-akonadi.json"
    },
    {
        "title": "NixOS Packages PRs for knewstuff-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title knewstuff-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-knewstuff-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kcmutils-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kcmutils-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kcmutils-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for grantlee",
        "query": "NixOS\/nixpkgs is:pr is:open in:title grantlee",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-grantlee.json"
    },
    {
        "title": "NixOS Packages PRs for grantleetheme",
        "query": "NixOS\/nixpkgs is:pr is:open in:title grantleetheme",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-grantleetheme.json"
    },
    {
        "title": "NixOS Packages PRs for kemoticons-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kemoticons-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kemoticons-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kparts-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kparts-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kparts-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kcalutils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kcalutils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kcalutils.json"
    },
    {
        "title": "NixOS Packages PRs for korganizer",
        "query": "NixOS\/nixpkgs is:pr is:open in:title korganizer",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-korganizer.json"
    },
    {
        "title": "NixOS Packages PRs for acl-2.3.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title acl-2.3.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-acl-2.3.1.json"
    },
    {
        "title": "NixOS Packages PRs for noseyparker",
        "query": "NixOS\/nixpkgs is:pr is:open in:title noseyparker",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-noseyparker.json"
    },
    {
        "title": "NixOS Packages PRs for calibre",
        "query": "NixOS\/nixpkgs is:pr is:open in:title calibre",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-calibre.json"
    },
    {
        "title": "NixOS Packages PRs for perl",
        "query": "NixOS\/nixpkgs is:pr is:open in:title perl",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-perl.json"
    },
    {
        "title": "NixOS Packages PRs for kinit",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kinit",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kinit.json"
    },
    {
        "title": "NixOS Packages PRs for khelpcenter",
        "query": "NixOS\/nixpkgs is:pr is:open in:title khelpcenter",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-khelpcenter.json"
    },
    {
        "title": "NixOS Packages PRs for frameworkintegration-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title frameworkintegration-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-frameworkintegration-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kdecoration",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdecoration",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdecoration.json"
    },
    {
        "title": "NixOS Packages PRs for breeze-qt5-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title breeze-qt5-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-breeze-qt5-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-integration",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-integration",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-integration.json"
    },
    {
        "title": "NixOS Packages PRs for kdbusaddons-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdbusaddons-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdbusaddons-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for nix-2.13.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nix-2.13.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nix-2.13.3.json"
    },
    {
        "title": "NixOS Packages PRs for nix",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nix",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nix.json"
    },
    {
        "title": "NixOS Packages PRs for wireguard-tools-1.0.20210914",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wireguard-tools-1.0.20210914",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wireguard-tools-1.0.20210914.json"
    },
    {
        "title": "NixOS Packages PRs for curl-8.0.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title curl-8.0.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-curl-8.0.1.json"
    },
    {
        "title": "NixOS Packages PRs for f2fs-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title f2fs-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-f2fs-tools.json"
    },
    {
        "title": "NixOS Packages PRs for attic",
        "query": "NixOS\/nixpkgs is:pr is:open in:title attic",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-attic.json"
    },
    {
        "title": "NixOS Packages PRs for bash-interactive-5.2-p15",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bash-interactive-5.2-p15",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bash-interactive-5.2-p15.json"
    },
    {
        "title": "NixOS Packages PRs for mkpasswd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title mkpasswd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-mkpasswd.json"
    },
    {
        "title": "NixOS Packages PRs for sops",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sops",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sops.json"
    },
    {
        "title": "NixOS Packages PRs for knotifyconfig",
        "query": "NixOS\/nixpkgs is:pr is:open in:title knotifyconfig",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-knotifyconfig.json"
    },
    {
        "title": "NixOS Packages PRs for kdepim-runtime",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdepim-runtime",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdepim-runtime.json"
    },
    {
        "title": "NixOS Packages PRs for ffmpegthumbs",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ffmpegthumbs",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ffmpegthumbs.json"
    },
    {
        "title": "NixOS Packages PRs for libressl-3.7.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libressl-3.7.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libressl-3.7.2.json"
    },
    {
        "title": "NixOS Packages PRs for cryptsetup-2.6.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cryptsetup-2.6.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cryptsetup-2.6.1.json"
    },
    {
        "title": "NixOS Packages PRs for gnupg",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnupg",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnupg.json"
    },
    {
        "title": "NixOS Packages PRs for kfilemetadata-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kfilemetadata-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kfilemetadata-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for kidletime-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kidletime-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kidletime-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for baloo",
        "query": "NixOS\/nixpkgs is:pr is:open in:title baloo",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-baloo.json"
    },
    {
        "title": "NixOS Packages PRs for kxmlrpcclient",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kxmlrpcclient",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kxmlrpcclient.json"
    },
    {
        "title": "NixOS Packages PRs for libkscreen",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libkscreen",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libkscreen.json"
    },
    {
        "title": "NixOS Packages PRs for kscreenlocker",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kscreenlocker",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kscreenlocker.json"
    },
    {
        "title": "NixOS Packages PRs for libksysguard-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libksysguard-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libksysguard-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for kpeople-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kpeople-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kpeople-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for polkit",
        "query": "NixOS\/nixpkgs is:pr is:open in:title polkit",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-polkit.json"
    },
    {
        "title": "NixOS Packages PRs for modemmanager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title modemmanager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-modemmanager.json"
    },
    {
        "title": "NixOS Packages PRs for openresolv",
        "query": "NixOS\/nixpkgs is:pr is:open in:title openresolv",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-openresolv.json"
    },
    {
        "title": "NixOS Packages PRs for gnused",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnused",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnused.json"
    },
    {
        "title": "NixOS Packages PRs for xset",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xset",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xset.json"
    },
    {
        "title": "NixOS Packages PRs for gawk",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gawk",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gawk.json"
    },
    {
        "title": "NixOS Packages PRs for xdg-utils-unstable-2020-10",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xdg-utils-unstable-2020-10",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xdg-utils-unstable-2020-10.json"
    },
    {
        "title": "NixOS Packages PRs for openconnect",
        "query": "NixOS\/nixpkgs is:pr is:open in:title openconnect",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-openconnect.json"
    },
    {
        "title": "NixOS Packages PRs for iputils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title iputils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-iputils.json"
    },
    {
        "title": "NixOS Packages PRs for networkmanager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title networkmanager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-networkmanager.json"
    },
    {
        "title": "NixOS Packages PRs for qtvirtualkeyboard",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qtvirtualkeyboard",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qtvirtualkeyboard.json"
    },
    {
        "title": "NixOS Packages PRs for kwin",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwin",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwin.json"
    },
    {
        "title": "NixOS Packages PRs for kdesu",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdesu",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdesu.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-workspace",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-workspace",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-workspace.json"
    },
    {
        "title": "NixOS Packages PRs for systemsettings-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title systemsettings-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-systemsettings-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for time",
        "query": "NixOS\/nixpkgs is:pr is:open in:title time",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-time.json"
    },
    {
        "title": "NixOS Packages PRs for gdb",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gdb",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gdb.json"
    },
    {
        "title": "NixOS Packages PRs for which",
        "query": "NixOS\/nixpkgs is:pr is:open in:title which",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-which.json"
    },
    {
        "title": "NixOS Packages PRs for smartgithg",
        "query": "NixOS\/nixpkgs is:pr is:open in:title smartgithg",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-smartgithg.json"
    },
    {
        "title": "NixOS Packages PRs for xlsclients",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xlsclients",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xlsclients.json"
    },
    {
        "title": "NixOS Packages PRs for coreutils-full",
        "query": "NixOS\/nixpkgs is:pr is:open in:title coreutils-full",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-coreutils-full.json"
    },
    {
        "title": "NixOS Packages PRs for bluez-qt-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bluez-qt-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bluez-qt-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for powerdevil",
        "query": "NixOS\/nixpkgs is:pr is:open in:title powerdevil",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-powerdevil.json"
    },
    {
        "title": "NixOS Packages PRs for gawk-5.2.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gawk-5.2.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gawk-5.2.1.json"
    },
    {
        "title": "NixOS Packages PRs for dosfstools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dosfstools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dosfstools.json"
    },
    {
        "title": "NixOS Packages PRs for glibc-2.37-8",
        "query": "NixOS\/nixpkgs is:pr is:open in:title glibc-2.37-8",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-glibc-2.37-8.json"
    },
    {
        "title": "NixOS Packages PRs for shadow",
        "query": "NixOS\/nixpkgs is:pr is:open in:title shadow",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-shadow.json"
    },
    {
        "title": "NixOS Packages PRs for util-linux-2.38.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title util-linux-2.38.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-util-linux-2.38.1.json"
    },
    {
        "title": "NixOS Packages PRs for e2fsprogs-1.46.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title e2fsprogs-1.46.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-e2fsprogs-1.46.6.json"
    },
    {
        "title": "NixOS Packages PRs for mdadm",
        "query": "NixOS\/nixpkgs is:pr is:open in:title mdadm",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-mdadm.json"
    },
    {
        "title": "NixOS Packages PRs for udisks",
        "query": "NixOS\/nixpkgs is:pr is:open in:title udisks",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-udisks.json"
    },
    {
        "title": "NixOS Packages PRs for man-db",
        "query": "NixOS\/nixpkgs is:pr is:open in:title man-db",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-man-db.json"
    },
    {
        "title": "NixOS Packages PRs for dolphin",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dolphin",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dolphin.json"
    },
    {
        "title": "NixOS Packages PRs for dolphin-plugins",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dolphin-plugins",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dolphin-plugins.json"
    },
    {
        "title": "NixOS Packages PRs for cryptsetup-2.6.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cryptsetup-2.6.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cryptsetup-2.6.1.json"
    },
    {
        "title": "NixOS Packages PRs for libkipi",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libkipi",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libkipi.json"
    },
    {
        "title": "NixOS Packages PRs for kipi-plugins",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kipi-plugins",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kipi-plugins.json"
    },
    {
        "title": "NixOS Packages PRs for gwenview",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gwenview",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gwenview.json"
    },
    {
        "title": "NixOS Packages PRs for btop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title btop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-btop.json"
    },
    {
        "title": "NixOS Packages PRs for print-manager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title print-manager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-print-manager.json"
    },
    {
        "title": "NixOS Packages PRs for wireplumber",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wireplumber",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wireplumber.json"
    },
    {
        "title": "NixOS Packages PRs for konsole",
        "query": "NixOS\/nixpkgs is:pr is:open in:title konsole",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-konsole.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-pa",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-pa",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-pa.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for nixos-generate",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos-generate",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos-generate.json"
    },
    {
        "title": "NixOS Packages PRs for iproute2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title iproute2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-iproute2.json"
    },
    {
        "title": "NixOS Packages PRs for openssh",
        "query": "NixOS\/nixpkgs is:pr is:open in:title openssh",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-openssh.json"
    },
    {
        "title": "NixOS Packages PRs for polkit-122",
        "query": "NixOS\/nixpkgs is:pr is:open in:title polkit-122",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-polkit-122.json"
    },
    {
        "title": "NixOS Packages PRs for lvm2-2.03.21",
        "query": "NixOS\/nixpkgs is:pr is:open in:title lvm2-2.03.21",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-lvm2-2.03.21.json"
    },
    {
        "title": "NixOS Packages PRs for fuse",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fuse",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fuse.json"
    },
    {
        "title": "NixOS Packages PRs for libvirt",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libvirt",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libvirt.json"
    },
    {
        "title": "NixOS Packages PRs for bzip2-1.0.8",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bzip2-1.0.8",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bzip2-1.0.8.json"
    },
    {
        "title": "NixOS Packages PRs for xorg-server",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xorg-server",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xorg-server.json"
    },
    {
        "title": "NixOS Packages PRs for elisa",
        "query": "NixOS\/nixpkgs is:pr is:open in:title elisa",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-elisa.json"
    },
    {
        "title": "NixOS Packages PRs for zstd-1.5.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title zstd-1.5.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-zstd-1.5.5.json"
    },
    {
        "title": "NixOS Packages PRs for power-profiles-daemon",
        "query": "NixOS\/nixpkgs is:pr is:open in:title power-profiles-daemon",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-power-profiles-daemon.json"
    },
    {
        "title": "NixOS Packages PRs for git-2.40.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title git-2.40.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-git-2.40.1.json"
    },
    {
        "title": "NixOS Packages PRs for git",
        "query": "NixOS\/nixpkgs is:pr is:open in:title git",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-git.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-disks-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-disks-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-disks-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for findutils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title findutils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-findutils.json"
    },
    {
        "title": "NixOS Packages PRs for util-linux-2.38.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title util-linux-2.38.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-util-linux-2.38.1.json"
    },
    {
        "title": "NixOS Packages PRs for xdg",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xdg",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xdg.json"
    },
    {
        "title": "NixOS Packages PRs for gcc-wrapper-12.2.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gcc-wrapper-12.2.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gcc-wrapper-12.2.0.json"
    },
    {
        "title": "NixOS Packages PRs for yakuake",
        "query": "NixOS\/nixpkgs is:pr is:open in:title yakuake",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-yakuake.json"
    },
    {
        "title": "NixOS Packages PRs for oxygen-sounds",
        "query": "NixOS\/nixpkgs is:pr is:open in:title oxygen-sounds",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-oxygen-sounds.json"
    },
    {
        "title": "NixOS Packages PRs for akonadiconsole",
        "query": "NixOS\/nixpkgs is:pr is:open in:title akonadiconsole",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-akonadiconsole.json"
    },
    {
        "title": "NixOS Packages PRs for shadow-4.13",
        "query": "NixOS\/nixpkgs is:pr is:open in:title shadow-4.13",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-shadow-4.13.json"
    },
    {
        "title": "NixOS Packages PRs for fuse",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fuse",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fuse.json"
    },
    {
        "title": "NixOS Packages PRs for gcc-wrapper",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gcc-wrapper",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gcc-wrapper.json"
    },
    {
        "title": "NixOS Packages PRs for cryfs",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cryfs",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cryfs.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-vault",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-vault",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-vault.json"
    },
    {
        "title": "NixOS Packages PRs for exfatprogs",
        "query": "NixOS\/nixpkgs is:pr is:open in:title exfatprogs",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-exfatprogs.json"
    },
    {
        "title": "NixOS Packages PRs for pam_u2f",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pam_u2f",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pam_u2f.json"
    },
    {
        "title": "NixOS Packages PRs for diffutils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title diffutils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-diffutils.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for attr-2.5.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title attr-2.5.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-attr-2.5.1.json"
    },
    {
        "title": "NixOS Packages PRs for gnugrep-3.7",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnugrep-3.7",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnugrep-3.7.json"
    },
    {
        "title": "NixOS Packages PRs for texinfo-interactive",
        "query": "NixOS\/nixpkgs is:pr is:open in:title texinfo-interactive",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-texinfo-interactive.json"
    },
    {
        "title": "NixOS Packages PRs for restic",
        "query": "NixOS\/nixpkgs is:pr is:open in:title restic",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-restic.json"
    },
    {
        "title": "NixOS Packages PRs for kio-admin",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kio-admin",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kio-admin.json"
    },
    {
        "title": "NixOS Packages PRs for goland-with-plugins",
        "query": "NixOS\/nixpkgs is:pr is:open in:title goland-with-plugins",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-goland-with-plugins.json"
    },
    {
        "title": "NixOS Packages PRs for kate",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kate",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kate.json"
    },
    {
        "title": "NixOS Packages PRs for oxygen-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title oxygen-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-oxygen-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for lvm2-2.03.21",
        "query": "NixOS\/nixpkgs is:pr is:open in:title lvm2-2.03.21",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-lvm2-2.03.21.json"
    },
    {
        "title": "NixOS Packages PRs for setxkbmap",
        "query": "NixOS\/nixpkgs is:pr is:open in:title setxkbmap",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-setxkbmap.json"
    },
    {
        "title": "NixOS Packages PRs for khotkeys-5.27.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title khotkeys-5.27.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-khotkeys-5.27.5.json"
    },
    {
        "title": "NixOS Packages PRs for kmenuedit",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kmenuedit",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kmenuedit.json"
    },
    {
        "title": "NixOS Packages PRs for bluedevil",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bluedevil",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bluedevil.json"
    },
    {
        "title": "NixOS Packages PRs for nano-7.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nano-7.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nano-7.2.json"
    },
    {
        "title": "NixOS Packages PRs for ksystemstats",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ksystemstats",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ksystemstats.json"
    },
    {
        "title": "NixOS Packages PRs for bind-9.18.14",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bind-9.18.14",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bind-9.18.14.json"
    },
    {
        "title": "NixOS Packages PRs for nixos-manual",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos-manual",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos-manual.json"
    },
    {
        "title": "NixOS Packages PRs for libressl-3.7.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libressl-3.7.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libressl-3.7.2.json"
    },
    {
        "title": "NixOS Packages PRs for aha",
        "query": "NixOS\/nixpkgs is:pr is:open in:title aha",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-aha.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-browser-integration",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-browser-integration",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-browser-integration.json"
    },
    {
        "title": "NixOS Packages PRs for gnumake",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnumake",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnumake.json"
    },
    {
        "title": "NixOS Packages PRs for atop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title atop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-atop.json"
    },
    {
        "title": "NixOS Packages PRs for kscreen",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kscreen",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kscreen.json"
    },
    {
        "title": "NixOS Packages PRs for nixos-icons-2021-02",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos-icons-2021-02",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos-icons-2021-02.json"
    },
    {
        "title": "NixOS Packages PRs for kwallet-pam",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwallet-pam",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwallet-pam.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-iodine-gnome-unstable-2019-11",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-iodine-gnome-unstable-2019-11",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-iodine-gnome-unstable-2019-11.json"
    },
    {
        "title": "NixOS Packages PRs for nix-2.13.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nix-2.13.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nix-2.13.3.json"
    },
    {
        "title": "NixOS Packages PRs for kimageformats",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kimageformats",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kimageformats.json"
    },
    {
        "title": "NixOS Packages PRs for xinput",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xinput",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xinput.json"
    },
    {
        "title": "NixOS Packages PRs for wireplumber-0.4.14",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wireplumber-0.4.14",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wireplumber-0.4.14.json"
    },
    {
        "title": "NixOS Packages PRs for xz-5.4.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xz-5.4.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xz-5.4.3.json"
    },
    {
        "title": "NixOS Packages PRs for docker-20.10.23",
        "query": "NixOS\/nixpkgs is:pr is:open in:title docker-20.10.23",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-docker-20.10.23.json"
    },
    {
        "title": "NixOS Packages PRs for less",
        "query": "NixOS\/nixpkgs is:pr is:open in:title less",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-less.json"
    },
    {
        "title": "NixOS Packages PRs for ranger",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ranger",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ranger.json"
    },
    {
        "title": "NixOS Packages PRs for linux-pam-1.5.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title linux-pam-1.5.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-linux-pam-1.5.2.json"
    },
    {
        "title": "NixOS Packages PRs for xterm",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xterm",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xterm.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-nm",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-nm",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-nm.json"
    },
    {
        "title": "NixOS Packages PRs for diffutils-3.9",
        "query": "NixOS\/nixpkgs is:pr is:open in:title diffutils-3.9",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-diffutils-3.9.json"
    },
    {
        "title": "NixOS Packages PRs for wpa_supplicant",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wpa_supplicant",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wpa_supplicant.json"
    },
    {
        "title": "NixOS Packages PRs for fish",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fish",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fish.json"
    },
    {
        "title": "NixOS Packages PRs for command-not",
        "query": "NixOS\/nixpkgs is:pr is:open in:title command-not",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-command-not.json"
    },
    {
        "title": "NixOS Packages PRs for ferdium",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ferdium",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ferdium.json"
    },
    {
        "title": "NixOS Packages PRs for topgrade",
        "query": "NixOS\/nixpkgs is:pr is:open in:title topgrade",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-topgrade.json"
    },
    {
        "title": "NixOS Packages PRs for kwrited",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwrited",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwrited.json"
    },
    {
        "title": "NixOS Packages PRs for ksshaskpass",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ksshaskpass",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ksshaskpass.json"
    },
    {
        "title": "NixOS Packages PRs for udisks-2.9.4",
        "query": "NixOS\/nixpkgs is:pr is:open in:title udisks-2.9.4",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-udisks-2.9.4.json"
    },
    {
        "title": "NixOS Packages PRs for accountsservice",
        "query": "NixOS\/nixpkgs is:pr is:open in:title accountsservice",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-accountsservice.json"
    },
    {
        "title": "NixOS Packages PRs for e2fsprogs-1.46.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title e2fsprogs-1.46.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-e2fsprogs-1.46.6.json"
    },
    {
        "title": "NixOS Packages PRs for vscode",
        "query": "NixOS\/nixpkgs is:pr is:open in:title vscode",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-vscode.json"
    },
    {
        "title": "NixOS Packages PRs for linux-pam-1.5.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title linux-pam-1.5.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-linux-pam-1.5.2.json"
    },
    {
        "title": "NixOS Packages PRs for cups-2.4.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cups-2.4.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cups-2.4.2.json"
    },
    {
        "title": "NixOS Packages PRs for pcsclite-with-polkit-1.9.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pcsclite-with-polkit-1.9.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pcsclite-with-polkit-1.9.5.json"
    },
    {
        "title": "NixOS Packages PRs for fzf-0.40.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fzf-0.40.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fzf-0.40.0.json"
    },
    {
        "title": "NixOS Packages PRs for kontact",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kontact",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kontact.json"
    },
    {
        "title": "NixOS Packages PRs for sniffnet",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sniffnet",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sniffnet.json"
    },
    {
        "title": "NixOS Packages PRs for gzip-1.12",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gzip-1.12",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gzip-1.12.json"
    },
    {
        "title": "NixOS Packages PRs for kleopatra",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kleopatra",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kleopatra.json"
    },
    {
        "title": "NixOS Packages PRs for bash-interactive-5.2-p15",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bash-interactive-5.2-p15",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bash-interactive-5.2-p15.json"
    },
    {
        "title": "NixOS Packages PRs for nixpkgs-review",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixpkgs-review",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixpkgs-review.json"
    },
    {
        "title": "NixOS Packages PRs for smartmontools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title smartmontools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-smartmontools.json"
    },
    {
        "title": "NixOS Packages PRs for acl-2.3.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title acl-2.3.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-acl-2.3.1.json"
    },
    {
        "title": "NixOS Packages PRs for kaddressbook",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kaddressbook",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kaddressbook.json"
    },
    {
        "title": "NixOS Packages PRs for kmail",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kmail",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kmail.json"
    },
    {
        "title": "NixOS Packages PRs for bash-interactive-5.2-p15",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bash-interactive-5.2-p15",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bash-interactive-5.2-p15.json"
    },
    {
        "title": "NixOS Packages PRs for kde-cli-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kde-cli-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kde-cli-tools.json"
    },
    {
        "title": "NixOS Packages PRs for gnutar-1.34",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnutar-1.34",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnutar-1.34.json"
    },
    {
        "title": "NixOS Packages PRs for xf86-input-libinput",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xf86-input-libinput",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xf86-input-libinput.json"
    },
    {
        "title": "NixOS Packages PRs for jq-1.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title jq-1.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-jq-1.6.json"
    },
    {
        "title": "NixOS Packages PRs for libcap",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libcap",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libcap.json"
    },
    {
        "title": "NixOS Packages PRs for nmap",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nmap",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nmap.json"
    },
    {
        "title": "NixOS Packages PRs for xclip",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xclip",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xclip.json"
    },
    {
        "title": "NixOS Packages PRs for libcap-2.68",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libcap-2.68",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libcap-2.68.json"
    },
    {
        "title": "NixOS Packages PRs for fishplugin-fzf.fish",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fishplugin-fzf.fish",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fishplugin-fzf.fish.json"
    },
    {
        "title": "NixOS Packages PRs for cmake",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cmake",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cmake.json"
    },
    {
        "title": "NixOS Packages PRs for pinentry-1.2.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pinentry-1.2.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pinentry-1.2.1.json"
    },
    {
        "title": "NixOS Packages PRs for phpstorm-with-plugins",
        "query": "NixOS\/nixpkgs is:pr is:open in:title phpstorm-with-plugins",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-phpstorm-with-plugins.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-desktop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-desktop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-desktop.json"
    },
    {
        "title": "NixOS Packages PRs for kconfig-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kconfig-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kconfig-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for procps",
        "query": "NixOS\/nixpkgs is:pr is:open in:title procps",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-procps.json"
    },
    {
        "title": "NixOS Packages PRs for wireguard-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wireguard-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wireguard-tools.json"
    },
    {
        "title": "NixOS Packages PRs for mc",
        "query": "NixOS\/nixpkgs is:pr is:open in:title mc",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-mc.json"
    },
    {
        "title": "NixOS Packages PRs for curl-8.0.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title curl-8.0.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-curl-8.0.1.json"
    },
    {
        "title": "NixOS Packages PRs for kdegraphics-thumbnailers",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdegraphics-thumbnailers",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdegraphics-thumbnailers.json"
    },
    {
        "title": "NixOS Packages PRs for thefuck",
        "query": "NixOS\/nixpkgs is:pr is:open in:title thefuck",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-thefuck.json"
    },
    {
        "title": "NixOS Packages PRs for strace",
        "query": "NixOS\/nixpkgs is:pr is:open in:title strace",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-strace.json"
    },
    {
        "title": "NixOS Packages PRs for kdiff3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdiff3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdiff3.json"
    },
    {
        "title": "NixOS Packages PRs for spice-gtk",
        "query": "NixOS\/nixpkgs is:pr is:open in:title spice-gtk",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-spice-gtk.json"
    },
    {
        "title": "NixOS Packages PRs for cpio",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cpio",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cpio.json"
    },
    {
        "title": "NixOS Packages PRs for fontconfig-2.14.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fontconfig-2.14.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fontconfig-2.14.0.json"
    },
    {
        "title": "NixOS Packages PRs for virt-manager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title virt-manager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-virt-manager.json"
    },
    {
        "title": "NixOS Packages PRs for dbus-1.14.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dbus-1.14.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dbus-1.14.6.json"
    },
    {
        "title": "NixOS Packages PRs for kdnssd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdnssd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdnssd.json"
    },
    {
        "title": "NixOS Packages PRs for kio-extras",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kio-extras",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kio-extras.json"
    },
    {
        "title": "NixOS Packages PRs for qc",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qc",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qc.json"
    },
    {
        "title": "NixOS Packages PRs for spectacle",
        "query": "NixOS\/nixpkgs is:pr is:open in:title spectacle",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-spectacle.json"
    },
    {
        "title": "NixOS Packages PRs for keepassxc",
        "query": "NixOS\/nixpkgs is:pr is:open in:title keepassxc",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-keepassxc.json"
    },
    {
        "title": "NixOS Packages PRs for pipewire",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pipewire",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pipewire.json"
    },
    {
        "title": "NixOS Packages PRs for bind-9.18.14",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bind-9.18.14",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bind-9.18.14.json"
    },
    {
        "title": "NixOS Packages PRs for bcache-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bcache-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bcache-tools.json"
    },
    {
        "title": "NixOS Packages PRs for chromium",
        "query": "NixOS\/nixpkgs is:pr is:open in:title chromium",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-chromium.json"
    },
    {
        "title": "NixOS Packages PRs for bind-9.18.14",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bind-9.18.14",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bind-9.18.14.json"
    },
    {
        "title": "NixOS Packages PRs for tmux",
        "query": "NixOS\/nixpkgs is:pr is:open in:title tmux",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-tmux.json"
    },
    {
        "title": "NixOS Packages PRs for kwayland-5.106.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwayland-5.106.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwayland-5.106.0.json"
    },
    {
        "title": "NixOS Packages PRs for fwupd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fwupd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fwupd.json"
    },
    {
        "title": "NixOS Packages PRs for kinfocenter",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kinfocenter",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kinfocenter.json"
    },
    {
        "title": "NixOS Packages PRs for onlyoffice-desktopeditors",
        "query": "NixOS\/nixpkgs is:pr is:open in:title onlyoffice-desktopeditors",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-onlyoffice-desktopeditors.json"
    },
    {
        "title": "NixOS Packages PRs for loganalyzer",
        "query": "NixOS\/nixpkgs is:pr is:open in:title loganalyzer",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-loganalyzer.json"
    },
    {
        "title": "NixOS Packages PRs for xdg-user-dirs",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xdg-user-dirs",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xdg-user-dirs.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-fortisslvpn-gnome",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-fortisslvpn-gnome",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-fortisslvpn-gnome.json"
    },
    {
        "title": "NixOS Packages PRs for firefox",
        "query": "NixOS\/nixpkgs is:pr is:open in:title firefox",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-firefox.json"
    },
    {
        "title": "NixOS Packages PRs for ncurses-6.4",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ncurses-6.4",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ncurses-6.4.json"
    },
    {
        "title": "NixOS Packages PRs for perl-5.36.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title perl-5.36.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-perl-5.36.0.json"
    },
    {
        "title": "NixOS Packages PRs for polkit-kde-agent-1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title polkit-kde-agent-1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-polkit-kde-agent-1.json"
    },
    {
        "title": "NixOS Packages PRs for xf86-input-evdev",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xf86-input-evdev",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xf86-input-evdev.json"
    },
    {
        "title": "NixOS Packages PRs for findutils-4.9.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title findutils-4.9.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-findutils-4.9.0.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for kwalletmanager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwalletmanager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwalletmanager.json"
    },
    {
        "title": "NixOS Packages PRs for glibc-locales-2.37",
        "query": "NixOS\/nixpkgs is:pr is:open in:title glibc-locales-2.37",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-glibc-locales-2.37.json"
    },
    {
        "title": "NixOS Packages PRs for rsync",
        "query": "NixOS\/nixpkgs is:pr is:open in:title rsync",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-rsync.json"
    },
    {
        "title": "NixOS Packages PRs for man-db-2.11.2",
        "query": "NixOS\/nixpkgs is:pr is:open in:title man-db-2.11.2",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-man-db-2.11.2.json"
    },
    {
        "title": "NixOS Packages PRs for mtools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title mtools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-mtools.json"
    },
    {
        "title": "NixOS Packages PRs for gparted",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gparted",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gparted.json"
    },
    {
        "title": "NixOS Packages PRs for pcsclite-with-polkit-1.9.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pcsclite-with-polkit-1.9.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pcsclite-with-polkit-1.9.5.json"
    },
    {
        "title": "NixOS Packages PRs for wget",
        "query": "NixOS\/nixpkgs is:pr is:open in:title wget",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-wget.json"
    },
    {
        "title": "NixOS Packages PRs for qtcreator",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qtcreator",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qtcreator.json"
    },
    {
        "title": "NixOS Packages PRs for htop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title htop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-htop.json"
    },
    {
        "title": "NixOS Packages PRs for shadow-4.13",
        "query": "NixOS\/nixpkgs is:pr is:open in:title shadow-4.13",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-shadow-4.13.json"
    },
    {
        "title": "NixOS Packages PRs for nix-bash-completions",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nix-bash-completions",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nix-bash-completions.json"
    },
    {
        "title": "NixOS Packages PRs for threadweaver",
        "query": "NixOS\/nixpkgs is:pr is:open in:title threadweaver",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-threadweaver.json"
    },
    {
        "title": "NixOS Packages PRs for okular",
        "query": "NixOS\/nixpkgs is:pr is:open in:title okular",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-okular.json"
    },
    {
        "title": "NixOS Packages PRs for docker",
        "query": "NixOS\/nixpkgs is:pr is:open in:title docker",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-docker.json"
    },
    {
        "title": "NixOS Packages PRs for iceauth",
        "query": "NixOS\/nixpkgs is:pr is:open in:title iceauth",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-iceauth.json"
    },
    {
        "title": "NixOS Packages PRs for python3.10-yubikey-manager",
        "query": "NixOS\/nixpkgs is:pr is:open in:title python3.10-yubikey-manager",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-python3.10-yubikey-manager.json"
    },
    {
        "title": "NixOS Packages PRs for nvidia-x11-530.41.03-6.1.29",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nvidia-x11-530.41.03-6.1.29",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nvidia-x11-530.41.03-6.1.29.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for milou",
        "query": "NixOS\/nixpkgs is:pr is:open in:title milou",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-milou.json"
    },
    {
        "title": "NixOS Packages PRs for libcap-2.68",
        "query": "NixOS\/nixpkgs is:pr is:open in:title libcap-2.68",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-libcap-2.68.json"
    },
    {
        "title": "NixOS Packages PRs for kde-inotify-survey",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kde-inotify-survey",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kde-inotify-survey.json"
    },
    {
        "title": "NixOS Packages PRs for sudo",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sudo",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sudo.json"
    },
    {
        "title": "NixOS Packages PRs for xrandr",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xrandr",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xrandr.json"
    },
    {
        "title": "NixOS Packages PRs for gzip-1.12",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gzip-1.12",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gzip-1.12.json"
    },
    {
        "title": "NixOS Packages PRs for spice-gtk-0.42",
        "query": "NixOS\/nixpkgs is:pr is:open in:title spice-gtk-0.42",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-spice-gtk-0.42.json"
    },
    {
        "title": "NixOS Packages PRs for gnumake-4.4.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnumake-4.4.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnumake-4.4.1.json"
    },
    {
        "title": "NixOS Packages PRs for attr-2.5.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title attr-2.5.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-attr-2.5.1.json"
    },
    {
        "title": "NixOS Packages PRs for kde-gtk-config",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kde-gtk-config",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kde-gtk-config.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-l2tp-gnome",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-l2tp-gnome",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-l2tp-gnome.json"
    },
    {
        "title": "NixOS Packages PRs for nix",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nix",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nix.json"
    },
    {
        "title": "NixOS Packages PRs for inetutils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title inetutils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-inetutils.json"
    },
    {
        "title": "NixOS Packages PRs for networkmanager-1.42.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title networkmanager-1.42.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-networkmanager-1.42.6.json"
    },
    {
        "title": "NixOS Packages PRs for nvidia-settings",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nvidia-settings",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nvidia-settings.json"
    },
    {
        "title": "NixOS Packages PRs for gh",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gh",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gh.json"
    },
    {
        "title": "NixOS Packages PRs for fwupd-1.8.15",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fwupd-1.8.15",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fwupd-1.8.15.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-workspace-wallpapers",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-workspace-wallpapers",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-workspace-wallpapers.json"
    },
    {
        "title": "NixOS Packages PRs for google-chrome",
        "query": "NixOS\/nixpkgs is:pr is:open in:title google-chrome",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-google-chrome.json"
    },
    {
        "title": "NixOS Packages PRs for kactivitymanagerd",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kactivitymanagerd",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kactivitymanagerd.json"
    },
    {
        "title": "NixOS Packages PRs for gawk-5.2.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gawk-5.2.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gawk-5.2.1.json"
    },
    {
        "title": "NixOS Packages PRs for gcc-wrapper-12.2.0",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gcc-wrapper-12.2.0",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gcc-wrapper-12.2.0.json"
    },
    {
        "title": "NixOS Packages PRs for plasma-systemmonitor",
        "query": "NixOS\/nixpkgs is:pr is:open in:title plasma-systemmonitor",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-plasma-systemmonitor.json"
    },
    {
        "title": "NixOS Packages PRs for networkmanager-1.42.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title networkmanager-1.42.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-networkmanager-1.42.6.json"
    },
    {
        "title": "NixOS Packages PRs for ark",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ark",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ark.json"
    },
    {
        "title": "NixOS Packages PRs for cups-pk-helper",
        "query": "NixOS\/nixpkgs is:pr is:open in:title cups-pk-helper",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-cups-pk-helper.json"
    },
    {
        "title": "NixOS Packages PRs for clion-with-plugins",
        "query": "NixOS\/nixpkgs is:pr is:open in:title clion-with-plugins",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-clion-with-plugins.json"
    },
    {
        "title": "NixOS Packages PRs for xrdb",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xrdb",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xrdb.json"
    },
    {
        "title": "NixOS Packages PRs for gnused-4.9",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnused-4.9",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnused-4.9.json"
    },
    {
        "title": "NixOS Packages PRs for sddm",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sddm",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sddm.json"
    },
    {
        "title": "NixOS Packages PRs for nano",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nano",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nano.json"
    },
    {
        "title": "NixOS Packages PRs for tree",
        "query": "NixOS\/nixpkgs is:pr is:open in:title tree",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-tree.json"
    },
    {
        "title": "NixOS Packages PRs for agenix",
        "query": "NixOS\/nixpkgs is:pr is:open in:title agenix",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-agenix.json"
    },
    {
        "title": "NixOS Packages PRs for e2fsprogs-1.46.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title e2fsprogs-1.46.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-e2fsprogs-1.46.6.json"
    },
    {
        "title": "NixOS Packages PRs for breeze-gtk",
        "query": "NixOS\/nixpkgs is:pr is:open in:title breeze-gtk",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-breeze-gtk.json"
    },
    {
        "title": "NixOS Packages PRs for ksnip",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ksnip",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ksnip.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-openvpn",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-openvpn",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-openvpn.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for nixos-build",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos-build",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos-build.json"
    },
    {
        "title": "NixOS Packages PRs for nextcloud-client",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nextcloud-client",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nextcloud-client.json"
    },
    {
        "title": "NixOS Packages PRs for vpnc-unstable-2021-11",
        "query": "NixOS\/nixpkgs is:pr is:open in:title vpnc-unstable-2021-11",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-vpnc-unstable-2021-11.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-vpnc",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-vpnc",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-vpnc.json"
    },
    {
        "title": "NixOS Packages PRs for jq-1.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title jq-1.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-jq-1.6.json"
    },
    {
        "title": "NixOS Packages PRs for kaccounts-providers",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kaccounts-providers",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kaccounts-providers.json"
    },
    {
        "title": "NixOS Packages PRs for pinentry-1.2.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pinentry-1.2.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pinentry-1.2.1.json"
    },
    {
        "title": "NixOS Packages PRs for openobex",
        "query": "NixOS\/nixpkgs is:pr is:open in:title openobex",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-openobex.json"
    },
    {
        "title": "NixOS Packages PRs for pipewire-0.3.71",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pipewire-0.3.71",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pipewire-0.3.71.json"
    },
    {
        "title": "NixOS Packages PRs for phonon-backend-vlc",
        "query": "NixOS\/nixpkgs is:pr is:open in:title phonon-backend-vlc",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-phonon-backend-vlc.json"
    },
    {
        "title": "NixOS Packages PRs for fzf",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fzf",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fzf.json"
    },
    {
        "title": "NixOS Packages PRs for kdeplasma-addons",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdeplasma-addons",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdeplasma-addons.json"
    },
    {
        "title": "NixOS Packages PRs for upower",
        "query": "NixOS\/nixpkgs is:pr is:open in:title upower",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-upower.json"
    },
    {
        "title": "NixOS Packages PRs for bluez",
        "query": "NixOS\/nixpkgs is:pr is:open in:title bluez",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-bluez.json"
    },
    {
        "title": "NixOS Packages PRs for obexftp",
        "query": "NixOS\/nixpkgs is:pr is:open in:title obexftp",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-obexftp.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for coreutils-full-9.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title coreutils-full-9.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-coreutils-full-9.1.json"
    },
    {
        "title": "NixOS Packages PRs for pcsclite-with-polkit-1.9.5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pcsclite-with-polkit-1.9.5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pcsclite-with-polkit-1.9.5.json"
    },
    {
        "title": "NixOS Packages PRs for alsa-utils",
        "query": "NixOS\/nixpkgs is:pr is:open in:title alsa-utils",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-alsa-utils.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-openconnect",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-openconnect",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-openconnect.json"
    },
    {
        "title": "NixOS Packages PRs for xsetroot",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xsetroot",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xsetroot.json"
    },
    {
        "title": "NixOS Packages PRs for kfind",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kfind",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kfind.json"
    },
    {
        "title": "NixOS Packages PRs for pipewire-0.3.71",
        "query": "NixOS\/nixpkgs is:pr is:open in:title pipewire-0.3.71",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-pipewire-0.3.71.json"
    },
    {
        "title": "NixOS Packages PRs for kwayland-integration",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kwayland-integration",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kwayland-integration.json"
    },
    {
        "title": "NixOS Packages PRs for qownnotes",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qownnotes",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qownnotes.json"
    },
    {
        "title": "NixOS Packages PRs for iptables-1.8.9",
        "query": "NixOS\/nixpkgs is:pr is:open in:title iptables-1.8.9",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-iptables-1.8.9.json"
    },
    {
        "title": "NixOS Packages PRs for xprop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xprop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xprop.json"
    },
    {
        "title": "NixOS Packages PRs for rtkit",
        "query": "NixOS\/nixpkgs is:pr is:open in:title rtkit",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-rtkit.json"
    },
    {
        "title": "NixOS Packages PRs for gnumake-4.4.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title gnumake-4.4.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-gnumake-4.4.1.json"
    },
    {
        "title": "NixOS Packages PRs for kgamma5",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kgamma5",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kgamma5.json"
    },
    {
        "title": "NixOS Packages PRs for dconf",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dconf",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dconf.json"
    },
    {
        "title": "NixOS Packages PRs for patch",
        "query": "NixOS\/nixpkgs is:pr is:open in:title patch",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-patch.json"
    },
    {
        "title": "NixOS Packages PRs for kdeconnect-kde",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kdeconnect-kde",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kdeconnect-kde.json"
    },
    {
        "title": "NixOS Packages PRs for systemd-253.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title systemd-253.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-systemd-253.3.json"
    },
    {
        "title": "NixOS Packages PRs for dbus-1.14.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title dbus-1.14.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-dbus-1.14.6.json"
    },
    {
        "title": "NixOS Packages PRs for qemu",
        "query": "NixOS\/nixpkgs is:pr is:open in:title qemu",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-qemu.json"
    },
    {
        "title": "NixOS Packages PRs for fish-3.6.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title fish-3.6.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-fish-3.6.1.json"
    },
    {
        "title": "NixOS Packages PRs for xauth",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xauth",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xauth.json"
    },
    {
        "title": "NixOS Packages PRs for xz-5.4.3",
        "query": "NixOS\/nixpkgs is:pr is:open in:title xz-5.4.3",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-xz-5.4.3.json"
    },
    {
        "title": "NixOS Packages PRs for jq-1.6",
        "query": "NixOS\/nixpkgs is:pr is:open in:title jq-1.6",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-jq-1.6.json"
    },
    {
        "title": "NixOS Packages PRs for sound-theme-freedesktop",
        "query": "NixOS\/nixpkgs is:pr is:open in:title sound-theme-freedesktop",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-sound-theme-freedesktop.json"
    },
    {
        "title": "NixOS Packages PRs for tmux-3.3a",
        "query": "NixOS\/nixpkgs is:pr is:open in:title tmux-3.3a",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-tmux-3.3a.json"
    },
    {
        "title": "NixOS Packages PRs for ncdu",
        "query": "NixOS\/nixpkgs is:pr is:open in:title ncdu",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-ncdu.json"
    },
    {
        "title": "NixOS Packages PRs for kmail-23.04.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title kmail-23.04.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-kmail-23.04.1.json"
    },
    {
        "title": "NixOS Packages PRs for filelight",
        "query": "NixOS\/nixpkgs is:pr is:open in:title filelight",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-filelight.json"
    },
    {
        "title": "NixOS Packages PRs for acl-2.3.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title acl-2.3.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-acl-2.3.1.json"
    },
    {
        "title": "NixOS Packages PRs for nixos",
        "query": "NixOS\/nixpkgs is:pr is:open in:title nixos",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-nixos.json"
    },
    {
        "title": "NixOS Packages PRs for NetworkManager-sstp-gnome-unstable-2023-03",
        "query": "NixOS\/nixpkgs is:pr is:open in:title NetworkManager-sstp-gnome-unstable-2023-03",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-NetworkManager-sstp-gnome-unstable-2023-03.json"
    },
    {
        "title": "NixOS Packages PRs for net-tools",
        "query": "NixOS\/nixpkgs is:pr is:open in:title net-tools",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-net-tools.json"
    },
    {
        "title": "NixOS Packages PRs for yubico-pam",
        "query": "NixOS\/nixpkgs is:pr is:open in:title yubico-pam",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-yubico-pam.json"
    },
    {
        "title": "NixOS Packages PRs for neovim",
        "query": "NixOS\/nixpkgs is:pr is:open in:title neovim",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-neovim.json"
    },
    {
        "title": "NixOS Packages PRs for attr-2.5.1",
        "query": "NixOS\/nixpkgs is:pr is:open in:title attr-2.5.1",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-attr-2.5.1.json"
    },
    {
        "title": "NixOS Packages PRs for python3.10-magic-wormhole",
        "query": "NixOS\/nixpkgs is:pr is:open in:title python3.10-magic-wormhole",
        "TYPE": "ISSUE",
        "link": "${BASE_URL}\/nixos-python3.10-magic-wormhole.json"
    }
];
