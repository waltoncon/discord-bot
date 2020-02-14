import Command, { Option } from "../helpers/Command";
export default class StubCommand extends Command {
    name: string;
    description: string;
    options: Option[];
    constructor(input: any, props: any);
    handle(): Promise<void>;
}
