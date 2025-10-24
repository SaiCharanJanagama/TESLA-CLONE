import styled from "styled-components";
import { motion } from 'framer-motion';

const Section = (props) => {
  return (
    <Wrap bgImg={props.backgroundImg}>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
        </motion.div>
        <Buttons>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                    
                </ButtonGroup>
            </motion.div>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
};

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`}
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div`

`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`;

const DownArrow = styled.img`
    /* margin-top: 20px; */
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`;







export default Section;