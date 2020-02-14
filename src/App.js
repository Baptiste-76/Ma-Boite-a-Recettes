import React, { Component } from 'react'
import './App.css'
import base from './base'
import Admin from './components/Admin'
import Card from './components/Card'
import Header from './components/Header'
import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  // On synchronise le state de l'application avec la BDD lors du chargement de l'App
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  // On se désynchronise au moment où l'App se ferme
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  // Lors de l'appui sur le bouton 'Remplir', la fonction chargerExemple() est appellée et remplie le state avec les recettes (importées via ./components.recettes)
  chargerExemple = () => this.setState({ recettes })

  ajouterRecette = (recette) => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  modifierRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          { cards }
        </div>
        <Admin 
          pseudo={this.state.pseudo}
          recettes={this.state.recettes} 
          chargerExemple={this.chargerExemple} 
          ajouterRecette={this.ajouterRecette} 
          modifierRecette={this.modifierRecette} 
          supprimerRecette={this.supprimerRecette}>
        </Admin>
      </div>
    )
  }
}

export default App
