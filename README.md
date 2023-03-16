# Website Starter Template SASS

## Table of contents

- [Architecture](#architecture)
  - [Abstracts](#abstracts)
  - [Base](#base)
  - [Components](#components)
  - [Layout](#layout)
  - [Utilities](#utilities)
  - [Main](#main)
- [Acknowledgments](#acknowledgments)

## Architecture

### Abstracts

In abstracts, create the following files:

#### breakpoints.scss

Include a sass map with three generic breakpoints (I use 35em, 50em, and 65em)

#### colors.scss

Include a sass map with some primary and neutral colors

#### functions.scss

Include our function to get colors out of our colors map

#### mixins.scss

Include our media query mixin

#### sizes.scss

Include a bunch of custom sizes which work with functions.scss.

#### typography.scss

Includes a map of font-sizes, and variables related to font-family and other font-related stuff

### Base

In base, create:

#### general.scss

Includes a general style to the body tag in our project, this can always change depending on the project itself.

#### reset.scss

Includes a very basic reset and can be updated on each project.

### Components

#### buttons.scss

Include some default removed from the buttons and add some transitions and styles for two defferent data-type button (accent, outline).

#### hamburger

Include a hamburger button to reuse it in every project.

### Layout

### Utilities

In utilities, create

#### colors.scss

An @each loop to create utility classes for text and background colors based on the colors in abstracts

#### font-sizes.scss

An @each loop to create utility classes based on the font sizes map in our typography

#### sizing.scss

An @each loop to create utility classes based on sizes in abstracts
The index.scss in each folder has an @forward for every file in that folder

### Main

The main.scss has a @use for every folder, except for abstracts/

## Acknowledgments

More than grateful to these amazing people who have been helping me throughout this process and building my template based on their references:

- [Josh W Comeau](https://www.joyofreact.com/)
- [Desarrollo Útil](https://www.youtube.com/@DesarrolloUtil)
