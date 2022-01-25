import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
` 

const Footer = () => {
    return (
        <>
        <div>&copy; 2022 GAJA</div>
        <div>Powered by <a href="http://www.saramin.co.kr" target="_blank">취업 사람인</a></div>
        <div>구글 크롬에 최적화 되어있습니다.</div>
        </>
    )
}

export default Footer;