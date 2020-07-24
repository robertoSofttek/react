import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import User from '../User'

class UsersList extends React.Component {

    constructor(props) {
        super()
        console.log('constructor(props)', props)
        this.state = {
            users: props.lista
        }
        console.log('this.state.users', this.state.users)
    }
    componentWillReceiveProps(props){
        this.setState({users: props.lista})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="6"><b>Seleccione el Cliente</b></Col>
                </Row>
                <Row><Col><hr/></Col></Row>
                <Row>
                    <Col>
                        {
                            this.state.users.map((user)=>{
                                return(
                                    <User user={user} key={user.id} ></User>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UsersList