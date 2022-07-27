[yerb](../README.md) / [Exports](../modules.md) / lib/util/logging

# Module: lib/util/logging

## Console logging and colorful output functions

## Logging

Example:
```
// Create a console logger
const myLogger = new ConsoleLogger()

// set log level
myLogger.level = LogLevel.INFO

// log output
myLogger.info("Info here")
myLogger.warn("Warning here")
myLogger.debug("Debug won't be rendered at INFO level")
```

## Colors

By importing this module, color attributes will be available on the String class.
To set the color of a string, simply reference the attribute of the color, e.g:

```
console.log("scary stuff".red)
```

There is also a `color()` method that accepts a [AnsiColor](../enums/lib_util_logging.AnsiColor.md) argument:

```
console.log("cool stuff".color(AnsiColor.BLUE))
```

Available colors:
- red
- green
- yellow
- blue
- white

## Table of contents

### Enumerations

- [AnsiColor](../enums/lib_util_logging.AnsiColor.md)
- [LogLevel](../enums/lib_util_logging.LogLevel.md)

### Classes

- [ConsoleLogger](../classes/lib_util_logging.ConsoleLogger.md)

### Variables

- [logger](lib_util_logging.md#logger)

## Variables

### logger

• `Const` **logger**: [`ConsoleLogger`](../classes/lib_util_logging.ConsoleLogger.md)

Global logger used internally by yerb framework

#### Defined in

lib/util/logging.ts:187
