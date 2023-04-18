import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as styled from './styles'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CoffeContext } from '../../../../context/CoffeContext'

interface EventTargetWithInnerText extends EventTarget {
  innerText: string
}

export interface SelectPaymentEvent
  extends React.MouseEventHandler<HTMLElement> {
  target: EventTargetWithInnerText
}

export function CheckoutForm() {
  const [paymentOption, setPaymentOption] = useState('')
  const { updateDeliveryInformation } = useContext(CoffeContext)
  const { register, handleSubmit } = useForm()

  const handleSelectPaymentOption = ({
    target: { innerText },
  }: SelectPaymentEvent) => {
    setPaymentOption(innerText)
  }

  const setDeliveryAddress = (data: any) => {
    if (paymentOption) {
      updateDeliveryInformation({ payment: paymentOption, ...data })
    }
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

        <styled.FormContainer
          id="DeliveryForm"
          onSubmit={handleSubmit(setDeliveryAddress)}
        >
          <styled.CepInput
            type="text"
            required
            placeholder="CEP"
            {...register('cep')}
          />
          <styled.StreetInput
            type="text"
            required
            placeholder="Rua"
            {...register('street')}
          />
          <styled.NumberInput
            type="text"
            required
            placeholder="Número"
            {...register('number')}
          />
          <styled.ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <styled.DistrictInput
            type="text"
            required
            placeholder="Bairro"
            {...register('district')}
          />
          <styled.CityInput
            type="text"
            required
            placeholder="Cidade"
            {...register('city')}
          />
          <styled.StateInput
            type="text"
            required
            placeholder="UF"
            {...register('uf')}
          />
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
