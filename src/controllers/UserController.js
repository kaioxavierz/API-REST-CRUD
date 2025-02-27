import User from '../models/User';

class UserController {
  async store(req, res){
   try {
     const novoUser = await User.create(req.body)
     const { id, nome, email} = novoUser
     return res.json({ id, nome, email});
   }catch(e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    })
   }
  };

  // Index
   async index(req, res) {
    try{
      const users = await User.findAll( { attributes: ['id', 'nome', 'email']});
      return res.json(users)
    }
    catch(e) {
      return res.json(null)
    }
   }


   // Show
   async show(req, res) {
    try{
      const user = await User.findByPk(req.params.id);
      const { id, nome, email} = user
      return res.json({ id, nome, email})
    }
    catch(e) {
      return res.json()
    }
   }


   // Update
   async update(req, res) {
    try{
      const user = await User.findByPk(req.userId);
      if(!user) {
        return res.status(400).json({
          errors: ['Usuario não existe']
        })
      }
      const novosDados = await user.update(req.body)
      const { id, nome, email } = novosDados
      return res.json({ id, nome, email })
    }
    catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
   }


   // Delete
   async delete(req, res) {
    try{
      if(!req.userId) {
        return res.status(400).json({
          errors: ['Id não enviado.']
        })
      };

      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuario não existe']
        })
      }

      await user.destroy(req.body)
      return res.json(null)
    }
    catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
   }
}

export default new UserController();
