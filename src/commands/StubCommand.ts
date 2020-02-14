import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
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
