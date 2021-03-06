import React, {Component} from 'react';
import Product from './Product/Product';
import ProductContext from './productContext';
import './App.css';

class App extends Component {

  state = {
    categories: [
      'Toasters',
      'Knives',
      'Blenders',
      'Saucepans',
      'Spatulas'
    ]
  }

  render() {

    const allFeatures = [
      {
        message: `Full lifetime warranty.`,
        id: 'feat1'
      },
      {
        message: `White Pearl`,
        id: 'feat10'
      },
      {
        message: `Onyx Black`,
        id: 'feat2'
      },
      {
        message: `Stainless Steel`,
        id: 'feat3'
      },
      {
        message: `Sharpening Sheath`,
        id: 'feat11'
      },
      {
        message: `Carbon`,
        id: 'feat4'
      },
      {
        message: `Nonstick`,
        id: 'feat12'
      },
      {
        message: `Titanium`,
        id: 'feat13'
      },
      {
        message: `Triple Rivet`,
        id: 'feat5'
      },
    ]

    const productData = {
      title: 'KitchenAid Chef Knife',
      price: 14.99,
      category: `Knives`,
      link: `https://www.amazon.com/KitchenAid-KKFTR6CHOB-Classic-Forged-Triple/dp/B01DKR4GNQ/ref=sr_1_4?dchild=1&keywords=kitchenaid+knife&qid=1614996109&sr=8-4`,
      description: `Every Cook's knife. For chopping, dicing, 
      slicing - the workhorse of knives for every chef, everyday. 
      Its size allows it to reach places others can't thread.`,
      features: [
        {
          message: `Full lifetime warranty.`,
          id: 'feat1'
        },
        {
          message: `Onyx Black`,
          id: 'feat2'
        },
        {
          message: `Stainless Steel`,
          id: 'feat3'
        },
        {
          message: `Carbon`,
          id: 'feat4'
        },
        {
          message: `Triple Rivet`,
          id: 'feat5'
        },

      ]
    }

    const contextValue = {
      categories: this.state.categories
    }

    return (
      <ProductContext.Provider value={contextValue}>
        <div className="App">
          <h1>Feather Report</h1>
          <Product productData={productData} type='edit' />
          <Product productData={productData} type='select' />
          <Product productData={productData} allFeatures={allFeatures} type='compare' />
        </div>
      </ProductContext.Provider>
      
    );
  }
}

export default App;
