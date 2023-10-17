export type Card = {
    id: number
    city: string
    name: string
    quantityBedrooms: number
    quantityBathrooms: number
    area: number
    image: string
}

const cardArray: Card[] = [
    {
        id: 1,
        city: 'San Francisco, United States',
        name: 'Cozy beach house',
        quantityBedrooms: 3,
        quantityBathrooms: 2,
        area: 2300,
        image: '../assets/images/img-for-card-1.jpeg',
    },
    {
        id: 2,
        city: 'Los Angeles, United States',
        name: 'Spacious Modern house',
        quantityBedrooms: 5,
        quantityBathrooms: 4,
        area: 6800,
        image: '../assets/images/img-for-card-1.jpeg',
    },
    {
        id: 3,
        city: 'Rio de Janeiro, Brazil',
        name: 'Luxury villa in Brazil',
        quantityBedrooms: 4,
        quantityBathrooms: 3,
        area: 4100,
        image: '../assets/images/img-for-card-1.jpeg',
    },
]

export default cardArray
