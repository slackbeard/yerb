[yerb](../README.md) / [Exports](../modules.md) / lib/util/args

# Module: lib/util/args

A simple command line arg parser

The constructor takes an array of config options describing the supported command line options and positional args.

Example:
```
const argParser = new ArgParser(
[
 {
   name: "someOptionNameHere",
   shortName: "s",
   description: "This is a named option" 
 },
 {
   name: "someFlag",
   isFlag: true,
   description: "this will have a value of 'true' if present"
 },
 {
   arg: "this is a positional arg"
 }
]
)

const parsedArgs = argParser.parse(process.argv);

if (parsedArgs.options.someOptionNameHere == "123") {
  ...
}
```

## Table of contents

### Classes

- [ArgParser](../classes/lib_util_args.ArgParser.md)
- [CmdOption](../classes/lib_util_args.CmdOption.md)
- [CmdPositionalArg](../classes/lib_util_args.CmdPositionalArg.md)

### Interfaces

- [CmdGenericArg](../interfaces/lib_util_args.CmdGenericArg.md)
