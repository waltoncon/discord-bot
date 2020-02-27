import { Channel, ClientUserGuildSettings, ClientUserSettings, Collection, Emoji, Guild, GuildMember, Message, MessageReaction, RateLimitInfo, Role, TextChannel, User, UserResolvable } from "discord.js";
import DiscordEventHandler from "../helpers/DiscordEventHandler";
export declare class DiscordChannelCreateEvent extends DiscordEventHandler {
    channel: Channel;
}
export declare class DiscordChannelDeleteEvent extends DiscordEventHandler {
    channel: Channel;
}
export declare class DiscordChannelPinsUpdateEvent extends DiscordEventHandler {
    channel: Channel;
    time: Date;
}
export declare class DiscordChannelUpdateEvent extends DiscordEventHandler {
    oldChannel: Channel;
    newChannel: Channel;
}
export declare class DiscordClientUserGuildSettingsUpdateEvent extends DiscordEventHandler {
    clientUserGuildSettings: ClientUserGuildSettings;
}
export declare class DiscordClientUserSettingsUpdateEvent extends DiscordEventHandler {
    clientUserSettings: ClientUserSettings;
}
export declare class DiscordDebugEvent extends DiscordEventHandler {
    info: string;
}
export declare class DiscordDisconnectEvent extends DiscordEventHandler {
    event: any;
}
export declare class DiscordEmojiCreateEvent extends DiscordEventHandler {
    emoji: Emoji;
}
export declare class DiscordEmojiDeleteEvent extends DiscordEventHandler {
    emoji: Emoji;
}
export declare class DiscordEmojiUpdateEvent extends DiscordEventHandler {
    oldEmoji: Emoji;
    newEmoji: Emoji;
}
export declare class DiscordErrorEvent extends DiscordEventHandler {
    error: Error;
}
export declare class DiscordGuildBanAddEvent extends DiscordEventHandler {
    guild: Guild;
    user: User;
}
export declare class DiscordGuildBanRemoveEvent extends DiscordEventHandler {
    guild: Guild;
    user: User;
}
export declare class DiscordGuildCreateEvent extends DiscordEventHandler {
    guild: Guild;
}
export declare class DiscordGuildDeleteEvent extends DiscordEventHandler {
    guild: Guild;
}
export declare class DiscordGuildMemberAddEvent extends DiscordEventHandler {
    member: GuildMember;
}
export declare class DiscordGuildMemberAvailableEvent extends DiscordEventHandler {
    member: GuildMember;
}
export declare class DiscordGuildMemberRemoveEvent extends DiscordEventHandler {
    member: GuildMember;
}
export declare class DiscordGuildMembersChunkEvent extends DiscordEventHandler {
    members: GuildMember;
    guild: Guild;
}
export declare class DiscordGuildMemberSpeakingEvent extends DiscordEventHandler {
    member: GuildMember;
    speaking: boolean;
}
export declare class DiscordGuildMemberUpdateEvent extends DiscordEventHandler {
    oldMember: GuildMember;
    newMember: GuildMember;
}
export declare class DiscordGuildUnavailableEvent extends DiscordEventHandler {
    guild: Guild;
}
export declare class DiscordGuildUpdateEvent extends DiscordEventHandler {
    oldGuild: Guild;
    newGuild: Guild;
}
export declare class DiscordGuildIntegrationsUpdateEvent extends DiscordEventHandler {
    guild: Guild;
}
export declare class DiscordMessageEvent extends DiscordEventHandler {
    message: Message;
}
export declare class DiscordMessageDeleteEvent extends DiscordEventHandler {
    message: Message;
}
export declare class DiscordMessageDeleteBulkEvent extends DiscordEventHandler {
    messages: Collection<string, Message>;
}
export declare class DiscordMessageReactionAddEvent extends DiscordEventHandler {
    messageReaction: MessageReaction;
    user: User;
}
export declare class DiscordMessageReactionRemoveEvent extends DiscordEventHandler {
    messageReaction: MessageReaction;
    user: User;
}
export declare class DiscordMessageReactionRemoveAllEvent extends DiscordEventHandler {
    message: Message;
}
export declare class DiscordMessageUpdateEvent extends DiscordEventHandler {
    oldMessage: Message;
    newMessage: Message;
}
export declare class DiscordPresenceUpdateEvent extends DiscordEventHandler {
    oldMember: GuildMember;
    newMember: GuildMember;
}
export declare class DiscordRateLimitEvent extends DiscordEventHandler {
    rateLimit: RateLimitInfo;
}
export declare class DiscordReadyEvent extends DiscordEventHandler {
}
export declare class DiscordReconnectingEvent extends DiscordEventHandler {
}
export declare class DiscordResumeEvent extends DiscordEventHandler {
    replayed: number;
}
export declare class DiscordRoleCreateEvent extends DiscordEventHandler {
    role: Role;
}
export declare class DiscordRoleDeleteEvent extends DiscordEventHandler {
    role: Role;
}
export declare class DiscordRoleUpdateEvent extends DiscordEventHandler {
    oldRole: Role;
    newRole: Role;
}
export declare class DiscordTypingStartEvent extends DiscordEventHandler {
    channel: Channel;
    user: User;
}
export declare class DiscordTypingStopEvent extends DiscordEventHandler {
    channel: Channel;
    user: User;
}
export declare class DiscordUserNoteUpdateEvent extends DiscordEventHandler {
    user: UserResolvable;
    oldNote: string;
    newNote: string;
}
export declare class DiscordUserUpdateEvent extends DiscordEventHandler {
    oldUser: User;
    newUser: User;
}
export declare class DiscordVoiceStateUpdateEvent extends DiscordEventHandler {
    oldMember: GuildMember;
    newMember: GuildMember;
}
export declare class DiscordWarnEvent extends DiscordEventHandler {
    info: string;
}
export declare class DiscordWebhookUpdateEvent extends DiscordEventHandler {
    channel: TextChannel;
}
