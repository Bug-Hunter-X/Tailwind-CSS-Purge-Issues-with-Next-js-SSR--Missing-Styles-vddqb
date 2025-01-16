# Tailwind CSS Purge Issues with Next.js SSR: Missing Styles

This repository demonstrates a common issue encountered when using Tailwind CSS with Next.js (or similar frameworks using server-side rendering): missing styles due to incorrect purging by PurgeCSS.

## Problem

Styles defined in components are not applied in the rendered HTML due to PurgeCSS not correctly identifying and including them during the build process. This leads to missing visual elements or unexpected layout.

## Solution

The solution involves correctly configuring PurgeCSS to include all necessary styles, typically by adjusting the `content` option in your Tailwind configuration to point to all relevant source files.  It's also crucial to ensure that components are correctly rendered on the server to allow PurgeCSS to properly analyze their styles.