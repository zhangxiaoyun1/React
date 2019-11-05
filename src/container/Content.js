import React, { Component } from 'react'

export default class Content extends Component {
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
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                
            </div>

        )
    }
}
