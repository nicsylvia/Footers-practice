import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowRight} from "react-icons/ai"
import img from "./Assets/utivamap.svg"

const Hero = () => {
  return (
    <Container>
        <First>
        <Bold>
            Building Top <br />Tech Talents <br /> for the World
        </Bold>
        <p>
        One Single Platform That Helps You Learn Tech and Helps <br /> Companies Hire you Fast - 100X Better
        </p>

        <Buttonhold>
            <Button>
                Individual{" "}
                <Icon><AiOutlineArrowRight/></Icon>
                </Button>
            <Button>
                Business{" "}
                <Icon><AiOutlineArrowRight/></Icon>
                </Button>
            <Button>
                Impact{" "}
                <Icon><AiOutlineArrowRight/></Icon>
                </Button>
        </Buttonhold>
        </First>
        <Second>
            <Logo src={img}/>
        </Second>
    </Container>
  )
}

export default Hero;

const Logo = styled.img`
        margin-top: 50px;
        position: relative;
        margin-left: 90px;
`
const Icon = styled.div``

const Buttonhold = styled.div`
    display: flex;
`
const Button = styled.div`
    padding: 15px, 30px;
    color: white;
    background-color: #FBAF1B;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    transition: all 350ms;
    margin-right: 10px;
    cursor: pointer;
    height: 40px;
    width: 150px;

    :hover{
        margin-top: -5px;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    padding-bottom: 20px;
    background-color: aliceblue;
`;
const First = styled.div`
    

`;
const Second = styled.div`
    width: 60%;
    height: 500px;



`;

const Bold = styled.div`
    font-size: 70px;
    margin-left: 10px;
    color: #050794 ;
`