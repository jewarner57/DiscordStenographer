function onVoiceStateUpdate(client, oldState, newState) {
    console.log(`Voice state changed - ${new Date()}`);

    const oldStateMembers = getMembers(oldState);
    const newStateMembers = getMembers(newState);

    // the bot should leave the voice channel if it's empty
    if (oldStateMembers.length > 0 && newStateMembers.length === 0) {

    }
}

function getMembers(channelState) {
    if (!channelState.channel) {
        return [];
    }

    const channelUsers = Array.from(channelState.channel.members.values()).map((member) => {
        return member.user.id
    })

    return channelUsers
}

exports.onVoiceStateUpdate = onVoiceStateUpdate