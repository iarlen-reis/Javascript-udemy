import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const userLogado = await User.findByPk(req.userId);

      if (!userLogado) {
        return res.status(400).json({ erros: ['Usuário não encontrado.'] });
      }

      const { nome, email } = userLogado;
      return res.json(req.userId, nome, email);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ erros: ['Usuário não encontrado.'] });
      }
      const novosDados = await user.update(req.body);

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const userLogado = await User.findByPk(req.userId);

      if (!userLogado) {
        return res.status(400).json({ erros: ['Usuário não encontrado.'] });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ erros: ['Usuário não encontrado.'] });
      }

      await user.destroy(req.body);

      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
