import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as styled from './styles'
import React, { useState } from 'react'

interface test extends EventTarget {
  innerText: string
}

export interface SelectPaymentEvent
  extends React.MouseEventHandler<HTMLElement> {
  target: test
}

export function CheckoutForm() {
  const [paymentOption, setPaymentOption] = useState('')

  const handleSelectPaymentOption = ({
    target: { innerText },
  }: SelectPaymentEvent) => {
    setPaymentOption(innerText)
  }

  return (
    <styled.CheckoutFormContainer>
      <h4>Complete seu pedido</h4>
      <styled.AddressInfoContainer>
        <styled.InstructionAddressContainer>
          <MapPinLine size={22} />
          <div>
            <span>Esdereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </styled.InstructionAddressContainer>

        <styled.FormContainer>
          <styled.CepInput type="text" placeholder="CEP" />
          <styled.StreetInput type="text" placeholder="Rua" />
          <styled.NumberInput type="text" placeholder="Número" />
          <styled.ComplementInput type="text" placeholder="Complemento" />
          <styled.DistrictInput type="text" placeholder="Bairro" />
          <styled.CityInput type="text" placeholder="Cidade" />
          <styled.StateInput type="text" placeholder="UF" />
        </styled.FormContainer>
      </styled.AddressInfoContainer>

      <styled.PaymentOptionsContainer>
        <styled.InstructionPaymentContainer>
          <CurrencyDollar size={22} />
          <div>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na estrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </styled.InstructionPaymentContainer>
        <styled.OptionsContainer>
          <styled.PaymentOption
            onClick={(event) =>
              handleSelectPaymentOption(event as SelectPaymentEvent)
            }
            selected={paymentOption === 'CARTÃO DE CRÉDITO'}
          >
            <CreditCard size={16} />
            <span>Cartão de Crédito</span>
          </styled.PaymentOption>
          <styled.PaymentOption
            onClick={(event) =>
              handleSelectPaymentOption(event as SelectPaymentEvent)
            }
            selected={paymentOption === 'CARTÃO DE DÉBITO'}
          >
            <Bank size={16} />
            <span>Cartão de Débito</span>
          </styled.PaymentOption>
          <styled.PaymentOption
            onClick={(event) =>
              handleSelectPaymentOption(event as SelectPaymentEvent)
            }
            selected={paymentOption === 'DINHEIRO'}
          >
            <Money size={16} />
            <span>Dinheiro</span>
          </styled.PaymentOption>
        </styled.OptionsContainer>
      </styled.PaymentOptionsContainer>
    </styled.CheckoutFormContainer>
  )
}
