import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Error404.module.css'



function Error404() {

    return (
        <div className={s.wrap}>
            <div className={s.notfound}>

                <div className={s.notfound404}>
                    <h1>404</h1>
                </div>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is
                    temporarily unavailable</p>

                <NavLink className={s.navLink} to={'/'}>Go To Homepage</NavLink>
            </div>
        </div>
    )
}

export default Error404
