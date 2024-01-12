import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import ContatoClass from '../../models/Contatos'
import { editar, remover } from '../../store/reducers/contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  telefone: telefoneDefault,
  nomeCompleto: nomeCompletoDefault,
  email: emailDefault,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeCompletoDefault.length > 0) {
      setNomeCompleto(nomeCompletoDefault)
    }
  }, [nomeCompletoDefault])

  useEffect(() => {
    if (telefoneDefault.length > 0) {
      setTelefone(telefoneDefault)
    }
  }, [telefoneDefault])

  useEffect(() => {
    if (emailDefault.length > 0) {
      setEmail(emailDefault)
    }
  }, [emailDefault])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoDefault)
    setTelefone(telefoneDefault)
    setEmail(emailDefault)
  }

  const confirmaEdicao = () => {
    if (!nomeCompleto || !email || !telefone) {
      alert('Todos os campos são obrigatórios!')
      return
    }

    dispatch(
      editar({
        nomeCompleto,
        email,
        telefone,
        id
      })
    )
    setEstaEditando(false)
  }

  return (
    <>
      <S.Td>
        <S.Status>{estaEditando && `Editando contato ${id}`}</S.Status>
        <S.Dados
          value={nomeCompleto}
          type="text"
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          disabled={!estaEditando}
          {...(estaEditando
            ? {
                style: {
                  border: '1px solid #DDD',
                  borderRadius: '5px',
                  padding: '10px'
                }
              }
            : '')}
          placeholder="Nome completo"
          required
        />
      </S.Td>
      <S.Td>
        {' '}
        <S.Dados
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
          {...(estaEditando
            ? {
                style: {
                  border: '1px solid #DDD',
                  borderRadius: '5px',
                  padding: '10px'
                }
              }
            : '')}
          placeholder="E-mail"
          required
        />{' '}
      </S.Td>
      <S.Td>
        {' '}
        <S.Dados
          value={telefone}
          type="text"
          onChange={(evento) => setTelefone(evento.target.value)}
          disabled={!estaEditando}
          {...(estaEditando
            ? {
                style: {
                  border: '1px solid #DDD',
                  borderRadius: '5px',
                  padding: '10px'
                }
              }
            : '')}
          inputMode="numeric"
          pattern="[0-9]*"
          minLength={10}
          placeholder="Telefone"
          required
        />
      </S.Td>
      <S.Td>
        <S.Acoes>
          {estaEditando ? (
            <>
              <BotaoSalvar onClick={confirmaEdicao}>Salvar</BotaoSalvar>
              <S.Remover onClick={cancelarEdicao}>Cancelar</S.Remover>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
              <S.Remover onClick={() => dispatch(remover(id))}>
                Remover
              </S.Remover>
            </>
          )}
        </S.Acoes>
      </S.Td>
    </>
  )
}

export default Contato
