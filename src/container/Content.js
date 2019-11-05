import React, { Component } from 'react'

export default class Content extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data);
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        console.log(this.state.data)
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                
            </div>

        )
    }
}
