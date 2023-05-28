#!/usr/bin/env php
<?php
/**
 * Generate the RSS.ts file from the installed packages
 */

// List all packages
$files = [];
exec('nix-store -q --references /var/run/current-system/sw', $files);

$searchItems = [];

foreach ($files as $file) {
    $basename = basename($file);
    $parts = explode('-', $basename);

    if (count($parts) < 3 || $parts === null) {
        continue;
    }

    array_shift($parts); // Remove the first element
    array_pop($parts); // Remove the last element

    $package = implode('-', $parts);

//    {
//        title: "NixOS Packages PRs smartgithg",
//        query: "NixOS/nixpkgs is:pr is:open in:title smartgithg",
//        TYPE: "ISSUE",
//        link: `${BASE_URL}/nixos-smartgithg.json`,
//    },
    $searchItems[] = '
    {
        title: "NixOS Package PRs for '.$package.'",
        query: "NixOS/nixpkgs is:pr is:open in:title '.$package.'",
        TYPE: "ISSUE",
        link: `${BASE_URL}/nixos-'.$package.'.json`,
    },
    ';
}

print 'Found '.count($searchItems).' packages'.PHP_EOL;

$content = file_get_contents(__DIR__.'/src/RSS.template.ts');
$content = str_replace('X_SEARCH_ITEMS_X', implode('', $searchItems), $content);

print 'Writing src/RSS.ts'.PHP_EOL;
file_put_contents(__DIR__.'/src/RSS.ts', $content);
