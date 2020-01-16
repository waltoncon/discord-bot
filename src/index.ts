import * as path from "path";
import * as fs from 'fs';
import * as glob from 'glob';

const c = {};
// glob.sync(path.resolve(__dirname, 'commands/*.js')).forEach(com => {
//     const SingleCommand = require(com).default;
//     const name = new SingleCommand().name;
//     if (name == null) {
//         c[name] = SingleCommand;
//     }
//
// });
// console.log(c);
// process.exit();

import { config } from 'dotenv';
import { Channel, Client, GuildMember, Message, TextChannel, VoiceChannel } from 'discord.js';
import Log from "./Log";
import { PathLike } from "fs";
import SayCommand from "./commands/SayCommand";
import JoinCommand from "./commands/JoinCommand";
import GetCommand from "./commands/GetCommand";
import SetCommand from "./commands/SetCommand";
import Server from "./Server";
import ServerCommand from "./commands/ServerCommand";
const env = path.resolve(__dirname, '../.env');
config({ path: env });

Server.switch(process.env.DEFAULT_SERVER || 1);

const commands = {
    say: SayCommand,
    join: JoinCommand,
    get: GetCommand,
    set: SetCommand,
    server: ServerCommand
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



// Create an instance of a Discord client
const client = new Client();

const rl = () => {
    readline.question('> ', async (input) => {
        if (input === "exit") {
            Log.warn('Exiting');
            process.exit();
        }

        const name = input.split(' ', 2)[0];

        if (Object.keys(commands).includes(name)) {
            try {
                await new commands[name](input, { client }).handle();
            } catch (e) {
                Log.error(`An error occurred while processing this command`);
                Log.info(e.stack + '\n')
            }
        } else {
            Log.warn(`command not found: ${name}`);
        }

        rl();
    })
};

Log.info('Discord bot');
Log.line('loading...');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    rl();
});

client.on('message', (message: Message) => {

    if (message.member.id === process.env.OKAY_USER_ID && message.content === 'Okay') {
        message.channel.send('Okay');
    }

    if (message.content === 'do it') {
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection => {

            const dispatcher = connection.playFile('/home/waltonc/Resources/audio/memes/wii-shop-music.mp3');
            dispatcher.on("end", end => {
                // voiceChannel.leave()
            });
        }).catch(err => console.log(err));
    }

});

client.on('voiceStateUpdate', (oldMember: GuildMember, newMember: GuildMember) => {

    // @ts-ignore
    const channel: TextChannel = client.channels.get(process.env.TEXT_PRIMARY_ID);
    // @ts-ignore
    const waitingChannel: VoiceChannel = client.channels.get(process.env.VOICE_WAITING_ID);
    // channel.sendMessage(`${newMember.user.username} has joined ${newMember.voiceChannel.name}`);

    if (newMember.voiceChannel === undefined) {
        return;
    }

    if (newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
        // Move all users from waiting lounge
        // let movedUsers =
        const members = waitingChannel.members.map(async (member: GuildMember) => {
            await member.setVoiceChannel(process.env.VOICE_PRIMARY_ID);
            // return .then(m => {
            //     const message = `Moved ${m.user.username} to main chat`;
            //     channel.send(message);
            //     console.log(message);
            //     return m
            // });
            // return member.user.username;
        });

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
