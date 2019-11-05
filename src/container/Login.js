import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import Home from './Home'
export default class Login extends Component {
    render() {
        return (
            <div>
                <div style={{padding:'10px'}} className='left'>
                    <p>
                        <span style={{ color: '#80bd01' }}>主页</span>
                        <span>/登录</span>
                    </p>
                </div>
                <div className='login'>
                    用户名 <input type="text" name="username" id="" style={{marginLeft:'15px'}}/>
                    <br/>
                    密码 <input type="passworld" name="pwd" id="" style={{marginLeft:'25px'}}/>
                    <br/>
                    <button><Link to='/home'>登录</Link></button>
                </div>
            </div>
                )
            }
        }
