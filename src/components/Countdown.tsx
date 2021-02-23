import { Container, CountDownContainer } from '../styles/components/Countdown'

export function Countdown() {
  return (
    <Container>
      <CountDownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </CountDownContainer>

      <button type="button">Iniciar um ciclo</button>
    </Container>
  )
}
