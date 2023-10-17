import CardListItem from './CardListItem'
import cardArray from '../../utils/cardArray'
import { CardGroup } from 'react-bootstrap'

type Props = {}

const CardList = (props: Props) => {
    return (
        <>
            <CardGroup>
                {cardArray.map(
                    ({
                        id,
                        city,
                        name,
                        quantityBedrooms,
                        quantityBathrooms,
                        area,
                        image,
                    }) => (
                        <div key={id}>
                            <CardListItem
                                id={id}
                                city={city}
                                name={name}
                                quantityBedrooms={quantityBedrooms}
                                quantityBathrooms={quantityBathrooms}
                                area={area}
                                image={image}
                            />
                        </div>
                    )
                )}
            </CardGroup>
        </>
    )
}
export default CardList
