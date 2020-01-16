import Command, { Option } from "../Command";
export default class SayCommand extends Command {
    name: string;
    description: string;
    options: Option[];
    constructor(input: any, props: any);
    handle(): Promise<void>;
}
