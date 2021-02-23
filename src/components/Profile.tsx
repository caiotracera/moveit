import { Container, UserInformation } from '../styles/components/Profile'

import LevelIcon from '../assets/icons/level.svg'

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/caiotracera.png" alt="Caio Tracera" />
      <UserInformation>
        <strong>Caio Tracera</strong>
        <p>
          <LevelIcon />
          Level 1
        </p>
      </UserInformation>
    </Container>
  )
}
