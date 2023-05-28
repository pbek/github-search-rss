#!/usr/bin/env php
<?php
/**
 * Generate the RSS.ts file from the installed packages
 */

// List all packages
$files = [];
exec('nix-store -q --references /var/run/current-system/sw', $files);

$packagesPerItem = 6;
$searchItems = [];
$packages = [];
$subPackages = [];
$packageCount = 0;
$subCount = 0;
$fileCount = count($files);
$packageBlacklist = ['systemd'];

foreach ($files as $fileKey => $file) {
    $basename = basename($file);
    $parts = explode('-', $basename);

    if (count($parts) < 3 || $parts === null) {
        continue;
    }

    array_shift($parts); // Remove the first element
    array_pop($parts); // Remove the last element

    $package = implode('-', $parts);

    // Check if the package is blacklisted
    if (in_array($package, $packageBlacklist)) {
        continue;
    }

    /*
    {
        title: "NixOS Packages PRs smartgithg",
        query: "NixOS/nixpkgs is:pr is:open in:title smartgithg",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-smartgithg.json`,
    },
    */
//    $searchItems[] = '
//    {
//        title: "NixOS Package PRs for '.$package.'",
//        query: "repo:NixOS/nixpkgs is:pr is:open in:title '.$package.'",
//        TYPE: "ISSUE",
//        link: `${BASE_URL}/nixos-'.$package.'.json`,
//    },
//    ';

    $packageCount++;
    $subCount++;
    $subPackages[] = $package;
    $packages[] = $package;

    // Create a new item if we have enough packages or if we are at the end of the list
    if ($subCount === $packagesPerItem || $fileKey == ($fileCount - 1)) {
        $searchItems[] = '
        {
            title: "NixOS Package PRs for '.implode(', ', $subPackages).' packages",
            query: "repo:NixOS/nixpkgs is:pr is:open in:title ('.implode(' OR ', $subPackages).')",
            TYPE: "ISSUE",
            link: `${BASE_URL}/nixos-packages-'.count($searchItems).'.json`,
        },
        ';

        $subPackages = [];
        $subCount = 0;
    }
}

print 'Found '.$packageCount.' packages'.PHP_EOL;

//$searchItems[] = '
//    {
//        title: "NixOS Package PRs for '.$packageCount.' packages",
//        query: "repo:NixOS/nixpkgs is:pr is:open in:title ('.implode(' OR ', $packages).')",
//        TYPE: "ISSUE",
//        link: `${BASE_URL}/nixos-packages.json`,
//    },
//    ';

$content = file_get_contents(__DIR__.'/src/RSS.template.ts');
$content = str_replace('X_SEARCH_ITEMS_X', implode('', $searchItems), $content);

print 'Writing src/RSS.ts'.PHP_EOL;
file_put_contents(__DIR__.'/src/RSS.ts', $content);
