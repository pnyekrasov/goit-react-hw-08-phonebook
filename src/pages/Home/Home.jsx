import { IconContext } from 'react-icons';
import { FcMultipleSmartphones } from 'react-icons/fc';

import { HomeList, StyledDiv } from './Home.styled';

export default function Home() {
  return (
    <HomeList>
      <StyledDiv>
        <h1>Phonebook manager welcome page&nbsp;</h1>
        <IconContext.Provider
          value={{ size: '50px', style: { verticalAlign: 'middle' } }}
        >
          <FcMultipleSmartphones />
        </IconContext.Provider>
      </StyledDiv>
      <h2>
        To get started, go to the Log In or Register page (if you are not
        registered), please!
      </h2>
    </HomeList>
  );
}
