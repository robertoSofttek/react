import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Link} from 'react-router-dom'

//import {combineReducers, createStore} from 'redux'

const Menu = () => {
    return (
        <nav id="menu">
            <ul>
                <li><Link to="/crearPedido" >Crear Pedido</Link></li>
                <li><Link to="/cancelarPedido" >Cancelar Pedido</Link></li>
                <li><Link to="/vender" >Vender</Link></li>
                <li><Link to="/clientes" >Clientes</Link></li>
                <li><Link to="/pedidos" >Pedidos</Link></li>
            </ul>
        </nav>
    )
}

export default Menu