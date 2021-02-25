import { useContext } from 'react'

import LevelIcon from '../assets/icons/level.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Container, UserInformation } from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <img src="https://github.com/caiotracera.png" alt="Caio Tracera" />
      <UserInformation>
        <strong>Caio Tracera</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </UserInformation>
    </Container>
  )
}
