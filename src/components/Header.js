import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className='header' >
            <header>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"></img>
                <div style={{float:'right'}}>
                    <Link to='/home'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    <Link to='/login'>登录</Link>
                </div>
            </header>
        </div>
    )
}