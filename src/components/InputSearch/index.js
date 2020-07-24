import React from 'react'
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import unsplash from '../Api/unsplash'
import './styles.css'

class InputSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchText: ''
        }
        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.search = this.search.bind(this)
    }
    onChangeSearch(e) {
        e.preventDefault()
        this.setState({searchText:e.target.value})
    }
    search() {
        console.log('this.props.tipo', this.props.tipo)
        if(this.props.tipo == 'usersJPH') {
            this.searchUsersJPH()
        } else {
            this.searchUS()
        }
    }

    async searchUS() {
        const response = await unsplash.get('/search/'+this.props.tipo, {
            params : {
                query : this.state.searchText,
                orientation : 'portrait',
                per_page : this.props.tipo=='photos'?9:12
            },
        })
        console.log('response',  response)
        this.props.mostrar(response.data.results)
    }

    async searchUsersJPH() {
    }

    render() {
        return (
            <Container className="InputSearch">
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            id="buscador"
                            placeholder="Buscador"
                            aria-label="Buscador"
                            aria-describedby="basic-addon2"
                            onChange={this.onChangeSearch}
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={()=>this.search()}>Buscar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InputSearch