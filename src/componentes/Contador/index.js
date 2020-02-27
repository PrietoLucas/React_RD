import React, { Component } from 'react';
import './contador.css'
import { Button } from 'reactstrap';

class Contador extends Component {

    state = {
        numero: 0
      }
    
      aumentar = () =>{
        let novoNumero = this.state.numero
        novoNumero++ 
        this.setState({numero: novoNumero})
      }
    
      diminuir = () =>{
        if(this.state.numero >= 1){
        let novoNumero = this.state.numero
        novoNumero--
        this.setState({numero: novoNumero})
      } else {
        alert('Não permitido, Faro!')
      }
      }
    
      render(){
        return (
          <div>
            <h1 className="conteiner-titulo">{ this.state.numero }</h1>
            <Button className="mr-2" color="success" outline onClick={this.aumentar}> Aumentar </Button>
            <Button color="danger" outline onClick={this.diminuir}> Diminuir </Button>
          </div>
        )
      }
}

export default Contador;