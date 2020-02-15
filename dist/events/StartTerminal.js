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
const Commands_1 = require("../config/Commands");
const DiscordEventHandler_1 = require("../helpers/DiscordEventHandler");
const index_1 = require("../index");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
class StartTerminal extends DiscordEventHandler_1.default {
    constructor(params) {
        super(params);
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            readline.on('SIGINT', () => {
                Log_1.default.warn('\nExiting');
                process.exit();
            });
            yield readline.question('> ', (input) => __awaiter(this, void 0, void 0, function* () {
                input = input.trim();
                if (input === "exit") {
                    Log_1.default.warn('Exiting');
                    process.exit();
                }
                const name = input.split(' ', 2)[0];
                if (Object.keys(Commands_1.default).includes(name)) {
                    try {
                        yield new Commands_1.default[name](input, { client: index_1.client }).handle();
                    }
                    catch (e) {
                        Log_1.default.error(`An error occurred while processing this command`);
                        Log_1.default.info(e.stack + '\n');
                    }
                }
                else if (name !== '') {
                    Log_1.default.warn(`command not found: ${name}`);
                }
                yield this.handle();
            }));
        });
    }
}
exports.default = StartTerminal;
//# sourceMappingURL=StartTerminal.js.map