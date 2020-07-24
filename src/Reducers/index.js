import {combineReducers} from 'redux'

//Reducers
    const pedidos = (pedidos = [], action) => {
        let pedidosCopia = pedidos
        switch(action.type) {
            case "CREAR_PEDIDO" :
                pedidosCopia.push(action.payload)
            break
            case "CANCELAR_PEDIDO" :
                pedidosCopia = pedidosCopia.map((pedido)=> {
                    if (pedido.idPedido==action.payload.idPedido) {
                        pedido.estatus = 'C'
                    }
                    return pedido
                })
            break
            case "VENDER" :
                pedidosCopia = pedidosCopia.map((pedido)=> {
                    if (pedido.idPedido==action.payload.idPedido) {
                        pedido.estatus = 'V'
                    }
                    return pedido
                })
            break
        }
        return pedidosCopia
    }
    
    const ventas = (montos = {
        pedido:0,
        vendido:0,
        cancelado:0
    }, action) => {
        let montosCopia = montos
        switch(action.type) {
            case "CREAR_PEDIDO":
                montosCopia.pedido += parseFloat(action.payload.monto)
            break
            case "AGREGAR_AL_PEDIDO":
                montosCopia.pedido += parseFloat(action.payload.monto)
            break
            case "CANCELAR_PEDIDO":
                montosCopia.pedido -= parseFloat(action.payload.monto)
                montosCopia.cancelado += parseFloat(action.payload.monto)
            break
            case "VENDER":
                montosCopia.pedido -= parseFloat(action.payload.monto)
                montosCopia.vendido += parseFloat(action.payload.monto)
            break
            default: break
        }
        return montosCopia
    }

    const p = {
        idPedido:0,
        idCliente:'',
        nombre:'',
        idPintura:'',
        url:'',
        monto:0,
        estatus:'A'
    }

    const pantalla = (pedido = p, action) => {
        console.log('-------------------')
        console.log(action)
        switch(action.type){
            case "SEL_PEDIDO":
                pedido = action.payload.pedido
                return pedido
            case "SEL_CLIENTE":
                return {...pedido, idCliente: action.payload.id, nombre: action.payload.det}
            case "SEL_PINTURA":
                return {...pedido, idPintura: action.payload.id, url: action.payload.det, monto: parseFloat(action.payload.monto) }
            case "LIMPIAR":
                console.log("limpio p?",p)
                return p
            default:
                return pedido
        }
    }
    
const clientes = (clientes = [], action) => {
    switch(action.type) {
        case "NEW_USER_LIST" :
            return action.payload.clientes
        default :
            return clientes
    }
}

export default combineReducers({
    pedidos: pedidos,
    montos: ventas,
    pedido: pantalla,
    clientes: clientes
})
