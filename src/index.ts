import './bootstrap';
import {term} from './helpers/terminal';
import commands from './commands';
import {refreshPrompt} from "./helpers/prompt";

refreshPrompt();

for (const [name, command] of Object.entries(commands)) {
    term.addCommand(name, command);
}
term.show();
