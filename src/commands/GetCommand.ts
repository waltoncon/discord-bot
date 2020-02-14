import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";

export default class StubCommand extends Command {
    name: string = 'get';
    signature = '<key>';
    description: string = 'Get the value of an environment variable';
    options: Option[] = [];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    handle() {
        if (this.args.length !== 1) {
            this.help();
            return;
        }

        Log.line(process.env[this.args[0]]);
    }
}
