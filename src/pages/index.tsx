import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import { Container, LeftContainer, RightContainer } from '../styles/index'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Início - Move.it</title>
      </Head>
      <ExperienceBar />
      <Container>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContainer>
        <RightContainer>
          <ChallengeBox></ChallengeBox>
        </RightContainer>
      </Container>
    </div>
  )
}

export default Home
