import { DiscordReadyEvent } from "./DiscordEvents";
/**
 * @memberOf DiscordEvents
 */
declare class StartTerminal extends DiscordReadyEvent {
    handle(): Promise<void>;
}
export default StartTerminal;
