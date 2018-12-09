import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

// import Dashboard from '../dashboard/dashboard'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        {/* primeiro parametro eh a url destino e o segundo eh o componente que sera exibido */}
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        {/* se acessar qualquer url que nao as definidas acima, redireciona pra raiz */}
        <Redirect from='*' to='/' />
    </Router>
)