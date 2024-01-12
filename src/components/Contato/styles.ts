import styled from 'styled-components'
import { Botao } from '../../styles'

export const Status = styled.span`
  font-size: 11px;
  position: absolute;
  color: #c23616;
`

export const Label = styled.label`
  font-size: 14px;
`

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

export const Dados = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
`

export const Acoes = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`

export const Remover = styled(Botao)`
  background-color: #c23616;
`
