import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

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
  padding: 1.5rem 2rem;

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
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    padding: 1.5rem 2rem;
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
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-top: 1px solid var(--gray-line);

      &:first-child {
        border-right: 1px solid var(--gray-line);
      }

      &:last-child {
        border-left: 1px solid var(--gray-line);
      }

      font-size: 1.25rem;
      font-weight: 600;
      transition: all 0.2s;

      &.challengeFailedButton {
        color: var(--red);
        background: var(--fail-red);

        &:hover {
          background: var(--red);
          color: var(--white);
        }
      }

      &.challengeSucceededButton {
        color: var(--green);
        background: var(--success-green);

        &:hover {
          background: var(--green);
          color: var(--white);
        }
      }
    }
  }
`
