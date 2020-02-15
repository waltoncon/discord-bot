import {
    Channel,
    ClientUserGuildSettings,
    ClientUserSettings, Collection,
    Emoji,
    Guild,
    GuildMember,
    Message, MessageReaction, RateLimitInfo, Role, Snowflake, TextChannel,
    User, UserResolvable
} from "discord.js";

interface DiscordChannelCreateEvent {
    channel: Channel
}

interface DiscordChannelDeleteEvent {
    channel: Channel
}

interface DiscordChannelPinsUpdateEvent {
    channel: Channel,
    time: Date
}

interface DiscordChannelUpdateEvent {
    oldChannel: Channel,
    newChannel: Channel
}

interface DiscordClientUserGuildSettingsUpdateEvent {
    clientUserGuildSettings: ClientUserGuildSettings
}

interface DiscordClientUserSettingsUpdateEvent {
    clientUserSettings: ClientUserSettings
}

interface DiscordDebugEvent {
    info: string
}

interface DiscordDisconnectEvent {
    event: any
}

interface DiscordEmojiCreateEvent {
    emoji: Emoji
}

interface DiscordEmojiDeleteEvent {
    emoji: Emoji
}

interface DiscordEmojiUpdateEvent {
    oldEmoji: Emoji,
    newEmoji: Emoji
}

interface DiscordErrorEvent {
    error: Error
}

interface DiscordGuildBanAddEvent {
    guild: Guild,
    user: User
}

interface DiscordGuildBanRemoveEvent {
    guild: Guild,
    user: User
}

interface DiscordGuildCreateEvent {
    guild: Guild
}

interface DiscordGuildDeleteEvent {
    guild: Guild
}

interface DiscordGuildMemberAddEvent {
    member: GuildMember
}

interface DiscordGuildMemberAvailableEvent {
    member: GuildMember
}

interface DiscordGuildMemberRemoveEvent {
    member: GuildMember
}

interface DiscordGuildMembersChunkEvent {
    members: GuildMember[],
    guild: Guild
}

interface DiscordGuildMemberSpeakingEvent {
    member: GuildMember,
    speaking: boolean
}

interface DiscordGuildMemberUpdateEvent {
    oldMember: GuildMember,
    newMember: GuildMember
}

interface DiscordGuildUnavailableEvent {
    guild: Guild
}

interface DiscordGuildUpdateEvent {
    oldGuild: Guild,
    newGuild: Guild
}

interface DiscordGuildIntegrationsUpdateEvent {
    guild: Guild
}

interface DiscordMessageEvent {
    message: Message
}

interface DiscordMessageDeleteEvent {
    message: Message
}

interface DiscordMessageDeleteBulkEvent {
    messages: Collection<Snowflake, Message>
}

interface DiscordMessageReactionAddEvent {
    messageReaction: MessageReaction,
    user: User
}

interface DiscordMessageReactionRemoveEvent {
    messageReaction: MessageReaction,
    user: User
}

interface DiscordMessageReactionRemoveAllEvent {
    message: Message
}

interface DiscordMessageUpdateEvent {
    oldMessage: Message,
    newMessage: Message
}

interface DiscordPresenceUpdateEvent {
    oldMember: GuildMember,
    newMember: GuildMember
}

interface DiscordRateLimitEvent {
    rateLimit: RateLimitInfo
}

interface DiscordReadyEvent {
}

interface DiscordReconnectingEvent {
}

interface DiscordResumeEvent {
    replayed: number
}

interface DiscordRoleCreateEvent {
    role: Role
}

interface DiscordRoleDeleteEvent {
    role: Role
}

interface DiscordRoleUpdateEvent {
    oldRole: Role,
    newRole: Role
}

interface DiscordTypingStartEvent {
    channel: Channel,
    user: User
}

interface DiscordTypingStopEvent {
    channel: Channel,
    user: User
}

interface DiscordUserNoteUpdateEvent {
    user: UserResolvable,
    oldNote: string,
    newNote: string
}

interface DiscordUserUpdateEvent {
    oldUser: User,
    newUser: User
}

interface DiscordVoiceStateUpdateEvent {
    oldMember: GuildMember,
    newMember: GuildMember
}

interface DiscordWarnEvent {
    info: string
}

interface DiscordWebhookUpdateEvent {
    channel: TextChannel
}

declare namespace DiscordEvents {}
