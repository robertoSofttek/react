import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImagesContainer from '../ImagesContainer'
import InputSearch from '../InputSearch'

class ImagesSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
        this.mostrar = this.mostrar.bind(this)
        console.log('this.state.images', this.state.images)
    }
    mostrar(imagenes) {
        console.log('imagenes', imagenes)
        this.setState({images:imagenes})
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <InputSearch tipo="photos" mostrar={(imagenes)=>{this.mostrar(imagenes)}}></InputSearch>
                    </Col>
                </Row>
                <Row><Col><hr/></Col></Row>
                <Row>
                    <Col sm="12">
                         <ImagesContainer imagenes={this.state.images}></ImagesContainer>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ImagesSearch