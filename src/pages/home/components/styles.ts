import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  align-items: center;
  margin-right: 1.5rem;
  margin-bottom: 2.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }

  h3 {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'baloo 2', cursive;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    color: ${props => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme["yellow-ligth"]};
    border-radius: 100px;
  }
`

export const DescriptionCoffe = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${props => props.theme["base-label"]};
  text-align: center;
  margin-top: 0.5rem;
  margin: 0.5rem 1.25rem 0;
`

export const PurchaseContainer = styled.div`
  display: flex;
  margin: 2.0625rem 1.5rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.8125rem;

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    
    ::before {
      content: 'R$';
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 1.3;
      margin-right: 0.2rem;
    }
  }
`

export const SelectionQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;

      ::before {
        content: '';
        margin-right: 0;
      }
    }

    svg {
      color: ${props => props.theme.purple};
      font-weight: bold;

      :hover {
        color: ${props => props.theme["purple-dark"]};
        cursor: pointer;
      }
    }
  }

  button {
      border: 0;
      display: flex;
      padding: 0.5rem;
      border-radius: 6px;
      background: ${props => props.theme["purple-dark"]};
      color: ${props => props.theme.white};
      justify-content: center;
      align-items: center;

      :hover {
        background: ${props => props.theme.purple};
        cursor: pointer;
      }
    }
`