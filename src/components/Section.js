import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'

function Section({ title, desc, img, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={img}>
        <Fade down>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
        </Fade>
            <Buttons>
                <Fade down>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>

            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
     margin-bottom: 30px;
     @media (max-width: 768px){
        flex-direction: column;
     }
     `
const LeftButton = styled.div`
     background-color: rgba(23, 26, 32, 0.8);
     height: 40px;
     width: 250px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100px;
     opacity: 0.85;
     text-transform: uppercase;
     font-size: 12px;
     margin: 8px;
     cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background: white; 
    opacity: 0.6;
    color: black;
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`

`