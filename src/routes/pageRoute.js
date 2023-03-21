const express = require('express');
const router = express.Router();

//todolist월별
router.get('/page/todoListMonth', async (req,res) => {
    return res.render('todoList');
});
router.get('/page/bucketList', async (req,res) => {
    return res.render('bucketList');
});
router.get('/page/todoListDetail', async (req,res) => {
    return res.render('todoListDetail');
});
router.get('/logout',async (req,res)=>{
    return res.render('main');
})
router.get('/', async (req,res) => {
    return res.render('main');
});

module.exports = router;  