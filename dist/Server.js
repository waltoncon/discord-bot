"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("./Log");
const defaultKeys = [
    'NAME',
    'TEXT_PRIMARY_ID',
    'VOICE_PRIMARY_ID',
    'VOICE_WAITING_ID',
    'VOICE_AFK_ID',
];
class Server {
    static get() {
        Log_1.default.info(`Server set to ${process.env.DEFAULT_SERVER}`);
        defaultKeys.forEach(k => {
            Log_1.default.info(`${k}: ${process.env[k]}`);
        });
    }
    static switch(id) {
        const prefix = `SERVER_${id}_`;
        const vars = Object.keys(process.env).filter(k => {
            return k.startsWith(prefix);
        });
        if (vars.length === 0) {
            Log_1.default.warn(`Can't find server ${id}`);
            return;
        }
        defaultKeys.forEach(k => {
            delete process.env[k];
        });
        vars.forEach(k => {
            const key = k.replace(new RegExp(`^${prefix}`), '');
            process.env[key] = process.env[k];
        });
        process.env.DEFAULT_SERVER = id;
        Log_1.default.info(`Current server set to ${id}: ${process.env[prefix + 'NAME']}`);
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map