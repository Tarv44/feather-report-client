import {createContext} from 'react';

const productContext = createContext({
    company: {},
    handleCompany: () => {}
})

export default productContext;