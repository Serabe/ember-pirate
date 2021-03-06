# Ember Pirate
[![Build Status](https://travis-ci.org/Serabe/ember-pirate.svg?branch=master)](https://travis-ci.org/Serabe/ember-pirate)
[![Ember Observer Score](https://emberobserver.com/badges/ember-pirate.svg)](https://emberobserver.com/addons/ember-pirate)
[![npm version](https://badge.fury.io/js/ember-pirate.svg)](https://badge.fury.io/js/ember-pirate)
[![Code Climate](https://codeclimate.com/github/Serabe/ember-pirate/badges/gpa.svg)](https://codeclimate.com/github/Serabe/ember-pirate)
[![Dependencies](https://david-dm.org/serabe/ember-pirate.svg)](https://david-dm.org/serabe/ember-pirate)

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
