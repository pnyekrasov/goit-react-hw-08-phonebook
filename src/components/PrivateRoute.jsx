import { useAuth } from 'hooks/userAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const toRedirect = !isLoggedIn && !isRefreshing;
  console.log(isLoggedIn, isRefreshing);

  return toRedirect ? <Navigate to={redirectTo} /> : Component;
};
