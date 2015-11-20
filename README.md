# Ember Pirate

This is quite likely t' only Ember CLI addon that can work even if you don't
add it t' your dependencies.

Ember Pirate provides an `arr` helper that accepts as many positional
parameters as you want and returns a collection with them all.

# Installation

Ember Pirate can work even if you do not declare it as a dependency.

## Normal Installation

`ember install ember-pirate`

## Pirate Installation

`ember generate helper arr`

## Using Ember Twiddle

Do you want to use Ember Pirate in your twiddles but support for addons is not
available? Good news! Ember Pirate can be used easily thar too.

Go to Ember Twiddle, click `File > Add... > Helper` and change the path t'
`helpers/arr.js` when prompted.

# How to use it

```hbs
{{#with (arr "First" "Second" "Last") as |collection|}}
  {{collection.firstObject}} {{collection.lastObject}}
{{/with}}
```

Produces:

```
First Last
```
