//import express
const express = require("express");

//import validationResult
const { validationResult } = require("express-validator");

//import bcrypt
const bcrypt = require("bcryptjs");

//import jwt
const jwt = require("jsonwebtoken");

//import prisma client
const prisma = require("../prisma/client");

//function login
const login = async (req, res) => {

    //cek validasi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {
        //cari user berdasarkan email
        const user = await prisma.user.findUnique({
            where: { email: req.body.email },
        });

        //jika user tidak ditemukan
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Email or password is incorrect",
            });
        }

        //cek password
        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Email or password is incorrect",
            });
        }

        //generate token
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        //response
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { login };
