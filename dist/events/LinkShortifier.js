"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordEvents_1 = require("./DiscordEvents");
/**
 * @memberOf DiscordEvents
 * @description Shortify any links that appear in a message, if the message is
 * made shorter then the original message will be removed and the bot will send
 * a shortened version
 */
class LinkShortifier extends DiscordEvents_1.DiscordMessageEvent {
    handle() {
        console.log(`Message content:`, this.message.content);
    }
}
exports.default = LinkShortifier;
//# sourceMappingURL=LinkShortifier.js.map