import { useSelector } from 'react-redux'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Container, Table, Th, Titulo } from '../../styles'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const plural = `${itens.length > 1 ? 's' : ''}`
  const mensagem = `${itens.length} contato${plural} existente${plural} na agenda`
  const ordenarItens = itens
    .slice()
    .sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto))

  return (
    <Container>
      <Titulo as="p">{mensagem}</Titulo>
      <BotaoAdicionar />
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Telefone</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {ordenarItens.map((contato) => (
            <tr key={contato.id}>
              <Contato
                id={contato.id}
                nomeCompleto={contato.nomeCompleto}
                email={contato.email}
                telefone={contato.telefone}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default ListaContatos
