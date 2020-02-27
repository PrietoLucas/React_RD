import React, { Component } from 'react';
import './contador.css'

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
            <button className="contador-aumentar" type="button" onClick={this.aumentar}>Aumentar</button>
            <button className="contador-diminuir" type="button" onClick={this.diminuir}>Diminuir</button>
          </div>
        )
      }
}

export default Contador;