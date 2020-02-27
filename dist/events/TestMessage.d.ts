import { DiscordMessageEvent } from "./DiscordEvents";
/**
 * @memberOf DiscordEvents
 * @description Shortify any links that appear in a message, if the message is
 * made shorter then the original message will be removed and the bot will send
 * a shortened version
 */
declare class TestMessage extends DiscordMessageEvent {
    handle(): void;
}
export default TestMessage;
