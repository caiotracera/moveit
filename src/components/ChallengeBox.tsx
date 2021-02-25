import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import {
  ChallengeActive,
  ChallengeNotActive,
  Container
} from '../styles/components/ChallengeBox'

import LevelUp from '../assets/icons/level-up.svg'
import BodyIcon from '../assets/icons/body.svg'
import EyeIcon from '../assets/icons/eye.svg'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            {activeChallenge.type === 'body' ? <BodyIcon /> : <EyeIcon />}
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
              onClick={completeChallenge}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>
            Inicie um ciclo <br />
            para receber desafios a<br />
            serem completados
          </strong>
          <p>
            <LevelUp />
            <span>Complete-os, ganhe experiência e avance de level.</span>
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}
