import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import InputSearch from '../InputSearch'
import UsersList from '../UsersList'

class UserSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            lista: []
        }
        this.mostrar = this.mostrar.bind(this)
        console.log('this.state.lista', this.state.lista)
    }
    mostrar(lista) {
        console.log('lista', lista)
        this.setState({lista:lista})
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <InputSearch tipo={this.props.tipo} mostrar={(lista)=>{this.mostrar(lista)}}></InputSearch>
                    </Col>
                </Row>
                <Row><Col><hr/></Col></Row>
                <Row>
                    <Col>
                         <UsersList lista={this.state.lista}></UsersList>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserSearch