import config from "../../helpers/config";
import create from "./create";

export default {
    description: "Send a message to a text channel",
    action: () => console.log(config.get('lounges')),
    subcommands: {
        create,
    }
}