import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap' 

class MyButton extends React.Component {
    render() {
        return (
            <Button size="sm" style={{margin:'0px 5px 5px 5px'}} onClick={() => this.props.onClick()}>
                {this.props.text}
            </Button>
        )
    }
}

export default MyButton