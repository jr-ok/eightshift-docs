---
id: theme
title: Create new WordPress theme
sidebar_label: Theme Setup
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/setup/create-wp-project)

Eightshift boilerplate contains all the tools you need to start building a modern WordPress theme, using all the latest front end development tools.

[Please go here if you wish to setup a plugin instead](https://infinum.github.io/eightshift-docs/docs/plugin/).

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)

## Quick start
Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```bash
npx create-wp-project
```

Script will prompt you for theme name and local development url (used for BrowserSync) and install a new theme:

![](https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/package/setup.gif)

After the script is finished, you can activate the theme through WP Admin Dashboard.

To start developing run this command from theme's root folder:

```bash
npm start
```

## Script arguments

You can get a list of available script arguments by running:

```bash
npx create-wp-project --help
```
