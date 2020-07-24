// @ts-ignore
import pkg from "../../package.json";
import ConfigStore from 'configstore';
import {defaultPrompt} from "./prompt";

const defaults = {
    foo: 'bar',
    prompt: defaultPrompt
};

export default new ConfigStore(pkg.name, defaults);