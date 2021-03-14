import {createContext} from 'react';

const productContext = createContext({
    company: {},
    handleCompany: () => {},
    handleSelected: () => {},
    handleBrowserPath: () => {}
})

export default productContext;