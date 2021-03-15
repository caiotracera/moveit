import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.5rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  button#closeModal {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }

  button#twitterButton {
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-top: 1px solid var(--gray-line);

    background: var(--twitter);
    color: var(--blue-twitter);
    transition: all 0.2s;

    font-size: 20px;

    svg {
      margin-left: 1rem;
    }

    &:hover {
      background: var(--blue-twitter);
      color: var(--white);
    }
  }
`

export const Content = styled.div`
  padding: 2rem 3rem;
`
