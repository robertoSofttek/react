import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Crear from '../Pedido/Crear'
import Menu from '../Menu'
import Cancelar from '../Pedido/Cancelar'
import Lista from '../Pedido/Lista'
import Vender from '../Pedido/Vender'
import UserList from '../UserList'

const App = () => {
    return (
        <Container>
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Crear} />
                    <Route path="/crearPedido" component={Crear} />
                    <Route path="/cancelarPedido" component={Cancelar} />
                    <Route path="/vender" component={Vender} />
                    <Route path="/clientes" component={UserList} />
                    <Route path="/pedidos" component={Lista} />
                </Switch>
            </BrowserRouter>
        </Container>
    )
}

export default App