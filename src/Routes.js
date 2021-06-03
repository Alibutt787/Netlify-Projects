import React from 'react'
import {Home} from './Home'
import {Contect} from './Contect'
import {Switch,Route,Link} from 'react-router-dom' 
import {About} from './About'
export const Routes = () => {
    return (
         <>
          <div  style={{padding:25,backgroundColor:'grey',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
          <Link style={{textDecoration:'none'}} to="/">Main</Link>
          <Link style={{textDecoration:'none'}} to="/About">Home</Link>
          <Link style={{textDecoration:'none'}} to="/Contact">Contact</Link>
          </div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route path="/Contact" component={Contect} />
          </Switch>
         
     </>
       
    )
}
