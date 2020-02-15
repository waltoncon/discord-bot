import { Message } from "discord.js";
import DiscordEventHandler from "../helpers/DiscordEventHandler";
import { DiscordMessageEvent } from "./DiscordEvents";

/**
 * @memberOf DiscordEvents
 * @description Shortify any links that appear in a message, if the message is
 * made shorter then the original message will be removed and the bot will send
 * a shortened version
 */
class LinkShortifier extends DiscordEventHandler implements DiscordMessageEvent {
    message: Message;
    handle() {

    }
}

export default LinkShortifier;
