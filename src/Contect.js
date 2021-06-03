import React from 'react'
import {Link , Switch, Route} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
export const Contect = () => {
    return (
        <div>
             <Link style={{textDecoration:'none'}} to="/contact/Main">Main</Link>
          <Link style={{textDecoration:'none'}} to="/contact/home">Home</Link>

         <Switch>
          <Route exact path="/contact/Main" component={Home} />
          <Route exact path="/contact/home" component={About} />
          </Switch>
          <h1> This is a Contact Page  </h1>
        </div>
    )
}
