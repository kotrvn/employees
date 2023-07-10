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

/**
 * @route POST /api/employes/add
 * @desc  Добавление сотрудника
 * @access private
 */
const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: 'Все поля обязательные'})
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id,
            }
        })
        
        return res.status(200).json(employee)

    } catch {
        res.status(400).json({ message: 'Что то пошло не так..'})
    }
}

/**
 * @route POST /api/employes/remove/:id
 * @desc  Удаление сотрудника
 * @access private
 */

const remove = async (req, res) => {
    const { id } = req.body
    try {
        if (!id) {
            res.status(400).json({ message: 'Пользователь с таким id не найден.'})
        }

        await prisma.employee.delete({
            where: {
                id,
            }
        })

        return res.status(200).json({message: 'Пользователь удален'})

    } catch {
        res.status(500).json({ message: 'Что то пошло не так..'})
    }
}

/**
 * @route GET /api/employes/edit/:id
 * @desc  Редактирование сотрудника
 * @access private
 */
const edit = async (req, res) => {
    const data = req.body;
    const id = data.id
    try {
        await prisma.employee.update({
            where: {
                id,
            },
            data
        })
        
        return res.status(204).json({ message: 'ОК' })

    } catch {
        res.status(500).json({ message: 'Не удалось отредактировать сотрудника..'})
    }
}

/**
 * @route GET /api/employes/edit/:id
 * @desc  Редактирование сотрудника
 * @access private
 */

const employee = async (req, res) => {
    const { id } = req.params

    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(employee)
    } catch {
        res.status(500).json({ message: 'Не удалось найти сотрудника'})
    }
}

module.exports = {
    all,
    add,
    remove,
    edit,
    employee
}