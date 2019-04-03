[![Maintainability](https://api.codeclimate.com/v1/badges/5467a49bf3a8894a2590/maintainability)](https://codeclimate.com/github/NimfaMargo/gendiff_hexlet/maintainability)

[![Build Status](https://travis-ci.com/NimfaMargo/gendiff_hexlet.svg?branch=master)](https://travis-ci.com/NimfaMargo/gendiff_hexlet)

## Diff calculator
An utility, that compares two configuration files and shows the difference.

#### Useful features:
- Support multiple formats.
- Generate report in plain text, pretty and JSON formats.

## Install
You need npm. It is bundled with [node](https://nodejs.org/en/download/)

```
$ npm i -g diff_calculator_margo
```                               

## Usage
```
Usage:
$ gendiff --format[type] <first-file> <second-file>

Types:
 - recursive
 - plain
 - json

Options:

  -V, --version        output the version number
  -f, --format [type]  output format (default: "recursive")
  -h, --help           output usage information
```   

## Example
```   
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```   

## Uninstall
```
$ npm uninstall -g diff_calculator_margo
```    
