import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RoundedButton = styled(Link)`
  height: 4rem;
  width: 12rem;
  background-color: #c9fac6;
  color: black;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;

  @media (max-width: 768px) {
    width: auto;
    height: 3rem;
    bottom: 20px;
    right: 20px;
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`
