import { Client, GuildMember, TextChannel, VoiceChannel } from "discord.js";
import { client } from "../index";
import { DiscordVoiceStateUpdateEvent } from "./DiscordEvents";

/**
 * @memberOf DiscordEvents
 */
class MoveWaintingUsers extends DiscordVoiceStateUpdateEvent {
    handle(): void {
        const channel = <TextChannel>client.channels.get(process.env.TEXT_PRIMARY_ID);
        const waitingChannel = <VoiceChannel>client.channels.get(process.env.VOICE_WAITING_ID);
        // channel.sendMessage(`${newMember.user.username} has joined ${newMember.voiceChannel.name}`);

        if (!waitingChannel) {
            return;
        }

        if (this.newMember.voiceChannel === undefined) {
            return;
        }

        if (this.newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
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
    }
}

export default MoveWaintingUsers;
