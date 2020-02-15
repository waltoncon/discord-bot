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
class DiscordEventHandler {
    constructor(params) {
        Object.assign(this, params);
    }
    handle() { }
}
class MoveWaintingUsers {
    handle() {
    }
}
/**
 *
 * @param oldMember
 * @param newMember
 * @constructor
 */
const old = (oldMember, newMember) => {
    // @ts-ignore
    const channel = index_1.client.channels.get(process.env.TEXT_PRIMARY_ID);
    // @ts-ignore
    const waitingChannel = index_1.client.channels.get(process.env.VOICE_WAITING_ID);
    // channel.sendMessage(`${newMember.user.username} has joined ${newMember.voiceChannel.name}`);
    if (!waitingChannel) {
        return;
    }
    if (newMember.voiceChannel === undefined) {
        return;
    }
    if (newMember.voiceChannel.id === process.env.VOICE_PRIMARY_ID) {
        // Move all users from waiting lounge
        // let movedUsers =
        const members = waitingChannel.members.map((member) => __awaiter(void 0, void 0, void 0, function* () {
            yield member.setVoiceChannel(process.env.VOICE_PRIMARY_ID);
            // return .then(m => {
            //     const message = `Moved ${m.user.username} to main chat`;
            //     channel.send(message);
            //     console.log(message);
            //     return m
            // });
            // return member.user.username;
        }));
        // const formatter = new Intl.ListFormat();
        // console.log(members);
        // let response = '';
        // if (movedUsers.length >= 2) {
        //     var last = movedUsers.pop();
        //     response = movedUsers.join(', ') + ' and ' + last;
        //     console.log(response);
        // } else {
        //     response = movedUsers[0];
        // }
        // channel
    }
};
exports.default = MoveWaintingUsers;
//# sourceMappingURL=MoveWaitingUsers.js.map