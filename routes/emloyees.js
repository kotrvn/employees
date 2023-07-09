const express = require('express');

const { auth } = require('../middleware/auth');
const { all } = require('../controllers/employees');
const router = express.Router();

/* Получение всех сотрудников */
router.get('/', auth, all);

/* Получение одного сотрудника по ид */
router.get('/:id', auth, () => console.log('get ID employee'));

/* Добавление сотрудника */
router.post('/add', auth, () => console.log('add employee'));

/* Удаление сотрудника */
router.post('/delete/:id', auth, () => console.log('delete employee'));

/* Редакитрование сотрудника */
router.put('/edit/:id', auth, () => console.log('delete employee'));


module.exports = router;
