class Contato {
  nomeCompleto: string
  telefone: string
  email: string
  id: number

  constructor(
    nomeCompleto: string,
    email: string,
    telefone: string,
    id: number
  ) {
    (this.nomeCompleto = nomeCompleto),
      (this.telefone = telefone),
      (this.email = email),
      (this.id = id)
  }
}

export default Contato
