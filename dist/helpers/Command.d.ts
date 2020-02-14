import { Client } from "discord.js";
export interface Option {
    name?: string;
    long?: string;
    short?: string;
    args?: boolean;
    value?: boolean;
}
interface Params {
    [key: string]: any;
}
export default class Command {
    name: string;
    signature: string;
    args: string[];
    params: Params;
    options: any[];
    client: Client;
    constructor(input: any, props: any);
    static getName(): void;
    parse(input: any): void;
    help(): void;
}
export {};
