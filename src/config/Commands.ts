export default {
    say: require('../commands/SayCommand').default,
    join: require('../commands/JoinCommand').default,
    get: require('../commands/GetCommand').default,
    set: require('../commands/SetCommand').default,
    server: require('../commands/ServerCommand').default,
    play: require('../commands/PlayCommand').default,
    leave: require('../commands/LeaveCommand').default,
};
