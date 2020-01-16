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
class SayCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = 'say';
        this.description = 'Get the bot to say something';
        this.options = [
            { long: 'id', args: true },
            { long: 'tts' },
        ];
        this.parse(input);
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.params.id || process.env.TEXT_PRIMARY_ID;
            if (id === undefined) {
                Log_1.default.error('You need to set TEXT_PRIMARY_ID in your .env or supply an ID');
                return;
            }
            // @ts-ignore
            const channel = this.client.channels.get(id);
            if (channel === undefined) {
                Log_1.default.error(`Can't find the channel with id of ${id}`);
                return;
            }
            Log_1.default.line('Sending message');
            const message = this.args.join(' ');
            yield channel.send(message, {
                tts: this.params.tts
            });
            Log_1.default.line(`Sent: ${message}`);
        });
    }
}
exports.default = SayCommand;
//# sourceMappingURL=SayCommand.js.map