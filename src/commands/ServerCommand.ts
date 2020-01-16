import Log from "../Log";
import Command, { Option } from "../Command";
import {} from "discord.js";
import Server from "../Server";

export default class ServerCommand extends Command {
    name: string = 'server';
    signature = '[set|get] [_|id]';
    description: string = 'Change the currently active server';
    options: Option[] = [];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    handle() {
        if (!['get', 'set'].includes(this.args[0])) {
            this.help();
            return;
        }

        if (this.args[0] === 'set') {
            Server.switch(this.args[1]);
        }

        if (this.args[0] === 'get') {
            Server.get();
        }
    }
}
