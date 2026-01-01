import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../api'; // Mengambil konfigurasi base URL http://localhost:3000

function Register() {
    // 1. Definisikan State untuk inputan form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState([]);
    
    const navigate = useNavigate();

    // 2. Fungsi untuk menangani proses Register
    const registerHandler = async (e) => {
        e.preventDefault();

        // Mengirim data ke API Backend (POST /api/register)
        await Api.post('/api/register', {
            name: name,
            email: email,
            password: password
        })
        .then(() => {
            // Jika sukses, arahkan ke halaman login
            navigate('/login');
        })
        .catch((error) => {
            // Jika gagal (validasi error), tampilkan pesan error
            setValidation(error.response.data.errors);
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <h4>REGISTER</h4>
                        <hr />
                        {/* Menampilkan pesan error validasi jika ada */}
                        {validation.length > 0 && (
                            <div className="alert alert-danger">
                                {validation.map((error, index) => (
                                    <p key={index} className="m-0">{error.path}: {error.msg}</p>
                                ))}
                            </div>
                        )}
                        <form onSubmit={registerHandler}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;