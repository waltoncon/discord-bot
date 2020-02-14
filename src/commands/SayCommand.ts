import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
import { TextChannel } from "discord.js";

export default class SayCommand extends Command {
    public name: string = 'say';
    description: string = 'Get the bot to say something';
    options: Option[] = [
        { long: 'id', args: true },
        { long: 'tts' },
    ];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    async handle() {
        const id = this.params.id || process.env.TEXT_PRIMARY_ID;

        if (id === undefined) {
            Log.error('You need to set TEXT_PRIMARY_ID in your .env or supply an ID');
            return;
        }

        // @ts-ignore
        const channel: TextChannel = this.client.channels.get(id);

        if (channel === undefined) {
            Log.error(`Can't find the channel with id of ${id}`);
            return;
        }

        Log.line('Sending message');

        const message = this.args.join(' ');
        await channel.send(message, {
            tts: this.params.tts
        });

        Log.line(`Sent: ${message}`);
    }
}
