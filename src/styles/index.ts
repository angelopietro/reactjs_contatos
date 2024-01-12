import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }
`
export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  max-width: 1366px;
  margin: auto;
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`

export const Campo = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #fff;
  color: #666666;
  width: 100%;
  border: 1px solid #ddd;
`

export const Botao = styled.button`
  font-weight: 500;
  font-size: 11px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  text-transform: uppercase;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`

export default EstiloGlobal
