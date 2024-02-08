import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page';
import Prj from './pages/prjarch';

function App({ Component, pageProps }) {
     return (
       <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="Project Archive" component={Prj} />
           {/* Add more routes here */}
         </Switch>
       </Router>
     );
   }
   
export default App;