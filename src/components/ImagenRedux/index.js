import React from 'react'
import {connect} from 'react-redux'
import Faker from 'faker'

import {selPintura} from '../../Actions'
/* import UserData from '../UserData' */

const ImagenRedux = (props) => {

    const selecciona = () => {
        console.log('Faker', Faker.random.number())
        props.selPintura(props.imagen.alt_description, props.imagen.urls.thumb, props.imagen.likes)
    }
    return (
        <img onClick={()=>selecciona()}
            className="d-block w-100"
            alt={props.imagen.alt_description}
            src={props.imagen.urls.thumb}
        />
    )
}
export default connect(null, {selPintura})(ImagenRedux)
