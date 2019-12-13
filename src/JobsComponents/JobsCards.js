import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class JobsCards extends Component {
    render() {
        var techs = []
        this.props.data.technologies.forEach(item=>
            techs.push(<p>{item}</p>)
        )
        return (
            
                <Card>
  <Card.Body>
            <h1>Job title {this.props.data.title}</h1>
                <p>Job description {this.props.data.description}</p>
        <p>Job price {this.props.data.price}</p>
        <p>technologies:  </p>
        {techs}

  </Card.Body>
</Card>
    
            
        )
    }
}
