import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import { itens } from '../../utils/contatos/mock-contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const contatoIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contatoIndex >= 0) {
        state.itens[contatoIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLowerCase()
      )

      if (contatoJaExiste) {
        alert(`O contato ${contatoJaExiste.nomeCompleto} já existe na`)
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
