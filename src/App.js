import React, {Component} from 'react';
import ProductContext from './productContext';
import ProductsBrowser from './ProductsBrowser/ProductsBrowser';
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {

  state = {
    company: {
      name: `Sid's Kitchen Stuff`,
      path: `SidsKitchenStuff`
    },
    selected: []
  }

  updateSelected = (action, product) => {
    if (action === 'add') {
      this.setState({ selected: [...this.state.selected, product] })
    }
    if (action === 'remove') {
      const selected = this.state.selected.filter(p => p.id !== product.id)
      this.setState({ selected })
    }
  }

  render() {
    const contextValue = {
      company: this.state.company,
      selected: this.state.selected,
      handleSelected: this.updateSelected,
    }

    return (
      <ProductContext.Provider value={contextValue}>
        <div className="App">
          <Route exact path={'/co/:co_name/products'} component={ProductsBrowser} />
        </div>
      </ProductContext.Provider>
      
    );
  }
}

export default App;
