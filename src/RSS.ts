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
            title: "NixOS Package PRs for acl-2.3.1, noseyparker, calibre, perl, kinit, khelpcenter packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (acl-2.3.1 OR noseyparker OR calibre OR perl OR kinit OR khelpcenter)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-9.json`,
        },
        
        {
            title: "NixOS Package PRs for frameworkintegration-5.106.0, kdecoration, breeze-qt5-5.27.5, plasma-integration, kdbusaddons-5.106.0, nix-2.13.3 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (frameworkintegration-5.106.0 OR kdecoration OR breeze-qt5-5.27.5 OR plasma-integration OR kdbusaddons-5.106.0 OR nix-2.13.3)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-10.json`,
        },
        
        {
            title: "NixOS Package PRs for nix, wireguard-tools-1.0.20210914, curl-8.0.1, f2fs-tools, attic, bash-interactive-5.2-p15 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nix OR wireguard-tools-1.0.20210914 OR curl-8.0.1 OR f2fs-tools OR attic OR bash-interactive-5.2-p15)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-11.json`,
        },
        
        {
            title: "NixOS Package PRs for mkpasswd, sops, knotifyconfig, kdepim-runtime, ffmpegthumbs, libressl-3.7.2 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (mkpasswd OR sops OR knotifyconfig OR kdepim-runtime OR ffmpegthumbs OR libressl-3.7.2)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-12.json`,
        },
        
        {
            title: "NixOS Package PRs for cryptsetup-2.6.1, gnupg, kfilemetadata-5.106.0, kidletime-5.106.0, baloo, kxmlrpcclient packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (cryptsetup-2.6.1 OR gnupg OR kfilemetadata-5.106.0 OR kidletime-5.106.0 OR baloo OR kxmlrpcclient)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-13.json`,
        },
        
        {
            title: "NixOS Package PRs for libkscreen, kscreenlocker, libksysguard-5.27.5, kpeople-5.106.0, polkit, modemmanager packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libkscreen OR kscreenlocker OR libksysguard-5.27.5 OR kpeople-5.106.0 OR polkit OR modemmanager)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-14.json`,
        },
        
        {
            title: "NixOS Package PRs for openresolv, gnused, xset, gawk, xdg-utils-unstable-2020-10, openconnect packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (openresolv OR gnused OR xset OR gawk OR xdg-utils-unstable-2020-10 OR openconnect)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-15.json`,
        },
        
        {
            title: "NixOS Package PRs for iputils, networkmanager, qtvirtualkeyboard, kwin, kdesu, plasma-workspace packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (iputils OR networkmanager OR qtvirtualkeyboard OR kwin OR kdesu OR plasma-workspace)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-16.json`,
        },
        
        {
            title: "NixOS Package PRs for systemsettings-5.27.5, time, gdb, which, smartgithg, xlsclients packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (systemsettings-5.27.5 OR time OR gdb OR which OR smartgithg OR xlsclients)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-17.json`,
        },
        
        {
            title: "NixOS Package PRs for coreutils-full, bluez-qt-5.106.0, powerdevil, gawk-5.2.1, dosfstools, glibc-2.37-8 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (coreutils-full OR bluez-qt-5.106.0 OR powerdevil OR gawk-5.2.1 OR dosfstools OR glibc-2.37-8)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-18.json`,
        },
        
        {
            title: "NixOS Package PRs for shadow, util-linux-2.38.1, e2fsprogs-1.46.6, mdadm, udisks, man-db packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (shadow OR util-linux-2.38.1 OR e2fsprogs-1.46.6 OR mdadm OR udisks OR man-db)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-19.json`,
        },
        
        {
            title: "NixOS Package PRs for dolphin, dolphin-plugins, cryptsetup-2.6.1, libkipi, kipi-plugins, gwenview packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (dolphin OR dolphin-plugins OR cryptsetup-2.6.1 OR libkipi OR kipi-plugins OR gwenview)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-20.json`,
        },
        
        {
            title: "NixOS Package PRs for btop, print-manager, wireplumber, konsole, plasma-pa, nixos packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (btop OR print-manager OR wireplumber OR konsole OR plasma-pa OR nixos)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-21.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos-generate, iproute2, openssh, polkit-122, lvm2-2.03.21, fuse packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos-generate OR iproute2 OR openssh OR polkit-122 OR lvm2-2.03.21 OR fuse)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-22.json`,
        },
        
        {
            title: "NixOS Package PRs for libvirt, bzip2-1.0.8, xorg-server, elisa, zstd-1.5.5, power-profiles-daemon packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libvirt OR bzip2-1.0.8 OR xorg-server OR elisa OR zstd-1.5.5 OR power-profiles-daemon)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-23.json`,
        },
        
        {
            title: "NixOS Package PRs for git-2.40.1, git, plasma-disks-5.27.5, findutils, util-linux-2.38.1, xdg packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (git-2.40.1 OR git OR plasma-disks-5.27.5 OR findutils OR util-linux-2.38.1 OR xdg)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-24.json`,
        },
        
        {
            title: "NixOS Package PRs for gcc-wrapper-12.2.0, yakuake, oxygen-sounds, akonadiconsole, shadow-4.13, fuse packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gcc-wrapper-12.2.0 OR yakuake OR oxygen-sounds OR akonadiconsole OR shadow-4.13 OR fuse)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-25.json`,
        },
        
        {
            title: "NixOS Package PRs for gcc-wrapper, cryfs, plasma-vault, exfatprogs, pam_u2f, diffutils packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gcc-wrapper OR cryfs OR plasma-vault OR exfatprogs OR pam_u2f OR diffutils)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-26.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos, attr-2.5.1, gnugrep-3.7, texinfo-interactive, restic, kio-admin packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos OR attr-2.5.1 OR gnugrep-3.7 OR texinfo-interactive OR restic OR kio-admin)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-27.json`,
        },
        
        {
            title: "NixOS Package PRs for goland-with-plugins, kate, oxygen-5.27.5, lvm2-2.03.21, setxkbmap, khotkeys-5.27.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (goland-with-plugins OR kate OR oxygen-5.27.5 OR lvm2-2.03.21 OR setxkbmap OR khotkeys-5.27.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-28.json`,
        },
        
        {
            title: "NixOS Package PRs for kmenuedit, bluedevil, nano-7.2, ksystemstats, bind-9.18.14, nixos-manual packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kmenuedit OR bluedevil OR nano-7.2 OR ksystemstats OR bind-9.18.14 OR nixos-manual)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-29.json`,
        },
        
        {
            title: "NixOS Package PRs for libressl-3.7.2, aha, plasma-browser-integration, gnumake, atop, kscreen packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libressl-3.7.2 OR aha OR plasma-browser-integration OR gnumake OR atop OR kscreen)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-30.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos-icons-2021-02, kwallet-pam, NetworkManager-iodine-gnome-unstable-2019-11, nix-2.13.3, kimageformats, xinput packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos-icons-2021-02 OR kwallet-pam OR NetworkManager-iodine-gnome-unstable-2019-11 OR nix-2.13.3 OR kimageformats OR xinput)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-31.json`,
        },
        
        {
            title: "NixOS Package PRs for wireplumber-0.4.14, xz-5.4.3, docker-20.10.23, less, ranger, linux-pam-1.5.2 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (wireplumber-0.4.14 OR xz-5.4.3 OR docker-20.10.23 OR less OR ranger OR linux-pam-1.5.2)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-32.json`,
        },
        
        {
            title: "NixOS Package PRs for xterm, plasma-nm, diffutils-3.9, wpa_supplicant, fish, command-not packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xterm OR plasma-nm OR diffutils-3.9 OR wpa_supplicant OR fish OR command-not)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-33.json`,
        },
        
        {
            title: "NixOS Package PRs for ferdium, topgrade, kwrited, ksshaskpass, udisks-2.9.4, accountsservice packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (ferdium OR topgrade OR kwrited OR ksshaskpass OR udisks-2.9.4 OR accountsservice)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-34.json`,
        },
        
        {
            title: "NixOS Package PRs for e2fsprogs-1.46.6, vscode, linux-pam-1.5.2, cups-2.4.2, pcsclite-with-polkit-1.9.5, fzf-0.40.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (e2fsprogs-1.46.6 OR vscode OR linux-pam-1.5.2 OR cups-2.4.2 OR pcsclite-with-polkit-1.9.5 OR fzf-0.40.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-35.json`,
        },
        
        {
            title: "NixOS Package PRs for kontact, sniffnet, gzip-1.12, kleopatra, bash-interactive-5.2-p15, nixpkgs-review packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kontact OR sniffnet OR gzip-1.12 OR kleopatra OR bash-interactive-5.2-p15 OR nixpkgs-review)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-36.json`,
        },
        
        {
            title: "NixOS Package PRs for smartmontools, acl-2.3.1, kaddressbook, kmail, bash-interactive-5.2-p15, kde-cli-tools packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (smartmontools OR acl-2.3.1 OR kaddressbook OR kmail OR bash-interactive-5.2-p15 OR kde-cli-tools)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-37.json`,
        },
        
        {
            title: "NixOS Package PRs for gnutar-1.34, xf86-input-libinput, jq-1.6, libcap, nmap, xclip packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gnutar-1.34 OR xf86-input-libinput OR jq-1.6 OR libcap OR nmap OR xclip)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-38.json`,
        },
        
        {
            title: "NixOS Package PRs for libcap-2.68, fishplugin-fzf.fish, cmake, pinentry-1.2.1, phpstorm-with-plugins, plasma-desktop packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (libcap-2.68 OR fishplugin-fzf.fish OR cmake OR pinentry-1.2.1 OR phpstorm-with-plugins OR plasma-desktop)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-39.json`,
        },
        
        {
            title: "NixOS Package PRs for kconfig-5.106.0, procps, wireguard-tools, mc, curl-8.0.1, kdegraphics-thumbnailers packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kconfig-5.106.0 OR procps OR wireguard-tools OR mc OR curl-8.0.1 OR kdegraphics-thumbnailers)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-40.json`,
        },
        
        {
            title: "NixOS Package PRs for thefuck, strace, kdiff3, spice-gtk, cpio, fontconfig-2.14.0 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (thefuck OR strace OR kdiff3 OR spice-gtk OR cpio OR fontconfig-2.14.0)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-41.json`,
        },
        
        {
            title: "NixOS Package PRs for virt-manager, dbus-1.14.6, kdnssd, kio-extras, qc, spectacle packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (virt-manager OR dbus-1.14.6 OR kdnssd OR kio-extras OR qc OR spectacle)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-42.json`,
        },
        
        {
            title: "NixOS Package PRs for keepassxc, pipewire, bind-9.18.14, bcache-tools, chromium, bind-9.18.14 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (keepassxc OR pipewire OR bind-9.18.14 OR bcache-tools OR chromium OR bind-9.18.14)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-43.json`,
        },
        
        {
            title: "NixOS Package PRs for tmux, kwayland-5.106.0, fwupd, kinfocenter, onlyoffice-desktopeditors, loganalyzer packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (tmux OR kwayland-5.106.0 OR fwupd OR kinfocenter OR onlyoffice-desktopeditors OR loganalyzer)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-44.json`,
        },
        
        {
            title: "NixOS Package PRs for xdg-user-dirs, NetworkManager-fortisslvpn-gnome, firefox, ncurses-6.4, perl-5.36.0, polkit-kde-agent-1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xdg-user-dirs OR NetworkManager-fortisslvpn-gnome OR firefox OR ncurses-6.4 OR perl-5.36.0 OR polkit-kde-agent-1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-45.json`,
        },
        
        {
            title: "NixOS Package PRs for xf86-input-evdev, findutils-4.9.0, nixos, kwalletmanager, glibc-locales-2.37, rsync packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (xf86-input-evdev OR findutils-4.9.0 OR nixos OR kwalletmanager OR glibc-locales-2.37 OR rsync)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-46.json`,
        },
        
        {
            title: "NixOS Package PRs for man-db-2.11.2, mtools, gparted, pcsclite-with-polkit-1.9.5, wget, qtcreator packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (man-db-2.11.2 OR mtools OR gparted OR pcsclite-with-polkit-1.9.5 OR wget OR qtcreator)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-47.json`,
        },
        
        {
            title: "NixOS Package PRs for htop, shadow-4.13, nix-bash-completions, threadweaver, okular, docker packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (htop OR shadow-4.13 OR nix-bash-completions OR threadweaver OR okular OR docker)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-48.json`,
        },
        
        {
            title: "NixOS Package PRs for iceauth, python3.10-yubikey-manager, nvidia-x11-530.41.03-6.1.29, nixos, milou, libcap-2.68 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (iceauth OR python3.10-yubikey-manager OR nvidia-x11-530.41.03-6.1.29 OR nixos OR milou OR libcap-2.68)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-49.json`,
        },
        
        {
            title: "NixOS Package PRs for kde-inotify-survey, sudo, xrandr, gzip-1.12, spice-gtk-0.42, gnumake-4.4.1 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (kde-inotify-survey OR sudo OR xrandr OR gzip-1.12 OR spice-gtk-0.42 OR gnumake-4.4.1)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-50.json`,
        },
        
        {
            title: "NixOS Package PRs for attr-2.5.1, kde-gtk-config, NetworkManager-l2tp-gnome, nix, inetutils, networkmanager-1.42.6 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (attr-2.5.1 OR kde-gtk-config OR NetworkManager-l2tp-gnome OR nix OR inetutils OR networkmanager-1.42.6)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-51.json`,
        },
        
        {
            title: "NixOS Package PRs for nvidia-settings, gh, fwupd-1.8.15, plasma-workspace-wallpapers, google-chrome, kactivitymanagerd packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nvidia-settings OR gh OR fwupd-1.8.15 OR plasma-workspace-wallpapers OR google-chrome OR kactivitymanagerd)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-52.json`,
        },
        
        {
            title: "NixOS Package PRs for gawk-5.2.1, gcc-wrapper-12.2.0, plasma-systemmonitor, networkmanager-1.42.6, ark, cups-pk-helper packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (gawk-5.2.1 OR gcc-wrapper-12.2.0 OR plasma-systemmonitor OR networkmanager-1.42.6 OR ark OR cups-pk-helper)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-53.json`,
        },
        
        {
            title: "NixOS Package PRs for clion-with-plugins, xrdb, gnused-4.9, sddm, nano, tree packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (clion-with-plugins OR xrdb OR gnused-4.9 OR sddm OR nano OR tree)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-54.json`,
        },
        
        {
            title: "NixOS Package PRs for agenix, e2fsprogs-1.46.6, breeze-gtk, ksnip, NetworkManager-openvpn, nixos packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (agenix OR e2fsprogs-1.46.6 OR breeze-gtk OR ksnip OR NetworkManager-openvpn OR nixos)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-55.json`,
        },
        
        {
            title: "NixOS Package PRs for nixos-build, nextcloud-client, vpnc-unstable-2021-11, NetworkManager-vpnc, jq-1.6, kaccounts-providers packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (nixos-build OR nextcloud-client OR vpnc-unstable-2021-11 OR NetworkManager-vpnc OR jq-1.6 OR kaccounts-providers)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-56.json`,
        },
        
        {
            title: "NixOS Package PRs for pinentry-1.2.1, openobex, pipewire-0.3.71, phonon-backend-vlc, fzf, kdeplasma-addons packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (pinentry-1.2.1 OR openobex OR pipewire-0.3.71 OR phonon-backend-vlc OR fzf OR kdeplasma-addons)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-57.json`,
        },
        
        {
            title: "NixOS Package PRs for upower, bluez, obexftp, nixos, coreutils-full-9.1, pcsclite-with-polkit-1.9.5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (upower OR bluez OR obexftp OR nixos OR coreutils-full-9.1 OR pcsclite-with-polkit-1.9.5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-58.json`,
        },
        
        {
            title: "NixOS Package PRs for alsa-utils, NetworkManager-openconnect, xsetroot, kfind, pipewire-0.3.71, kwayland-integration packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (alsa-utils OR NetworkManager-openconnect OR xsetroot OR kfind OR pipewire-0.3.71 OR kwayland-integration)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-59.json`,
        },
        
        {
            title: "NixOS Package PRs for qownnotes, iptables-1.8.9, xprop, rtkit, gnumake-4.4.1, kgamma5 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (qownnotes OR iptables-1.8.9 OR xprop OR rtkit OR gnumake-4.4.1 OR kgamma5)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-60.json`,
        },
        
        {
            title: "NixOS Package PRs for dconf, patch, kdeconnect-kde, systemd-253.3, dbus-1.14.6, qemu packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (dconf OR patch OR kdeconnect-kde OR systemd-253.3 OR dbus-1.14.6 OR qemu)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-61.json`,
        },
        
        {
            title: "NixOS Package PRs for fish-3.6.1, xauth, xz-5.4.3, jq-1.6, sound-theme-freedesktop, tmux-3.3a packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (fish-3.6.1 OR xauth OR xz-5.4.3 OR jq-1.6 OR sound-theme-freedesktop OR tmux-3.3a)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-62.json`,
        },
        
        {
            title: "NixOS Package PRs for ncdu, kmail-23.04.1, filelight, acl-2.3.1, nixos, NetworkManager-sstp-gnome-unstable-2023-03 packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (ncdu OR kmail-23.04.1 OR filelight OR acl-2.3.1 OR nixos OR NetworkManager-sstp-gnome-unstable-2023-03)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-63.json`,
        },
        
        {
            title: "NixOS Package PRs for net-tools, yubico-pam, neovim, attr-2.5.1, python3.10-magic-wormhole packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title (net-tools OR yubico-pam OR neovim OR attr-2.5.1 OR python3.10-magic-wormhole)",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-64.json`,
        },
        
];