import config from "../../helpers/config";

export default {
    description: "View the current prompt string",
    action: () => console.log(`Current prompt: '${config.get('prompt')}'`)
}