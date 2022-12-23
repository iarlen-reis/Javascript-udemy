import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mária',
      sobrenome: 'Aparecida',
      email: 'mary@gmail.com',
      idade: 18,
      peso: 59,
      altura: 1.64,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
