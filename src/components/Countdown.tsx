import { useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext'
import { Container, CountDownContainer } from '../styles/components/Countdown'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <Container>
      <CountDownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountDownContainer>

      {hasFinished ? (
        <button disabled>Ciclo encerrado</button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className="countdownButtonActive"
            >
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </Container>
  )
}
