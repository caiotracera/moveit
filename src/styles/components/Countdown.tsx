import styled from 'styled-components'

export const Container = styled.div`
  button {
    position: relative;
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: var(--blue);
    color: var(--white);

    font-size: 1.5rem;
    font-weight: 600;
    transition: background-color 0.2s;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 1rem;
      }
    }

    .timeLeftBar {
      position: absolute;
      bottom: 0;
      left: 0;

      height: 4px;
      background: var(--green);
      transition: width 0.2s;
    }

    &:disabled {
      background: var(--white);
      color: var(--text);
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: var(--blue-dark);
    }

    &.countdownButtonActive {
      background-color: var(--white);
      color: var(--title);

      &:not(:disabled):hover {
        background: var(--red);
        color: var(--white);
      }
    }
  }
`

export const CountDownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`
