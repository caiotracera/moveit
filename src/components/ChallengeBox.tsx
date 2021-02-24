import {
  ChallengeActive,
  ChallengeNotActive,
  Container
} from '../styles/components/ChallengeBox'

import LevelUp from '../assets/icons/level-up.svg'
import BodyIcon from '../assets/icons/body.svg'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <Container>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>
          <main>
            <BodyIcon />
            <strong>Exercite-se</strong>
            <p>
              É agora Caião, bora lá meu parça. Caminhe por 3 minutos e estique
              suas pernas pra você ficar saudável.
            </p>
          </main>

          <footer>
            <button type="button" className="challengeFailedButton">
              Falhei
            </button>
            <button type="button" className="challengeSucceededButton">
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
