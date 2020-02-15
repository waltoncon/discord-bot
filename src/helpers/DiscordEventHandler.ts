/**
 * @abstract
 */
class DiscordEventHandler {
    constructor(params) {
        Object.assign(this, params);
        console.log(params);
    }
    handle() {}
}

export default DiscordEventHandler;
