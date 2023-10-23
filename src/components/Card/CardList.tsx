import CardListItem from './CardListItem'
import cardArray from '../../utils/cardArray'
import { Row } from 'react-bootstrap'

type Props = {}

const CardList = (props: Props) => {
    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ padding: '40px 75px' }}>
                {cardArray.map(
                    ({
                        id,
                        city,
                        title,
                        quantityBedrooms,
                        quantityBathrooms,
                        area,
                        image,
                    }) => (
                        <div key={id}>
                            <CardListItem
                                id={id}
                                city={city}
                                title={title}
                                quantityBedrooms={quantityBedrooms}
                                quantityBathrooms={quantityBathrooms}
                                area={area}
                                image={image}
                            />
                        </div>
                    )
                )}
            </Row>
        </>
    )
}
export default CardList
