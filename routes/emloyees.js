const express = require('express');

const { auth } = require('../middleware/auth');
const { all, add, employee, remove, edit } = require('../controllers/employees');
const router = express.Router();

/* Получение всех сотрудников */
router.get('/', auth, all);

/* Получение одного сотрудника по ид */
router.get('/:id', auth, employee);

/* Добавление сотрудника */
router.post('/add', auth, add);

/* Удаление сотрудника */
router.post('/delete/:id', auth, remove);

/* Редакитрование сотрудника */
router.put('/edit/:id', auth, edit);


module.exports = router;
