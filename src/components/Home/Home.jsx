import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { koko } from './../../db';
import "./Home.css"

const Home = () => {
    const redirectToRegistrsate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user')) {

        } else {
            redirectToRegistrsate('/registrate')
        };
    }, [])

    const clear = () => {
        localStorage.clear()
        redirectToRegistrsate('/registrate')
    }
    return (
        <div>
            <button className="sliding-button" onClick={clear}>Выйти</button>
            <h1 className='sneakers'>Sneakers</h1>
            {koko.map(el => (
                <div className='map_div'>
                    <img className='map_img' src={el.image} width="600px" alt="" />
                    <h2>{el.name}</h2>
                    <h3>{el.price}$</h3>
                </div>
            ))}
        </div>
    );
};

export default Home;