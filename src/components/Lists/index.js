import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import MyButton from '../MyButton'
import {selPedido} from '../../Actions'

const Lists = (props) => {
    const rowRef = []

    const selecciona = (item, i) => {
        props.selPedido(item)
/*         console.log('rowRef', rowRef[i])
        rowRef[i].display = 'none' */
    }

    useEffect( ()=> {
        console.log('-------------------useEffect actuliza Lists de pedidos')
    }, [props]) //this.setState({count:10}) //cambio en el estado contador

    return (
        <Container>
            <Row>
                <Col sm="12"><h5>Lista de Pedidos</h5></Col>
            </Row>
            <Row><Col><hr/></Col></Row>
            <Row>
                <Col sm="2"><h6>Pedido</h6></Col>
                <Col sm="6"><h6>Cliente</h6></Col>
                <Col sm="2"><h6>Monto</h6></Col>
                <Col sm="2"><h6></h6></Col>
            </Row>
            {

                props.pedidos.map((item,i)=>{
                    rowRef[i] = React.createRef()
                    return(
                        item.estatus=="A"? 
                            <Row key={i} ref={rowRef[i]}>
                                <Col sm="2">{item.idPedido}</Col>
                                <Col sm="2">{item.idCliente}</Col>
                                <Col sm="4">{item.nombre}</Col>
                                <Col sm="2">{item.monto}</Col>
                                <Col sm="2"><MyButton onClick={()=>selecciona(item, i)} text="->"></MyButton></Col>
                            </Row>
                        :''
                    )
                })
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        pedidos : state.pedidos
    }
}

export default connect(mapStateToProps, {selPedido})(Lists)