# Ember Pirate
[![CircleCI](https://circleci.com/gh/Serabe/ember-pirate.svg?style=svg)](https://circleci.com/gh/Serabe/ember-pirate)

This is quite likely t' only Ember CLI addon that can work even if ye don't
add it t' yer dependencies.

Ember Pirate provides an `arr` helper that accepts as many positional
parameters as ye want and returns a collection with them all.

# Installation

~~Ember Pirate can work even if ye do not declare it as a dependency.~~

## Normal Installation

`ember install ember-pirate`

## Pirate Installation

~~`ember generate helper arr`~~

## Using Ember Twiddle

~~Do ye want to use Ember Pirate in yer twiddles but support for addons is not
available? Good news! Ember Pirate can be used easily thar too.~~

~~Go t' Ember Twiddle, click `File > Add... > Helper` and change the path t'
`helpers/arr.js` when prompted.~~

# How to use it

```hbs
{{#with (arr "Me" "Second" "grog") as |collection|}}
  {{collection.firstObject}} love {{collection.lastObject}}
{{/with}}
```

Produces:

```
Me love grog
```
