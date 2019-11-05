import React, { Component } from 'react'
import Header from './components/Header'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './container/Home';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
import API from './container/API';
export default class App extends Component {
    render() {
        return (
            <Router basename='/React/'>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Switch>
                            <Route path='/login' component={Login}/>
                            <Route path='/home' component={Home} />
                            <Route path='/start' component={Start} />
                            <Route path='/api' component={API} />
                            <Route path='/about' component={About} />
                            <Redirect to={`/home`} />
                        </Switch>

                    </div>
                    <div className='right'>
                        CNode:Node.js 专业中文社区
                    </div>
                </div>
            </Router>
        )
    }
}
