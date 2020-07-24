import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
const Lista = (props) => {
    console.log('PEDIDOS: ', props)
    return (
        <Container>
            <Row>
                <Col sm="12"><h5>Lista de Pedidos</h5></Col>
            </Row>
            <Row><Col><hr/></Col></Row>
            <Row>
                <Col sm="1"><h6>Pedido</h6></Col>
                <Col sm="4"><h6>Cliente</h6></Col>
                <Col sm="4"><h6>Pintura</h6></Col>
                <Col sm="2"><h6>Monto</h6></Col>
                <Col sm="1"><h6>Estatus</h6></Col>
            </Row>{
                props.pedidos.map((item,i)=>{
                    return(
                        <Row key={i}>
                            <Col sm="1">{item.idPedido}</Col>
                            <Col sm="1">{item.idCliente}</Col>
                            <Col sm="3">{item.nombre}</Col>
                            <Col sm="2">{item.idPintura}</Col>
                            <Col sm="2"><img width="80px"
//                                    className="d-block w-100"
                                    alt={item.idPintura}
                                    src={item.url}
                                />
                            </Col>
                            <Col sm="2">{item.monto}</Col>
                            <Col sm="1">{item.estatus}</Col>
                        </Row>
                    )
                })
            }
            <Row><Col><hr/></Col></Row>
            <Row><Col><hr/></Col></Row>
            <Row>
                <Col><h5>Detalle Montos</h5></Col>
            </Row>
            <Row><Col><hr/></Col></Row>
            <Row>
                <Col sm="4"><h6>Pedido</h6></Col>
                <Col sm="4"><h6>Cancelado</h6></Col>
                <Col sm="4"><h6>Venido</h6></Col>
            </Row>
            <Row>
                <Col>{props.montos.pedido}</Col>
                <Col>{props.montos.cancelado}</Col>
                <Col>{props.montos.vendido}</Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        pedidos : state.pedidos,
        montos : state.montos
    }
}

export default connect(mapStateToProps, null)(Lista)