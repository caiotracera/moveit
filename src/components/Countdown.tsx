import { useContext } from 'react'
import { FiX, FiPlay } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'

import { CountdownContext } from '../contexts/CountdownContext'
import { Container, CountDownContainer } from '../styles/components/Countdown'

export function Countdown() {
  const {
    timeLeftInPercent,
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
        <button disabled>
          <span>
            Ciclo encerrado
            <FaCheckCircle color={'var(--green)'} width={14} height={14} />
          </span>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className="countdownButtonActive"
            >
              <span>
                Abandonar ciclo <FiX width={14} height={14} />
              </span>
              <div
                className="timeLeftBar"
                style={{ width: `${timeLeftInPercent}%` }}
              />
            </button>
          ) : (
            <button type="button" onClick={startCountdown}>
              <span>
                Iniciar um ciclo <FiPlay width={14} height={14} />
              </span>
            </button>
          )}
        </>
      )}
    </Container>
  )
}
