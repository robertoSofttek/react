import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import MyButton from '../MyButton'
import {selCliente} from '../../Actions'
/* import UserData from '../UserData' */

const User = (props) => {

    console.log('----User props', props)

    const selecciona = () => {
        props.selCliente(props.user.id, props.user.name)
    }
        return (
            <Container>
                <Row>
                    <Col>{props.user.name}</Col>
                    <Col><MyButton onClick={()=>selecciona()} text="->"></MyButton></Col>
                </Row>
            </Container>
        )
}
export default connect(null, {selCliente})(User)
