// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { Box, Text } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <Box>
      <Text>Welcome</Text>
      {/* <Text>Welcome, {user.name}</Text> */}
      <button
        type="button"
        onClick={values => {
          console.log(values);
        }}
      >
        {/* <button type="button" onClick={() => dispatch(logOut())}> */}
        Log Out
      </button>
    </Box>
  );
};
