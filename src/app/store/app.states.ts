import * as auth from './reducer/auth.reducer';

import { User } from '../models/user';

// export interface State {
//     // is a user authenticated?
//     isAuthenticated: boolean;
//     // if authenticated, there should be a user object
//     user: User | null;
//     // error message
//     errorMessage: string | null;
// }
export interface AppState {
    authState: auth.State;
}

// export const reducers = {
//     auth: auth.reducer
//   };