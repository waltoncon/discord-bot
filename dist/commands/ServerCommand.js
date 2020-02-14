"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../helpers/Command");
const Server_1 = require("../helpers/Server");
require('console.table');
class ServerCommand extends Command_1.default {
    constructor(input, props) {
        super(input, props);
        this.name = 'server';
        this.signature = '[set|get] [_|id]';
        this.description = 'Change the currently active server';
        this.options = [];
        this.parse(input);
    }
    handle() {
        if (!['get', 'set'].includes(this.args[0])) {
            this.help();
            return;
        }
        if (this.args[0] === 'set') {
            Server_1.default.switch(this.args[1]);
        }
        if (this.args[0] === 'get') {
            const data = Server_1.default.get();
            console.table(data);
        }
    }
}
exports.default = ServerCommand;
//# sourceMappingURL=ServerCommand.js.map