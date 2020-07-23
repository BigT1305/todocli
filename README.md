todocli
=======

A basic CLI tool written in NodeJS.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/BigT1305/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/0.0.0 win32-x64 node-v12.18.1
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add`](#todocli-add)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli remove`](#todocli-remove)
* [`todocli show`](#todocli-show)
* [`todocli update`](#todocli-update)

## `todocli add`

Adds a new todo item

```
USAGE
  $ todocli add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
  Adds a new todo item to the list
```

_See code: [src\commands\add.js](https://github.com/BigT1305/todocli/blob/v0.0.0/src\commands\add.js)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_

## `todocli remove`

Describe the command here

```
USAGE
  $ todocli remove

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\remove.js](https://github.com/BigT1305/todocli/blob/v0.0.0/src\commands\remove.js)_

## `todocli show`

Shows exisitng tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
  Shows all tasks sorted by their ids
```

_See code: [src\commands\show.js](https://github.com/BigT1305/todocli/blob/v0.0.0/src\commands\show.js)_

## `todocli update`

Marks a task as done

```
USAGE
  $ todocli update

OPTIONS
  -n, --id=id  task id

DESCRIPTION
  ...
  Marks a task as done
```

_See code: [src\commands\update.js](https://github.com/BigT1305/todocli/blob/v0.0.0/src\commands\update.js)_
<!-- commandsstop -->
