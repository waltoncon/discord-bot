"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../helpers/Log");
const Command_1 = require("../helpers/Command");
const fs = require("fs");
class StubCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = null;
        this.description = 'Description';
        this.options = [];
        this.parse(input);
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.args[0];
            if (this.args.length !== 1) {
                Log_1.default.warn(`A path is required`);
                return;
            }
            if (!fs.existsSync(path)) {
                Log_1.default.warn(`${path} does not exist`);
                return;
            }
            let connection;
            if (this.params.id) {
                const identifier = this.params.id;
                connection = this.client.voiceConnections.find((vc) => {
                    return vc.channel.type === 'voice'
                        && (vc.channel['id'] === identifier
                            || vc.channel['name'] === identifier
                            || vc.channel['name'].toLowerCase() === identifier.toLowerCase());
                });
            }
            else {
                connection = this.client.voiceConnections.first();
            }
            if (!connection) {
                Log_1.default.warn(`Bot is not connected to any voice channels`);
                return;
            }
            Log_1.default.info(`Playing '${path}' on ${connection.channel.guild.name} / ${connection.channel.name}`);
            yield connection.playFile(path, {
                seek: -5,
                volume: this.params.volume
            });
            Log_1.default.info(`Finished playing '${path}`);
        });
    }
}
exports.default = StubCommand;
//# sourceMappingURL=PlayCommand.js.map