import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
export default class JobsCards extends Component {


    

    render() {
        var techs = []
        this.props.data.technologies.forEach(item =>
            techs.push(<p>{item}</p>)
        )
        return (
            <Fade top>
                <Card>
                    <Card.Body>
                        <h1>Job title {this.props.data.title}</h1>
                        <p>Job description {this.props.data.description}</p>
                        <p>Job price {this.props.data.price}</p>
                        <p>technologies:  </p>
                        {techs}
                        <Button variant="primary" onClick={()=>this.props.showDetails(this.props.data)} >Primary</Button>
                    </Card.Body>
                </Card>
            </Fade>

        )
    }
}
