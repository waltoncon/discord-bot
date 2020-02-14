import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
import {  } from "discord.js";

export default class StubCommand extends Command {
    name: string = 'set';
    signature = '<key> <value>';
    description: string = 'Set an environment variable for the current process';
    options: Option[] = [];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    handle() {
        if (this.args.length !== 2) {
            this.help();
            return;
        }

        process.env[this.args[0]] = this.args[1];
        Log.line(`Set "${this.args[0]}" to "${this.args[1]}"`);
    }
}
