import { Client } from "discord.js";
import Log from "./Log";

export interface Option {
    name?: string,
    long?: string,
    short?: string,
    args?: boolean
    value?: boolean
}

interface Params {
    [key: string]: any,
}

export default class Command {
    name:string = null;
    signature:string = null;
    args: string[] = [];
    params: Params = {};
    options = [];
    client: Client;

    constructor(input, props) {
        if (input === undefined) {
            return;
        }

        this.client = props.client;
    }

    static getName() {
        console.log('getting name')
        // return this.signature;
    }

    parse(input) {
        if (input === undefined) {
            return;
        }
        const parts = input.match(/(?:[^\s"]+|"[^"]*")+/g);
        parts.shift();

        for (let [index, part] of parts.entries()) {
            if (['--help', '-h'].includes(part.toLowerCase())) {
                this.help();
                return;
            }

            if (part === undefined) {
                continue;
            }

            // Get the opt for this part if this part is an opt
            const opt = this.options.filter(o => {
                return part.split('=')[0] === `--${o.long}`
                    || part.split('=')[0] === `-${o.short}`;
            })[0];

            // This part is not an opt, add it to the args list and continue
            if (opt === undefined) {
                this.args.push(part.replace(/^['"]|['"]$/g, ''));
                continue;
            }

            let val = true;
            if (opt.args) {
                val = parts[index + 1].replace(/^['"]|['"]$/g, '');
                parts[index + 1] = undefined;
            }

            this.params[opt.long || opt.short] = val;
        }
    }

    help() {
        Log.line(`${this.name}\n${this.signature || ''}`)
    }
}
