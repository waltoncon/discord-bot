"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Discord = require('discord.js');
const path = require("path");
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
const env = path.resolve(__dirname, '../.env');
dotenv_1.config({ path: env });
// Create an instance of a Discord client
const client = new discord_js_1.Client();
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
    // @ts-ignore
    const channel = client.channels.get(process.env.TEXT_PRIMARY_ID);
    // channel.send('LMG MOUNTED AND LOADED!');
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
client.on('message', (message) => {
    // console.log(message);
    if (message.content === 'do it') {
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('/home/waltonc/Resources/audio/memes/ha-gyyy.mp3');
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
});
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
//     const channel:TextChannel = client.channels.find((c:TextChannel) => c.id === process.env.TEXT_PRIMARY_ID);
//     channel.sendMessage(`${newMember.user.username} has joined the channel`, {
//         // tts: true
//     })
// });
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // console.log('new voiceStateUpdate event');
    // console.log('oldMember', oldMember);
    // console.log('newMember', newMember);
    // console.log("\n\n\n\n");
    //
    // console.log('oldMemberVoiceChannel', oldMember.voiceChannel);
    // console.log('newMemberVoiceChannel', newMember.voiceChannel);
    // console.log("\n\n\n\n");
    //
    // console.log(`A user has moved from ${oldMember.voiceChannelID} to ${newMember.voiceChannelID}`);
    // console.log("\n\n\n\n\n\n\n\n");
    // @ts-ignore
    const channel = client.channels.get(process.env.TEXT_PRIMARY_ID);
    // @ts-ignore
    const waitingChannel = client.channels.get(process.env.VOICE_WAITING_ID);
    // channel.sendMessage(`${newMember.user.username} has joined ${newMember.voiceChannel.name}`);
    if (newMember.voiceChannel === undefined) {
        return;
    }
    if (newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
        // Move all users from waiting lounge
        // let movedUsers =
        const members = waitingChannel.members.map((member) => __awaiter(void 0, void 0, void 0, function* () {
            yield member.setVoiceChannel(process.env.VOICE_PRIMARY_ID);
            // return .then(m => {
            //     const message = `Moved ${m.user.username} to main chat`;
            //     channel.send(message);
            //     console.log(message);
            //     return m
            // });
            // return member.user.username;
        }));
        // const formatter = new Intl.ListFormat();
        // console.log(members);
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
//# sourceMappingURL=index.js.map