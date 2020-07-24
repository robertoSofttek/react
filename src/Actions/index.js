import unsplash from '../components/Api/unsplash'

const p = {
    idPedido:0,
    idCliente:'',
    nombre:'',
    idPintura:'',
    url:'',
    monto:0,
    estatus:'A'
}

//Actions Creator

export const crearPedido = (p) => {
    //Action
    return {
        type: 'CREAR_PEDIDO',
        payload: p
    }
}

export const agregarAlPedido = (idPedido, idPintura, monto) => {
    //Action
    return {
        type: 'AGREGAR_AL_PEDIDO',
        payload: {
            idPedido:idPedido,
            idPintura:idPintura,
            monto:monto
        }
    }
}

export const cancelarPedido = (idPedido, monto) => {
    //Action
    return {
        type: 'CANCELAR_PEDIDO',
        payload: {
            idPedido:idPedido,
            monto:monto
        }
    }
}

export const vender = (idPedido, monto) => {
    return {
        type: 'VENDER',
        payload: {
            idPedido:idPedido, 
            monto:monto
        }
    }
}

export const selPedido = (pedido) => {
    return {
        type: 'SEL_PEDIDO',
        payload: {
            pedido:pedido
        }
    }
}
export const selCliente = (id, det) => {
    return {
        type: 'SEL_CLIENTE',
        payload: {
            id:id,
            det:det
        }
    }
}
export const selPintura = (id, det, monto) => {
    return {
        type: 'SEL_PINTURA',
        payload: {
            id:id,
            det:det,
            monto:monto
        }
    }
}
export const limpiar = (id, det, monto) => {
    return {
        type: 'LIMPIAR',
        payload: ''
    }
}

export const verClientes = () => {
    return async (dispatch, getState) => {
        try {
            const respone = await unsplash.get('/search/users', {
                params : {
                    query : 'a',
                    orientation : 'portrait',
                    per_page : 50
                },
            })

            dispatch( {
                type : 'NEW_USER_LIST',
                payload : {
                    clientes : respone.data.results
                }
            })
        } catch {
            dispatch( {
                type : 'ERROR',
                payload : {
                    mensaje : 'no se pudo conectar'
                }
            })
        }
    }
}