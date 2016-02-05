import { createAction, handleActions } from '../reduxActionsSequence';

const FETCH_GIT_HUB_DATA = 'FETCH_GIT_HUB_DATA';

export const fetchGitHubData = createAction(FETCH_GIT_HUB_DATA, searchTextField => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{name: 'jesse', status: 'married'}]);
        }, 3000);
    });
});

export default handleActions({

    [FETCH_GIT_HUB_DATA]: {
        start(state, action) {
            state = Object.assign({}, state, {
                list: [],
                fetching: {
                  status: 'loading'
                }
            });
            return state;
        },
        next(state, action) {
            state = Object.assign({}, state, {
                list: action.payload,
                fetching: {
                  status: 'done'
                }
            });
            return state;
        },
        throw(state, action) {
            state = Object.assign({}, state, {
                status: {
                    code: 'error',
                    text: 'Completed with error: ' + action.payload
                },
                result: null
            });
            return state;
        }
    }

}, {});
