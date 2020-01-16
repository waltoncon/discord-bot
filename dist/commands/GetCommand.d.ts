import Command, { Option } from "../Command";
export default class StubCommand extends Command {
    name: string;
    signature: string;
    description: string;
    options: Option[];
    constructor(input: any, props: any);
    handle(): void;
}
