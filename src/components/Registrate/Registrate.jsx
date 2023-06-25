import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Registrate.css"

const Registrate = () => {
    const [inputValueLogin, setInputValueLogin] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const redirect = useNavigate()
    const reg = () => {
        if (!inputValueLogin || !inputValuePassword) {
            alert("Заполните поля")
        }
        else {
            const userLogin = {
                nickName: inputValueLogin,
                password: inputValuePassword,
            }
            localStorage.setItem('user', JSON.stringify(userLogin))
            redirect('/')
        }
    }
    function inputChange(event) {
        setInputValueLogin(event.target.value)

    }
    function inputChange2(event) {
        setInputValuePassword(event.target.value)

    }

    return (


        <div style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto", padding: "15px", boxShadow: "0 10px 5px 5px rgba(30, 129, 204, 0.2)", marginTop: "50px" }}>

            <h1>Регистрация</h1>
            <div class="text-field text-field_floating">
                <input class="text-field__input" id="text" type="text" placeholder='Введите никнейм' value={inputValueLogin} onChange={inputChange} />
                <label class="text-field__label" for="text">Логин</label>
            </div>
            <div class="text-field text-field_floating">
                <input class="text-field__input" type="password" id="password" placeholder='Введите пароль' value={inputValuePassword} onChange={inputChange2} />
                <label class="text-field__label" for="password">Пароль</label>
            </div>
            <button className="sliding-button" onClick={reg}>Зарегистрироваться</button>

        </div>


    );
};

export default Registrate;