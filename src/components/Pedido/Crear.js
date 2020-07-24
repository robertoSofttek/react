import React from 'react'
import Faker from 'faker'
import Pedido from '../Pedido'

const Crear = () => {
    const idPedidoFaker = () => {
        return Faker.random.number()
    }
    return (
        <Pedido titulo="Crear pedido" boton="Crear" tipo="CP" pedidoBot="false" clienteBot="true" pinturaBot="true" idPedidoFaker={()=>idPedidoFaker()}/>
    )
}

export default Crear