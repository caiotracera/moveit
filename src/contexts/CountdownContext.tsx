import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { ChallengesContext } from './ChallengesContext'

type CountdownContextData = {
  timeLeftInPercent: number
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

type CountdownProviderProps = {
  children?: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [timeLeft, setTimeLeft] = useState(0.1 * 60)
  const [time, setTime] = useState(0.1 * 60)
  const [timeLeftInPercent, setTimeLeftInPercent] = useState(100)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (isActive && timeLeft === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, timeLeft])

  useEffect(() => {
    setTimeLeftInPercent((timeLeft * 100) / time)
  }, [timeLeft, timeLeftInPercent, time])

  return (
    <CountdownContext.Provider
      value={{
        timeLeftInPercent,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
