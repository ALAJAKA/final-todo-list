const TodoListService = require('../services/todoListService');

class TodoListController {
  todoListService = new TodoListService();

  getMonthTodo =async (req,res) => {
    try{
      const {access_token} = req.cookies;
      const {date,date2} = req.query;
      const monthTodoList = await this.todoListService.getMonthTodo(date,date2, access_token);
      return res.status(200).json({monthTodoList});
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }
  postAlldayTodo = async(req, res) =>{
    try{
      let image;
      if(req.file !== undefined) image = req.file.location;
      else image = '';
      const {title, content, date} = req.body;
      console.log(title, content, image, date);
      const {access_token} = req.cookies;
      const postAlldayTodo = await this.todoListService.postAlldayTodo(title, content, image, date, access_token)
      return res.status(200).json({msg: '등록되었습니다.'});
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  getAlldayTodo = async(req, res) =>{
    try{
      const {date} = req.query;
      const {access_token} = req.cookies;
      const getAlldayTodo = await this.todoListService.getAlldayTodo(date, access_token)
      return res.status(200).json({
        getAlldayTodo
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  putAlldayTodo = async(req, res) =>{
    try{
      let image;
      if(req.file !== undefined) image = req.file.location;
      else image = '';
      const {date, beforeTitle, content, afterTitle} = req.body;
      
      const {access_token} = req.cookies;
      const putAlldayTodo = await this.todoListService.putAlldayTodo(date, beforeTitle, content, image, afterTitle, access_token)
      return res.status(201).json({
        image
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }
  
  deleteAlldayTodo = async(req, res) =>{
    try{
      const {date, title} = req.body;
      console.log(req.body);
      const {access_token} = req.cookies;
      const deleteAlldayTodo = await this.todoListService.deleteAlldayTodo(date, title, access_token)
      return res.status(201).json({
        msg: '삭제되었습니다.'
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  postTodayTodo = async(req, res) =>{
    try{
      const {date, title} = req.body;
      const {access_token} = req.cookies;
      const postTodayTodo = await this.todoListService.postTodayTodo(date, title, access_token)
      return res.status(201).json({
        msg: '등록되었습니다.'
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };  
  }

  getTodayTodo = async(req, res) =>{
    try{
      const {date} = req.query;
      const {access_token} = req.cookies;
      const getTodayTodo = await this.todoListService.getTodayTodo(date, access_token)
      return res.status(200).json({
        getTodayTodo
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  putTodayTodo = async(req, res) =>{
    try{
      const {date, beforeTitle, afterTitle} = req.body;
      const {access_token} = req.cookies;
      const putTodayTodo = await this.todoListService.putTodayTodo(date, beforeTitle, afterTitle, access_token)
      return res.status(201).json({
        putTodayTodo
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  deleteTodayTodo = async(req, res) =>{
    try{
      const {date, title} = req.body;
      console.log(req.body);
      const {access_token} = req.cookies;
      const deleteTodayTodo = await this.todoListService.deleteTodayTodo(date, title, access_token)
      return res.status(201).json({
        msg: '삭제되었습니다'
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  todoSuccess = async(req, res) =>{
    try{
      const {date, title, success} = req.body;
      const {access_token} = req.cookies;
      console.log(date);
      console.log(success);
      const todoSuccess = await this.todoListService.todoSuccess(date, title, success, access_token)
      return res.status(201).json({
        todoSuccess
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }

  cardSuccess = async(req, res) =>{
    try{
      const {date, title, success} = req.body;
      const {access_token} = req.cookies;
      console.log(date);
      console.log(success);
      const cardSuccess = await this.todoListService.cardSuccess(date, title, success, access_token)
      return res.status(201).json({
        cardSuccess
      });
    }
    catch (err) {
      //error는 나중에
      console.log(err);
    };
  }
}// class 끝

module.exports = TodoListController;
