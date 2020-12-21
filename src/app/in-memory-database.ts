import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {

  createDb(){
    const categories = [
      { id: 1, nome: 'Moradia', descricao: 'Pagamentos de Contas da Casa' },
      { id: 2, nome: 'Saúde', descricao: 'Planos de Saúde e Remédios' },
      { id: 3, nome: 'Lazer', descricao: 'Cinema, Parques, Praia, etc' },
      { id: 4, nome: 'Salário', descricao: 'Recebimento de Salário' },
      { id: 5, nome: 'Freelas', descricao: 'Trabalhos como freelancer' }
    ]
    return { categories };
  }

}
