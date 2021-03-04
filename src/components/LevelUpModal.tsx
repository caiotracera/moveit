import { useContext } from 'react'
import { FaTwitter } from 'react-icons/fa'

import { ChallengesContext } from '../contexts/ChallengesContext'

import CloseIcon from '../assets/icons/close.svg'
import { Container, Content, Overlay } from '../styles/components/LevelUpModal'
export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <Content>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level</p>
        </Content>

        <button type="button" onClick={() => {}} id="twitterButton">
          Compartilhar no Twitter <FaTwitter />
        </button>

        <button
          type="button"
          id="closeModal"
          onClick={() => closeLevelUpModal()}
        >
          <CloseIcon />
        </button>
      </Container>
    </Overlay>
  )
}
