import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
import { VoiceConnection } from "discord.js";

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
        const identifier = this.args[0];

        if (this.args.length !== 1) {
            Log.warn('An identifier is required');
            return
        }

        const connection:VoiceConnection = this.client.voiceConnections.find((vc: VoiceConnection) => {
            return vc.channel.type === 'voice'
                && (vc.channel['id'] === identifier
                    || vc.channel['name'] === identifier
                    || vc.channel['name'].toLowerCase() === identifier.toLowerCase())
        });

        Log.info(`Leaving ${connection.channel.guild.name} / ${connection.channel.name}`);
        connection.channel.leave();
        Log.info(`Left channel`);
    }
}
