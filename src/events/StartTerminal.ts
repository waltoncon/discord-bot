import Log from "../helpers/Log";
import Commands from "../config/Commands";
import * as repl from "repl";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const handle = async (client) => {

    readline.on('SIGINT', () => {
        Log.warn('\nExiting');
        process.exit();
    });

    await readline.question('> ', async (input) => {
        input = input.trim();

        if (input === "exit") {
            Log.warn('Exiting');
            process.exit();
        }

        const name = input.split(' ', 2)[0];

        if (Object.keys(Commands).includes(name)) {
            try {
                await new Commands[name](input, { client }).handle();
            } catch (e) {
                Log.error(`An error occurred while processing this command`);
                Log.info(e.stack + '\n')
            }
        } else if (name !== '') {
            Log.warn(`command not found: ${name}`);
        }

        await handle(client);
    })
};

export default handle;