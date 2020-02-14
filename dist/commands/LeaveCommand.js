"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../helpers/Log");
const Command_1 = require("../helpers/Command");
class LeaveCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = null;
        this.description = 'Leave the voice channel provided';
        this.options = [];
        this.parse(input);
    }
    handle() {
        const identifier = this.args[0];
        if (this.args.length !== 1) {
            Log_1.default.warn('An identifier is required');
            return;
        }
        const connection = this.client.voiceConnections.find((vc) => {
            return vc.channel.type === 'voice'
                && (vc.channel['id'] === identifier
                    || vc.channel['name'] === identifier
                    || vc.channel['name'].toLowerCase() === identifier.toLowerCase());
        });
        Log_1.default.info(`Leaving ${connection.channel.guild.name} / ${connection.channel.name}`);
        connection.channel.leave();
        Log_1.default.info(`Left channel`);
    }
}
exports.default = LeaveCommand;
//# sourceMappingURL=LeaveCommand.js.map