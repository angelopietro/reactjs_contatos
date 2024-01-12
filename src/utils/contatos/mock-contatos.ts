import { faker } from '@faker-js/faker'
import Contato from '../../models/Contatos'

export const createRandomUser = () => {
  return {
    nomeCompleto: faker.internet.userName(),
    telefone: faker.phone.number(),
    email: faker.internet.email(),
    id: faker.number.int()
  }
}

export const itens: Contato[] = faker.helpers.multiple(createRandomUser, {
  count: 5
})
