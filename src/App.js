import React, {Component} from 'react';
import ProductContext from './productContext';
import ProductsBrowser from './ProductsBrowser/ProductsBrowser';
import Compare from './Compare/Compare';
import Admin from './Admin/Admin';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import './App.css';

class App extends Component {

  state = {
    company: {
      name: '',
      path: ''
    },
    selected: []
  }

  updateSelected = (action, product) => {
    if (action === 'add') {
      const selected = this.state.selected
      selected.push(product)
      console.log(selected)
      this.setState({ selected })
    }
    if (action === 'remove') {
      const selected = this.state.selected.filter(p => p.id !== product.id)
      this.setState({ selected })
    }
  }

  updateCompany = (company) => {
    this.setState({
      company
    })
  }

  render() {
    const contextValue = {
      company: this.state.company,
      selected: this.state.selected,
      handleSelected: this.updateSelected,
      handleCompany: this.updateCompany
    }

    return (
      <ProductContext.Provider value={contextValue}>
        <div className="App">
          <Route exact path={'/co/:co_path/products'} component={ProductsBrowser} />
          <Route exact path={'/co/:co_path/admin'} component={Admin}/>
          <Route exact path={'/compare'} component={Compare} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/'} component={Landing} />
        </div>
      </ProductContext.Provider>
      
    );
  }
}

export default App;
