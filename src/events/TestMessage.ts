import { DiscordMessageEvent } from "./DiscordEvents";

/**
 * @memberOf DiscordEvents
 * @description Shortify any links that appear in a message, if the message is
 * made shorter then the original message will be removed and the bot will send
 * a shortened version
 */
class TestMessage extends DiscordMessageEvent {
    handle() {
        console.log(`Message content:`, this.message);
    }
}

export default TestMessage;
