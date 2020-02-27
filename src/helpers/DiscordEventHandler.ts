abstract class DiscordEventHandler {
    protected props: any;
    constructor(props) {
        this.props = props;
    }
    handle() {}
}

export default DiscordEventHandler;
