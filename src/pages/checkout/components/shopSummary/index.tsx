import { useContext } from 'react'
import { CoffeContext } from '../../../../context/CoffeContext'
import { ShoppingCart } from 'phosphor-react'
import { CheckoutCoffeCard } from '../checkoutCoffeCard'
import {
  DeliveryValueContainer,
  EmptyCarContainer,
  Separator,
  ShopSummaryContainer,
  SubmitButton,
  SummaryContainer,
  TotalItemsValueContainer,
  TotalValueContainer,
  ValuesContainer,
} from './styles'

export function ShopSummary() {
  const { shoppingCart } = useContext(CoffeContext)

  const isSubmitButtonDisabled = shoppingCart.length === 0
  const totalItemsPrice = shoppingCart.reduce(
    (priceAcc, { price, qtd }) => (priceAcc += price * qtd),
    0,
  )

  return (
    <ShopSummaryContainer>
      <h4>Cafés selecionados</h4>
      <SummaryContainer>
        {shoppingCart.length !== 0 ? (
          shoppingCart.map((coffe) => (
            <CheckoutCoffeCard {...coffe} key={coffe.id} />
          ))
        ) : (
          <>
            <EmptyCarContainer>
              <ShoppingCart size={32} />
              <h3>Carrinho Vazio</h3>
            </EmptyCarContainer>
            <Separator />
          </>
        )}
        <ValuesContainer>
          <TotalItemsValueContainer>
            <span>Total de itens</span>
            <span>{`R$ ${totalItemsPrice.toFixed(2)}`}</span>
          </TotalItemsValueContainer>
          <DeliveryValueContainer>
            <span>Entrega</span>
            <span>R$ 3.50</span>
          </DeliveryValueContainer>
          <TotalValueContainer>
            <span>Total</span>
            <span>{`R$ ${(totalItemsPrice + 3.5).toFixed(2)}`}</span>
          </TotalValueContainer>
        </ValuesContainer>
        <SubmitButton
          disabled={isSubmitButtonDisabled}
          type="submit"
          form="DeliveryForm"
        >
          CONFIRMAR PEDIDO
        </SubmitButton>
      </SummaryContainer>
    </ShopSummaryContainer>
  )
}
