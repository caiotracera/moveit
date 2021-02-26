import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import { Container, LeftContainer, RightContainer } from '../styles'

type HomeProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className="container">
        <Head>
          <title>Início - Move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <Container>
            <LeftContainer>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </LeftContainer>
            <RightContainer>
              <ChallengeBox />
            </RightContainer>
          </Container>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
