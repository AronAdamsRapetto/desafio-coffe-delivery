import { useContext } from 'react'
import {
  CardCoffe,
  CardInformationContainer,
  DeliveryValueContainer,
  QuantityControllContainer,
  RemoveProductButton,
  Separator,
  ShopSummaryContainer,
  SubmitButton,
  SummaryContainer,
  TotalItemsValueContainer,
  TotalValueContainer,
  ValuesContainer,
} from './styles'
import { CoffeContext } from '../../../../context/CoffeContext'
import { Minus, Plus, Trash } from 'phosphor-react'

export function ShopSummary() {
  const { shoppingCart } = useContext(CoffeContext)

  const totalItemsPrice = shoppingCart.reduce(
    (priceAcc, { price, qtd }) => (priceAcc += price * qtd),
    0,
  )
  return (
    <ShopSummaryContainer>
      <h4>Cafés selecionados</h4>
      <SummaryContainer>
        {shoppingCart.map(({ name, image, price, qtd, id }) => (
          <>
            <CardCoffe key={id}>
              <div>
                <img src={image} alt="" />
                <CardInformationContainer>
                  <span>{name}</span>
                  <div>
                    <QuantityControllContainer>
                      <button>
                        <Minus size={14} />
                      </button>
                      <span>{qtd}</span>
                      <button>
                        <Plus size={14} />
                      </button>
                    </QuantityControllContainer>
                    <RemoveProductButton>
                      <Trash size={16} />
                      Remover
                    </RemoveProductButton>
                  </div>
                </CardInformationContainer>
              </div>
              <span>{`R$ ${price.toFixed(2)}`}</span>
            </CardCoffe>
            <Separator />
          </>
        ))}
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
        <SubmitButton type="submit" form="DeliveryForm">
          CONFIRMAR PEDIDO
        </SubmitButton>
      </SummaryContainer>
    </ShopSummaryContainer>
  )
}
