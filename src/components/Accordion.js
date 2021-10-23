import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection= styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
position relative;
height :100vh;
background:#fff;
font-family: 'Montserrat', sans-serif;
`;




const Container=styled.div`
position: absolute;
top:30%;
box-shadow: 2 10 35 1 rgba(153,154,153,0.3);
`;

const Wrap=styled.div`
background: #222121;
color: #fff;
display: flex;
justify-content: space-between;
align-items:center;
width:100%;
text-align:center;
cursor:pointer;

h1 {
    padding: 2rem;
    font-size:2rem;
}
span{
    margin-right:1.5rem;
}
`;

const Dropdown=styled.div`
background: #3E3B3F;
color:#00ffb9;
width:100%;
height:100px;
display:flex;
flex-direction:column;
justfy-content:center;
align-items: center;

p{
    font-family: 'Montserrat', sans-serif;
    font-size:
}
`;



const Accordion = () => {
    const [clicked, setClicked]=useState(false)
    
    const toggle =index => {
        if(clicked===index){
           
            return setClicked(null)
        }
        setClicked(index)
    }
        return (
            
            
            <IconContext.Provider value={{color: 'white',size:'25px',fontWeight:'900'}} >
            <AccordionSection>
               <Container>
                   {Data.map((item, index) =>{
    
                       return(
    
                           <>
                                                 
                        <Wrap onClick={()=> toggle(index)} key={index}>
                          <h1>{item.question}</h1>
                          <span>{clicked===index ? <FiMinus /> : <FiPlus />}</span>
                          </Wrap>
                          {clicked===index ? (
                               <Dropdown>
                               <p className="answer">{item.answer}</p>
                               <p className="answer1">{item.answer1}</p>
                               
                               </Dropdown>
    
    
                          ) : null}
                         
                           </>
    
    
    
                       )
                    })}
                   
                </Container>
                </AccordionSection>
                </IconContext.Provider>
    
        );
    };
    
    export default Accordion
    




