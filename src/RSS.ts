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
        title: "NixOS Package PRs for kexec-tools",
        query: "NixOS/nixpkgs is:pr is:open kexec-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kexec-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for iptables",
        query: "NixOS/nixpkgs is:pr is:open iptables",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-iptables.json`,
    },
    
    {
        title: "NixOS Package PRs for gnutar",
        query: "NixOS/nixpkgs is:pr is:open gnutar",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnutar.json`,
    },
    
    {
        title: "NixOS Package PRs for ncurses",
        query: "NixOS/nixpkgs is:pr is:open ncurses",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ncurses.json`,
    },
    
    {
        title: "NixOS Package PRs for bash-interactive-5.2",
        query: "NixOS/nixpkgs is:pr is:open bash-interactive-5.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bash-interactive-5.2.json`,
    },
    
    {
        title: "NixOS Package PRs for linux-pam",
        query: "NixOS/nixpkgs is:pr is:open linux-pam",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-linux-pam.json`,
    },
    
    {
        title: "NixOS Package PRs for kmod",
        query: "NixOS/nixpkgs is:pr is:open kmod",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kmod.json`,
    },
    
    {
        title: "NixOS Package PRs for gnugrep",
        query: "NixOS/nixpkgs is:pr is:open gnugrep",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnugrep.json`,
    },
    
    {
        title: "NixOS Package PRs for zstd-1.5.5",
        query: "NixOS/nixpkgs is:pr is:open zstd-1.5.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-zstd-1.5.5.json`,
    },
    
    {
        title: "NixOS Package PRs for xz-5.4.3",
        query: "NixOS/nixpkgs is:pr is:open xz-5.4.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xz-5.4.3.json`,
    },
    
    {
        title: "NixOS Package PRs for bzip2-1.0.8",
        query: "NixOS/nixpkgs is:pr is:open bzip2-1.0.8",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bzip2-1.0.8.json`,
    },
    
    {
        title: "NixOS Package PRs for gzip",
        query: "NixOS/nixpkgs is:pr is:open gzip",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gzip.json`,
    },
    
    {
        title: "NixOS Package PRs for kbd",
        query: "NixOS/nixpkgs is:pr is:open kbd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kbd.json`,
    },
    
    {
        title: "NixOS Package PRs for systemd",
        query: "NixOS/nixpkgs is:pr is:open systemd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-systemd.json`,
    },
    
    {
        title: "NixOS Package PRs for qttools-5.15.9",
        query: "NixOS/nixpkgs is:pr is:open qttools-5.15.9",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qttools-5.15.9.json`,
    },
    
    {
        title: "NixOS Package PRs for shared-mime-info",
        query: "NixOS/nixpkgs is:pr is:open shared-mime-info",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-shared-mime-info.json`,
    },
    
    {
        title: "NixOS Package PRs for dbus",
        query: "NixOS/nixpkgs is:pr is:open dbus",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dbus.json`,
    },
    
    {
        title: "NixOS Package PRs for kcoreaddons-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kcoreaddons-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kcoreaddons-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kauth",
        query: "NixOS/nixpkgs is:pr is:open kauth",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kauth.json`,
    },
    
    {
        title: "NixOS Package PRs for kwidgetsaddons",
        query: "NixOS/nixpkgs is:pr is:open kwidgetsaddons",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwidgetsaddons.json`,
    },
    
    {
        title: "NixOS Package PRs for kguiaddons",
        query: "NixOS/nixpkgs is:pr is:open kguiaddons",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kguiaddons.json`,
    },
    
    {
        title: "NixOS Package PRs for kconfigwidgets",
        query: "NixOS/nixpkgs is:pr is:open kconfigwidgets",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kconfigwidgets.json`,
    },
    
    {
        title: "NixOS Package PRs for breeze-icons",
        query: "NixOS/nixpkgs is:pr is:open breeze-icons",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-breeze-icons.json`,
    },
    
    {
        title: "NixOS Package PRs for kdoctools",
        query: "NixOS/nixpkgs is:pr is:open kdoctools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdoctools.json`,
    },
    
    {
        title: "NixOS Package PRs for kiconthemes-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kiconthemes-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kiconthemes-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kservice-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kservice-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kservice-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kglobalaccel",
        query: "NixOS/nixpkgs is:pr is:open kglobalaccel",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kglobalaccel.json`,
    },
    
    {
        title: "NixOS Package PRs for knotifications-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open knotifications-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-knotifications-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for ktextwidgets-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open ktextwidgets-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ktextwidgets-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kxmlgui-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kxmlgui-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kxmlgui-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for sonnet-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open sonnet-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sonnet-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for cups",
        query: "NixOS/nixpkgs is:pr is:open cups",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cups.json`,
    },
    
    {
        title: "NixOS Package PRs for kded",
        query: "NixOS/nixpkgs is:pr is:open kded",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kded.json`,
    },
    
    {
        title: "NixOS Package PRs for kjobwidgets-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kjobwidgets-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kjobwidgets-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for media-player-info",
        query: "NixOS/nixpkgs is:pr is:open media-player-info",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-media-player-info.json`,
    },
    
    {
        title: "NixOS Package PRs for solid-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open solid-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-solid-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kwallet-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kwallet-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwallet-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kio",
        query: "NixOS/nixpkgs is:pr is:open kio",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kio.json`,
    },
    
    {
        title: "NixOS Package PRs for kactivities-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kactivities-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kactivities-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kpackage-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kpackage-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kpackage-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kdeclarative-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kdeclarative-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdeclarative-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for qtgraphicaleffects",
        query: "NixOS/nixpkgs is:pr is:open qtgraphicaleffects",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qtgraphicaleffects.json`,
    },
    
    {
        title: "NixOS Package PRs for kirigami2",
        query: "NixOS/nixpkgs is:pr is:open kirigami2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kirigami2.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-framework-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open plasma-framework-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-framework-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for krunner-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open krunner-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-krunner-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kaccounts-integration",
        query: "NixOS/nixpkgs is:pr is:open kaccounts-integration",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kaccounts-integration.json`,
    },
    
    {
        title: "NixOS Package PRs for akonadi",
        query: "NixOS/nixpkgs is:pr is:open akonadi",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-akonadi.json`,
    },
    
    {
        title: "NixOS Package PRs for knewstuff-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open knewstuff-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-knewstuff-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kcmutils-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kcmutils-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kcmutils-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for grantlee",
        query: "NixOS/nixpkgs is:pr is:open grantlee",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-grantlee.json`,
    },
    
    {
        title: "NixOS Package PRs for grantleetheme",
        query: "NixOS/nixpkgs is:pr is:open grantleetheme",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-grantleetheme.json`,
    },
    
    {
        title: "NixOS Package PRs for kemoticons-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kemoticons-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kemoticons-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kparts-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kparts-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kparts-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kcalutils",
        query: "NixOS/nixpkgs is:pr is:open kcalutils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kcalutils.json`,
    },
    
    {
        title: "NixOS Package PRs for korganizer",
        query: "NixOS/nixpkgs is:pr is:open korganizer",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-korganizer.json`,
    },
    
    {
        title: "NixOS Package PRs for acl-2.3.1",
        query: "NixOS/nixpkgs is:pr is:open acl-2.3.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-acl-2.3.1.json`,
    },
    
    {
        title: "NixOS Package PRs for noseyparker",
        query: "NixOS/nixpkgs is:pr is:open noseyparker",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-noseyparker.json`,
    },
    
    {
        title: "NixOS Package PRs for calibre",
        query: "NixOS/nixpkgs is:pr is:open calibre",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-calibre.json`,
    },
    
    {
        title: "NixOS Package PRs for perl",
        query: "NixOS/nixpkgs is:pr is:open perl",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-perl.json`,
    },
    
    {
        title: "NixOS Package PRs for kinit",
        query: "NixOS/nixpkgs is:pr is:open kinit",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kinit.json`,
    },
    
    {
        title: "NixOS Package PRs for khelpcenter",
        query: "NixOS/nixpkgs is:pr is:open khelpcenter",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-khelpcenter.json`,
    },
    
    {
        title: "NixOS Package PRs for frameworkintegration-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open frameworkintegration-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-frameworkintegration-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kdecoration",
        query: "NixOS/nixpkgs is:pr is:open kdecoration",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdecoration.json`,
    },
    
    {
        title: "NixOS Package PRs for breeze-qt5-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open breeze-qt5-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-breeze-qt5-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-integration",
        query: "NixOS/nixpkgs is:pr is:open plasma-integration",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-integration.json`,
    },
    
    {
        title: "NixOS Package PRs for kdbusaddons-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kdbusaddons-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdbusaddons-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for nix-2.13.3",
        query: "NixOS/nixpkgs is:pr is:open nix-2.13.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nix-2.13.3.json`,
    },
    
    {
        title: "NixOS Package PRs for nix",
        query: "NixOS/nixpkgs is:pr is:open nix",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nix.json`,
    },
    
    {
        title: "NixOS Package PRs for wireguard-tools-1.0.20210914",
        query: "NixOS/nixpkgs is:pr is:open wireguard-tools-1.0.20210914",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wireguard-tools-1.0.20210914.json`,
    },
    
    {
        title: "NixOS Package PRs for curl-8.0.1",
        query: "NixOS/nixpkgs is:pr is:open curl-8.0.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-curl-8.0.1.json`,
    },
    
    {
        title: "NixOS Package PRs for f2fs-tools",
        query: "NixOS/nixpkgs is:pr is:open f2fs-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-f2fs-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for attic",
        query: "NixOS/nixpkgs is:pr is:open attic",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-attic.json`,
    },
    
    {
        title: "NixOS Package PRs for bash-interactive-5.2-p15",
        query: "NixOS/nixpkgs is:pr is:open bash-interactive-5.2-p15",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bash-interactive-5.2-p15.json`,
    },
    
    {
        title: "NixOS Package PRs for mkpasswd",
        query: "NixOS/nixpkgs is:pr is:open mkpasswd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-mkpasswd.json`,
    },
    
    {
        title: "NixOS Package PRs for sops",
        query: "NixOS/nixpkgs is:pr is:open sops",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sops.json`,
    },
    
    {
        title: "NixOS Package PRs for knotifyconfig",
        query: "NixOS/nixpkgs is:pr is:open knotifyconfig",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-knotifyconfig.json`,
    },
    
    {
        title: "NixOS Package PRs for kdepim-runtime",
        query: "NixOS/nixpkgs is:pr is:open kdepim-runtime",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdepim-runtime.json`,
    },
    
    {
        title: "NixOS Package PRs for ffmpegthumbs",
        query: "NixOS/nixpkgs is:pr is:open ffmpegthumbs",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ffmpegthumbs.json`,
    },
    
    {
        title: "NixOS Package PRs for libressl-3.7.2",
        query: "NixOS/nixpkgs is:pr is:open libressl-3.7.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libressl-3.7.2.json`,
    },
    
    {
        title: "NixOS Package PRs for cryptsetup-2.6.1",
        query: "NixOS/nixpkgs is:pr is:open cryptsetup-2.6.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cryptsetup-2.6.1.json`,
    },
    
    {
        title: "NixOS Package PRs for gnupg",
        query: "NixOS/nixpkgs is:pr is:open gnupg",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnupg.json`,
    },
    
    {
        title: "NixOS Package PRs for kfilemetadata-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kfilemetadata-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kfilemetadata-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kidletime-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kidletime-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kidletime-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for baloo",
        query: "NixOS/nixpkgs is:pr is:open baloo",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-baloo.json`,
    },
    
    {
        title: "NixOS Package PRs for kxmlrpcclient",
        query: "NixOS/nixpkgs is:pr is:open kxmlrpcclient",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kxmlrpcclient.json`,
    },
    
    {
        title: "NixOS Package PRs for libkscreen",
        query: "NixOS/nixpkgs is:pr is:open libkscreen",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libkscreen.json`,
    },
    
    {
        title: "NixOS Package PRs for kscreenlocker",
        query: "NixOS/nixpkgs is:pr is:open kscreenlocker",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kscreenlocker.json`,
    },
    
    {
        title: "NixOS Package PRs for libksysguard-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open libksysguard-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libksysguard-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for kpeople-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kpeople-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kpeople-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for polkit",
        query: "NixOS/nixpkgs is:pr is:open polkit",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-polkit.json`,
    },
    
    {
        title: "NixOS Package PRs for modemmanager",
        query: "NixOS/nixpkgs is:pr is:open modemmanager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-modemmanager.json`,
    },
    
    {
        title: "NixOS Package PRs for openresolv",
        query: "NixOS/nixpkgs is:pr is:open openresolv",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-openresolv.json`,
    },
    
    {
        title: "NixOS Package PRs for gnused",
        query: "NixOS/nixpkgs is:pr is:open gnused",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnused.json`,
    },
    
    {
        title: "NixOS Package PRs for xset",
        query: "NixOS/nixpkgs is:pr is:open xset",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xset.json`,
    },
    
    {
        title: "NixOS Package PRs for gawk",
        query: "NixOS/nixpkgs is:pr is:open gawk",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gawk.json`,
    },
    
    {
        title: "NixOS Package PRs for xdg-utils-unstable-2020-10",
        query: "NixOS/nixpkgs is:pr is:open xdg-utils-unstable-2020-10",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xdg-utils-unstable-2020-10.json`,
    },
    
    {
        title: "NixOS Package PRs for openconnect",
        query: "NixOS/nixpkgs is:pr is:open openconnect",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-openconnect.json`,
    },
    
    {
        title: "NixOS Package PRs for iputils",
        query: "NixOS/nixpkgs is:pr is:open iputils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-iputils.json`,
    },
    
    {
        title: "NixOS Package PRs for networkmanager",
        query: "NixOS/nixpkgs is:pr is:open networkmanager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-networkmanager.json`,
    },
    
    {
        title: "NixOS Package PRs for qtvirtualkeyboard",
        query: "NixOS/nixpkgs is:pr is:open qtvirtualkeyboard",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qtvirtualkeyboard.json`,
    },
    
    {
        title: "NixOS Package PRs for kwin",
        query: "NixOS/nixpkgs is:pr is:open kwin",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwin.json`,
    },
    
    {
        title: "NixOS Package PRs for kdesu",
        query: "NixOS/nixpkgs is:pr is:open kdesu",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdesu.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-workspace",
        query: "NixOS/nixpkgs is:pr is:open plasma-workspace",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-workspace.json`,
    },
    
    {
        title: "NixOS Package PRs for systemsettings-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open systemsettings-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-systemsettings-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for time",
        query: "NixOS/nixpkgs is:pr is:open time",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-time.json`,
    },
    
    {
        title: "NixOS Package PRs for gdb",
        query: "NixOS/nixpkgs is:pr is:open gdb",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gdb.json`,
    },
    
    {
        title: "NixOS Package PRs for which",
        query: "NixOS/nixpkgs is:pr is:open which",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-which.json`,
    },
    
    {
        title: "NixOS Package PRs for smartgithg",
        query: "NixOS/nixpkgs is:pr is:open smartgithg",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-smartgithg.json`,
    },
    
    {
        title: "NixOS Package PRs for xlsclients",
        query: "NixOS/nixpkgs is:pr is:open xlsclients",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xlsclients.json`,
    },
    
    {
        title: "NixOS Package PRs for coreutils-full",
        query: "NixOS/nixpkgs is:pr is:open coreutils-full",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-coreutils-full.json`,
    },
    
    {
        title: "NixOS Package PRs for bluez-qt-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open bluez-qt-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bluez-qt-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for powerdevil",
        query: "NixOS/nixpkgs is:pr is:open powerdevil",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-powerdevil.json`,
    },
    
    {
        title: "NixOS Package PRs for gawk-5.2.1",
        query: "NixOS/nixpkgs is:pr is:open gawk-5.2.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gawk-5.2.1.json`,
    },
    
    {
        title: "NixOS Package PRs for dosfstools",
        query: "NixOS/nixpkgs is:pr is:open dosfstools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dosfstools.json`,
    },
    
    {
        title: "NixOS Package PRs for glibc-2.37-8",
        query: "NixOS/nixpkgs is:pr is:open glibc-2.37-8",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-glibc-2.37-8.json`,
    },
    
    {
        title: "NixOS Package PRs for shadow",
        query: "NixOS/nixpkgs is:pr is:open shadow",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-shadow.json`,
    },
    
    {
        title: "NixOS Package PRs for util-linux-2.38.1",
        query: "NixOS/nixpkgs is:pr is:open util-linux-2.38.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-util-linux-2.38.1.json`,
    },
    
    {
        title: "NixOS Package PRs for e2fsprogs-1.46.6",
        query: "NixOS/nixpkgs is:pr is:open e2fsprogs-1.46.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-e2fsprogs-1.46.6.json`,
    },
    
    {
        title: "NixOS Package PRs for mdadm",
        query: "NixOS/nixpkgs is:pr is:open mdadm",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-mdadm.json`,
    },
    
    {
        title: "NixOS Package PRs for udisks",
        query: "NixOS/nixpkgs is:pr is:open udisks",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-udisks.json`,
    },
    
    {
        title: "NixOS Package PRs for man-db",
        query: "NixOS/nixpkgs is:pr is:open man-db",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-man-db.json`,
    },
    
    {
        title: "NixOS Package PRs for dolphin",
        query: "NixOS/nixpkgs is:pr is:open dolphin",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dolphin.json`,
    },
    
    {
        title: "NixOS Package PRs for dolphin-plugins",
        query: "NixOS/nixpkgs is:pr is:open dolphin-plugins",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dolphin-plugins.json`,
    },
    
    {
        title: "NixOS Package PRs for cryptsetup-2.6.1",
        query: "NixOS/nixpkgs is:pr is:open cryptsetup-2.6.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cryptsetup-2.6.1.json`,
    },
    
    {
        title: "NixOS Package PRs for libkipi",
        query: "NixOS/nixpkgs is:pr is:open libkipi",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libkipi.json`,
    },
    
    {
        title: "NixOS Package PRs for kipi-plugins",
        query: "NixOS/nixpkgs is:pr is:open kipi-plugins",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kipi-plugins.json`,
    },
    
    {
        title: "NixOS Package PRs for gwenview",
        query: "NixOS/nixpkgs is:pr is:open gwenview",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gwenview.json`,
    },
    
    {
        title: "NixOS Package PRs for btop",
        query: "NixOS/nixpkgs is:pr is:open btop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-btop.json`,
    },
    
    {
        title: "NixOS Package PRs for print-manager",
        query: "NixOS/nixpkgs is:pr is:open print-manager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-print-manager.json`,
    },
    
    {
        title: "NixOS Package PRs for wireplumber",
        query: "NixOS/nixpkgs is:pr is:open wireplumber",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wireplumber.json`,
    },
    
    {
        title: "NixOS Package PRs for konsole",
        query: "NixOS/nixpkgs is:pr is:open konsole",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-konsole.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-pa",
        query: "NixOS/nixpkgs is:pr is:open plasma-pa",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-pa.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos-generate",
        query: "NixOS/nixpkgs is:pr is:open nixos-generate",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos-generate.json`,
    },
    
    {
        title: "NixOS Package PRs for iproute2",
        query: "NixOS/nixpkgs is:pr is:open iproute2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-iproute2.json`,
    },
    
    {
        title: "NixOS Package PRs for openssh",
        query: "NixOS/nixpkgs is:pr is:open openssh",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-openssh.json`,
    },
    
    {
        title: "NixOS Package PRs for polkit-122",
        query: "NixOS/nixpkgs is:pr is:open polkit-122",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-polkit-122.json`,
    },
    
    {
        title: "NixOS Package PRs for lvm2-2.03.21",
        query: "NixOS/nixpkgs is:pr is:open lvm2-2.03.21",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-lvm2-2.03.21.json`,
    },
    
    {
        title: "NixOS Package PRs for fuse",
        query: "NixOS/nixpkgs is:pr is:open fuse",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fuse.json`,
    },
    
    {
        title: "NixOS Package PRs for libvirt",
        query: "NixOS/nixpkgs is:pr is:open libvirt",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libvirt.json`,
    },
    
    {
        title: "NixOS Package PRs for bzip2-1.0.8",
        query: "NixOS/nixpkgs is:pr is:open bzip2-1.0.8",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bzip2-1.0.8.json`,
    },
    
    {
        title: "NixOS Package PRs for xorg-server",
        query: "NixOS/nixpkgs is:pr is:open xorg-server",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xorg-server.json`,
    },
    
    {
        title: "NixOS Package PRs for elisa",
        query: "NixOS/nixpkgs is:pr is:open elisa",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-elisa.json`,
    },
    
    {
        title: "NixOS Package PRs for zstd-1.5.5",
        query: "NixOS/nixpkgs is:pr is:open zstd-1.5.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-zstd-1.5.5.json`,
    },
    
    {
        title: "NixOS Package PRs for power-profiles-daemon",
        query: "NixOS/nixpkgs is:pr is:open power-profiles-daemon",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-power-profiles-daemon.json`,
    },
    
    {
        title: "NixOS Package PRs for git-2.40.1",
        query: "NixOS/nixpkgs is:pr is:open git-2.40.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-git-2.40.1.json`,
    },
    
    {
        title: "NixOS Package PRs for git",
        query: "NixOS/nixpkgs is:pr is:open git",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-git.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-disks-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open plasma-disks-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-disks-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for findutils",
        query: "NixOS/nixpkgs is:pr is:open findutils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-findutils.json`,
    },
    
    {
        title: "NixOS Package PRs for util-linux-2.38.1",
        query: "NixOS/nixpkgs is:pr is:open util-linux-2.38.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-util-linux-2.38.1.json`,
    },
    
    {
        title: "NixOS Package PRs for xdg",
        query: "NixOS/nixpkgs is:pr is:open xdg",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xdg.json`,
    },
    
    {
        title: "NixOS Package PRs for gcc-wrapper-12.2.0",
        query: "NixOS/nixpkgs is:pr is:open gcc-wrapper-12.2.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gcc-wrapper-12.2.0.json`,
    },
    
    {
        title: "NixOS Package PRs for yakuake",
        query: "NixOS/nixpkgs is:pr is:open yakuake",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-yakuake.json`,
    },
    
    {
        title: "NixOS Package PRs for oxygen-sounds",
        query: "NixOS/nixpkgs is:pr is:open oxygen-sounds",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-oxygen-sounds.json`,
    },
    
    {
        title: "NixOS Package PRs for akonadiconsole",
        query: "NixOS/nixpkgs is:pr is:open akonadiconsole",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-akonadiconsole.json`,
    },
    
    {
        title: "NixOS Package PRs for shadow-4.13",
        query: "NixOS/nixpkgs is:pr is:open shadow-4.13",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-shadow-4.13.json`,
    },
    
    {
        title: "NixOS Package PRs for fuse",
        query: "NixOS/nixpkgs is:pr is:open fuse",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fuse.json`,
    },
    
    {
        title: "NixOS Package PRs for gcc-wrapper",
        query: "NixOS/nixpkgs is:pr is:open gcc-wrapper",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gcc-wrapper.json`,
    },
    
    {
        title: "NixOS Package PRs for cryfs",
        query: "NixOS/nixpkgs is:pr is:open cryfs",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cryfs.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-vault",
        query: "NixOS/nixpkgs is:pr is:open plasma-vault",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-vault.json`,
    },
    
    {
        title: "NixOS Package PRs for exfatprogs",
        query: "NixOS/nixpkgs is:pr is:open exfatprogs",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-exfatprogs.json`,
    },
    
    {
        title: "NixOS Package PRs for pam_u2f",
        query: "NixOS/nixpkgs is:pr is:open pam_u2f",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pam_u2f.json`,
    },
    
    {
        title: "NixOS Package PRs for diffutils",
        query: "NixOS/nixpkgs is:pr is:open diffutils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-diffutils.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for attr-2.5.1",
        query: "NixOS/nixpkgs is:pr is:open attr-2.5.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-attr-2.5.1.json`,
    },
    
    {
        title: "NixOS Package PRs for gnugrep-3.7",
        query: "NixOS/nixpkgs is:pr is:open gnugrep-3.7",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnugrep-3.7.json`,
    },
    
    {
        title: "NixOS Package PRs for texinfo-interactive",
        query: "NixOS/nixpkgs is:pr is:open texinfo-interactive",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-texinfo-interactive.json`,
    },
    
    {
        title: "NixOS Package PRs for restic",
        query: "NixOS/nixpkgs is:pr is:open restic",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-restic.json`,
    },
    
    {
        title: "NixOS Package PRs for kio-admin",
        query: "NixOS/nixpkgs is:pr is:open kio-admin",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kio-admin.json`,
    },
    
    {
        title: "NixOS Package PRs for goland-with-plugins",
        query: "NixOS/nixpkgs is:pr is:open goland-with-plugins",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-goland-with-plugins.json`,
    },
    
    {
        title: "NixOS Package PRs for kate",
        query: "NixOS/nixpkgs is:pr is:open kate",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kate.json`,
    },
    
    {
        title: "NixOS Package PRs for oxygen-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open oxygen-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-oxygen-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for lvm2-2.03.21",
        query: "NixOS/nixpkgs is:pr is:open lvm2-2.03.21",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-lvm2-2.03.21.json`,
    },
    
    {
        title: "NixOS Package PRs for setxkbmap",
        query: "NixOS/nixpkgs is:pr is:open setxkbmap",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-setxkbmap.json`,
    },
    
    {
        title: "NixOS Package PRs for khotkeys-5.27.5",
        query: "NixOS/nixpkgs is:pr is:open khotkeys-5.27.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-khotkeys-5.27.5.json`,
    },
    
    {
        title: "NixOS Package PRs for kmenuedit",
        query: "NixOS/nixpkgs is:pr is:open kmenuedit",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kmenuedit.json`,
    },
    
    {
        title: "NixOS Package PRs for bluedevil",
        query: "NixOS/nixpkgs is:pr is:open bluedevil",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bluedevil.json`,
    },
    
    {
        title: "NixOS Package PRs for nano-7.2",
        query: "NixOS/nixpkgs is:pr is:open nano-7.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nano-7.2.json`,
    },
    
    {
        title: "NixOS Package PRs for ksystemstats",
        query: "NixOS/nixpkgs is:pr is:open ksystemstats",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ksystemstats.json`,
    },
    
    {
        title: "NixOS Package PRs for bind-9.18.14",
        query: "NixOS/nixpkgs is:pr is:open bind-9.18.14",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bind-9.18.14.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos-manual",
        query: "NixOS/nixpkgs is:pr is:open nixos-manual",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos-manual.json`,
    },
    
    {
        title: "NixOS Package PRs for libressl-3.7.2",
        query: "NixOS/nixpkgs is:pr is:open libressl-3.7.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libressl-3.7.2.json`,
    },
    
    {
        title: "NixOS Package PRs for aha",
        query: "NixOS/nixpkgs is:pr is:open aha",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-aha.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-browser-integration",
        query: "NixOS/nixpkgs is:pr is:open plasma-browser-integration",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-browser-integration.json`,
    },
    
    {
        title: "NixOS Package PRs for gnumake",
        query: "NixOS/nixpkgs is:pr is:open gnumake",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnumake.json`,
    },
    
    {
        title: "NixOS Package PRs for atop",
        query: "NixOS/nixpkgs is:pr is:open atop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-atop.json`,
    },
    
    {
        title: "NixOS Package PRs for kscreen",
        query: "NixOS/nixpkgs is:pr is:open kscreen",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kscreen.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos-icons-2021-02",
        query: "NixOS/nixpkgs is:pr is:open nixos-icons-2021-02",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos-icons-2021-02.json`,
    },
    
    {
        title: "NixOS Package PRs for kwallet-pam",
        query: "NixOS/nixpkgs is:pr is:open kwallet-pam",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwallet-pam.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-iodine-gnome-unstable-2019-11",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-iodine-gnome-unstable-2019-11",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-iodine-gnome-unstable-2019-11.json`,
    },
    
    {
        title: "NixOS Package PRs for nix-2.13.3",
        query: "NixOS/nixpkgs is:pr is:open nix-2.13.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nix-2.13.3.json`,
    },
    
    {
        title: "NixOS Package PRs for kimageformats",
        query: "NixOS/nixpkgs is:pr is:open kimageformats",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kimageformats.json`,
    },
    
    {
        title: "NixOS Package PRs for xinput",
        query: "NixOS/nixpkgs is:pr is:open xinput",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xinput.json`,
    },
    
    {
        title: "NixOS Package PRs for wireplumber-0.4.14",
        query: "NixOS/nixpkgs is:pr is:open wireplumber-0.4.14",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wireplumber-0.4.14.json`,
    },
    
    {
        title: "NixOS Package PRs for xz-5.4.3",
        query: "NixOS/nixpkgs is:pr is:open xz-5.4.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xz-5.4.3.json`,
    },
    
    {
        title: "NixOS Package PRs for docker-20.10.23",
        query: "NixOS/nixpkgs is:pr is:open docker-20.10.23",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-docker-20.10.23.json`,
    },
    
    {
        title: "NixOS Package PRs for less",
        query: "NixOS/nixpkgs is:pr is:open less",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-less.json`,
    },
    
    {
        title: "NixOS Package PRs for ranger",
        query: "NixOS/nixpkgs is:pr is:open ranger",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ranger.json`,
    },
    
    {
        title: "NixOS Package PRs for linux-pam-1.5.2",
        query: "NixOS/nixpkgs is:pr is:open linux-pam-1.5.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-linux-pam-1.5.2.json`,
    },
    
    {
        title: "NixOS Package PRs for xterm",
        query: "NixOS/nixpkgs is:pr is:open xterm",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xterm.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-nm",
        query: "NixOS/nixpkgs is:pr is:open plasma-nm",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-nm.json`,
    },
    
    {
        title: "NixOS Package PRs for diffutils-3.9",
        query: "NixOS/nixpkgs is:pr is:open diffutils-3.9",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-diffutils-3.9.json`,
    },
    
    {
        title: "NixOS Package PRs for wpa_supplicant",
        query: "NixOS/nixpkgs is:pr is:open wpa_supplicant",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wpa_supplicant.json`,
    },
    
    {
        title: "NixOS Package PRs for fish",
        query: "NixOS/nixpkgs is:pr is:open fish",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fish.json`,
    },
    
    {
        title: "NixOS Package PRs for command-not",
        query: "NixOS/nixpkgs is:pr is:open command-not",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-command-not.json`,
    },
    
    {
        title: "NixOS Package PRs for ferdium",
        query: "NixOS/nixpkgs is:pr is:open ferdium",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ferdium.json`,
    },
    
    {
        title: "NixOS Package PRs for topgrade",
        query: "NixOS/nixpkgs is:pr is:open topgrade",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-topgrade.json`,
    },
    
    {
        title: "NixOS Package PRs for kwrited",
        query: "NixOS/nixpkgs is:pr is:open kwrited",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwrited.json`,
    },
    
    {
        title: "NixOS Package PRs for ksshaskpass",
        query: "NixOS/nixpkgs is:pr is:open ksshaskpass",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ksshaskpass.json`,
    },
    
    {
        title: "NixOS Package PRs for udisks-2.9.4",
        query: "NixOS/nixpkgs is:pr is:open udisks-2.9.4",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-udisks-2.9.4.json`,
    },
    
    {
        title: "NixOS Package PRs for accountsservice",
        query: "NixOS/nixpkgs is:pr is:open accountsservice",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-accountsservice.json`,
    },
    
    {
        title: "NixOS Package PRs for e2fsprogs-1.46.6",
        query: "NixOS/nixpkgs is:pr is:open e2fsprogs-1.46.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-e2fsprogs-1.46.6.json`,
    },
    
    {
        title: "NixOS Package PRs for vscode",
        query: "NixOS/nixpkgs is:pr is:open vscode",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-vscode.json`,
    },
    
    {
        title: "NixOS Package PRs for linux-pam-1.5.2",
        query: "NixOS/nixpkgs is:pr is:open linux-pam-1.5.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-linux-pam-1.5.2.json`,
    },
    
    {
        title: "NixOS Package PRs for cups-2.4.2",
        query: "NixOS/nixpkgs is:pr is:open cups-2.4.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cups-2.4.2.json`,
    },
    
    {
        title: "NixOS Package PRs for pcsclite-with-polkit-1.9.5",
        query: "NixOS/nixpkgs is:pr is:open pcsclite-with-polkit-1.9.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pcsclite-with-polkit-1.9.5.json`,
    },
    
    {
        title: "NixOS Package PRs for fzf-0.40.0",
        query: "NixOS/nixpkgs is:pr is:open fzf-0.40.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fzf-0.40.0.json`,
    },
    
    {
        title: "NixOS Package PRs for kontact",
        query: "NixOS/nixpkgs is:pr is:open kontact",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kontact.json`,
    },
    
    {
        title: "NixOS Package PRs for sniffnet",
        query: "NixOS/nixpkgs is:pr is:open sniffnet",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sniffnet.json`,
    },
    
    {
        title: "NixOS Package PRs for gzip-1.12",
        query: "NixOS/nixpkgs is:pr is:open gzip-1.12",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gzip-1.12.json`,
    },
    
    {
        title: "NixOS Package PRs for kleopatra",
        query: "NixOS/nixpkgs is:pr is:open kleopatra",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kleopatra.json`,
    },
    
    {
        title: "NixOS Package PRs for bash-interactive-5.2-p15",
        query: "NixOS/nixpkgs is:pr is:open bash-interactive-5.2-p15",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bash-interactive-5.2-p15.json`,
    },
    
    {
        title: "NixOS Package PRs for nixpkgs-review",
        query: "NixOS/nixpkgs is:pr is:open nixpkgs-review",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixpkgs-review.json`,
    },
    
    {
        title: "NixOS Package PRs for smartmontools",
        query: "NixOS/nixpkgs is:pr is:open smartmontools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-smartmontools.json`,
    },
    
    {
        title: "NixOS Package PRs for acl-2.3.1",
        query: "NixOS/nixpkgs is:pr is:open acl-2.3.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-acl-2.3.1.json`,
    },
    
    {
        title: "NixOS Package PRs for kaddressbook",
        query: "NixOS/nixpkgs is:pr is:open kaddressbook",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kaddressbook.json`,
    },
    
    {
        title: "NixOS Package PRs for kmail",
        query: "NixOS/nixpkgs is:pr is:open kmail",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kmail.json`,
    },
    
    {
        title: "NixOS Package PRs for bash-interactive-5.2-p15",
        query: "NixOS/nixpkgs is:pr is:open bash-interactive-5.2-p15",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bash-interactive-5.2-p15.json`,
    },
    
    {
        title: "NixOS Package PRs for kde-cli-tools",
        query: "NixOS/nixpkgs is:pr is:open kde-cli-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kde-cli-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for gnutar-1.34",
        query: "NixOS/nixpkgs is:pr is:open gnutar-1.34",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnutar-1.34.json`,
    },
    
    {
        title: "NixOS Package PRs for xf86-input-libinput",
        query: "NixOS/nixpkgs is:pr is:open xf86-input-libinput",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xf86-input-libinput.json`,
    },
    
    {
        title: "NixOS Package PRs for jq-1.6",
        query: "NixOS/nixpkgs is:pr is:open jq-1.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-jq-1.6.json`,
    },
    
    {
        title: "NixOS Package PRs for libcap",
        query: "NixOS/nixpkgs is:pr is:open libcap",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libcap.json`,
    },
    
    {
        title: "NixOS Package PRs for nmap",
        query: "NixOS/nixpkgs is:pr is:open nmap",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nmap.json`,
    },
    
    {
        title: "NixOS Package PRs for xclip",
        query: "NixOS/nixpkgs is:pr is:open xclip",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xclip.json`,
    },
    
    {
        title: "NixOS Package PRs for libcap-2.68",
        query: "NixOS/nixpkgs is:pr is:open libcap-2.68",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libcap-2.68.json`,
    },
    
    {
        title: "NixOS Package PRs for fishplugin-fzf.fish",
        query: "NixOS/nixpkgs is:pr is:open fishplugin-fzf.fish",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fishplugin-fzf.fish.json`,
    },
    
    {
        title: "NixOS Package PRs for cmake",
        query: "NixOS/nixpkgs is:pr is:open cmake",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cmake.json`,
    },
    
    {
        title: "NixOS Package PRs for pinentry-1.2.1",
        query: "NixOS/nixpkgs is:pr is:open pinentry-1.2.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pinentry-1.2.1.json`,
    },
    
    {
        title: "NixOS Package PRs for phpstorm-with-plugins",
        query: "NixOS/nixpkgs is:pr is:open phpstorm-with-plugins",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-phpstorm-with-plugins.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-desktop",
        query: "NixOS/nixpkgs is:pr is:open plasma-desktop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-desktop.json`,
    },
    
    {
        title: "NixOS Package PRs for kconfig-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kconfig-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kconfig-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for procps",
        query: "NixOS/nixpkgs is:pr is:open procps",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-procps.json`,
    },
    
    {
        title: "NixOS Package PRs for wireguard-tools",
        query: "NixOS/nixpkgs is:pr is:open wireguard-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wireguard-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for mc",
        query: "NixOS/nixpkgs is:pr is:open mc",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-mc.json`,
    },
    
    {
        title: "NixOS Package PRs for curl-8.0.1",
        query: "NixOS/nixpkgs is:pr is:open curl-8.0.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-curl-8.0.1.json`,
    },
    
    {
        title: "NixOS Package PRs for kdegraphics-thumbnailers",
        query: "NixOS/nixpkgs is:pr is:open kdegraphics-thumbnailers",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdegraphics-thumbnailers.json`,
    },
    
    {
        title: "NixOS Package PRs for thefuck",
        query: "NixOS/nixpkgs is:pr is:open thefuck",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-thefuck.json`,
    },
    
    {
        title: "NixOS Package PRs for strace",
        query: "NixOS/nixpkgs is:pr is:open strace",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-strace.json`,
    },
    
    {
        title: "NixOS Package PRs for kdiff3",
        query: "NixOS/nixpkgs is:pr is:open kdiff3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdiff3.json`,
    },
    
    {
        title: "NixOS Package PRs for spice-gtk",
        query: "NixOS/nixpkgs is:pr is:open spice-gtk",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-spice-gtk.json`,
    },
    
    {
        title: "NixOS Package PRs for cpio",
        query: "NixOS/nixpkgs is:pr is:open cpio",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cpio.json`,
    },
    
    {
        title: "NixOS Package PRs for fontconfig-2.14.0",
        query: "NixOS/nixpkgs is:pr is:open fontconfig-2.14.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fontconfig-2.14.0.json`,
    },
    
    {
        title: "NixOS Package PRs for virt-manager",
        query: "NixOS/nixpkgs is:pr is:open virt-manager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-virt-manager.json`,
    },
    
    {
        title: "NixOS Package PRs for dbus-1.14.6",
        query: "NixOS/nixpkgs is:pr is:open dbus-1.14.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dbus-1.14.6.json`,
    },
    
    {
        title: "NixOS Package PRs for kdnssd",
        query: "NixOS/nixpkgs is:pr is:open kdnssd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdnssd.json`,
    },
    
    {
        title: "NixOS Package PRs for kio-extras",
        query: "NixOS/nixpkgs is:pr is:open kio-extras",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kio-extras.json`,
    },
    
    {
        title: "NixOS Package PRs for qc",
        query: "NixOS/nixpkgs is:pr is:open qc",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qc.json`,
    },
    
    {
        title: "NixOS Package PRs for spectacle",
        query: "NixOS/nixpkgs is:pr is:open spectacle",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-spectacle.json`,
    },
    
    {
        title: "NixOS Package PRs for keepassxc",
        query: "NixOS/nixpkgs is:pr is:open keepassxc",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-keepassxc.json`,
    },
    
    {
        title: "NixOS Package PRs for pipewire",
        query: "NixOS/nixpkgs is:pr is:open pipewire",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pipewire.json`,
    },
    
    {
        title: "NixOS Package PRs for bind-9.18.14",
        query: "NixOS/nixpkgs is:pr is:open bind-9.18.14",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bind-9.18.14.json`,
    },
    
    {
        title: "NixOS Package PRs for bcache-tools",
        query: "NixOS/nixpkgs is:pr is:open bcache-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bcache-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for chromium",
        query: "NixOS/nixpkgs is:pr is:open chromium",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-chromium.json`,
    },
    
    {
        title: "NixOS Package PRs for bind-9.18.14",
        query: "NixOS/nixpkgs is:pr is:open bind-9.18.14",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bind-9.18.14.json`,
    },
    
    {
        title: "NixOS Package PRs for tmux",
        query: "NixOS/nixpkgs is:pr is:open tmux",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-tmux.json`,
    },
    
    {
        title: "NixOS Package PRs for kwayland-5.106.0",
        query: "NixOS/nixpkgs is:pr is:open kwayland-5.106.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwayland-5.106.0.json`,
    },
    
    {
        title: "NixOS Package PRs for fwupd",
        query: "NixOS/nixpkgs is:pr is:open fwupd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fwupd.json`,
    },
    
    {
        title: "NixOS Package PRs for kinfocenter",
        query: "NixOS/nixpkgs is:pr is:open kinfocenter",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kinfocenter.json`,
    },
    
    {
        title: "NixOS Package PRs for onlyoffice-desktopeditors",
        query: "NixOS/nixpkgs is:pr is:open onlyoffice-desktopeditors",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-onlyoffice-desktopeditors.json`,
    },
    
    {
        title: "NixOS Package PRs for loganalyzer",
        query: "NixOS/nixpkgs is:pr is:open loganalyzer",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-loganalyzer.json`,
    },
    
    {
        title: "NixOS Package PRs for xdg-user-dirs",
        query: "NixOS/nixpkgs is:pr is:open xdg-user-dirs",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xdg-user-dirs.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-fortisslvpn-gnome",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-fortisslvpn-gnome",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-fortisslvpn-gnome.json`,
    },
    
    {
        title: "NixOS Package PRs for firefox",
        query: "NixOS/nixpkgs is:pr is:open firefox",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-firefox.json`,
    },
    
    {
        title: "NixOS Package PRs for ncurses-6.4",
        query: "NixOS/nixpkgs is:pr is:open ncurses-6.4",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ncurses-6.4.json`,
    },
    
    {
        title: "NixOS Package PRs for perl-5.36.0",
        query: "NixOS/nixpkgs is:pr is:open perl-5.36.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-perl-5.36.0.json`,
    },
    
    {
        title: "NixOS Package PRs for polkit-kde-agent-1",
        query: "NixOS/nixpkgs is:pr is:open polkit-kde-agent-1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-polkit-kde-agent-1.json`,
    },
    
    {
        title: "NixOS Package PRs for xf86-input-evdev",
        query: "NixOS/nixpkgs is:pr is:open xf86-input-evdev",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xf86-input-evdev.json`,
    },
    
    {
        title: "NixOS Package PRs for findutils-4.9.0",
        query: "NixOS/nixpkgs is:pr is:open findutils-4.9.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-findutils-4.9.0.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for kwalletmanager",
        query: "NixOS/nixpkgs is:pr is:open kwalletmanager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwalletmanager.json`,
    },
    
    {
        title: "NixOS Package PRs for glibc-locales-2.37",
        query: "NixOS/nixpkgs is:pr is:open glibc-locales-2.37",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-glibc-locales-2.37.json`,
    },
    
    {
        title: "NixOS Package PRs for rsync",
        query: "NixOS/nixpkgs is:pr is:open rsync",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-rsync.json`,
    },
    
    {
        title: "NixOS Package PRs for man-db-2.11.2",
        query: "NixOS/nixpkgs is:pr is:open man-db-2.11.2",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-man-db-2.11.2.json`,
    },
    
    {
        title: "NixOS Package PRs for mtools",
        query: "NixOS/nixpkgs is:pr is:open mtools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-mtools.json`,
    },
    
    {
        title: "NixOS Package PRs for gparted",
        query: "NixOS/nixpkgs is:pr is:open gparted",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gparted.json`,
    },
    
    {
        title: "NixOS Package PRs for pcsclite-with-polkit-1.9.5",
        query: "NixOS/nixpkgs is:pr is:open pcsclite-with-polkit-1.9.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pcsclite-with-polkit-1.9.5.json`,
    },
    
    {
        title: "NixOS Package PRs for wget",
        query: "NixOS/nixpkgs is:pr is:open wget",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-wget.json`,
    },
    
    {
        title: "NixOS Package PRs for qtcreator",
        query: "NixOS/nixpkgs is:pr is:open qtcreator",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qtcreator.json`,
    },
    
    {
        title: "NixOS Package PRs for htop",
        query: "NixOS/nixpkgs is:pr is:open htop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-htop.json`,
    },
    
    {
        title: "NixOS Package PRs for shadow-4.13",
        query: "NixOS/nixpkgs is:pr is:open shadow-4.13",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-shadow-4.13.json`,
    },
    
    {
        title: "NixOS Package PRs for nix-bash-completions",
        query: "NixOS/nixpkgs is:pr is:open nix-bash-completions",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nix-bash-completions.json`,
    },
    
    {
        title: "NixOS Package PRs for threadweaver",
        query: "NixOS/nixpkgs is:pr is:open threadweaver",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-threadweaver.json`,
    },
    
    {
        title: "NixOS Package PRs for okular",
        query: "NixOS/nixpkgs is:pr is:open okular",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-okular.json`,
    },
    
    {
        title: "NixOS Package PRs for docker",
        query: "NixOS/nixpkgs is:pr is:open docker",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-docker.json`,
    },
    
    {
        title: "NixOS Package PRs for iceauth",
        query: "NixOS/nixpkgs is:pr is:open iceauth",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-iceauth.json`,
    },
    
    {
        title: "NixOS Package PRs for python3.10-yubikey-manager",
        query: "NixOS/nixpkgs is:pr is:open python3.10-yubikey-manager",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-python3.10-yubikey-manager.json`,
    },
    
    {
        title: "NixOS Package PRs for nvidia-x11-530.41.03-6.1.29",
        query: "NixOS/nixpkgs is:pr is:open nvidia-x11-530.41.03-6.1.29",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nvidia-x11-530.41.03-6.1.29.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for milou",
        query: "NixOS/nixpkgs is:pr is:open milou",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-milou.json`,
    },
    
    {
        title: "NixOS Package PRs for libcap-2.68",
        query: "NixOS/nixpkgs is:pr is:open libcap-2.68",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-libcap-2.68.json`,
    },
    
    {
        title: "NixOS Package PRs for kde-inotify-survey",
        query: "NixOS/nixpkgs is:pr is:open kde-inotify-survey",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kde-inotify-survey.json`,
    },
    
    {
        title: "NixOS Package PRs for sudo",
        query: "NixOS/nixpkgs is:pr is:open sudo",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sudo.json`,
    },
    
    {
        title: "NixOS Package PRs for xrandr",
        query: "NixOS/nixpkgs is:pr is:open xrandr",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xrandr.json`,
    },
    
    {
        title: "NixOS Package PRs for gzip-1.12",
        query: "NixOS/nixpkgs is:pr is:open gzip-1.12",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gzip-1.12.json`,
    },
    
    {
        title: "NixOS Package PRs for spice-gtk-0.42",
        query: "NixOS/nixpkgs is:pr is:open spice-gtk-0.42",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-spice-gtk-0.42.json`,
    },
    
    {
        title: "NixOS Package PRs for gnumake-4.4.1",
        query: "NixOS/nixpkgs is:pr is:open gnumake-4.4.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnumake-4.4.1.json`,
    },
    
    {
        title: "NixOS Package PRs for attr-2.5.1",
        query: "NixOS/nixpkgs is:pr is:open attr-2.5.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-attr-2.5.1.json`,
    },
    
    {
        title: "NixOS Package PRs for kde-gtk-config",
        query: "NixOS/nixpkgs is:pr is:open kde-gtk-config",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kde-gtk-config.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-l2tp-gnome",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-l2tp-gnome",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-l2tp-gnome.json`,
    },
    
    {
        title: "NixOS Package PRs for nix",
        query: "NixOS/nixpkgs is:pr is:open nix",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nix.json`,
    },
    
    {
        title: "NixOS Package PRs for inetutils",
        query: "NixOS/nixpkgs is:pr is:open inetutils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-inetutils.json`,
    },
    
    {
        title: "NixOS Package PRs for networkmanager-1.42.6",
        query: "NixOS/nixpkgs is:pr is:open networkmanager-1.42.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-networkmanager-1.42.6.json`,
    },
    
    {
        title: "NixOS Package PRs for nvidia-settings",
        query: "NixOS/nixpkgs is:pr is:open nvidia-settings",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nvidia-settings.json`,
    },
    
    {
        title: "NixOS Package PRs for gh",
        query: "NixOS/nixpkgs is:pr is:open gh",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gh.json`,
    },
    
    {
        title: "NixOS Package PRs for fwupd-1.8.15",
        query: "NixOS/nixpkgs is:pr is:open fwupd-1.8.15",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fwupd-1.8.15.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-workspace-wallpapers",
        query: "NixOS/nixpkgs is:pr is:open plasma-workspace-wallpapers",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-workspace-wallpapers.json`,
    },
    
    {
        title: "NixOS Package PRs for google-chrome",
        query: "NixOS/nixpkgs is:pr is:open google-chrome",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-google-chrome.json`,
    },
    
    {
        title: "NixOS Package PRs for kactivitymanagerd",
        query: "NixOS/nixpkgs is:pr is:open kactivitymanagerd",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kactivitymanagerd.json`,
    },
    
    {
        title: "NixOS Package PRs for gawk-5.2.1",
        query: "NixOS/nixpkgs is:pr is:open gawk-5.2.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gawk-5.2.1.json`,
    },
    
    {
        title: "NixOS Package PRs for gcc-wrapper-12.2.0",
        query: "NixOS/nixpkgs is:pr is:open gcc-wrapper-12.2.0",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gcc-wrapper-12.2.0.json`,
    },
    
    {
        title: "NixOS Package PRs for plasma-systemmonitor",
        query: "NixOS/nixpkgs is:pr is:open plasma-systemmonitor",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-plasma-systemmonitor.json`,
    },
    
    {
        title: "NixOS Package PRs for networkmanager-1.42.6",
        query: "NixOS/nixpkgs is:pr is:open networkmanager-1.42.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-networkmanager-1.42.6.json`,
    },
    
    {
        title: "NixOS Package PRs for ark",
        query: "NixOS/nixpkgs is:pr is:open ark",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ark.json`,
    },
    
    {
        title: "NixOS Package PRs for cups-pk-helper",
        query: "NixOS/nixpkgs is:pr is:open cups-pk-helper",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-cups-pk-helper.json`,
    },
    
    {
        title: "NixOS Package PRs for clion-with-plugins",
        query: "NixOS/nixpkgs is:pr is:open clion-with-plugins",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-clion-with-plugins.json`,
    },
    
    {
        title: "NixOS Package PRs for xrdb",
        query: "NixOS/nixpkgs is:pr is:open xrdb",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xrdb.json`,
    },
    
    {
        title: "NixOS Package PRs for gnused-4.9",
        query: "NixOS/nixpkgs is:pr is:open gnused-4.9",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnused-4.9.json`,
    },
    
    {
        title: "NixOS Package PRs for sddm",
        query: "NixOS/nixpkgs is:pr is:open sddm",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sddm.json`,
    },
    
    {
        title: "NixOS Package PRs for nano",
        query: "NixOS/nixpkgs is:pr is:open nano",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nano.json`,
    },
    
    {
        title: "NixOS Package PRs for tree",
        query: "NixOS/nixpkgs is:pr is:open tree",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-tree.json`,
    },
    
    {
        title: "NixOS Package PRs for agenix",
        query: "NixOS/nixpkgs is:pr is:open agenix",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-agenix.json`,
    },
    
    {
        title: "NixOS Package PRs for e2fsprogs-1.46.6",
        query: "NixOS/nixpkgs is:pr is:open e2fsprogs-1.46.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-e2fsprogs-1.46.6.json`,
    },
    
    {
        title: "NixOS Package PRs for breeze-gtk",
        query: "NixOS/nixpkgs is:pr is:open breeze-gtk",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-breeze-gtk.json`,
    },
    
    {
        title: "NixOS Package PRs for ksnip",
        query: "NixOS/nixpkgs is:pr is:open ksnip",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ksnip.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-openvpn",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-openvpn",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-openvpn.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos-build",
        query: "NixOS/nixpkgs is:pr is:open nixos-build",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos-build.json`,
    },
    
    {
        title: "NixOS Package PRs for nextcloud-client",
        query: "NixOS/nixpkgs is:pr is:open nextcloud-client",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nextcloud-client.json`,
    },
    
    {
        title: "NixOS Package PRs for vpnc-unstable-2021-11",
        query: "NixOS/nixpkgs is:pr is:open vpnc-unstable-2021-11",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-vpnc-unstable-2021-11.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-vpnc",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-vpnc",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-vpnc.json`,
    },
    
    {
        title: "NixOS Package PRs for jq-1.6",
        query: "NixOS/nixpkgs is:pr is:open jq-1.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-jq-1.6.json`,
    },
    
    {
        title: "NixOS Package PRs for kaccounts-providers",
        query: "NixOS/nixpkgs is:pr is:open kaccounts-providers",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kaccounts-providers.json`,
    },
    
    {
        title: "NixOS Package PRs for pinentry-1.2.1",
        query: "NixOS/nixpkgs is:pr is:open pinentry-1.2.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pinentry-1.2.1.json`,
    },
    
    {
        title: "NixOS Package PRs for openobex",
        query: "NixOS/nixpkgs is:pr is:open openobex",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-openobex.json`,
    },
    
    {
        title: "NixOS Package PRs for pipewire-0.3.71",
        query: "NixOS/nixpkgs is:pr is:open pipewire-0.3.71",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pipewire-0.3.71.json`,
    },
    
    {
        title: "NixOS Package PRs for phonon-backend-vlc",
        query: "NixOS/nixpkgs is:pr is:open phonon-backend-vlc",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-phonon-backend-vlc.json`,
    },
    
    {
        title: "NixOS Package PRs for fzf",
        query: "NixOS/nixpkgs is:pr is:open fzf",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fzf.json`,
    },
    
    {
        title: "NixOS Package PRs for kdeplasma-addons",
        query: "NixOS/nixpkgs is:pr is:open kdeplasma-addons",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdeplasma-addons.json`,
    },
    
    {
        title: "NixOS Package PRs for upower",
        query: "NixOS/nixpkgs is:pr is:open upower",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-upower.json`,
    },
    
    {
        title: "NixOS Package PRs for bluez",
        query: "NixOS/nixpkgs is:pr is:open bluez",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-bluez.json`,
    },
    
    {
        title: "NixOS Package PRs for obexftp",
        query: "NixOS/nixpkgs is:pr is:open obexftp",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-obexftp.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for coreutils-full-9.1",
        query: "NixOS/nixpkgs is:pr is:open coreutils-full-9.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-coreutils-full-9.1.json`,
    },
    
    {
        title: "NixOS Package PRs for pcsclite-with-polkit-1.9.5",
        query: "NixOS/nixpkgs is:pr is:open pcsclite-with-polkit-1.9.5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pcsclite-with-polkit-1.9.5.json`,
    },
    
    {
        title: "NixOS Package PRs for alsa-utils",
        query: "NixOS/nixpkgs is:pr is:open alsa-utils",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-alsa-utils.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-openconnect",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-openconnect",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-openconnect.json`,
    },
    
    {
        title: "NixOS Package PRs for xsetroot",
        query: "NixOS/nixpkgs is:pr is:open xsetroot",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xsetroot.json`,
    },
    
    {
        title: "NixOS Package PRs for kfind",
        query: "NixOS/nixpkgs is:pr is:open kfind",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kfind.json`,
    },
    
    {
        title: "NixOS Package PRs for pipewire-0.3.71",
        query: "NixOS/nixpkgs is:pr is:open pipewire-0.3.71",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-pipewire-0.3.71.json`,
    },
    
    {
        title: "NixOS Package PRs for kwayland-integration",
        query: "NixOS/nixpkgs is:pr is:open kwayland-integration",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kwayland-integration.json`,
    },
    
    {
        title: "NixOS Package PRs for qownnotes",
        query: "NixOS/nixpkgs is:pr is:open qownnotes",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qownnotes.json`,
    },
    
    {
        title: "NixOS Package PRs for iptables-1.8.9",
        query: "NixOS/nixpkgs is:pr is:open iptables-1.8.9",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-iptables-1.8.9.json`,
    },
    
    {
        title: "NixOS Package PRs for xprop",
        query: "NixOS/nixpkgs is:pr is:open xprop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xprop.json`,
    },
    
    {
        title: "NixOS Package PRs for rtkit",
        query: "NixOS/nixpkgs is:pr is:open rtkit",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-rtkit.json`,
    },
    
    {
        title: "NixOS Package PRs for gnumake-4.4.1",
        query: "NixOS/nixpkgs is:pr is:open gnumake-4.4.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-gnumake-4.4.1.json`,
    },
    
    {
        title: "NixOS Package PRs for kgamma5",
        query: "NixOS/nixpkgs is:pr is:open kgamma5",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kgamma5.json`,
    },
    
    {
        title: "NixOS Package PRs for dconf",
        query: "NixOS/nixpkgs is:pr is:open dconf",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dconf.json`,
    },
    
    {
        title: "NixOS Package PRs for patch",
        query: "NixOS/nixpkgs is:pr is:open patch",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-patch.json`,
    },
    
    {
        title: "NixOS Package PRs for kdeconnect-kde",
        query: "NixOS/nixpkgs is:pr is:open kdeconnect-kde",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kdeconnect-kde.json`,
    },
    
    {
        title: "NixOS Package PRs for systemd-253.3",
        query: "NixOS/nixpkgs is:pr is:open systemd-253.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-systemd-253.3.json`,
    },
    
    {
        title: "NixOS Package PRs for dbus-1.14.6",
        query: "NixOS/nixpkgs is:pr is:open dbus-1.14.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-dbus-1.14.6.json`,
    },
    
    {
        title: "NixOS Package PRs for qemu",
        query: "NixOS/nixpkgs is:pr is:open qemu",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-qemu.json`,
    },
    
    {
        title: "NixOS Package PRs for fish-3.6.1",
        query: "NixOS/nixpkgs is:pr is:open fish-3.6.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-fish-3.6.1.json`,
    },
    
    {
        title: "NixOS Package PRs for xauth",
        query: "NixOS/nixpkgs is:pr is:open xauth",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xauth.json`,
    },
    
    {
        title: "NixOS Package PRs for xz-5.4.3",
        query: "NixOS/nixpkgs is:pr is:open xz-5.4.3",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-xz-5.4.3.json`,
    },
    
    {
        title: "NixOS Package PRs for jq-1.6",
        query: "NixOS/nixpkgs is:pr is:open jq-1.6",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-jq-1.6.json`,
    },
    
    {
        title: "NixOS Package PRs for sound-theme-freedesktop",
        query: "NixOS/nixpkgs is:pr is:open sound-theme-freedesktop",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-sound-theme-freedesktop.json`,
    },
    
    {
        title: "NixOS Package PRs for tmux-3.3a",
        query: "NixOS/nixpkgs is:pr is:open tmux-3.3a",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-tmux-3.3a.json`,
    },
    
    {
        title: "NixOS Package PRs for ncdu",
        query: "NixOS/nixpkgs is:pr is:open ncdu",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-ncdu.json`,
    },
    
    {
        title: "NixOS Package PRs for kmail-23.04.1",
        query: "NixOS/nixpkgs is:pr is:open kmail-23.04.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-kmail-23.04.1.json`,
    },
    
    {
        title: "NixOS Package PRs for filelight",
        query: "NixOS/nixpkgs is:pr is:open filelight",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-filelight.json`,
    },
    
    {
        title: "NixOS Package PRs for acl-2.3.1",
        query: "NixOS/nixpkgs is:pr is:open acl-2.3.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-acl-2.3.1.json`,
    },
    
    {
        title: "NixOS Package PRs for nixos",
        query: "NixOS/nixpkgs is:pr is:open nixos",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-nixos.json`,
    },
    
    {
        title: "NixOS Package PRs for NetworkManager-sstp-gnome-unstable-2023-03",
        query: "NixOS/nixpkgs is:pr is:open NetworkManager-sstp-gnome-unstable-2023-03",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-NetworkManager-sstp-gnome-unstable-2023-03.json`,
    },
    
    {
        title: "NixOS Package PRs for net-tools",
        query: "NixOS/nixpkgs is:pr is:open net-tools",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-net-tools.json`,
    },
    
    {
        title: "NixOS Package PRs for yubico-pam",
        query: "NixOS/nixpkgs is:pr is:open yubico-pam",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-yubico-pam.json`,
    },
    
    {
        title: "NixOS Package PRs for neovim",
        query: "NixOS/nixpkgs is:pr is:open neovim",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-neovim.json`,
    },
    
    {
        title: "NixOS Package PRs for attr-2.5.1",
        query: "NixOS/nixpkgs is:pr is:open attr-2.5.1",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-attr-2.5.1.json`,
    },
    
    {
        title: "NixOS Package PRs for python3.10-magic-wormhole",
        query: "NixOS/nixpkgs is:pr is:open python3.10-magic-wormhole",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-python3.10-magic-wormhole.json`,
    },
    
];