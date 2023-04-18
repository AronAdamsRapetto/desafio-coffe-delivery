import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CardCoffe,
  CardInformationContainer,
  QuantityControllContainer,
  RemoveProductButton,
} from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../../../../context/CoffeContext'
import { Separator } from '../shopSummary/styles'

interface CheckoutCoffeCardProps {
  id: number
  name: string
  qtd: number
  price: number
  image: string
}

export function CheckoutCoffeCard({
  id,
  name,
  qtd,
  price,
  image,
}: CheckoutCoffeCardProps) {
  const { updateShoppingCart, removeCoffeFromCart } = useContext(CoffeContext)

  const decreaseCoffeQuantity = () => {
    if (qtd > 1) {
      const updatedCoffe = {
        id,
        name,
        qtd: qtd - 1,
        price,
        image,
      }

      updateShoppingCart(updatedCoffe)
    }
  }

  const increaseCoffeQuantity = () => {
    const updatedCoffe = {
      id,
      name,
      qtd: qtd + 1,
      price,
      image,
    }

    updateShoppingCart(updatedCoffe)
  }

  const removeCoffe = () => {
    removeCoffeFromCart(id)
  }

  return (
    <>
      <CardCoffe key={id}>
        <div>
          <img src={image} alt="" />
          <CardInformationContainer>
            <span>{name}</span>
            <div>
              <QuantityControllContainer>
                <button type="button" onClick={decreaseCoffeQuantity}>
                  <Minus size={14} />
                </button>
                <span>{qtd}</span>
                <button type="button" onClick={increaseCoffeQuantity}>
                  <Plus size={14} />
                </button>
              </QuantityControllContainer>
              <RemoveProductButton type="button" onClick={removeCoffe}>
                <Trash size={16} />
                Remover
              </RemoveProductButton>
            </div>
          </CardInformationContainer>
        </div>
        <span>{`R$ ${(price * qtd).toFixed(2)}`}</span>
      </CardCoffe>
      <Separator />
    </>
  )
}
