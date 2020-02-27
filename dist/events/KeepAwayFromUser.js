"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const DiscordEvents_1 = require("./DiscordEvents");
/**
 * @memberOf DiscordEvents
 */
class KeepAwayFromUser extends DiscordEvents_1.DiscordVoiceStateUpdateEvent {
    handle() {
        const generalChannel = index_1.client.channels.get(process.env.VOICE_PRIMARY_ID);
        const keepAwayDestChannel = index_1.client.channels.get(process.env.KEEP_AWAY_DEST);
        if (!keepAwayDestChannel) {
            return;
        }
        if (this.newMember.id !== process.env.KEEP_AWAY_USER) {
            return;
        }
        if (this.newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
            // Move all users from waiting lounge
            // let movedUsers =
            const members = generalChannel.members.forEach((member) => __awaiter(this, void 0, void 0, function* () {
                if (member.id !== process.env.KEEP_AWAY_USER) {
                    yield member.setVoiceChannel(process.env.KEEP_AWAY_DEST);
                }
            }));
        }
    }
}
exports.default = KeepAwayFromUser;
//# sourceMappingURL=KeepAwayFromUser.js.map