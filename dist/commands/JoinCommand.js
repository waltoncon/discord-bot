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
const Log_1 = require("../Log");
const Command_1 = require("../Command");
class JoinCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = 'join';
        this.description = 'Join a voice channel in a server';
        this.options = [
            { long: 'name', args: true }
        ];
        this.parse(input);
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const channel = this.client.channels.find((channel) => {
                return channel.type === 'voice'
                    && (channel['id'] === this.args[0]
                        || channel['name'] === this.args[0]);
            });
            Log_1.default.info(`Joining ${channel.name} [${channel.id}]`);
            yield channel.join();
            Log_1.default.info(`Joined ${channel.name} [${channel.id}]`);
        });
    }
}
exports.default = JoinCommand;
//# sourceMappingURL=JoinCommand.js.map