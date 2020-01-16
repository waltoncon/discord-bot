import Log from "./Log";

const defaultKeys = [
    'NAME',
    'TEXT_PRIMARY_ID',
    'VOICE_PRIMARY_ID',
    'VOICE_WAITING_ID',
    'VOICE_AFK_ID',
];

export default class Server {
    static get() {
        Log.info(`Server set to ${process.env.DEFAULT_SERVER}`);
        defaultKeys.forEach(k => {
            Log.info(`${k}: ${process.env[k]}`);
        });
    }

    static switch(id) {
        const prefix = `SERVER_${id}_`;

        const vars = Object.keys(process.env).filter(k => {
            return k.startsWith(prefix);
        });

        if (vars.length === 0) {
            Log.warn(`Can't find server ${id}`);
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

        Log.info(`Current server set to ${id}: ${process.env[prefix + 'NAME']}`);
    }
}
