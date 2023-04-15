import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeCardContainer,
  DescriptionCoffe,
  PurchaseContainer,
  SelectionQuantityContainer,
  TagsContainer,
} from './styles'

interface CoffeCardProps {
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeCardProps) {
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
            <Minus size={14} />
            <span>1</span>
            <Plus size={14} />
          </div>
          <button type="button">
            <ShoppingCart size={22} />
          </button>
        </SelectionQuantityContainer>
      </PurchaseContainer>
    </CoffeCardContainer>
  )
}
