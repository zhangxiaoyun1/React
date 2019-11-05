import React, { Component } from 'react'
import { Link,Route, Redirect, Switch } from 'react-router-dom'
import '../index.css'
import All from './All/All'
import Good from './Good/Good'
import Share from './Share/Share'
import Ask from './Ask/Ask'
import Job from './Job/Job'
import Content from './Content'
import Dev from './Dev/Dev'
export default class Home extends Component {
    change=(e)=>{
        var arr=document.querySelectorAll('.header2 a');
        for(var i=0;i<arr.length;i++){
            arr[i].className="";
        }
        e.target.className='top2';
    }
    render() {
        let { url } = this.props.match;
        return (
            <div>
                <div className='header2'>
                    <Link to={`${url}/all`} onClick={this.change}>全部</Link>
                    <Link to={`${url}/good`} onClick={this.change}>精华</Link>
                    <Link to={`${url}/share`} onClick={this.change}>分享</Link>
                    <Link to={`${url}/ask`} onClick={this.change}>问答</Link>
                    <Link to={`${url}/job`} onClick={this.change}>招聘</Link>
                    <Link to={`${url}/dev`} onClick={this.change}>客户端招聘</Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path={`${url}/all`} component={All} />
                        <Route path={`${url}/all/:page`} component={All} />
                        <Route exact path={`${url}/good`} component={Good} />
                        <Route path={`${url}/good/:page`} component={Good} />
                        <Route exact path={`${url}/share`} component={Share} />
                        <Route path={`${url}/share/:page`} component={Share} />
                        <Route exact path={`${url}/ask`} component={Ask} />
                        <Route path={`${url}/ask/:page`} component={Ask} />
                        <Route exact path={`${url}/job`} component={Job} />
                        <Route path={`${url}/job/:page`} component={Job} />
                        <Route exact path={`${url}/dev`} component={Dev} />
                        <Route path={`${url}/dev/:page`} component={Dev} />
                        <Route path={`${url}/content/:id`} component={Content} />
                        <Redirect to={`${url}/all`} />
                    </Switch>
                </div>

            </div>
        )
    }
}
