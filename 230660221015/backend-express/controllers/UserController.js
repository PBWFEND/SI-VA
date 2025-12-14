// import express
const express = require("express");

// import prisma client
const prisma = require("../prisma/client");

// import validationResult from express-validator
const { validationResult } = require("express-validator");

// import bcrypt
const bcrypt = require("bcryptjs");

// =================== GET ALL USERS ===================
const findUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                id: "desc",
            },
        });

        res.status(200).send({
            success: true,
            message: "Get all users successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// =================== GET USER BY ID ===================
const findUserById = async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).send({
            success: false,
            message: "ID must be a number",
        });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: `Get user by ID : ${id}`,
            data: user,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// =================== CREATE USER ===================
const createUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
        });

        res.status(201).send({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return res.status(400).send({
                success: false,
                message: "Email already exists",
            });
        }

        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// =================== UPDATE USER ===================
const updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!existingUser) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        const updateData = {
            name: req.body.name,
            email: req.body.email,
        };

        if (req.body.password) {
            updateData.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData,
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        res.status(200).send({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return res.status(400).send({
                success: false,
                message: "Email already exists",
            });
        }

        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// =================== DELETE USER ===================
const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!existingUser) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        await prisma.user.delete({
            where: { id: userId },
        });

        res.status(200).send({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    findUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
};
