import { useAuth } from 'hooks/userAuth';
import { Box, Text } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box>
      <Text>Welcome, {user.name}</Text>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </Box>
  );
};
