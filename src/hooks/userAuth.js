import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
