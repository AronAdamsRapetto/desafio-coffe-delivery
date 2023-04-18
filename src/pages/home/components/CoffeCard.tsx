import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeCardContainer,
  DescriptionCoffe,
  PurchaseContainer,
  SelectionQuantityContainer,
  TagsContainer,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeContext } from '../../../context/CoffeContext'

interface CoffeCardProps {
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  id: number
}

export function CoffeCard({
  image,
  tags,
  name,
  description,
  price,
  id,
}: CoffeCardProps) {
  const [shopQuantity, setShopQuantity] = useState(1)
  const { updateShoppingCart } = useContext(CoffeContext)

  const handleAddItem = () => {
    const newItem = {
      id,
      name,
      image,
      price,
      qtd: shopQuantity,
    }

    updateShoppingCart(newItem)
  }

  const handleIncreaseShopQuantity = () => {
    setShopQuantity((state) => state + 1)
  }

  const handleDecreaseShopQuantoty = () => {
    if (shopQuantity > 1) {
      setShopQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeCardContainer>
      <img src={image} alt="" />
      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h3>{name}</h3>
      <DescriptionCoffe>{description}</DescriptionCoffe>
      <PurchaseContainer>
        <span>{price.toFixed(2)}</span>
        <SelectionQuantityContainer>
          <div>
            <button type="button" onClick={handleDecreaseShopQuantoty}>
              <Minus size={14} />
            </button>
            <span>{shopQuantity}</span>
            <button type="button" onClick={handleIncreaseShopQuantity}>
              <Plus size={14} />
            </button>
          </div>
          <button onClick={handleAddItem} type="button">
            <ShoppingCart size={22} />
          </button>
        </SelectionQuantityContainer>
      </PurchaseContainer>
    </CoffeCardContainer>
  )
}
