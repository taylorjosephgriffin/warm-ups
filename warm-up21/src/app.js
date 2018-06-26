import React, { Fragment, Component } from 'react'
import Nav from './nav'
import Pokedex from './pokedex'
import * as queryString from './query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      let hash = queryString.parse(window.location.hash)
      this.setState({
        type: hash.type
      })
    }, false)
    window.dispatchEvent(new Event('hashchange'))
  }
  render() {
    const { type } = this.state
    const { pokedex } = this.props
    const activePokemon = type
      ? pokedex.filter(pokemon => pokemon.type === type)
      : pokedex
    return (
      <Fragment>
        <h1 className="text-center">Pokedex</h1>
        <div className="container">
          <Nav activeType={ type }/>
          <Pokedex pokedex={activePokemon}/>
        </div>
      </Fragment>
    )
  }
}
