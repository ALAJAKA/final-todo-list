const { Op } = require('sequelize');
class TodoListRepository {
  constructor(TodoModel) {
    this.TodoModel = TodoModel;
  }
  semplefunc = async (req,res) =>{
    const sempleV = await this.TodoModel;
    return sempleV;
  }
}

module.exports = TodoListRepository;
