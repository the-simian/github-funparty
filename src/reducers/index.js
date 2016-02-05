import githubRepoFormReducer from '../actions/GithubRepo/GithubRepoFormActions.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    githubData: githubRepoFormReducer
});
export default rootReducer;
