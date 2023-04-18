import styled, { css } from 'styled-components'
import { SelectPaymentEvent } from './CheckoutForm'

interface PaymentOptionProps {
  selected: boolean
  onClick: (event: SelectPaymentEvent) => void
}

export const CheckoutFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;

  h4 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const BaseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  max-width: 40rem;
`

export const AddressInfoContainer = styled(BaseContentContainer)``

const BaseInstructionContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    > span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
    }

    > span:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const InstructionAddressContainer = styled(BaseInstructionContainer)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

const BaseInput = styled.input`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.3;
`

export const CepInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 1;
`

export const StreetInput = styled(BaseInput)`
  grid-column: 1 / span 3;
  grid-row: 2;
`

export const NumberInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 3;
`

export const ComplementInput = styled(BaseInput)`
  grid-column: 2 / 4;
  grid-row: 3;
`

export const DistrictInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 4;
`

export const CityInput = styled(BaseInput)`
  grid-column: 2;
  grid-row: 4;
`

export const StateInput = styled(BaseInput)`
  grid-column: 3;
  grid-row: 4;
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  width: 100%;
  gap: 1rem 0.75rem;
`

export const PaymentOptionsContainer = styled(BaseContentContainer)``

export const InstructionPaymentContainer = styled(BaseInstructionContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentOption = styled.button<PaymentOptionProps>`
  border: none;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  line-height: 1.6;
  width: 11.2rem;
  text-transform: uppercase;

  ${(props) => {
    if (props.selected) {
      return css`
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      `
    }

    return css`
      background: ${(props) => props.theme['base-button']};
    `
  }}

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;
  }
`
