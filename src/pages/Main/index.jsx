import Prices from "../../components/Prices";
import ToggleSwitch from "../../components/ToggleSwitch";
import { Title, ToggleField, CardCollection, Container } from "./styled";
import BgTop from '../../assets/bg-top.svg'
import BgBottom from '../../assets/bg-bottom.svg'
import { useState } from "react";
export default function Main() {
    const [priceType, setPriceType] = useState('Annualy');

    const toggleChecked = (checked) => {
        if (checked) {
            setPriceType('Annualy');
        } else {
            setPriceType('Monthly');
        }

    };


    return (
        <Container>
            <img src={BgTop} className="bg-top" />
            <Title>Our Pricing</Title>

            <ToggleField>
                Annualy <ToggleSwitch toggleChecked={toggleChecked} /> Monthly
            </ToggleField>


            <CardCollection>
                <Prices
                    key={"Basic"}
                    cardTitle="Basic"
                    cardPrice={priceType === "Annualy" ? "199.99" : "19.99"}
                    cardContent={['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']} />
                <Prices
                    key={"Professional"}
                    cardTitle="Professional"
                    cardPrice={priceType === "Annualy" ? "249.99" : "24.99"}
                    cardContent={['1 TB Storage', '5 Users  Allowed', 'Send up to 10 GB']} />
                <Prices
                    key={"Master"}
                    cardTitle="Master"
                    cardPrice={priceType === "Annualy" ? "399.99" : "39.99"}
                    cardContent={['2 TB Storage', '10 Users  Allowed', 'Send up to 20 GB']} />
            </CardCollection>
            <img src={BgBottom} className="bg-bottom desktop" />
        </Container>
    )
}