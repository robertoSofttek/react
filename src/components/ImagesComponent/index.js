import React from 'react'
import {Carousel} from 'react-bootstrap'

class ImagesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imagen : props.imagen,
        }
        this.referencia = React.createRef()
        console.log('imagenesComponent', this.state.imagen)
    }
/*     componentWillReceiveProps(props){
        console.log('imagenesComponentProps', props.imagen)       
        this.setState({imagen : props.imagen})
    }
 */
    componentDidMount() {
        this.referencia.current.addEventListener('mouseover',
        (e) => {
            this.referencia.current.style.opacity = '0.5'
        })
        this.referencia.current.addEventListener('mouseout',
        (e) => {
            this.referencia.current.style.opacity = '1'
        })

    }
    render() {
        return (
            <img
            className="d-block w-100"
            alt={this.props.imagen.alt_description}
            src={this.props.imagen.urls.full}
            ref={this.referencia}
            onClick={(e)=>this.props.onClick(e)}
            />

/*             <Carousel.Item>
                <img
                className="d-block w-100"
                alt={this.state.imagen.alt_description}
                src={this.state.imagen.urls.full}
                />
                <Carousel.Caption>
                <h3>{this.state.imagen.alt_description}</h3>
                <p>Autor : {this.state.imagen.user.name}</p>
                </Carousel.Caption>
            </Carousel.Item>
 */
        )
    }
}

export default ImagesComponent