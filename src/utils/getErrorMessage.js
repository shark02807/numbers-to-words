import {
    ERROR_MESSAGE_START,
    ERROR_MESSAGE_END
} from '../constants/errors.js';

export const getErrorMessage = (message) => {
    return `${ERROR_MESSAGE_START} ${message ? `${message} ` : ''}${ERROR_MESSAGE_END}`;
}
