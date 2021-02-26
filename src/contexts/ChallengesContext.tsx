import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { LevelUpModal } from '../components/LevelUpModel'
import challenges from '../assets/data/challenges.json'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengeContextData = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  setIsLevelModalOpen: (boolean) => void
}

type ChallengesProviderProps = {
  children?: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}
export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({
  children,
  ...userInfo
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(userInfo.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    userInfo.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    userInfo.challengesCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
    setIsLevelModalOpen(true)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio! 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
        icon: '/favicon.png'
      })
    }

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('currentExperience', String(currentExperience))
  }, [level, challengesCompleted, currentExperience])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        setIsLevelModalOpen
      }}
    >
      {children}
      {isLevelModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
