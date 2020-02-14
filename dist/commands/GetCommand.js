"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../helpers/Log");
const Command_1 = require("../helpers/Command");
class StubCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = 'get';
        this.signature = '<key>';
        this.description = 'Get the value of an environment variable';
        this.options = [];
        this.parse(input);
    }
    handle() {
        if (this.args.length !== 1) {
            this.help();
            return;
        }
        Log_1.default.line(process.env[this.args[0]]);
    }
}
exports.default = StubCommand;
//# sourceMappingURL=GetCommand.js.map