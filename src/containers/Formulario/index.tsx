import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Botao,
  BotaoSalvar,
  Campo,
  Container,
  Titulo
} from '../../styles/index'
import { Form } from './styles'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (!nomeCompleto || !email || !telefone) {
      alert('Todos os campos são obrigatórios!')
      return
    }

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Titulo style={{ textAlign: 'center' }}>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato} onReset={() => navigate('/')}>
        <Campo
          type="text"
          value={nomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          placeholder="Nome completo"
          required
        />
        <Campo
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          required
          inputMode="numeric"
        />
        <Campo
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          required
        />
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
        <Botao type="reset">Voltar</Botao>
      </Form>
    </Container>
  )
}

export default Formulario
