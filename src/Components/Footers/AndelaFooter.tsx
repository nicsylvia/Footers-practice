import React from 'react';
import styled from 'styled-components';
import andela from "../Assets/andela-logo.png";
import {FaFacebook, FaTwitter, FaGithub, FaInstagram, FaYoutube} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";

function AndelaFooter() {
  return (
    <Container>
      <Wrapper>
      <FirstDiv>
                <Logo  src={andela}/>
                <Icons>
                    <FaFacebook />
                    <FaTwitter />
                    <FaGithub />
                    <FaInstagram />
                    <FaYoutube />
                    <BsLinkedin />
                </Icons>
            </FirstDiv>

            <SecondDiv>
                  <Box>
                      <h6> Discover Talent</h6>

                      <Nav>For Companies</Nav>

                      <Nav>Enterprise</Nav>

                      <Nav>Case studies</Nav>
                  </Box>

                  <Box>
                      <h6>Find Work</h6>

                      <Nav>For Technologists</Nav>

                      <Nav>Learning Community</Nav>

                      <Nav>Leadership Program</Nav>

                      <Nav>Resources</Nav>
                  </Box>

                  <Box>
                      <h6>  Andela</h6>

                      <Nav>About us</Nav>

                      <Nav>Events</Nav>

                      <Nav>Blog</Nav>

                      <Nav>Press Center</Nav>

                      <Nav>Careers</Nav>
                  </Box>

                  <Box>
                    <h6></h6>
                      <Nav>Privacy Policy</Nav>

                      <Nav>Terms and Conditions</Nav>

                      <Nav>Modern Slavery Statement</Nav>
                </Box>

            </SecondDiv>
      </Wrapper>
    </Container>
    )
}

export default AndelaFooter;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #173B3F;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
    color: white;
`;
const FirstDiv = styled.div`
    width : 300px;
    margin-top: 50px; 
`;
const SecondDiv = styled.div`
    width : 65%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
`;
const Logo = styled.img`

`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    margin-top: 50px;
   size: 150px;
`;
const Box = styled.div`
h6{
  font-weight: 900;
}

`;
const Nav = styled.div`
    padding-bottom: 20px;
    font-size: 12px;
    transition: all 350ms;

    :hover{ 
        cursor: pointer;
        text-decoration: underline;
    }
`;