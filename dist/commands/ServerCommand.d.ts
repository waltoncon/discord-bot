import Command, { Option } from "../helpers/Command";
export default class ServerCommand extends Command {
    name: string;
    signature: string;
    description: string;
    options: Option[];
    constructor(input: any, props: any);
    handle(): void;
}
