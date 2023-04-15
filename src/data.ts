import expressoTradicionalImage from './assets/coffe-images/expresso-tradicional.png'
import expressoAmericanoImage from './assets/coffe-images/expresso-americano.png'
import expressoCremosoImage from './assets/coffe-images/expresso-cremoso.png'
import expressoGeladoImage from './assets/coffe-images/expresso-gelado.png'
import cafeComLeiteImage from './assets/coffe-images/cafe-com-leite.png'
import latteImage from './assets/coffe-images/latte.png'
import capuccinoImage from './assets/coffe-images/capuccino.png'
import macchiatoImage from './assets/coffe-images/macchiato.png'
import mocaccinoImage from './assets/coffe-images/mocaccino.png'
import chocolateQuenteImage from './assets/coffe-images/chocolate-quente.png'
import cubanoImage from './assets/coffe-images/cubano.png'
import havaianoImage from './assets/coffe-images/havaiano.png'
import arabeImage from './assets/coffe-images/arabe.png'
import irlandesImage from './assets/coffe-images/irlandes.png'

export const coffeData = [
  {
    id: 1,
    image: expressoTradicionalImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: 2,
    image: expressoAmericanoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: 3,
    image: expressoCremosoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: 4,
    image: expressoGeladoImage,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 5,
    image: cafeComLeiteImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Late',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90
  },
  {
    id: 6,
    image: latteImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90
  },
  {
    id: 7,
    image: capuccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: 8,
    image: macchiatoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  },
  {
    id: 9,
    image: mocaccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90
  },
  {
    id: 10,
    image: chocolateQuenteImage,
    tags: ['ESPACIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: 11,
    image: cubanoImage,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90
  },
  {
    id: 12,
    image: havaianoImage,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90
  },
  {
    id: 13,
    image: arabeImage,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90
  },
  {
    id: 14,
    image: irlandesImage,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90
  }
]