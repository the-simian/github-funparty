import { createAction, handleActions } from '../reduxActionsSequence';

const FETCH_GIT_HUB_DATA = 'FETCH_GIT_HUB_DATA';

export const fetchGitHubData = createAction(FETCH_GIT_HUB_DATA, searchTextField => {

    const gh = 'https://api.github.com';
    const users = gh + '/users';
    const owner = users + '/' + searchTextField;
    const repos = owner + '/repos';
    const ghJson = 'application/vnd.github.v3+json'

    return fetch(repos, {
      method: 'get',
      headers: {
        'Accept': ghJson,
        'User-Agent': 'request'
      }
    }).then(response => {
      return response.json();
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

            console.log(action.payload)

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
