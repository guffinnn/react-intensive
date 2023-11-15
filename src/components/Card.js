import React from 'react';

function Card() {
    return (
        <form className="form-control" action="">
            <p className="title">Login</p>
            <div className="input-field">
                <input required="" className="input" type="text" />
                <label className="label" htmlFor="input">Enter Email</label>
            </div>
            <div className="input-field">
                <input required="" className="input" type="password" />
                <label className="label" htmlFor="input">Enter Password</label>
            </div>
            <button className="submit-btn">Sign In</button>
        </form>
    );
}

export default Card;