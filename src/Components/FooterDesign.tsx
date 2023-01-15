import React from 'react';
import styled from 'styled-components';
import AndelaFooter from './Footers/AndelaFooter';
import CodeLabFooter from './Footers/CodeLabFooter';
import IzigoFooter from './Footers/IzigoFooter';
import UtivaFooter from "./Footers/UtivaFooter";
import VercelFooter from './Footers/VercelFooter';

const FooterDesign = () => {
  return (
   <Container>

        {/* <h1>This is CodeLab Footer design</h1>
        <CodeLabFooter />
        <h1>This is Andela Footer design</h1>
        <AndelaFooter />
        <h1>This is Izigo Footer design</h1>
        <IzigoFooter />
        <h1>This is Vercel Footer design</h1>
        <VercelFooter />
        <h1>This is Utiva Footer design</h1> */}
        <UtivaFooter />
     
   
   </Container>
  )
}

export default FooterDesign;

const Container = styled.div`
    width: 100%;
    h1{
        text-align: center;
        width: 100%;
        height: 10vh;
        background-color: black;
        color: white;
        transition: all 350ms;
    }
    h1:hover{
        color: #301D44;
        transform: scale(1.0);
        background-color: white;
        cursor: pointer;
    }
`;