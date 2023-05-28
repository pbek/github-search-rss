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
            title: "NixOS Package PRs for kexec-tools, iptables, gnutar, ncurses, bash-interactive-5.2, linux-pam packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kexec-tools OR iptables OR gnutar OR ncurses OR bash-interactive-5.2 OR linux-pam)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-0.json`,
        },
        
        {
            title: "NixOS Package PRs for kmod, gnugrep, zstd-1.5.5, xz-5.4.3, bzip2-1.0.8, gzip packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kmod OR gnugrep OR zstd-1.5.5 OR xz-5.4.3 OR bzip2-1.0.8 OR gzip)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-1.json`,
        },
        
        {
            title: "NixOS Package PRs for kbd, systemd, qttools-5.15.9, shared-mime-info, dbus, kcoreaddons-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kbd OR systemd OR qttools-5.15.9 OR shared-mime-info OR dbus OR kcoreaddons-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-2.json`,
        },
        
        {
            title: "NixOS Package PRs for kauth, kwidgetsaddons, kguiaddons, kconfigwidgets, breeze-icons, kdoctools packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kauth OR kwidgetsaddons OR kguiaddons OR kconfigwidgets OR breeze-icons OR kdoctools)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-3.json`,
        },
        
        {
            title: "NixOS Package PRs for kiconthemes-5.106.0, kservice-5.106.0, kglobalaccel, knotifications-5.106.0, ktextwidgets-5.106.0, kxmlgui-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kiconthemes-5.106.0 OR kservice-5.106.0 OR kglobalaccel OR knotifications-5.106.0 OR ktextwidgets-5.106.0 OR kxmlgui-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-4.json`,
        },
        
        {
            title: "NixOS Package PRs for sonnet-5.106.0, cups, kded, kjobwidgets-5.106.0, media-player-info, solid-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (sonnet-5.106.0 OR cups OR kded OR kjobwidgets-5.106.0 OR media-player-info OR solid-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-5.json`,
        },
        
        {
            title: "NixOS Package PRs for kwallet-5.106.0, kio, kactivities-5.106.0, kpackage-5.106.0, kdeclarative-5.106.0, qtgraphicaleffects packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kwallet-5.106.0 OR kio OR kactivities-5.106.0 OR kpackage-5.106.0 OR kdeclarative-5.106.0 OR qtgraphicaleffects)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-6.json`,
        },
        
        {
            title: "NixOS Package PRs for kirigami2, plasma-framework-5.106.0, krunner-5.106.0, kaccounts-integration, akonadi, knewstuff-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kirigami2 OR plasma-framework-5.106.0 OR krunner-5.106.0 OR kaccounts-integration OR akonadi OR knewstuff-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-7.json`,
        },
        
        {
            title: "NixOS Package PRs for kcmutils-5.106.0, grantlee, grantleetheme, kemoticons-5.106.0, kparts-5.106.0, kcalutils packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kcmutils-5.106.0 OR grantlee OR grantleetheme OR kemoticons-5.106.0 OR kparts-5.106.0 OR kcalutils)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-8.json`,
        },
        
        {
            title: "NixOS Package PRs for korganizer, acl-2.3.1, noseyparker, calibre, perl, kinit packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (korganizer OR acl-2.3.1 OR noseyparker OR calibre OR perl OR kinit)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-9.json`,
        },
        
        {
            title: "NixOS Package PRs for khelpcenter, frameworkintegration-5.106.0, kdecoration, breeze-qt5-5.27.5, plasma-integration, kdbusaddons-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (khelpcenter OR frameworkintegration-5.106.0 OR kdecoration OR breeze-qt5-5.27.5 OR plasma-integration OR kdbusaddons-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-10.json`,
        },
        
        {
            title: "NixOS Package PRs for nix-2.13.3, nix, wireguard-tools-1.0.20210914, curl-8.0.1, f2fs-tools, attic packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nix-2.13.3 OR nix OR wireguard-tools-1.0.20210914 OR curl-8.0.1 OR f2fs-tools OR attic)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-11.json`,
        },
        
        {
            title: "NixOS Package PRs for bash-interactive-5.2-p15, mkpasswd, sops, knotifyconfig, kdepim-runtime, ffmpegthumbs packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (bash-interactive-5.2-p15 OR mkpasswd OR sops OR knotifyconfig OR kdepim-runtime OR ffmpegthumbs)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-12.json`,
        },
        
        {
            title: "NixOS Package PRs for libressl-3.7.2, cryptsetup-2.6.1, gnupg, kfilemetadata-5.106.0, kidletime-5.106.0, baloo packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libressl-3.7.2 OR cryptsetup-2.6.1 OR gnupg OR kfilemetadata-5.106.0 OR kidletime-5.106.0 OR baloo)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-13.json`,
        },
        
        {
            title: "NixOS Package PRs for kxmlrpcclient, libkscreen, kscreenlocker, libksysguard-5.27.5, kpeople-5.106.0, polkit packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kxmlrpcclient OR libkscreen OR kscreenlocker OR libksysguard-5.27.5 OR kpeople-5.106.0 OR polkit)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-14.json`,
        },
        
        {
            title: "NixOS Package PRs for modemmanager, openresolv, gnused, xset, gawk, xdg-utils-unstable-2020-10 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (modemmanager OR openresolv OR gnused OR xset OR gawk OR xdg-utils-unstable-2020-10)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-15.json`,
        },
        
        {
            title: "NixOS Package PRs for openconnect, iputils, networkmanager, qtvirtualkeyboard, kwin, kdesu packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (openconnect OR iputils OR networkmanager OR qtvirtualkeyboard OR kwin OR kdesu)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-16.json`,
        },
        
        {
            title: "NixOS Package PRs for plasma-workspace, systemsettings-5.27.5, time, gdb, which, smartgithg packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (plasma-workspace OR systemsettings-5.27.5 OR time OR gdb OR which OR smartgithg)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-17.json`,
        },
        
        {
            title: "NixOS Package PRs for xlsclients, coreutils-full, bluez-qt-5.106.0, powerdevil, gawk-5.2.1, dosfstools packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xlsclients OR coreutils-full OR bluez-qt-5.106.0 OR powerdevil OR gawk-5.2.1 OR dosfstools)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-18.json`,
        },
        
        {
            title: "NixOS Package PRs for glibc-2.37-8, shadow, util-linux-2.38.1, e2fsprogs-1.46.6, mdadm, udisks packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (glibc-2.37-8 OR shadow OR util-linux-2.38.1 OR e2fsprogs-1.46.6 OR mdadm OR udisks)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-19.json`,
        },
        
        {
            title: "NixOS Package PRs for man-db, dolphin, dolphin-plugins, cryptsetup-2.6.1, libkipi, kipi-plugins packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (man-db OR dolphin OR dolphin-plugins OR cryptsetup-2.6.1 OR libkipi OR kipi-plugins)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-20.json`,
        },
        
        {
            title: "NixOS Package PRs for gwenview, btop, print-manager, wireplumber, konsole, plasma-pa packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gwenview OR btop OR print-manager OR wireplumber OR konsole OR plasma-pa)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-21.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos, nixos-generate, iproute2, openssh, polkit-122, lvm2-2.03.21 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos OR nixos-generate OR iproute2 OR openssh OR polkit-122 OR lvm2-2.03.21)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-22.json`,
        },
        
        {
            title: "NixOS Package PRs for fuse, libvirt, bzip2-1.0.8, xorg-server, elisa, zstd-1.5.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fuse OR libvirt OR bzip2-1.0.8 OR xorg-server OR elisa OR zstd-1.5.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-23.json`,
        },
        
        {
            title: "NixOS Package PRs for power-profiles-daemon, git-2.40.1, git, plasma-disks-5.27.5, findutils, util-linux-2.38.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (power-profiles-daemon OR git-2.40.1 OR git OR plasma-disks-5.27.5 OR findutils OR util-linux-2.38.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-24.json`,
        },
        
        {
            title: "NixOS Package PRs for xdg, gcc-wrapper-12.2.0, yakuake, oxygen-sounds, akonadiconsole, shadow-4.13 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xdg OR gcc-wrapper-12.2.0 OR yakuake OR oxygen-sounds OR akonadiconsole OR shadow-4.13)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-25.json`,
        },
        
        {
            title: "NixOS Package PRs for fuse, gcc-wrapper, cryfs, plasma-vault, exfatprogs, pam_u2f packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fuse OR gcc-wrapper OR cryfs OR plasma-vault OR exfatprogs OR pam_u2f)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-26.json`,
        },
        
        {
            title: "NixOS Package PRs for diffutils, nixos, attr-2.5.1, gnugrep-3.7, texinfo-interactive, restic packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (diffutils OR nixos OR attr-2.5.1 OR gnugrep-3.7 OR texinfo-interactive OR restic)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-27.json`,
        },
        
        {
            title: "NixOS Package PRs for kio-admin, goland-with-plugins, kate, oxygen-5.27.5, lvm2-2.03.21, setxkbmap packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kio-admin OR goland-with-plugins OR kate OR oxygen-5.27.5 OR lvm2-2.03.21 OR setxkbmap)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-28.json`,
        },
        
        {
            title: "NixOS Package PRs for khotkeys-5.27.5, kmenuedit, bluedevil, nano-7.2, ksystemstats, bind-9.18.14 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (khotkeys-5.27.5 OR kmenuedit OR bluedevil OR nano-7.2 OR ksystemstats OR bind-9.18.14)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-29.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos-manual, libressl-3.7.2, aha, plasma-browser-integration, gnumake, atop packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos-manual OR libressl-3.7.2 OR aha OR plasma-browser-integration OR gnumake OR atop)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-30.json`,
        },
        
        {
            title: "NixOS Package PRs for kscreen, nixos-icons-2021-02, kwallet-pam, NetworkManager-iodine-gnome-unstable-2019-11, nix-2.13.3, kimageformats packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kscreen OR nixos-icons-2021-02 OR kwallet-pam OR NetworkManager-iodine-gnome-unstable-2019-11 OR nix-2.13.3 OR kimageformats)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-31.json`,
        },
        
        {
            title: "NixOS Package PRs for xinput, wireplumber-0.4.14, xz-5.4.3, docker-20.10.23, less, ranger packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xinput OR wireplumber-0.4.14 OR xz-5.4.3 OR docker-20.10.23 OR less OR ranger)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-32.json`,
        },
        
        {
            title: "NixOS Package PRs for linux-pam-1.5.2, xterm, plasma-nm, diffutils-3.9, wpa_supplicant, fish packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (linux-pam-1.5.2 OR xterm OR plasma-nm OR diffutils-3.9 OR wpa_supplicant OR fish)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-33.json`,
        },
        
        {
            title: "NixOS Package PRs for command-not, ferdium, topgrade, kwrited, ksshaskpass, udisks-2.9.4 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (command-not OR ferdium OR topgrade OR kwrited OR ksshaskpass OR udisks-2.9.4)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-34.json`,
        },
        
        {
            title: "NixOS Package PRs for accountsservice, e2fsprogs-1.46.6, vscode, linux-pam-1.5.2, cups-2.4.2, pcsclite-with-polkit-1.9.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (accountsservice OR e2fsprogs-1.46.6 OR vscode OR linux-pam-1.5.2 OR cups-2.4.2 OR pcsclite-with-polkit-1.9.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-35.json`,
        },
        
        {
            title: "NixOS Package PRs for fzf-0.40.0, kontact, sniffnet, gzip-1.12, kleopatra, bash-interactive-5.2-p15 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fzf-0.40.0 OR kontact OR sniffnet OR gzip-1.12 OR kleopatra OR bash-interactive-5.2-p15)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-36.json`,
        },
        
        {
            title: "NixOS Package PRs for nixpkgs-review, smartmontools, acl-2.3.1, kaddressbook, kmail, bash-interactive-5.2-p15 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixpkgs-review OR smartmontools OR acl-2.3.1 OR kaddressbook OR kmail OR bash-interactive-5.2-p15)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-37.json`,
        },
        
        {
            title: "NixOS Package PRs for kde-cli-tools, gnutar-1.34, xf86-input-libinput, jq-1.6, libcap, nmap packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kde-cli-tools OR gnutar-1.34 OR xf86-input-libinput OR jq-1.6 OR libcap OR nmap)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-38.json`,
        },
        
        {
            title: "NixOS Package PRs for xclip, libcap-2.68, fishplugin-fzf.fish, cmake, pinentry-1.2.1, phpstorm-with-plugins packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xclip OR libcap-2.68 OR fishplugin-fzf.fish OR cmake OR pinentry-1.2.1 OR phpstorm-with-plugins)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-39.json`,
        },
        
        {
            title: "NixOS Package PRs for plasma-desktop, kconfig-5.106.0, procps, wireguard-tools, mc, curl-8.0.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (plasma-desktop OR kconfig-5.106.0 OR procps OR wireguard-tools OR mc OR curl-8.0.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-40.json`,
        },
        
        {
            title: "NixOS Package PRs for kdegraphics-thumbnailers, thefuck, strace, kdiff3, spice-gtk, cpio packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kdegraphics-thumbnailers OR thefuck OR strace OR kdiff3 OR spice-gtk OR cpio)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-41.json`,
        },
        
        {
            title: "NixOS Package PRs for fontconfig-2.14.0, virt-manager, dbus-1.14.6, kdnssd, kio-extras, qc packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fontconfig-2.14.0 OR virt-manager OR dbus-1.14.6 OR kdnssd OR kio-extras OR qc)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-42.json`,
        },
        
        {
            title: "NixOS Package PRs for spectacle, keepassxc, pipewire, bind-9.18.14, bcache-tools, chromium packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (spectacle OR keepassxc OR pipewire OR bind-9.18.14 OR bcache-tools OR chromium)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-43.json`,
        },
        
        {
            title: "NixOS Package PRs for bind-9.18.14, tmux, kwayland-5.106.0, fwupd, kinfocenter, onlyoffice-desktopeditors packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (bind-9.18.14 OR tmux OR kwayland-5.106.0 OR fwupd OR kinfocenter OR onlyoffice-desktopeditors)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-44.json`,
        },
        
        {
            title: "NixOS Package PRs for loganalyzer, xdg-user-dirs, NetworkManager-fortisslvpn-gnome, firefox, ncurses-6.4, perl-5.36.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (loganalyzer OR xdg-user-dirs OR NetworkManager-fortisslvpn-gnome OR firefox OR ncurses-6.4 OR perl-5.36.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-45.json`,
        },
        
        {
            title: "NixOS Package PRs for polkit-kde-agent-1, xf86-input-evdev, findutils-4.9.0, nixos, kwalletmanager, glibc-locales-2.37 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (polkit-kde-agent-1 OR xf86-input-evdev OR findutils-4.9.0 OR nixos OR kwalletmanager OR glibc-locales-2.37)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-46.json`,
        },
        
        {
            title: "NixOS Package PRs for rsync, man-db-2.11.2, mtools, gparted, pcsclite-with-polkit-1.9.5, wget packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (rsync OR man-db-2.11.2 OR mtools OR gparted OR pcsclite-with-polkit-1.9.5 OR wget)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-47.json`,
        },
        
        {
            title: "NixOS Package PRs for qtcreator, htop, shadow-4.13, nix-bash-completions, threadweaver, okular packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (qtcreator OR htop OR shadow-4.13 OR nix-bash-completions OR threadweaver OR okular)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-48.json`,
        },
        
        {
            title: "NixOS Package PRs for docker, iceauth, python3.10-yubikey-manager, nvidia-x11-530.41.03-6.1.29, nixos, milou packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (docker OR iceauth OR python3.10-yubikey-manager OR nvidia-x11-530.41.03-6.1.29 OR nixos OR milou)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-49.json`,
        },
        
        {
            title: "NixOS Package PRs for libcap-2.68, kde-inotify-survey, sudo, xrandr, gzip-1.12, spice-gtk-0.42 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libcap-2.68 OR kde-inotify-survey OR sudo OR xrandr OR gzip-1.12 OR spice-gtk-0.42)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-50.json`,
        },
        
        {
            title: "NixOS Package PRs for gnumake-4.4.1, attr-2.5.1, kde-gtk-config, NetworkManager-l2tp-gnome, nix, inetutils packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gnumake-4.4.1 OR attr-2.5.1 OR kde-gtk-config OR NetworkManager-l2tp-gnome OR nix OR inetutils)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-51.json`,
        },
        
        {
            title: "NixOS Package PRs for networkmanager-1.42.6, nvidia-settings, gh, fwupd-1.8.15, plasma-workspace-wallpapers, google-chrome packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (networkmanager-1.42.6 OR nvidia-settings OR gh OR fwupd-1.8.15 OR plasma-workspace-wallpapers OR google-chrome)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-52.json`,
        },
        
        {
            title: "NixOS Package PRs for kactivitymanagerd, gawk-5.2.1, gcc-wrapper-12.2.0, plasma-systemmonitor, networkmanager-1.42.6, ark packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kactivitymanagerd OR gawk-5.2.1 OR gcc-wrapper-12.2.0 OR plasma-systemmonitor OR networkmanager-1.42.6 OR ark)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-53.json`,
        },
        
        {
            title: "NixOS Package PRs for cups-pk-helper, clion-with-plugins, xrdb, gnused-4.9, sddm, nano packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (cups-pk-helper OR clion-with-plugins OR xrdb OR gnused-4.9 OR sddm OR nano)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-54.json`,
        },
        
        {
            title: "NixOS Package PRs for tree, agenix, e2fsprogs-1.46.6, breeze-gtk, ksnip, NetworkManager-openvpn packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (tree OR agenix OR e2fsprogs-1.46.6 OR breeze-gtk OR ksnip OR NetworkManager-openvpn)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-55.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos, nixos-build, nextcloud-client, vpnc-unstable-2021-11, NetworkManager-vpnc, jq-1.6 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos OR nixos-build OR nextcloud-client OR vpnc-unstable-2021-11 OR NetworkManager-vpnc OR jq-1.6)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-56.json`,
        },
        
        {
            title: "NixOS Package PRs for kaccounts-providers, pinentry-1.2.1, openobex, pipewire-0.3.71, phonon-backend-vlc, fzf packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kaccounts-providers OR pinentry-1.2.1 OR openobex OR pipewire-0.3.71 OR phonon-backend-vlc OR fzf)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-57.json`,
        },
        
        {
            title: "NixOS Package PRs for kdeplasma-addons, upower, bluez, obexftp, nixos, coreutils-full-9.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kdeplasma-addons OR upower OR bluez OR obexftp OR nixos OR coreutils-full-9.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-58.json`,
        },
        
        {
            title: "NixOS Package PRs for pcsclite-with-polkit-1.9.5, alsa-utils, NetworkManager-openconnect, xsetroot, kfind, pipewire-0.3.71 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (pcsclite-with-polkit-1.9.5 OR alsa-utils OR NetworkManager-openconnect OR xsetroot OR kfind OR pipewire-0.3.71)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-59.json`,
        },
        
        {
            title: "NixOS Package PRs for kwayland-integration, qownnotes, iptables-1.8.9, xprop, rtkit, gnumake-4.4.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kwayland-integration OR qownnotes OR iptables-1.8.9 OR xprop OR rtkit OR gnumake-4.4.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-60.json`,
        },
        
        {
            title: "NixOS Package PRs for kgamma5, dconf, patch, kdeconnect-kde, systemd-253.3, dbus-1.14.6 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kgamma5 OR dconf OR patch OR kdeconnect-kde OR systemd-253.3 OR dbus-1.14.6)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-61.json`,
        },
        
        {
            title: "NixOS Package PRs for qemu, fish-3.6.1, xauth, xz-5.4.3, jq-1.6, sound-theme-freedesktop packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (qemu OR fish-3.6.1 OR xauth OR xz-5.4.3 OR jq-1.6 OR sound-theme-freedesktop)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-62.json`,
        },
        
        {
            title: "NixOS Package PRs for tmux-3.3a, ncdu, kmail-23.04.1, filelight, acl-2.3.1, nixos packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (tmux-3.3a OR ncdu OR kmail-23.04.1 OR filelight OR acl-2.3.1 OR nixos)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-63.json`,
        },
        
        {
            title: "NixOS Package PRs for NetworkManager-sstp-gnome-unstable-2023-03, net-tools, yubico-pam, neovim, attr-2.5.1, python3.10-magic-wormhole packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (NetworkManager-sstp-gnome-unstable-2023-03 OR net-tools OR yubico-pam OR neovim OR attr-2.5.1 OR python3.10-magic-wormhole)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-64.json`,
        },
        
];