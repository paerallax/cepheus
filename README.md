# Cepheus

[![build status](https://secure.travis-ci.org/escapace/cepheus.png)](https://travis-ci.org/escapace/cepheus)
[![Greenkeeper badge](https://badges.greenkeeper.io/escapace/cepheus.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/badge/license-Mozilla%20Public%20License%20Version%202.0-blue.svg)]()

#### WIP
**Cepheus — functional CSS utility class generator**

## Table of Contents

-   [Overview](#overview)
    -   [Functional CSS](#functional-css)
    -   [Semantics](#semantics)
-   [Cepheus](#cepheus)
    -   [Features](#features)
    -   [Usage Example](#usage-example)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
-   [Contributing](#contributing)
-   [License](#license)

## Overview
Cepheus is a functional CSS utility class generator. It provides sensible spacing / typography defaults, a built-in debug grid, as well as a suit of encapsulated modules that adhere to the principles of functional, atomic CSS.

### Functional CSS

We found ourselves writing the same piece of CSS over and over. Handwriting it is very time-consuming, repetitive and results in lots of duplication. “Zombie code” is plenty and nobody risks removing it. This results in much more CSS shipped than we really need.   

The idea of functional CSS deals with all of these issues.  It ensures that the UI is consistent, totally predictable and free of side-effects.
- [Functional Programming, CSS, and your sanity](http://jon.gold/2015/07/functional-css/)  
- [CSS and Scalability](http://mrmrs.github.io/writing/2016/03/24/scalable-css/)
- [Rationalizing Functional CSS](https://marcelosomers.com/writing/rationalizing-functional-css/)

### Semantics

After reading the class names applied to an element, it becomes immediately obvious what it looks like. This reduces development time significantly. Maintenance becomes much easier. Each class takes very limited responsibility so the risk of mutation — changing a property somewhere and breaking code elsewhere — is eliminated.

## Cepheus

Cepheus is inspired by these ideas. It utilizes modules from tachyons.io. These 53 modules cover the whole spectrum: typography to spacing, theming to elements. Cepheus provides the base building blocks which can be used to create modular, reusable UI components and layouts.

### Usage Example

![Button created with Cepheus](https://i.imgur.com/qqlx3ZV.png)

Applying these principles, we construct a simple button using Cepheus utility classes

``` html
<div class="w4 h2 br4 bg-light-red flex justify-center items-center">
  <div class="white">Button</div>
</div>
```

| Class Name          | CSS property           | Value         |
|---------------------|:----------------------:| -------------:|
| **w4**              | width                  | 8rem          |
| **h3**              | height                 | 3rem          |
| **br3**             | border-radius          | 10.75rem      |
| **bg-blue**         | background-color       | #408BC9       |
| **flex**            | display                | flex          |
| **justify-center**  | justify-content        | center        |
| **items-center**    | align-items            | center        |
| **white**           | color                  | white         |

### Features

- Mobile-first architecture
- Consistent composition of spacing and typography rules
- Default baseline rhythm and flexible debug options
- Built-in debug grid
- Flexibility though Sass variables
- Partial import options
- Minimal code


## Installation

Install Cepheus
``` bash
$ npm install -S cepheus 
```

And include it in your main Sass file
``` sass
@import '/node_modules/cepheus/sass/cepheus';
```

## Configuration
~

## Contributing
Please read our [contributing](https://github.com/paerallax/contributing) guideline.

## License
[MPL](https://www.mozilla.org/en-US/MPL/2.0/)
