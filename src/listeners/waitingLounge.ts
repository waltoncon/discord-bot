import {client} from "../helpers/client";
import {VoiceChannel, VoiceState} from "discord.js";
import Log from "../helpers/Log";
import config from "../helpers/config";

const lounges = config.get('lounges');

client.on('voiceStateUpdate', async (oldState: VoiceState, newState: VoiceState) => {
    Log.debug(`User voice state update [${newState.member?.user?.username}] ${oldState.channel?.name} (${oldState.channelID}) -> ${newState.channel?.name} (${newState.channelID})`);
    const loungeSnowflake = lounges[newState.channelID];

    if (loungeSnowflake) {
        const lounge = await client.channels.fetch(loungeSnowflake) as VoiceChannel;
        if (lounge.members.size > 0) {
            const users = lounge.members.map(value => value.user.username).join(', ');
            Log.debug(`Moving users out of waiting lounge: ${users}`);
            lounge.members.each((value, key, collection) => {
                value.voice.setChannel(newState.channelID);
            })
        }
    }
});