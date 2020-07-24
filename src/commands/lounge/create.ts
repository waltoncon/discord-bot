import config from "../../helpers/config";

export default {
    description: "View the current prompt string",
    parameters: ['voiceChannel', 'loungeChannel'],
    action: params => config.set(`lounges.${params.voiceChannel}`, params.loungeChannel)
}