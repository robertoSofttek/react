import React from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'

import ImagesComponent from '../ImagesComponent'
import ImagenRedux from '../ImagenRedux'

class ImagesContainer extends React.Component {
    constructor(props) {
        super()
        console.log('constructor(props)', props)
        this.state = {
            imagenes : props.imagenes,
            indexCarusel : 0
        }
        console.log('this.state.imagenes', this.state.imagenes)
        this.handleSelect = this.handleSelect.bind(this)

    }
    handleSelect(selectedIndex, e) {
        console.log(selectedIndex)
        this.setState({indexCarusel : selectedIndex})
    }
    componentWillReceiveProps(props){
//        console.log('imagenesContainerProps', this.state.imagenes)       
        this.setState({imagenes : props.imagenes})
    }
    render() {
        return (
            <Container>
                <Row><Col sm="12"><h6>Elija la Pintura</h6></Col></Row>
                <Row><Col><hr/></Col></Row>
                <Row>
                    <Col sm="6">
                        <Row>
                            {
                                this.state.imagenes.map((imagen, i)=>{
                                    return(
                                        <Col sm="4" key={i}>
                                            <ImagesComponent imagen={imagen} onClick={(e)=>this.handleSelect(i,e)}></ImagesComponent>

{/*                                             <img
                                                className="d-block w-100"
                                                src={imagen.urls.thumb}
                                                onClick={(e)=>this.handleSelect(i,e)}
                                                id={imagen.id}
                                            />
 */}
                                         </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <Carousel activeIndex={this.state.indexCarusel} onSelect={this.handleSelect}>
                            {
                                this.state.imagenes.map((imagen, i)=>{
                                    return(
                                        <Carousel.Item key={i}>
{/*                                             <img onClick={()=>alert("holaaaa")}
                                            className="d-block w-100"
                                            alt={imagen.alt_description}
                                            src={imagen.urls.thumb}
                                            />
 */}
                                            <ImagenRedux imagen={imagen}/>
                                            <Carousel.Caption>
                                            <h3>{imagen.alt_description}</h3>
                                            <p>Autor : {imagen.user.name}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
{/*                                    console.log('imagen', imagen)
                                    return(
                                        <ImagesComponent imagen={imagen}></ImagesComponent>
                                    )
*/}
             </Container>
        )
    }
}

export default ImagesContainer