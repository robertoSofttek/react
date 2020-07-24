import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {verClientes} from '../../Actions'

const UserList = (props) => {
    useEffect(()=>{
        props.verClientes()
    },[])
    
    return (
        <Container>
            <Row><Col sm="4"/><Col><h4>Clientes</h4></Col></Row>
            <Row><Col><hr/></Col></Row>
            <Row><Col><hr/></Col></Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="3"><h6>Id</h6></Col>
                <Col sm="4"><h6>Nombre</h6></Col>
                <Col sm="4"><h6>Direccion</h6></Col>
            </Row>

            {
                props.clientes.map((item,i) => {
                    return(
                        <Row key={i}>
                            <Col sm="1"><div className="fotoPerfil"><img src={item.profile_image.small} width="50px"/></div></Col>
                            <Col sm="3">{item.id}</Col>
                            <Col sm="4">{item.name}</Col>
                            <Col sm="4">{item.location}</Col>
                        </Row>
                    )
                })
            }
            <Row>

            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        clientes:state.clientes
    }
}
export default connect(mapStateToProps, {verClientes})(UserList)