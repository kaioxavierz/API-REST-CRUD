import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
       nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Nome precisa ter entre 3 a 20 caracteres'
          }
        }
       },
       sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 30],
            msg: 'Sobrenome precisa ter entre 3 a 30 caracteres'
          }
        }
       },
       idade:{
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro ou de ponto flutuante'
          }
        }
       },
       email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'Email já existe'
        },
        validate: {
          isEmail: {
          msg: 'Email inválido'
        }
        }
      },
       peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante'
          }
        }
       },
       altura:  {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante'
          }
        }
       },
    }, {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' })
  }
}
