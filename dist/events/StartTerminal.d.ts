import DiscordEventHandler from "../helpers/DiscordEventHandler";
import { DiscordReadyEvent } from "./DiscordEvents";
declare class StartTerminal extends DiscordEventHandler implements DiscordReadyEvent {
    test: object;
    constructor(params: any);
    handle(): Promise<void>;
}
export default StartTerminal;
