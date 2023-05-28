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
            title: "NixOS Package PRs for kbd, qttools-5.15.9, shared-mime-info, dbus, kcoreaddons-5.106.0, kauth packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kbd OR qttools-5.15.9 OR shared-mime-info OR dbus OR kcoreaddons-5.106.0 OR kauth)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-2.json`,
        },
        
        {
            title: "NixOS Package PRs for kwidgetsaddons, kguiaddons, kconfigwidgets, breeze-icons, kdoctools, kiconthemes-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kwidgetsaddons OR kguiaddons OR kconfigwidgets OR breeze-icons OR kdoctools OR kiconthemes-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-3.json`,
        },
        
        {
            title: "NixOS Package PRs for kservice-5.106.0, kglobalaccel, knotifications-5.106.0, ktextwidgets-5.106.0, kxmlgui-5.106.0, sonnet-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kservice-5.106.0 OR kglobalaccel OR knotifications-5.106.0 OR ktextwidgets-5.106.0 OR kxmlgui-5.106.0 OR sonnet-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-4.json`,
        },
        
        {
            title: "NixOS Package PRs for cups, kded, kjobwidgets-5.106.0, media-player-info, solid-5.106.0, kwallet-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (cups OR kded OR kjobwidgets-5.106.0 OR media-player-info OR solid-5.106.0 OR kwallet-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-5.json`,
        },
        
        {
            title: "NixOS Package PRs for kio, kactivities-5.106.0, kpackage-5.106.0, kdeclarative-5.106.0, qtgraphicaleffects, kirigami2 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kio OR kactivities-5.106.0 OR kpackage-5.106.0 OR kdeclarative-5.106.0 OR qtgraphicaleffects OR kirigami2)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-6.json`,
        },
        
        {
            title: "NixOS Package PRs for plasma-framework-5.106.0, krunner-5.106.0, kaccounts-integration, akonadi, knewstuff-5.106.0, kcmutils-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (plasma-framework-5.106.0 OR krunner-5.106.0 OR kaccounts-integration OR akonadi OR knewstuff-5.106.0 OR kcmutils-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-7.json`,
        },
        
        {
            title: "NixOS Package PRs for grantlee, grantleetheme, kemoticons-5.106.0, kparts-5.106.0, kcalutils, korganizer packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (grantlee OR grantleetheme OR kemoticons-5.106.0 OR kparts-5.106.0 OR kcalutils OR korganizer)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-8.json`,
        },
        
        {
            title: "NixOS Package PRs for acl-2.3.1, noseyparker, calibre, kinit, khelpcenter, frameworkintegration-5.106.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (acl-2.3.1 OR noseyparker OR calibre OR kinit OR khelpcenter OR frameworkintegration-5.106.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-9.json`,
        },
        
        {
            title: "NixOS Package PRs for kdecoration, breeze-qt5-5.27.5, plasma-integration, kdbusaddons-5.106.0, nix-2.13.3, wireguard-tools-1.0.20210914 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kdecoration OR breeze-qt5-5.27.5 OR plasma-integration OR kdbusaddons-5.106.0 OR nix-2.13.3 OR wireguard-tools-1.0.20210914)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-10.json`,
        },
        
        {
            title: "NixOS Package PRs for curl-8.0.1, f2fs-tools, attic, bash-interactive-5.2-p15, mkpasswd, sops packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (curl-8.0.1 OR f2fs-tools OR attic OR bash-interactive-5.2-p15 OR mkpasswd OR sops)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-11.json`,
        },
        
        {
            title: "NixOS Package PRs for knotifyconfig, kdepim-runtime, ffmpegthumbs, libressl-3.7.2, cryptsetup-2.6.1, gnupg packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (knotifyconfig OR kdepim-runtime OR ffmpegthumbs OR libressl-3.7.2 OR cryptsetup-2.6.1 OR gnupg)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-12.json`,
        },
        
        {
            title: "NixOS Package PRs for kfilemetadata-5.106.0, kidletime-5.106.0, baloo, kxmlrpcclient, libkscreen, kscreenlocker packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kfilemetadata-5.106.0 OR kidletime-5.106.0 OR baloo OR kxmlrpcclient OR libkscreen OR kscreenlocker)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-13.json`,
        },
        
        {
            title: "NixOS Package PRs for libksysguard-5.27.5, kpeople-5.106.0, polkit, modemmanager, openresolv, gnused packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libksysguard-5.27.5 OR kpeople-5.106.0 OR polkit OR modemmanager OR openresolv OR gnused)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-14.json`,
        },
        
        {
            title: "NixOS Package PRs for xset, gawk, xdg-utils-unstable-2020-10, openconnect, iputils, networkmanager packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xset OR gawk OR xdg-utils-unstable-2020-10 OR openconnect OR iputils OR networkmanager)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-15.json`,
        },
        
        {
            title: "NixOS Package PRs for qtvirtualkeyboard, kwin, kdesu, plasma-workspace, systemsettings-5.27.5, gdb packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (qtvirtualkeyboard OR kwin OR kdesu OR plasma-workspace OR systemsettings-5.27.5 OR gdb)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-16.json`,
        },
        
        {
            title: "NixOS Package PRs for which, smartgithg, xlsclients, coreutils-full, bluez-qt-5.106.0, powerdevil packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (which OR smartgithg OR xlsclients OR coreutils-full OR bluez-qt-5.106.0 OR powerdevil)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-17.json`,
        },
        
        {
            title: "NixOS Package PRs for gawk-5.2.1, dosfstools, glibc-2.37-8, shadow, util-linux-2.38.1, e2fsprogs-1.46.6 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gawk-5.2.1 OR dosfstools OR glibc-2.37-8 OR shadow OR util-linux-2.38.1 OR e2fsprogs-1.46.6)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-18.json`,
        },
        
        {
            title: "NixOS Package PRs for mdadm, udisks, man-db, dolphin, dolphin-plugins, cryptsetup-2.6.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (mdadm OR udisks OR man-db OR dolphin OR dolphin-plugins OR cryptsetup-2.6.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-19.json`,
        },
        
        {
            title: "NixOS Package PRs for libkipi, kipi-plugins, gwenview, btop, print-manager, wireplumber packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libkipi OR kipi-plugins OR gwenview OR btop OR print-manager OR wireplumber)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-20.json`,
        },
        
        {
            title: "NixOS Package PRs for konsole, plasma-pa, nixos, nixos-generate, iproute2, openssh packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (konsole OR plasma-pa OR nixos OR nixos-generate OR iproute2 OR openssh)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-21.json`,
        },
        
        {
            title: "NixOS Package PRs for polkit-122, lvm2-2.03.21, fuse, libvirt, bzip2-1.0.8, xorg-server packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (polkit-122 OR lvm2-2.03.21 OR fuse OR libvirt OR bzip2-1.0.8 OR xorg-server)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-22.json`,
        },
        
        {
            title: "NixOS Package PRs for elisa, zstd-1.5.5, power-profiles-daemon, git-2.40.1, git, plasma-disks-5.27.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (elisa OR zstd-1.5.5 OR power-profiles-daemon OR git-2.40.1 OR git OR plasma-disks-5.27.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-23.json`,
        },
        
        {
            title: "NixOS Package PRs for findutils, util-linux-2.38.1, xdg, gcc-wrapper-12.2.0, yakuake, oxygen-sounds packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (findutils OR util-linux-2.38.1 OR xdg OR gcc-wrapper-12.2.0 OR yakuake OR oxygen-sounds)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-24.json`,
        },
        
        {
            title: "NixOS Package PRs for akonadiconsole, shadow-4.13, fuse, gcc-wrapper, cryfs, plasma-vault packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (akonadiconsole OR shadow-4.13 OR fuse OR gcc-wrapper OR cryfs OR plasma-vault)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-25.json`,
        },
        
        {
            title: "NixOS Package PRs for exfatprogs, pam_u2f, diffutils, nixos, attr-2.5.1, gnugrep-3.7 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (exfatprogs OR pam_u2f OR diffutils OR nixos OR attr-2.5.1 OR gnugrep-3.7)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-26.json`,
        },
        
        {
            title: "NixOS Package PRs for texinfo-interactive, restic, kio-admin, goland-with-plugins, kate, oxygen-5.27.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (texinfo-interactive OR restic OR kio-admin OR goland-with-plugins OR kate OR oxygen-5.27.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-27.json`,
        },
        
        {
            title: "NixOS Package PRs for lvm2-2.03.21, setxkbmap, khotkeys-5.27.5, kmenuedit, bluedevil, nano-7.2 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (lvm2-2.03.21 OR setxkbmap OR khotkeys-5.27.5 OR kmenuedit OR bluedevil OR nano-7.2)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-28.json`,
        },
        
        {
            title: "NixOS Package PRs for ksystemstats, bind-9.18.14, nixos-manual, libressl-3.7.2, aha, plasma-browser-integration packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (ksystemstats OR bind-9.18.14 OR nixos-manual OR libressl-3.7.2 OR aha OR plasma-browser-integration)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-29.json`,
        },
        
        {
            title: "NixOS Package PRs for gnumake, atop, kscreen, nixos-icons-2021-02, kwallet-pam, NetworkManager-iodine-gnome-unstable-2019-11 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gnumake OR atop OR kscreen OR nixos-icons-2021-02 OR kwallet-pam OR NetworkManager-iodine-gnome-unstable-2019-11)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-30.json`,
        },
        
        {
            title: "NixOS Package PRs for nix-2.13.3, kimageformats, xinput, wireplumber-0.4.14, xz-5.4.3, docker-20.10.23 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nix-2.13.3 OR kimageformats OR xinput OR wireplumber-0.4.14 OR xz-5.4.3 OR docker-20.10.23)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-31.json`,
        },
        
        {
            title: "NixOS Package PRs for less, ranger, linux-pam-1.5.2, xterm, plasma-nm, diffutils-3.9 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (less OR ranger OR linux-pam-1.5.2 OR xterm OR plasma-nm OR diffutils-3.9)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-32.json`,
        },
        
        {
            title: "NixOS Package PRs for wpa_supplicant, fish, command-not, ferdium, topgrade, kwrited packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (wpa_supplicant OR fish OR command-not OR ferdium OR topgrade OR kwrited)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-33.json`,
        },
        
        {
            title: "NixOS Package PRs for ksshaskpass, udisks-2.9.4, accountsservice, e2fsprogs-1.46.6, linux-pam-1.5.2, cups-2.4.2 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (ksshaskpass OR udisks-2.9.4 OR accountsservice OR e2fsprogs-1.46.6 OR linux-pam-1.5.2 OR cups-2.4.2)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-34.json`,
        },
        
        {
            title: "NixOS Package PRs for pcsclite-with-polkit-1.9.5, fzf-0.40.0, kontact, sniffnet, gzip-1.12, kleopatra packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (pcsclite-with-polkit-1.9.5 OR fzf-0.40.0 OR kontact OR sniffnet OR gzip-1.12 OR kleopatra)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-35.json`,
        },
        
        {
            title: "NixOS Package PRs for bash-interactive-5.2-p15, nixpkgs-review, smartmontools, acl-2.3.1, kaddressbook, kmail packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (bash-interactive-5.2-p15 OR nixpkgs-review OR smartmontools OR acl-2.3.1 OR kaddressbook OR kmail)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-36.json`,
        },
        
        {
            title: "NixOS Package PRs for bash-interactive-5.2-p15, kde-cli-tools, gnutar-1.34, xf86-input-libinput, jq-1.6, libcap packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (bash-interactive-5.2-p15 OR kde-cli-tools OR gnutar-1.34 OR xf86-input-libinput OR jq-1.6 OR libcap)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-37.json`,
        },
        
        {
            title: "NixOS Package PRs for nmap, xclip, libcap-2.68, fishplugin-fzf.fish, cmake, pinentry-1.2.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nmap OR xclip OR libcap-2.68 OR fishplugin-fzf.fish OR cmake OR pinentry-1.2.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-38.json`,
        },
        
        {
            title: "NixOS Package PRs for phpstorm-with-plugins, plasma-desktop, kconfig-5.106.0, procps, wireguard-tools, mc packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (phpstorm-with-plugins OR plasma-desktop OR kconfig-5.106.0 OR procps OR wireguard-tools OR mc)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-39.json`,
        },
        
        {
            title: "NixOS Package PRs for curl-8.0.1, kdegraphics-thumbnailers, thefuck, strace, kdiff3, spice-gtk packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (curl-8.0.1 OR kdegraphics-thumbnailers OR thefuck OR strace OR kdiff3 OR spice-gtk)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-40.json`,
        },
        
        {
            title: "NixOS Package PRs for cpio, fontconfig-2.14.0, virt-manager, dbus-1.14.6, kdnssd, kio-extras packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (cpio OR fontconfig-2.14.0 OR virt-manager OR dbus-1.14.6 OR kdnssd OR kio-extras)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-41.json`,
        },
        
        {
            title: "NixOS Package PRs for qc, spectacle, keepassxc, pipewire, bind-9.18.14, bcache-tools packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (qc OR spectacle OR keepassxc OR pipewire OR bind-9.18.14 OR bcache-tools)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-42.json`,
        },
        
        {
            title: "NixOS Package PRs for bind-9.18.14, tmux, kwayland-5.106.0, fwupd, kinfocenter, onlyoffice-desktopeditors packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (bind-9.18.14 OR tmux OR kwayland-5.106.0 OR fwupd OR kinfocenter OR onlyoffice-desktopeditors)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-43.json`,
        },
        
        {
            title: "NixOS Package PRs for loganalyzer, xdg-user-dirs, NetworkManager-fortisslvpn-gnome, ncurses-6.4, perl-5.36.0, polkit-kde-agent-1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (loganalyzer OR xdg-user-dirs OR NetworkManager-fortisslvpn-gnome OR ncurses-6.4 OR perl-5.36.0 OR polkit-kde-agent-1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-44.json`,
        },
        
        {
            title: "NixOS Package PRs for xf86-input-evdev, findutils-4.9.0, nixos, kwalletmanager, glibc-locales-2.37, rsync packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xf86-input-evdev OR findutils-4.9.0 OR nixos OR kwalletmanager OR glibc-locales-2.37 OR rsync)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-45.json`,
        },
        
        {
            title: "NixOS Package PRs for man-db-2.11.2, mtools, gparted, pcsclite-with-polkit-1.9.5, wget, qtcreator packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (man-db-2.11.2 OR mtools OR gparted OR pcsclite-with-polkit-1.9.5 OR wget OR qtcreator)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-46.json`,
        },
        
        {
            title: "NixOS Package PRs for htop, shadow-4.13, nix-bash-completions, threadweaver, okular, docker packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (htop OR shadow-4.13 OR nix-bash-completions OR threadweaver OR okular OR docker)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-47.json`,
        },
        
        {
            title: "NixOS Package PRs for iceauth, python3.10-yubikey-manager, nvidia-x11-530.41.03-6.1.29, nixos, milou, libcap-2.68 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (iceauth OR python3.10-yubikey-manager OR nvidia-x11-530.41.03-6.1.29 OR nixos OR milou OR libcap-2.68)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-48.json`,
        },
        
        {
            title: "NixOS Package PRs for kde-inotify-survey, xrandr, gzip-1.12, spice-gtk-0.42, gnumake-4.4.1, attr-2.5.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kde-inotify-survey OR xrandr OR gzip-1.12 OR spice-gtk-0.42 OR gnumake-4.4.1 OR attr-2.5.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-49.json`,
        },
        
        {
            title: "NixOS Package PRs for kde-gtk-config, NetworkManager-l2tp-gnome, inetutils, networkmanager-1.42.6, nvidia-settings, gh packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kde-gtk-config OR NetworkManager-l2tp-gnome OR inetutils OR networkmanager-1.42.6 OR nvidia-settings OR gh)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-50.json`,
        },
        
        {
            title: "NixOS Package PRs for fwupd-1.8.15, plasma-workspace-wallpapers, google-chrome, kactivitymanagerd, gawk-5.2.1, gcc-wrapper-12.2.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fwupd-1.8.15 OR plasma-workspace-wallpapers OR google-chrome OR kactivitymanagerd OR gawk-5.2.1 OR gcc-wrapper-12.2.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-51.json`,
        },
        
        {
            title: "NixOS Package PRs for plasma-systemmonitor, networkmanager-1.42.6, ark, cups-pk-helper, clion-with-plugins, xrdb packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (plasma-systemmonitor OR networkmanager-1.42.6 OR ark OR cups-pk-helper OR clion-with-plugins OR xrdb)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-52.json`,
        },
        
        {
            title: "NixOS Package PRs for gnused-4.9, sddm, nano, agenix, e2fsprogs-1.46.6, breeze-gtk packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gnused-4.9 OR sddm OR nano OR agenix OR e2fsprogs-1.46.6 OR breeze-gtk)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-53.json`,
        },
        
        {
            title: "NixOS Package PRs for ksnip, NetworkManager-openvpn, nixos, nixos-build, nextcloud-client, vpnc-unstable-2021-11 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (ksnip OR NetworkManager-openvpn OR nixos OR nixos-build OR nextcloud-client OR vpnc-unstable-2021-11)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-54.json`,
        },
        
        {
            title: "NixOS Package PRs for NetworkManager-vpnc, jq-1.6, kaccounts-providers, pinentry-1.2.1, openobex, pipewire-0.3.71 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (NetworkManager-vpnc OR jq-1.6 OR kaccounts-providers OR pinentry-1.2.1 OR openobex OR pipewire-0.3.71)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-55.json`,
        },
        
        {
            title: "NixOS Package PRs for phonon-backend-vlc, fzf, kdeplasma-addons, upower, bluez, obexftp packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (phonon-backend-vlc OR fzf OR kdeplasma-addons OR upower OR bluez OR obexftp)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-56.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos, coreutils-full-9.1, pcsclite-with-polkit-1.9.5, alsa-utils, NetworkManager-openconnect, xsetroot packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos OR coreutils-full-9.1 OR pcsclite-with-polkit-1.9.5 OR alsa-utils OR NetworkManager-openconnect OR xsetroot)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-57.json`,
        },
        
        {
            title: "NixOS Package PRs for kfind, pipewire-0.3.71, kwayland-integration, qownnotes, iptables-1.8.9, xprop packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kfind OR pipewire-0.3.71 OR kwayland-integration OR qownnotes OR iptables-1.8.9 OR xprop)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-58.json`,
        },
        
        {
            title: "NixOS Package PRs for rtkit, gnumake-4.4.1, kgamma5, dconf, kdeconnect-kde, systemd-253.3 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (rtkit OR gnumake-4.4.1 OR kgamma5 OR dconf OR kdeconnect-kde OR systemd-253.3)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-59.json`,
        },
        
        {
            title: "NixOS Package PRs for dbus-1.14.6, qemu, fish-3.6.1, xauth, xz-5.4.3, jq-1.6 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (dbus-1.14.6 OR qemu OR fish-3.6.1 OR xauth OR xz-5.4.3 OR jq-1.6)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-60.json`,
        },
        
        {
            title: "NixOS Package PRs for sound-theme-freedesktop, tmux-3.3a, ncdu, kmail-23.04.1, filelight, acl-2.3.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (sound-theme-freedesktop OR tmux-3.3a OR ncdu OR kmail-23.04.1 OR filelight OR acl-2.3.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-61.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos, NetworkManager-sstp-gnome-unstable-2023-03, net-tools, yubico-pam, neovim, attr-2.5.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos OR NetworkManager-sstp-gnome-unstable-2023-03 OR net-tools OR yubico-pam OR neovim OR attr-2.5.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-62.json`,
        },
        
        {
            title: "NixOS Package PRs for python3.10-magic-wormhole packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (python3.10-magic-wormhole)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-63.json`,
        },
        
];