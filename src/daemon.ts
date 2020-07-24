import './bootstrap'
import {client} from "./helpers/client";
import {Message} from "discord.js";
import Log from "./helpers/Log";

import './listeners/waitingLounge';

client.on('ready', () => {
    Log.debug('Bot ready');
});

client.on('message', (message: Message) => {
    Log.debug(`Message from '${message.author.username}': ${message.content}`);

    // if(message.author.bot) return;

    // message.reply('reply')
})