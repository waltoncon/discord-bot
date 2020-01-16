import Log from "../Log";
import Command, { Option } from "../Command";
import { Channel, TextChannel, VoiceChannel } from "discord.js";

export default class JoinCommand extends Command {
    public name: string = 'join';
    description: string = 'Join a voice channel in a server';
    options: Option[] = [
        { long: 'name', args: true }
    ];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    async handle() {
        // @ts-ignore
        const channel: VoiceChannel = this.client.channels.find((channel: Channel) => {
            return channel.type === 'voice'
                && (channel['id'] === this.args[0]
                    || channel['name'] === this.args[0])
        });

        Log.info(`Joining ${channel.name} [${channel.id}]`);
        await channel.join();
        Log.info(`Joined ${channel.name} [${channel.id}]`);
    }
}
