import Log from "../helpers/Log";
import Command, { Option } from "../helpers/Command";
import { Channel, VoiceChannel, VoiceConnection } from "discord.js";
import * as fs from "fs";

export default class StubCommand extends Command {
    name: string = null;
    description: string = 'Description';
    options: Option[] = [];

    constructor(input, props) {
        super(input, props);
        this.parse(input);
    }

    async handle() {
        const path = this.args[0];

        if (this.args.length !== 1) {
            Log.warn(`A path is required`);
            return;
        }

        if (!fs.existsSync(path)) {
            Log.warn(`${path} does not exist`);
            return;
        }

        let connection: VoiceConnection;

        if (this.params.id) {
            const identifier = this.params.id;
            connection = this.client.voiceConnections.find((vc: VoiceConnection) => {
                return vc.channel.type === 'voice'
                    && (vc.channel['id'] === identifier
                        || vc.channel['name'] === identifier
                        || vc.channel['name'].toLowerCase() === identifier.toLowerCase())
            })
        } else {
            connection = this.client.voiceConnections.first();
        }

        if (!connection) {
            Log.warn(`Bot is not connected to any voice channels`);
            return;
        }

        Log.info(`Playing '${path}' on ${connection.channel.guild.name} / ${connection.channel.name}`);
        await connection.playFile(path, {
            seek: -5,
            volume: this.params.volume
        });
        Log.info(`Finished playing '${path}`);
    }
}
