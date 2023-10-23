export type Card = {
    id: number
    city: string
    title: string
    quantityBedrooms: number
    quantityBathrooms: number
    area: number
    image: string
}

const cardArray: Card[] = [
    {
        id: 1,
        city: 'San Francisco, United States',
        title: 'Cozy beach house',
        quantityBedrooms: 3,
        quantityBathrooms: 2,
        area: 2300,
        image: '/images/images-card/img-for-card-1.jpeg',
    },
    {
        id: 2,
        city: 'Los Angeles, United States',
        title: 'Spacious Modern house',
        quantityBedrooms: 5,
        quantityBathrooms: 4,
        area: 6800,
        image: '/images/images-card/img-for-card-2.jpeg',
    },
    {
        id: 3,
        city: 'Rio de Janeiro, Brazil',
        title: 'Luxury villa in Brazil',
        quantityBedrooms: 4,
        quantityBathrooms: 3,
        area: 4100,
        image: '/images/images-card/img-for-card-3.jpeg',
    },
]

export default cardArray
