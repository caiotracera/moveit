import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import {
  Container,
  ExperienceBar as XpBar
} from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <Container>
      <span>0 xp</span>
      <XpBar>
        <div style={{ width: `${percentToNextLevel || 0}%` }} />
        <span style={{ left: `${percentToNextLevel || 0}%` }}>
          {currentExperience} xp
        </span>
      </XpBar>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}
