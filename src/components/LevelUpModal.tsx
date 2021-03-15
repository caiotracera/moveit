import { useContext } from 'react'
import { FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

import { ChallengesContext } from '../contexts/ChallengesContext'

import CloseIcon from '../assets/icons/close.svg'
import { Container, Content, Overlay } from '../styles/components/LevelUpModal'
import { randomBytes } from 'crypto'

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

        <Link href={`/banner/${randomBytes(10).toString('hex')}`}>
          <a target="_blank">
            <button type="button" id="twitterButton">
              Compartilhar no Twitter <FaTwitter />
            </button>
          </a>
        </Link>

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
