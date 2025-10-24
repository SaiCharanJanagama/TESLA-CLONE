import styled from "styled-components";
import Section from "./Section";

const Home = (props) => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Lern more"
            />
            <Section 
                title="Solar for new Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Lern more"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />

        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
`;

export default Home;