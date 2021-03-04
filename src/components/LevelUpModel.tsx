import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import CloseIcon from '../assets/icons/close.svg'

import { Container, Overlay } from '../styles/components/LevelUpModal'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={() => closeLevelUpModal()}>
          <CloseIcon />
        </button>
      </Container>
    </Overlay>
  )
}