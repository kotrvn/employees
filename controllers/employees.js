const prisma = require("../prisma/prisma-client");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


/**
 * @route GET /api/employes
 * @desc Получение всех сотрудников
 * @access private
 */
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch(error) {
        res.status(4000).json({ message: 'Не удалось получить сотрудников'})
    }
}


module.exports = {
    all,
}