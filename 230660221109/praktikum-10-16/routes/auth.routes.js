router.post('/register', [
    body('name')
        .notEmpty().withMessage('Name tidak boleh kosong')
        .isLength({ min: 3 }).withMessage('Name minimal 3 karakter'),

    body('email')
        .notEmpty().withMessage('Email wajib diisi')
        .isEmail().withMessage('Format email tidak valid'),

    body('password')
        .notEmpty().withMessage('Password wajib diisi')
        .isLength({ min: 6 }).withMessage('Password minimal 6 karakter')
], (req, res) => {

    const errors = validationResult(req);

    // Jika error ditemukan
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .setHeader('Content-Type', 'application/json')
            .json({
                message: "Validasi gagal",
                errors: errors.array()
            });
    }

    // Jika validasi tidak ada error → lanjutkan...
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            message: "Register berhasil!",
            data: req.body
        });
});
