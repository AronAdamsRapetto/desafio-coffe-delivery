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

export const Separator = styled.hr`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.75rem;
`

const BaseValueLineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  line-height: 1.3;
`

export const TotalItemsValueContainer = styled(BaseValueLineContainer)`
  > span:first-child {
    font-size: 0.875rem;
  }

  > span:last-child {
    font-size: 1rem;
  }
`

export const DeliveryValueContainer = styled(BaseValueLineContainer)`
  > span:first-child {
    font-size: 0.875rem;
  }

  > span:last-child {
    font-size: 1rem;
  }
`

export const TotalValueContainer = styled(BaseValueLineContainer)`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SubmitButton = styled.button`
  border: none;
  background: ${(props) => props.theme.yellow};
  width: 100%;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: background 0.1s;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }
`

export const EmptyCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 23rem;
`
