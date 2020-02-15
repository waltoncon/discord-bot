import { GuildMember } from "discord.js";
declare class DiscordEventHandler {
    constructor(params: any);
    handle(): void;
}
interface voiceStateUpdate extends DiscordEventHandler {
    oldMember: GuildMember;
    newMember: GuildMember;
}
declare class MoveWaintingUsers implements voiceStateUpdate {
    newMember: GuildMember;
    oldMember: GuildMember;
    handle(): void;
}
export default MoveWaintingUsers;
