import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import MyButton from '../MyButton'
import { Link } from 'react-router-dom'


const MiComponente = (props) => {
    return (
        <Form.Group as={Row} controlId="form.ControlInput">
            <Form.Label column sm="2">{props.texto}</Form.Label>
            <Col sm={props.smInput}>
                <Form.Control ref={props.refs} type="text" placeholder={props.placeholder} disabled />
            </Col>
            <Col sm="2">
                {
                    props.boton == "true"?
                        <Link to={props.to}><MyButton onClick={() => props.onClick()} text={props.text}></MyButton></Link>
                    : ''
                }
            </Col>
        </Form.Group>
    )
}

export default MiComponente