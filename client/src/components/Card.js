import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
const Head = styled.div`
  position: absolute;
  background: #2573ef;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  top: 0;
  height: 70px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`

const Card = ({name, start, expiration}) => {
    // const 
    return (
      <Container>
        <Head>D + 3</Head>
        <h1>한국장학재단</h1>
        <div>2020.12.12 ~ 2021.1.1</div>
      </Container>
    )
}

export default Card