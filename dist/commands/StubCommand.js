"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../helpers/Log");
const Command_1 = require("../helpers/Command");
class StubCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = null;
        this.description = 'Description';
        this.options = [];
        this.parse(input);
    }
    handle() {
        Log_1.default.line('Example Command');
    }
}
exports.default = StubCommand;
//# sourceMappingURL=StubCommand.js.map