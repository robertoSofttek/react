import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import MyButton from '../MyButton'
import {selCliente} from '../../Actions'
/* import UserData from '../UserData' */

const User = (props) => {

    console.log('----User props', props)

    const selecciona = () => {
        props.selCliente(props.user.id, props.user.name)
    }
        return (
            <Container>
                <Row>
                    <Col>{props.user.name}</Col>
                    <Col><MyButton onClick={()=>selecciona()} text="->"></MyButton></Col>
{/*                     <Col sm="9">
                        <UserData valores = {this.state.user}  campos={["username","email","phone","website"]} titulos={["User Name","Mail","Phone","WebSite"]}>
                        </UserData>
                    </Col>
 */}
                </Row>
{/*                 <Row>
                    <Col><b>Address:</b></Col>
                    <Col sm="11">
                        <UserData show={this.state.show} valores = {this.state.user.address}  campos={["street","suite","zipcode","city"]} titulos={["Street","Suite","Zipcode","City"]}>
                        </UserData>
                    </Col>
                </Row>
                <Row>
                    <Col><b>Company:</b></Col>
                    <Col sm="11">
                        <UserData show={this.state.show} valores = {this.state.user.company}  campos={["name","bs","catchPhrase"]} titulos={["Company Name","bs","Phrase"]}>
                        </UserData>
                    </Col>
                </Row>
                <Row>
                ----------------------------------------------------------------------------------------------------------------------------------------------------------------
                </Row>
 */}
            </Container>
        )
}
export default connect(null, {selCliente})(User)
