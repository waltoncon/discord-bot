// const Discord = require('discord.js');
import * as path from "path";
import {config} from 'dotenv';
import { Channel, Client, GuildMember, TextChannel, VoiceChannel } from 'discord.js';

const env = path.resolve(__dirname, '../.env');
config({path: env});

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
    // @ts-ignore
    const channel: TextChannel = client.channels.get(process.env.CHANNEL_GENERAL_ID);
    channel.send('LMG MOUNTED AND LOADED!');
});

// client.on('channelCreate', (...args) => {console.log('channelCreate', {...args})});
// client.on('channelDelete', (...args) => {console.log('channelDelete', {...args})});
// client.on('channelPinsUpdate', (...args) => {console.log('channelPinsUpdate', {...args})});
// client.on('channelUpdate', (...args) => {console.log('channelUpdate', {...args})});
// client.on('clientUserGuildSettingsUpdate', (...args) => {console.log('clientUserGuildSettingsUpdate', {...args})});
// client.on('clientUserSettingsUpdate', (...args) => {console.log('clientUserSettingsUpdate', {...args})});
// client.on('debug', (...args) => {console.log('debug', {...args})});
// client.on('disconnect', (...args) => {console.log('disconnect', {...args})});
// client.on('emojiCreate', (...args) => {console.log('emojiCreate', {...args})});
// client.on('emojiDelete', (...args) => {console.log('emojiDelete', {...args})});
// client.on('emojiUpdate', (...args) => {console.log('emojiUpdate', {...args})});
// client.on('error', (...args) => {console.log('error', {...args})});
// client.on('guildBanAdd', (...args) => {console.log('guildBanAdd', {...args})});
// client.on('guildBanRemove', (...args) => {console.log('guildBanRemove', {...args})});
// client.on('guildCreate', (...args) => {console.log('guildCreate', {...args})});
// client.on('guildDelete', (...args) => {console.log('guildDelete', {...args})});
// client.on('guildIntegrationsUpdate', (...args) => {console.log('guildIntegrationsUpdate', {...args})});
// client.on('guildMemberAdd', (...args) => {console.log('guildMemberAdd', {...args})});
// client.on('guildMemberAvailable', (...args) => {console.log('guildMemberAvailable', {...args})});
// client.on('guildMemberRemove', (...args) => {console.log('guildMemberRemove', {...args})});
// client.on('guildMembersChunk', (...args) => {console.log('guildMembersChunk', {...args})});
// client.on('guildMemberSpeaking', (...args) => {console.log('guildMemberSpeaking', {...args})});
// client.on('guildMemberUpdate', (...args) => {console.log('guildMemberUpdate', {...args})});
// client.on('guildUnavailable', (...args) => {console.log('guildUnavailable', {...args})});
// client.on('guildUpdate', (...args) => {console.log('guildUpdate', {...args})});
// client.on('message', (...args) => {console.log('message', {...args})});
// client.on('messageDelete', (...args) => {console.log('messageDelete', {...args})});
// client.on('messageDeleteBulk', (...args) => {console.log('messageDeleteBulk', {...args})});
// client.on('messageReactionAdd', (...args) => {console.log('messageReactionAdd', {...args})});
// client.on('messageReactionRemove', (...args) => {console.log('messageReactionRemove', {...args})});
// client.on('messageReactionRemoveAll', (...args) => {console.log('messageReactionRemoveAll', {...args})});
// client.on('messageUpdate', (...args) => {console.log('messageUpdate', {...args})});
// client.on('presenceUpdate', (...args) => {console.log('presenceUpdate', {...args})});
// client.on('rateLimit', (...args) => {console.log('rateLimit', {...args})});
// client.on('ready', (...args) => {console.log('ready', {...args})});
// client.on('reconnecting', (...args) => {console.log('reconnecting', {...args})});
// client.on('resume', (...args) => {console.log('resume', {...args})});
// client.on('roleCreate', (...args) => {console.log('roleCreate', {...args})});
// client.on('roleDelete', (...args) => {console.log('roleDelete', {...args})});
// client.on('roleUpdate', (...args) => {console.log('roleUpdate', {...args})});
// client.on('typingStart', (...args) => {console.log('typingStart', {...args})});
// client.on('typingStop', (...args) => {console.log('typingStop', {...args})});
// client.on('userNoteUpdate', (...args) => {console.log('userNoteUpdate', {...args})});
// client.on('userUpdate', (...args) => {console.log('userUpdate', {...args})});
// client.on('voiceStateUpdate', (...args) => {console.log('voiceStateUpdate', {...args})});
// client.on('warn', (...args) => {console.log('warn', {...args})});
// client.on('webhookUpdate', (...args) => {console.log('webhookUpdate', {...args})});

// client.on('presenceUpdate', (oldMember: GuildMember, newMember: GuildMember) => {
//     // console.log('presenceUpdate', { oldMember, newMember})
//
//     // @ts-ignore
//     const channel:TextChannel = client.channels.find((c:TextChannel) => c.id === process.env.CHANNEL_GENERAL_ID);
//     channel.sendMessage(`${newMember.user.username} has joined the channel`, {
//         // tts: true
//     })
// });

client.on('voiceStateUpdate', (oldMember: GuildMember, newMember: GuildMember) => {
    // @ts-ignore
    const channel: TextChannel = client.channels.get(process.env.CHANNEL_GENERAL_ID);
    // @ts-ignore
    const waitingChannel: VoiceChannel = client.channels.get(process.env.VOICE_WAITING_ID);
    // channel.sendMessage(`${newMember.user.username} has joined ${newMember.voiceChannel.name}`);

    if (newMember.voiceChannel === undefined) {
        return;
    }

    if (newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
        // Move all users from waiting lounge
        // let movedUsers =
        const members = waitingChannel.members.map(async (member:GuildMember) => {
            return await member.setVoiceChannel(process.env.VOICE_PRIMARY_ID).then(m => {
                channel.send(`Moved ${m.user.username} to main chat`);
                return m
            });
            // return member.user.username;
        });

        console.log(members);

        // let response = '';

        // if (movedUsers.length >= 2) {
        //     var last = movedUsers.pop();
        //     response = movedUsers.join(', ') + ' and ' + last;
        //     console.log(response);
        // } else {
        //     response = movedUsers[0];
        // }

        // channel
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.DISCORD_BOT_TOKEN);
