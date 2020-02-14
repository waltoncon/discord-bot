import * as path from "path";
import * as clui from 'clui';

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});
import { Client } from 'discord.js';
import Log from "./helpers/Log";
import Server from "./helpers/Server";
import EventListeners from "./config/EventListeners";
Server.switch(process.env.DEFAULT_SERVER || 1);

export const client = new Client();

const countdown = new clui.Spinner('Loading discord bot...  ');
countdown.start();

client.on('ready', () => {
    countdown.stop()
});

for(const [event, listeners] of Object.entries(EventListeners)) {
    client.on(event, (...params) => {
        for (const listener of listeners) {
            // noinspection TypeScriptValidateJSTypes
            try {
                // noinspection TypeScriptValidateJSTypes
                require(`./events/${listener}`).default(...params);
            } catch (e) {
                Log.error(`> Couldn't start ${event}::${listener}. ${e.message}`)
            }
        }
    })
}

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.DISCORD_BOT_TOKEN);


// Other events
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
