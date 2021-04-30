import react from 'react'

import Homes from './Homes';
import contact from './Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Rountings = ()=>{
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Route exact  path='/' component={Homes} />
            <Route path='/contact' component={contact} />
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default Rountings;