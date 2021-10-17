import React from 'react';
import { HomeContainer, HomeBg, HomeContent, HomeH1, HomeP } from './styles/HomePageStyles';

const HomePage = () => {
  return(
    <HomeContainer>
      <HomeBg>
      </HomeBg>
      <HomeContent>
        <HomeH1>
          Beer List
        </HomeH1>
        <HomeP>
          Check your favorite beer's detailed information
        </HomeP>
      </HomeContent>
    </HomeContainer>
  )
}

export default HomePage