import styled from 'styled-components'

export const ShopSummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;

  h4 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
  gap: 1.5rem;
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.75rem;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
