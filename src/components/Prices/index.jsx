import { Card } from './styled.jsx';

export default function Prices({ cardTitle, cardPrice, cardContent }) {
    return (
        <Card>
            <h2>{cardTitle}</h2>
            <h3>${cardPrice}</h3>
            <ul>
                {cardContent.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button>Learn more</button>
        </Card>
    );
}