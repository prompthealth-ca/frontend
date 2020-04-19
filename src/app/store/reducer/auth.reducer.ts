import { AuthActionTypes, All } from '../actions/auth.actions';
import { User } from '../../models/user';
export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};
// export function reducer(state = initialState, action: All): State {
//     switch (action.type) {
//       case AuthActionTypes.LOGIN_SUCCESS: {
//         return {
//           ...state,
//           isAuthenticated: true,
//           user: {
//             token: action.data.access_token,
//             email: action.data.email
//           },
//           errorMessage: null
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   }