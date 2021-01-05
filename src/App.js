import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navbar} from "./component/Navbar";
import {About} from "./pages/About";
import {Chat} from "./pages/Chat";
import {SignIn} from "./pages/SignIn";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route path={'/'} exact component={Chat}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/signin'} component={SignIn}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </FirebaseState>
    )
}

export default App;
