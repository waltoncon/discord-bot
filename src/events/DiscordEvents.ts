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
import DiscordEventHandler from "../helpers/DiscordEventHandler";

export class DiscordChannelCreateEvent extends DiscordEventHandler {
    channel = <Channel>this.props[0];
}

export class DiscordChannelDeleteEvent extends DiscordEventHandler {
    channel = <Channel>this.props[0];
}

export class DiscordChannelPinsUpdateEvent extends DiscordEventHandler {
    channel = <Channel>this.props[0];
    time = <Date>this.props[0];
}

export class DiscordChannelUpdateEvent extends DiscordEventHandler {
    oldChannel = <Channel>this.props[0];
    newChannel = <Channel>this.props[1];
}

export class DiscordClientUserGuildSettingsUpdateEvent extends DiscordEventHandler {
    clientUserGuildSettings = <ClientUserGuildSettings>this.props[0];
}

export class DiscordClientUserSettingsUpdateEvent extends DiscordEventHandler {
    clientUserSettings = <ClientUserSettings>this.props[0];
}

export class DiscordDebugEvent extends DiscordEventHandler {
    info = <string>this.props[0];
}

export class DiscordDisconnectEvent extends DiscordEventHandler {
    event = <any>this.props[0];
}

export class DiscordEmojiCreateEvent extends DiscordEventHandler {
    emoji = <Emoji>this.props[0];
}

export class DiscordEmojiDeleteEvent extends DiscordEventHandler {
    emoji = <Emoji>this.props[0];
}

export class DiscordEmojiUpdateEvent extends DiscordEventHandler {
    oldEmoji = <Emoji>this.props[0];
    newEmoji = <Emoji>this.props[1];
}

export class DiscordErrorEvent extends DiscordEventHandler {
    error = <Error>this.props[0];
}

export class DiscordGuildBanAddEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
    user = <User>this.props[1];
}

export class DiscordGuildBanRemoveEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
    user = <User>this.props[1];
}

export class DiscordGuildCreateEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
}

export class DiscordGuildDeleteEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
}

export class DiscordGuildMemberAddEvent extends DiscordEventHandler {
    member = <GuildMember>this.props[0];
}

export class DiscordGuildMemberAvailableEvent extends DiscordEventHandler {
    member = <GuildMember>this.props[0];
}

export class DiscordGuildMemberRemoveEvent extends DiscordEventHandler {
    member = <GuildMember>this.props[0];
}

export class DiscordGuildMembersChunkEvent extends DiscordEventHandler {
    members = <GuildMember>this.props[0];
    guild = <Guild>this.props[1];
}

export class DiscordGuildMemberSpeakingEvent extends DiscordEventHandler {
    member = <GuildMember>this.props[0];
    speaking = <boolean>this.props[1];
}

export class DiscordGuildMemberUpdateEvent extends DiscordEventHandler {
    oldMember = <GuildMember>this.props[0];
    newMember = <GuildMember>this.props[1];
}

export class DiscordGuildUnavailableEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
}

export class DiscordGuildUpdateEvent extends DiscordEventHandler {
    oldGuild = <Guild>this.props[0];
    newGuild = <Guild>this.props[1];
}

export class DiscordGuildIntegrationsUpdateEvent extends DiscordEventHandler {
    guild = <Guild>this.props[0];
}

export class DiscordMessageEvent extends DiscordEventHandler {
    message = <Message>this.props[0];
}

export class DiscordMessageDeleteEvent extends DiscordEventHandler {
    message = <Message>this.props[0];
}

export class DiscordMessageDeleteBulkEvent extends DiscordEventHandler {
    messages = <Collection<Snowflake, Message>>this.props[0];
}

export class DiscordMessageReactionAddEvent extends DiscordEventHandler {
    messageReaction = <MessageReaction>this.props[0];
    user = <User>this.props[0];
}

export class DiscordMessageReactionRemoveEvent extends DiscordEventHandler {
    messageReaction = <MessageReaction>this.props[0];
    user = <User>this.props[0];
}

export class DiscordMessageReactionRemoveAllEvent extends DiscordEventHandler {
    message = <Message>this.props[0];
}

export class DiscordMessageUpdateEvent extends DiscordEventHandler {
    oldMessage = <Message>this.props[0];
    newMessage = <Message>this.props[0];
}

export class DiscordPresenceUpdateEvent extends DiscordEventHandler {
    oldMember = <GuildMember>this.props[0];
    newMember = <GuildMember>this.props[0];
}

export class DiscordRateLimitEvent extends DiscordEventHandler {
    rateLimit = <RateLimitInfo>this.props[0];
}

export class DiscordReadyEvent extends DiscordEventHandler {
}

export class DiscordReconnectingEvent extends DiscordEventHandler {
}

export class DiscordResumeEvent extends DiscordEventHandler {
    replayed = <number>this.props[0];
}

export class DiscordRoleCreateEvent extends DiscordEventHandler {
    role = <Role>this.props[0];
}

export class DiscordRoleDeleteEvent extends DiscordEventHandler {
    role = <Role>this.props[0];
}

export class DiscordRoleUpdateEvent extends DiscordEventHandler {
    oldRole = <Role>this.props[0];
    newRole = <Role>this.props[0];
}

export class DiscordTypingStartEvent extends DiscordEventHandler {
    channel = <Channel>this.props[0];
    user = <User>this.props[0];
}

export class DiscordTypingStopEvent extends DiscordEventHandler {
    channel = <Channel>this.props[0];
    user = <User>this.props[0];
}

export class DiscordUserNoteUpdateEvent extends DiscordEventHandler {
    user = <UserResolvable>this.props[0];
    oldNote = <string>this.props[0];
    newNote = <string>this.props[0];
}

export class DiscordUserUpdateEvent extends DiscordEventHandler {
    oldUser = <User>this.props[0];
    newUser = <User>this.props[0];
}

export class DiscordVoiceStateUpdateEvent extends DiscordEventHandler {
    oldMember = <GuildMember>this.props[0];
    newMember = <GuildMember>this.props[0];
}

export class DiscordWarnEvent extends DiscordEventHandler {
    info = <string>this.props[0];
}

export class DiscordWebhookUpdateEvent extends DiscordEventHandler {
    channel = <TextChannel>this.props[0];
}

declare namespace DiscordEvents {}
