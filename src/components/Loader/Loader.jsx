import { Watch } from 'react-loader-spinner';
import { StyledWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledWrapper>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledWrapper>
  );
};
