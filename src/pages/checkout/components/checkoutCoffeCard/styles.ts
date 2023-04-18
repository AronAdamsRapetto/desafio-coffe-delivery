import styled from 'styled-components'

export const CardCoffe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3rem;
  width: 100%;

  > div:first-child {
    display: flex;
    gap: 1.25rem;
  }

  img {
    max-width: 4rem;
    max-height: 4rem;
  }

  > span:last-child {
    min-width: max-content;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.3;
  }
`

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span:first-child {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const QuantityControllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  max-height: 2rem;

  button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
`

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
