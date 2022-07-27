/**
 * @packageDocumentation
 *  
 * A simple command line arg parser
 * 
 * The constructor takes an array of config options describing the supported command line options and positional args.
 * 
 * Example:
 * ```
 * const argParser = new ArgParser(
 * [
 *  {
 *    name: "someOptionNameHere",
 *    shortName: "s",
 *    description: "This is a named option" 
 *  },
 *  {
 *    name: "someFlag",
 *    isFlag: true,
 *    description: "this will have a value of 'true' if present"
 *  },
 *  {
 *    arg: "this is a positional arg"
 *  }
 * ]
 * )
 * 
 * const parsedArgs = argParser.parse(process.argv);
 * 
 * if (parsedArgs.options.someOptionNameHere == "123") {
 *   ...
 * }
 * ```
 */

export interface CmdGenericArg {
    description?: string;
}

export class CmdPositionalArg implements CmdGenericArg {
    public arg: string = "";
    public description?: string;
}

export class CmdOption implements CmdGenericArg {
    public name: string = "";
    public shortName?: string;
    public description?: string;
    public isFlag?: boolean = false;
}

export class ArgParser {
    // placeholder until parse() is called with actual command args
    public commandName: string = "<command>";
    public positionalArgs: CmdPositionalArg[] = [];
    public optionNameMap: { [key: string]: CmdOption } = {};
    public optionShortNameMap: { [key: string]: CmdOption } = {};
    constructor(
        public supportedOptions: (CmdOption | CmdPositionalArg)[],
        public usageHeader?: String,
    ) {
        supportedOptions.unshift({
            name: 'help',
            shortName: 'h',
            description: 'Show usage',
            isFlag: true
        });
        for (let option of supportedOptions) {
            if ('name' in option) {
                this.optionNameMap[option.name] = option;
                if (option.shortName) {
                    this.optionShortNameMap[option.shortName] = option;
                }
            } else {
                this.positionalArgs.push(option);
            }
        }
    }

    help() {
        if (this.usageHeader) {
            console.log(this.usageHeader);
        }

        // This shows absolute paths and is ugly:
        // let usageText = `Usage: ${this.commandName}`;
        let usageText = `Usage: npx yerb`;

        let hasOptions = false;
        if (Object.keys(this.optionNameMap).length) {
            hasOptions = true;

            usageText += ' [options] ';
        }

        usageText += this.positionalArgs.map(a => `[${a.arg}]`).join(' ');

        console.log(usageText);

        if (hasOptions) {
            const argTextAlign = 30;

            console.log('');
            console.log(`Options: `);
            for (let optionName in this.optionNameMap) {
                const option = this.optionNameMap[optionName];
                let optionText = `--${optionName}`;
                if (option.shortName) {
                    optionText += `, -${option.shortName}`;
                }

                const fillSpaces = argTextAlign - optionText.length;
                optionText += new Array(fillSpaces).fill(' ').join('');

                optionText += `${option.description}`;
                console.log(optionText);
            }

        }
    }

    parse(argv: string[]) {
        const results: any = {
            options: {},
            args: [],
        };
        this.commandName = argv.slice(0, 2).join(' ');

        const argIterator = argv.slice(2).values();
        for (let arg of argIterator) {
            const argRegex = /^(--?.+)$/;
            const argMatch = arg.match(argRegex);
            if (!argMatch) {
                results.args.push(arg);
                continue;
            }
            let argName = argMatch[1];
            if (argName.startsWith("--")) {
                argName = argName.substring(2);
            } else if (argName.startsWith("-")) {
                argName = argName.substring(1);
                if (argName in this.optionShortNameMap) {
                    argName = this.optionShortNameMap[argName].name;
                } else {
                    this.help();
                    throw new Error(`Unsupported option: ${arg}`)
                }
            }

            if (argName in this.optionNameMap) {
                const option = this.optionNameMap[argName];
                if (option.isFlag) {
                    results.options[argName] = true;
                } else {
                    const argValue = argIterator.next().value;
                    results.options[argName] = argValue;
                }
            } else {
                this.help();
                throw new Error(`Unsupported option: ${arg}`)
            }
        }

        return results;
    }
}
