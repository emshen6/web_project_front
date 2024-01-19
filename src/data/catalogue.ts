import img from '../img/carriage_houses2.png';

interface Product {
    name: string,
    img: string,
    category: string,
    price: number,
    id: number
  }

export const catalogue: Product[] = [

    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Емкости очистки бурового раствора',
        price: 100000,
        id: 0
    },
    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Передвижные стеллажи-мостки для штанг и труб НКТ',
        price: 100000,
        id: 1
    },
    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Вагон-домики, бытовки',
        price: 100000,
        id: 2
    },
    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Модульных зданий АБК',
        price: 100000,
        id: 3
    },
    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Ограждения и площадки станции, управления станков-качалок',
        price: 100000,
        id: 4
    },
    {
        name: 'Будка пост охраны',
        img: img,
        category: 'Кабеленаматыватели',
        price: 100000,
        id: 5
    }
]