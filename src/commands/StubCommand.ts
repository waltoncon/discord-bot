import Log from "../Log";
import Command, { Option } from "../Command";
import {  } from "discord.js";

export default class StubCommand extends Command {
    name: string = null;
    description: string = 'Description';
    options: Option[] = [

    ];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    handle() {
        Log.line('Example Command');
    }
}
