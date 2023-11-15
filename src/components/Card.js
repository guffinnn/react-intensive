import React, { useState } from 'react';

function Card() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert("Данные успешно сохранены!");
        } else {
            alert('Ошибка сохранения данных');
        }
    };

    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <p className="title">Login</p>
            <div className="input-field">
                <input required className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="label" htmlFor="input">Enter Email</label>
            </div>
            <div className="input-field">
                <input required className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="label" htmlFor="input">Enter Password</label>
            </div>
            <button className="submit-btn" type="submit">Sign In</button>
        </form>
    );
}

export default Card;
