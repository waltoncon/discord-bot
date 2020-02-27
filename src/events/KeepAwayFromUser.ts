import { Client, GuildMember, TextChannel, VoiceChannel } from "discord.js";
import { client } from "../index";
import { DiscordVoiceStateUpdateEvent } from "./DiscordEvents";

/**
 * @memberOf DiscordEvents
 */
class KeepAwayFromUser extends DiscordVoiceStateUpdateEvent {
    handle(): void {
        const generalChannel = <VoiceChannel>client.channels.get(process.env.VOICE_PRIMARY_ID);
        const keepAwayDestChannel = <VoiceChannel>client.channels.get(process.env.KEEP_AWAY_DEST);

        if (!keepAwayDestChannel) {
            return;
        }

        if (this.newMember.id !== process.env.KEEP_AWAY_USER) {
            return;
        }

        if (this.newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
            // Move all users from waiting lounge
            // let movedUsers =
            const members = generalChannel.members.forEach(async (member: GuildMember) => {
                if (member.id !== process.env.KEEP_AWAY_USER) {
                    await member.setVoiceChannel(process.env.KEEP_AWAY_DEST);
                }
            });
        }
    }
}

export default KeepAwayFromUser;
