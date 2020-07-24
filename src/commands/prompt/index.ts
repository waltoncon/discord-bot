import get from './get';
import set from './set';
import reset from './reset';

export default {
    description: "Details about the prompt",
    action: get.action,
    subcommands: {
        get,
        set,
        reset,
    }
}