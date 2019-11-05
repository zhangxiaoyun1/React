import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './All.css';

export default class All extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `https://cnodejs.org/api/v1/topics?tab=all&page=${this.props.match.params.page || 1}`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res.data
                })
            })
    }
    componentWillUpdate(p1, p2) {
        if (this.props.match.params.page !== p1.match.params.page) {
            let url = `https://cnodejs.org/api/v1/topics?tab=all&page=${this.props.match.params.page || 1}`;
            fetch(url, { method: 'get' })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    this.setState({
                        data: res.data
                    })
                })
        }

    }
    render() {
        let { url } = this.props.match;
        let str = url.split('/');
        str[str.length - 1] = 'content';
        str = str.join('/');
        return (
            <div>
                <ul>
                    {
                        this.state.data.map(
                            (item, index) => <li key={index}>
                                <img src={item.author.avatar_url} />
                                <div style={{display:'inline-block',textAlign:'center',width:'80px'}}>
                                    <span>{item.reply_count}/</span>
                                    <span style={{ fontSize: '10px', marginRight: '10px' }}>{item.visit_count}</span>
                                </div>
                                <div className='top'>置顶</div>
                                <span style={{ fontSize: '10px', marginRight: '10px', float: 'right' }}>三天前</span>
                                <a className='jump' href={`${str}/${item.id}`}>{item.title}</a>
                            </li>)
                    }
                </ul>
                <div>
                    <ul className='bot'>
                        <li>&lt;&lt;</li>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(((item, index) => {
                                return <li key={index}>
                                    <a href={`${url}/${item}`}>{item}</a>
                                </li>
                            }))
                        }
                        <li>&gt;&gt;</li>
                    </ul>
                </div>
            </div>

        )
    }
}