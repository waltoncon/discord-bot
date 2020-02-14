import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
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
        const identifier = this.args[0];

        // @ts-ignore
        const channel: VoiceChannel = this.client.channels.find((channel: Channel) => {
            return channel.type === 'voice'
                && (channel['id'] === identifier
                    || channel['name'] === identifier
                    || channel['name'].toLowerCase() === identifier.toLowerCase())
        });

        if (!channel) {
            Log.warn(`Can't find the channel '${identifier}'`);
            return;
        }

        Log.info(`Joining ${channel.name} [${channel.id}]`);
        await channel.join();
        Log.info(`Joined ${channel.name} [${channel.id}]`);
    }
}
