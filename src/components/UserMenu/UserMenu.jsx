import { useAuth } from 'hooks/userAuth';
import { Box, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Text>Welcome, {user.name}</Text>
      <button type="button">Log Out</button>
    </Box>
  );
};
