declare abstract class DiscordEventHandler {
    protected props: any;
    constructor(props: any);
    handle(): void;
}
export default DiscordEventHandler;
