import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

//import {createPolicy,deletePolicy} from '../../Actions'
import {crearPedido, cancelarPedido, vender, limpiar} from '../../Actions'
import Lists from '../Lists'
import MyButton from '../MyButton'
import MiForma from '../MiForma'
import UserSearch from '../UserSearch'
import ImagesSearch from '../ImagesSearch'

const Pedido = (props) => {
    const [error, setError] = useState([])

    const pedidoRef = React.createRef()
    const clienteRef = React.createRef()
    const pinturaRef = React.createRef()
    const importeRef = React.createRef()

    let p = {
        idPedido:0,
        idCliente:'',
        nombre:'',
        idPintura:'',
        url:'',
        monto:0,
        estatus:'A'
    }

    const inicializa = () => {
        pedidoRef.current.value = ''
        clienteRef.current.value = ''
        pinturaRef.current.value = ''
        importeRef.current.value = ''
    } 

    const validar = () => {
        let ok = true
        let errores = []
        let i = 0
        switch(props.tipo) {
            case "CP":
                if(pedidoRef.current.value == '') { errores[i++] = 'No se genero id para el pedido'; ok = false }
                if(clienteRef.current.value == '') { errores[i++] = 'Debe de seleccionar un cliente'; ok = false }
                if(pinturaRef.current.value == '') { errores[i++] = 'Debe de seleccionar la pintura'; ok = false }
                if(pinturaRef.current.value != '' && importeRef.current.value == 0) { errores[i++] = 'No la vendas, mejor comprala tu ;)'; ok = false }
            break
            case "C":
            case "V":
                if(pedidoRef.current.value == '') { errores[i++] = 'Debe de seleccionar un pedido'; ok = false }
            break
        }
        setError(errores)
        return ok
    }
    const hBoton = () => {
        p = props.pedido
        p.idPedido = pedidoRef.current.value
        console.log('ref',p)
        if(validar()) {
            switch(props.tipo) {
                case "CP":
                    props.crearPedido(p)
                break
                case "C":
                    props.cancelarPedido(p.idPedido, p.monto)
                break
                case "V":
                    props.vender(p.idPedido, p.monto)
                break
            }
            props.limpiar()
            inicializa()
            if(props.tipo == "CP") {
                pedidoRef.current.value =  props.idPedidoFaker()
            }
        }
    }

    console.log('props',props)

    useEffect( ()=> {
        console.log('-------------------useEffect Pedido init')
        props.limpiar()
        inicializa()
        switch(props.tipo) {
            case "CP":
                pedidoRef.current.value =  props.idPedidoFaker()
            break
            case "C":
            case "V":
                pedidoRef.current.value =  ''
            break
        }
    }, []) 

    useEffect( ()=> {
        console.log('-------------------useEffect Pedido')
        actualizar()
    }, [props]) //this.setState({count:10}) //cambio en el estado contador

    const actualizar = () => {
        console.log('Actualizar',props.pedido)
        if(pedidoRef && pedidoRef.current) {
            console.log('pedidoRef',pedidoRef.current)
            if(props.pedido.idPedido) {
                pedidoRef.current.value = props.pedido.idPedido
            }
        }
        if(clienteRef && clienteRef.current) {
            console.log('clienteRef',clienteRef.current)
            if(props.pedido.idCliente) {
                clienteRef.current.value = props.pedido.nombre
            }
        }
        if(pinturaRef && pinturaRef.current) {
            console.log('clienteRef',pinturaRef.current)
            if(props.pedido.idPintura) {
                pinturaRef.current.value = props.pedido.idPintura
                importeRef.current.value = props.pedido.monto
            }
        }
    }
    return (
        <Container>
            
            <Row>
                <Col sm="12"><h4>{props.titulo}</h4></Col>
            </Row>
            <Row>
                <Col><hr/></Col>
            </Row>
            <BrowserRouter>
                <Row>
                    <Col sm="6">
                        <Row>
                            <Col>
                                <MiForma pedidoRef = {pedidoRef}     clienteRef = {clienteRef}     pinturaRef = {pinturaRef} importeRef = {importeRef} 
                                         pedidoBot={props.pedidoBot} clienteBot={props.clienteBot} pinturaBot={props.pinturaBot}></MiForma>
                            </Col>
                        </Row>
                        {error.map((item, i)=>{
                            return(
                                <Row>
                                    <Col><Alert key={i} variant="danger">{item}</Alert></Col>
                                </Row>
                            ) 
                        })}
                        <Row>
                            <Col><hr/></Col>
                        </Row>
                        <Row>
                            <Col sm="5"></Col>
                            <Col sm="2">
                                <MyButton text={props.boton} onClick={hBoton}></MyButton>
{/*                                 <MyButton text="Actualizar" onClick={actualizar}></MyButton> */}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="6">
                        <Switch>
                            <Route path="/" exact component={Lists} />
                            <Route path="/buscarPedido" component={Lists} />
                            <Route path="/buscarCliente" component={()=><UserSearch tipo="users"></UserSearch>} />
                            <Route path="/buscarPintura" component={ImagesSearch} />
                        </Switch>
                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        pedido : state.pedido
    }
}

export default connect(mapStateToProps, {crearPedido, cancelarPedido, vender, limpiar})(Pedido)