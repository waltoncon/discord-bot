"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../helpers/Log");
const Command_1 = require("../helpers/Command");
class StubCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = 'set';
        this.signature = '<key> <value>';
        this.description = 'Set an environment variable for the current process';
        this.options = [];
        this.parse(input);
    }
    handle() {
        if (this.args.length !== 2) {
            this.help();
            return;
        }
        process.env[this.args[0]] = this.args[1];
        Log_1.default.line(`Set "${this.args[0]}" to "${this.args[1]}"`);
    }
}
exports.default = StubCommand;
//# sourceMappingURL=SetCommand.js.map