const express = require('express');
const router = express.Router();
const userAuthToken = require('../middlewares/user-auth-middleware')

//todolist월별
router.get('/page/todoListMonth',userAuthToken, async (req,res) => {
    return res.render('todoList');
});
router.get('/page/bucketList', userAuthToken,async (req,res) => {
    return res.render('bucketList');
});
router.get('/page/todoListDetail', userAuthToken,async (req,res) => {
    return res.render('todoListDetail');
});
router.get('/logout',async (req,res)=>{
    return res.redirect('/');
})
router.get('/', async (req,res) => {
    return res.render('main');
});

module.exports = router;  