import {client} from "../../helpers/client";
import {Channel, TextChannel} from "discord.js";

export default {
    description: "Send a message to a text channel",
    parameters: ['id'],
    action: async ({id}) => {
        let channel = await client.channels.fetch(id) as TextChannel;

        if (channel.type !== 'text') {
            return;
        }

        await channel.send('Test');
    },
}