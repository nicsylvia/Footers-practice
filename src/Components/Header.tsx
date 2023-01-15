import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import utiva from "./Assets/utiva.svg";
import GlobalButton from './GlobalButton';
import { FaChevronDown } from "react-icons/fa"



const Header = () => {
    // const [count, setcount] = useState<number>(0)
    const [show, setshow] = useState<boolean>(false) // fellow gideon
    
    // const add = () => {
    //     setcount(count + 1)
    //     console.log(count);
    // }
    const add = () => {
        setshow(!show)
    }

    // const arr = ["none", "block"]

    // const gelp : any = useRef()
    // useEffect(() => {
    //     gelp.current.style.display = arr[count % arr.length]
    // })
    
    return (
    <Container>
        <Wrapper>
            <Logo src={utiva}/>
            <Navigation>
                <Nav onClick={add}>
                    Schools
                    <Icons>
                        <FaChevronDown />
                    </Icons>
                </Nav>
                <Nav>
                    Enterprise
                    <Icons>
                        <FaChevronDown />
                    </Icons>
                </Nav>
                <Nav>
                    Company
                    <Icons>
                        <FaChevronDown />
                    </Icons>
                </Nav>
            </Navigation>
            <Holder>
                <GlobalButton 
                bg ="#FBAF1B"
                bd = ""
                text = "Get Started"
                color = "white"
                width = "120px"
                />
                <GlobalButton
                 bg =""
                 bd = "1px solid #000269"
                 text = "Login"
                 color = "#000269"
                 width = "100px"
                 />
            </Holder>
        </Wrapper>

        { show ? (
            <Drop></Drop>
        ) : null }

        {/* <Drop ref={gelp} >

        </Drop> */}
    </Container>
  )
}

export default Header;

const Drop = styled.div`
position: absolute;
width: 80%;
height: 500px;
top: 80%;
z-index: 10;
background-color: red;
`


const Container = styled.div`
position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9FAF4;
    height: 70px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #FDFDFA;
    padding-left: 40px;
    padding-right: 40px;
`;
const Logo = styled.img``;
const Navigation = styled.div`
    display: flex;
    font-size: 12px;
`;
const Nav = styled.div`
    display: flex;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
    transition: all 350ms;
    cursor: pointer;

    :hover{
        color: gray;
    }
`;
const Icons = styled.div`
    margin-left: 20px;
`;
const Holder = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;