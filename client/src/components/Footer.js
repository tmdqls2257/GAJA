import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Container = styled.div`
  background: #2573ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
  max-width: 100vw;
  min-width: 1190px;

  a {
      text-decoration-line: none;

      &:visited {
          color: white;
      }
  }
`

const Footer = () => {
  return (
    <>
      <Container>
        <div>
          <div>&copy; 2022 GAJA</div>
          <div>Powered by <a href='http://www.saramin.co.kr' target='_blank' rel='noreferrer'>취업 사람인</a></div>
          <div>구글 크롬에 최적화 되어있습니다.</div>
        </div>
        <a href='https://github.com/tmdqls2257/GAJA' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </a>
      </Container>
    </>
  )
}

export default Footer
