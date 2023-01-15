import React from 'react';
import styled from "styled-components";
import izigo from "../Assets/Izigo.png";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {BiLocationPlus} from "react-icons/bi";
import {MdEmail} from "react-icons/md";

const IzigoFooter = () => {
  return (
    <Container>
    <Wrapper>
        <FirstDiv>
            <Logo  src={izigo}/>
            <p>
              The first community owned and <br />
              community-powered platform where <br />
              everyone earns. <br />
              Connect with us on all our social media <br />
              channels.
            </p>
            <Icons>
                <AiOutlineTwitter />
                <AiFillLinkedin />
                <AiFillInstagram />
                <BsFacebook />
            </Icons>
        </FirstDiv>
        <SecondDiv>
          <Box>
                <h3>Company</h3>
                <Nav>Earn 4 Life</Nav>
                <Nav>Features</Nav>
                <Nav>Cost calculator</Nav>
                <Nav>Latest News</Nav>
          </Box>

          <Box>
                <h3>Support</h3>
                <Nav>FAQ’s</Nav>
                <Nav>Privacy Policy</Nav>
                <Nav>Terms & Conditions</Nav>
                <Nav>Community</Nav>
                <Nav>Contact Us</Nav>
          </Box>

          <Box>
              <h3>Contact Info</h3>
              <div>
                <BiLocationPlus />
                <Nav>371 Borno way, Yaba <br /> Lagos, Nigeria</Nav>
              </div>
              <div>
                <MdEmail />
                <Nav>info@izigo.ng</Nav>
              </div>
              <div>
                <BsFillTelephoneFill />
                <Nav>+2347039461453</Nav>
              </div>
          </Box>

        </SecondDiv>
        <br />
        <br />
        <br />
        <CopyRg>
            <p>
            Copyright @2022 Izigotech. All Rights Reserved <span>Izigotech</span> 
            </p>
        </CopyRg>
    </Wrapper>
</Container>
  )
}

export default IzigoFooter;

const Container = styled.div`
    width : 100%;
    background-color: #F5F5F5;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
    color:  #301D44;
    font-size: 18px;
`;
const FirstDiv = styled.div`
    width : 300px;
    margin-top: 50px;
    margin-left: 90px;

    p{
        font-size: 13px;
        color: gray;
        line-height: 23px;
    }
`;
const SecondDiv = styled.div`
    width : 65%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

`;
const Logo = styled.img`
  width: 28%;
  height: 28%;
  object-fit: contain;

`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    color: #301D44;
    size: 100px;

    :hover{
      color: red;
    }
`;
const Box = styled.div`
div{
  display: flex;
  margin-left: 15px;
}

`;
const Nav = styled.div`
    padding-bottom: 20px;
    font-size: 13px;
    color: rgb(129, 132, 141);
    transition: all 400ms;

    :hover{
        color: red; 
        cursor: pointer;
        font-size: 11px;
        transform: scale(0.9);
    }
`;
const CopyRg = styled.div`
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: white;
    background-color: #301D44;
    margin-top: 70px;

    span{
      color: orange;
    }
`