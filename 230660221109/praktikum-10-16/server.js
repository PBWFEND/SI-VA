const express = require('express');
const app = express();
app.use(express.json());

// import router auth
const authRoutes = require('./routes/auth.routes');

// gunakan router
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server jalan di port 3000");
});
