import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.4;
    margin-top: 3rem;

    svg {
      width: 20%;
      transform: scale(0.5);
    }

    span {
      max-width: 70%;
    }
  }
`

export const ChallengeActive = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
      max-width: 19rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;

      &.challengeFailedButton {
        background: var(--red);
      }

      &.challengeSucceededButton {
        background: var(--green);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
