"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordEventHandler_1 = require("../helpers/DiscordEventHandler");
class DiscordChannelCreateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
    }
}
exports.DiscordChannelCreateEvent = DiscordChannelCreateEvent;
class DiscordChannelDeleteEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
    }
}
exports.DiscordChannelDeleteEvent = DiscordChannelDeleteEvent;
class DiscordChannelPinsUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
        this.time = this.props[0];
    }
}
exports.DiscordChannelPinsUpdateEvent = DiscordChannelPinsUpdateEvent;
class DiscordChannelUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldChannel = this.props[0];
        this.newChannel = this.props[1];
    }
}
exports.DiscordChannelUpdateEvent = DiscordChannelUpdateEvent;
class DiscordClientUserGuildSettingsUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.clientUserGuildSettings = this.props[0];
    }
}
exports.DiscordClientUserGuildSettingsUpdateEvent = DiscordClientUserGuildSettingsUpdateEvent;
class DiscordClientUserSettingsUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.clientUserSettings = this.props[0];
    }
}
exports.DiscordClientUserSettingsUpdateEvent = DiscordClientUserSettingsUpdateEvent;
class DiscordDebugEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.info = this.props[0];
    }
}
exports.DiscordDebugEvent = DiscordDebugEvent;
class DiscordDisconnectEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.event = this.props[0];
    }
}
exports.DiscordDisconnectEvent = DiscordDisconnectEvent;
class DiscordEmojiCreateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.emoji = this.props[0];
    }
}
exports.DiscordEmojiCreateEvent = DiscordEmojiCreateEvent;
class DiscordEmojiDeleteEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.emoji = this.props[0];
    }
}
exports.DiscordEmojiDeleteEvent = DiscordEmojiDeleteEvent;
class DiscordEmojiUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldEmoji = this.props[0];
        this.newEmoji = this.props[1];
    }
}
exports.DiscordEmojiUpdateEvent = DiscordEmojiUpdateEvent;
class DiscordErrorEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.error = this.props[0];
    }
}
exports.DiscordErrorEvent = DiscordErrorEvent;
class DiscordGuildBanAddEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
        this.user = this.props[1];
    }
}
exports.DiscordGuildBanAddEvent = DiscordGuildBanAddEvent;
class DiscordGuildBanRemoveEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
        this.user = this.props[1];
    }
}
exports.DiscordGuildBanRemoveEvent = DiscordGuildBanRemoveEvent;
class DiscordGuildCreateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
    }
}
exports.DiscordGuildCreateEvent = DiscordGuildCreateEvent;
class DiscordGuildDeleteEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
    }
}
exports.DiscordGuildDeleteEvent = DiscordGuildDeleteEvent;
class DiscordGuildMemberAddEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.member = this.props[0];
    }
}
exports.DiscordGuildMemberAddEvent = DiscordGuildMemberAddEvent;
class DiscordGuildMemberAvailableEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.member = this.props[0];
    }
}
exports.DiscordGuildMemberAvailableEvent = DiscordGuildMemberAvailableEvent;
class DiscordGuildMemberRemoveEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.member = this.props[0];
    }
}
exports.DiscordGuildMemberRemoveEvent = DiscordGuildMemberRemoveEvent;
class DiscordGuildMembersChunkEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.members = this.props[0];
        this.guild = this.props[1];
    }
}
exports.DiscordGuildMembersChunkEvent = DiscordGuildMembersChunkEvent;
class DiscordGuildMemberSpeakingEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.member = this.props[0];
        this.speaking = this.props[1];
    }
}
exports.DiscordGuildMemberSpeakingEvent = DiscordGuildMemberSpeakingEvent;
class DiscordGuildMemberUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldMember = this.props[0];
        this.newMember = this.props[1];
    }
}
exports.DiscordGuildMemberUpdateEvent = DiscordGuildMemberUpdateEvent;
class DiscordGuildUnavailableEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
    }
}
exports.DiscordGuildUnavailableEvent = DiscordGuildUnavailableEvent;
class DiscordGuildUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldGuild = this.props[0];
        this.newGuild = this.props[1];
    }
}
exports.DiscordGuildUpdateEvent = DiscordGuildUpdateEvent;
class DiscordGuildIntegrationsUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.guild = this.props[0];
    }
}
exports.DiscordGuildIntegrationsUpdateEvent = DiscordGuildIntegrationsUpdateEvent;
class DiscordMessageEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.message = this.props[0];
    }
}
exports.DiscordMessageEvent = DiscordMessageEvent;
class DiscordMessageDeleteEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.message = this.props[0];
    }
}
exports.DiscordMessageDeleteEvent = DiscordMessageDeleteEvent;
class DiscordMessageDeleteBulkEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.messages = this.props[0];
    }
}
exports.DiscordMessageDeleteBulkEvent = DiscordMessageDeleteBulkEvent;
class DiscordMessageReactionAddEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.messageReaction = this.props[0];
        this.user = this.props[0];
    }
}
exports.DiscordMessageReactionAddEvent = DiscordMessageReactionAddEvent;
class DiscordMessageReactionRemoveEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.messageReaction = this.props[0];
        this.user = this.props[0];
    }
}
exports.DiscordMessageReactionRemoveEvent = DiscordMessageReactionRemoveEvent;
class DiscordMessageReactionRemoveAllEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.message = this.props[0];
    }
}
exports.DiscordMessageReactionRemoveAllEvent = DiscordMessageReactionRemoveAllEvent;
class DiscordMessageUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldMessage = this.props[0];
        this.newMessage = this.props[0];
    }
}
exports.DiscordMessageUpdateEvent = DiscordMessageUpdateEvent;
class DiscordPresenceUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldMember = this.props[0];
        this.newMember = this.props[0];
    }
}
exports.DiscordPresenceUpdateEvent = DiscordPresenceUpdateEvent;
class DiscordRateLimitEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.rateLimit = this.props[0];
    }
}
exports.DiscordRateLimitEvent = DiscordRateLimitEvent;
class DiscordReadyEvent extends DiscordEventHandler_1.default {
}
exports.DiscordReadyEvent = DiscordReadyEvent;
class DiscordReconnectingEvent extends DiscordEventHandler_1.default {
}
exports.DiscordReconnectingEvent = DiscordReconnectingEvent;
class DiscordResumeEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.replayed = this.props[0];
    }
}
exports.DiscordResumeEvent = DiscordResumeEvent;
class DiscordRoleCreateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.role = this.props[0];
    }
}
exports.DiscordRoleCreateEvent = DiscordRoleCreateEvent;
class DiscordRoleDeleteEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.role = this.props[0];
    }
}
exports.DiscordRoleDeleteEvent = DiscordRoleDeleteEvent;
class DiscordRoleUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldRole = this.props[0];
        this.newRole = this.props[0];
    }
}
exports.DiscordRoleUpdateEvent = DiscordRoleUpdateEvent;
class DiscordTypingStartEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
        this.user = this.props[0];
    }
}
exports.DiscordTypingStartEvent = DiscordTypingStartEvent;
class DiscordTypingStopEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
        this.user = this.props[0];
    }
}
exports.DiscordTypingStopEvent = DiscordTypingStopEvent;
class DiscordUserNoteUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.user = this.props[0];
        this.oldNote = this.props[0];
        this.newNote = this.props[0];
    }
}
exports.DiscordUserNoteUpdateEvent = DiscordUserNoteUpdateEvent;
class DiscordUserUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldUser = this.props[0];
        this.newUser = this.props[0];
    }
}
exports.DiscordUserUpdateEvent = DiscordUserUpdateEvent;
class DiscordVoiceStateUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.oldMember = this.props[0];
        this.newMember = this.props[0];
    }
}
exports.DiscordVoiceStateUpdateEvent = DiscordVoiceStateUpdateEvent;
class DiscordWarnEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.info = this.props[0];
    }
}
exports.DiscordWarnEvent = DiscordWarnEvent;
class DiscordWebhookUpdateEvent extends DiscordEventHandler_1.default {
    constructor() {
        super(...arguments);
        this.channel = this.props[0];
    }
}
exports.DiscordWebhookUpdateEvent = DiscordWebhookUpdateEvent;
//# sourceMappingURL=DiscordEvents.js.map