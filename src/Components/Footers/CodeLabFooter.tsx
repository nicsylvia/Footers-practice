import React from 'react'
import styled from 'styled-components';
import {FaFacebookSquare, FaLinkedin, FaYoutube} from "react-icons/fa";

const CodeLabFooter = () => {
  return (
    <Container>
      <Wrap>
        <Box>
            <h3>Our Core Focus</h3>
            <Nav>Front End Engineering</Nav>
            <Nav>Back End Engineering</Nav>
            <Nav>Cloud Engineering</Nav>
        </Box>

        <Box>
            <h3>Courses</h3>
            <Nav>ReactJS</Nav>
            <Nav>NodeJS</Nav>
            <Nav>Azure</Nav>
            <Nav>Firebase</Nav>
            <Nav>MongoDB</Nav>
            <Nav>GraphQL</Nav>
            <Nav>Socket/IO</Nav>
        </Box>

        <Box>
              <h3>Advance Courses</h3>
              <Nav>Micro-Services</Nav>
              <Nav>Docker</Nav>
              <Nav>Kubernates</Nav>
              <Nav>Web-Socket</Nav>
              <Nav>NextJS</Nav>
              <Nav>Transformational Leadership</Nav>
        </Box>

        <Box>
              <h3>Resources</h3>
              <Nav>Terms of Service</Nav>
              <Nav>FAQs</Nav>
        </Box>
      </Wrap>
    <br />
    <br />
    <br />

    <Holder>
    <CopyRg> Powered by <br /> <h2>CodeLab Crew</h2> </CopyRg>
    <Icons>
      <FaFacebookSquare />
      <FaLinkedin />
      <FaYoutube />
    </Icons>
    </Holder>
    </Container>
  )
}

export default CodeLabFooter;

const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrap = styled.div`
  width: 80%;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
  flex-wrap: wrap;
`;
const Box = styled.div`
  
`;
const Nav = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  color: #949494;
  transition: all 350ms;
  cursor: pointer;
`;
const CopyRg = styled.div`
    align-items: center;
    font-size: 15px;
    color: white;
    margin-top: 50px;
    width: 15%;
    line-height: 30px;
`
const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10%;
    color:  white;
`;