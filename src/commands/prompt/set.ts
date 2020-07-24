import config from "../../helpers/config";
import {setPrompt} from "../../helpers/prompt";

export default {
    description: "View the current prompt string",
    parameters: ['prompt'],
    action: ({prompt}) => setPrompt(prompt)
}