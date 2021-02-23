import {
  Container,
  MinutesContainer,
  SecondsContainer
} from '../styles/components/Countdown'

export function Countdown() {
  return (
    <Container>
      <MinutesContainer>
        <span>2</span>
        <span>5</span>
      </MinutesContainer>
      <span>:</span>
      <SecondsContainer>
        <span>0</span>
        <span>0</span>
      </SecondsContainer>
    </Container>
  )
}
