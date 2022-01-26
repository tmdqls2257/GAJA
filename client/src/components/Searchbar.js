import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import gaja from '../images/logo.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin: 20px;
`

export const Search = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

  position: relative;
  width: 360px;
  height: 50px;  //! 여기의 height과 Icon의 height이 같아야 돋보기 아이콘이 정중앙에 배치된다.
  background: #fff;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 3px #2573ef;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  display: flex;
  align-items:center;
`

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 50px;
  background: #fff;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #287dfc;
    border-radius: 50%;
    transform: translate(-4px, -4px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 12px;
    background: #287dfc;
    transform: translate(6px, 6px) rotate(315deg);
  }
`
export const Input = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 10px 0;
  }
`
export const Clear = styled.span`
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 width: 15px;
 height: 15px;
 right: 15px;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;

 &::before {
   position: absolute;
   content: '';
   width: 1px;
   height: 15px;
   background: #999;
   transform: rotate(45deg);
 }

 &::after {
   position: absolute;
   content: '';
   width: 1px;
   height: 15px;
   background: #999;
   transform: rotate(315deg);
 }
`

export const Image = styled.img`
  margin-right: 2rem;
  width: auto;
  height: 60px;
  cursor: pointer;
`

const Searchbar = () => {
  const [text, setText] = useState('')
  const textHandler = (e) => setText(e.target.value)
  const resetHandler = () => setText('')

  return (
    <Container>
      <Link to='/'>
        <Image src={gaja} alt='logo' />
      </Link>
      <Search>
        <Icon />
        <Input>
          <input type='text' placeholder='필요한 정보를 검색해 주세요' value={text} onChange={textHandler} />
        </Input>
        <Clear onClick={resetHandler} />
      </Search>
    </Container>
  )
}

export default Searchbar
