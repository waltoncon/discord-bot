import config from "./config";
import {term} from "./terminal";

export const defaultPrompt = '> ';

export const generatePrompt = string => string
    .replace(':name', 'Discord Bot')
    .replace(':server', 'Test Server')

export const refreshPrompt = () => {
    const prompt = config.get('prompt');
    const newPrompt = generatePrompt(prompt);
    term.setDelimiter(newPrompt);
}

export const setPrompt = prompt => {
    config.set('prompt', prompt);
    refreshPrompt()
}

export const getPrompt = () => {
    return config.get('prompt');
}

export const resetPrompt = () => {
    console.log(getPrompt());
    setPrompt(defaultPrompt);
    refreshPrompt()
}
