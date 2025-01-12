import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res){
    res.json('Rota home');
  }
}

export default new HomeController();
