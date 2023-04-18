import { useContext } from 'react'
import {
  ShopSummaryContainer,
  SummaryContainer,
  ValuesContainer,
} from './styles'
import { CoffeContext } from '../../../../context/CoffeContext'
import { Minus, Plus, Trash } from 'phosphor-react'

export function ShopSummary() {
  const { shoppingCart } = useContext(CoffeContext)

  return (
    <ShopSummaryContainer>
      <h4>Cafés selecionados</h4>
      <SummaryContainer>
        {shoppingCart.map(({ name, image, price, qtd, id }) => (
          <div key={id}>
            <img src={image} alt="" />
            <div>
              <span>{name}</span>
              <div>
                <div>
                  <button>
                    <Minus size={14} />
                  </button>
                  <span>{qtd}</span>
                  <button>
                    <Plus size={14} />
                  </button>
                </div>
                <button>
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            </div>
            <span>{`R$ ${price.toFixed(2)}`}</span>
          </div>
        ))}
        <ValuesContainer>
          <div>
            <span>Total de itens</span>
            <span>price</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>price</span>
          </div>
          <div>
            <span>Total</span>
            <span>price</span>
          </div>
        </ValuesContainer>
      </SummaryContainer>
    </ShopSummaryContainer>
  )
}
