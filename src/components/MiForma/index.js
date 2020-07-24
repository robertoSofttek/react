import React,{ useEffect } from 'react'
import {Container, Form, Row, Col} from 'react-bootstrap'

import MiComponente from '../MiComponente'
const MiForma = (props) => {

    const buscarPedido = () => {
    }
    const buscarCliente = () => {
    }
    const buscarPintura = () => {
    }
    useEffect(()=>{
        console.log('props MiComponente', props)
    },[])
    return (
        <Container>
            <MiComponente texto="Pedido"  refs={props.pedidoRef}  smInput="6" placeholder="Teclea el id del pedido o buscalo" text="buscar" onClick={buscarPedido}   to="" boton={props.pedidoBot}></MiComponente>
            <MiComponente texto="Cliente" refs={props.clienteRef} smInput="8" placeholder="Teclea el id del cliente o buscalo" text="buscar" onClick={buscarCliente} to="/buscarCliente" boton={props.clienteBot}></MiComponente>
            <MiComponente texto="Pintura" refs={props.pinturaRef} smInput="6" placeholder="Teclea el id del pintura o buscalo" text="buscar" onClick={buscarPintura} to="/buscarPintura" boton={props.pinturaBot}></MiComponente>
            <MiComponente texto="Importe" refs={props.importeRef} smInput="4" placeholder="Costo" text="" boton="false"></MiComponente>
        </Container>
    )
}

export default MiForma