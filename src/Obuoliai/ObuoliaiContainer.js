import React, {Component} from 'react';
import ObuoliaiComponent from './ObuoliaiComponent'
import axios from 'axios'

class ObuoliaiContainer extends Component {
    constructor() {
        super();

        this.state = {
            obuoliai: []
        }
    }

    componentWillMount() {
        axios
            .get("http://localhost:8080/rest/obuolys")
            .then((atsakymasIsServerio) => {
                console.log(atsakymasIsServerio);
                this.setState({obuoliai: atsakymasIsServerio.data});
            })
            .catch((klaida) => {
                console.log(klaida);
            });
        
    }

    render() {
        return <ObuoliaiComponent visiObuoliai={this.state.obuoliai}/>
    }
}

export default ObuoliaiContainer;