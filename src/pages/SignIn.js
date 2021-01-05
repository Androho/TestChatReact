import React, {Fragment} from 'react'
import fire from '../config/firebase';

export const SignIn = () => {
    function login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("logged in")
            })
            .catch((err) => {
                console.log("Error:" + err.toString())
            })
    }

    function signup() {

    }

    return (
        <Fragment>
            <div className="row valign-wrapper">
                <div className="s6 offset-s3 valign center-block">
                    <div className="card teal blue darken-1 center-align">
                        <div className="card-content white-text center">
                            <span className="card-title">Login</span><br/>
                            <form>
                                <div className="input-field s6 offset-s3 valign white-text">
                                    <div>
                                        <input id="email" type="email" className="validate white-text"/>
                                        <label htmlFor="email">Email</label>
                                        <span className="helper-text" data-error="wrong" data-success="right"></span>
                                    </div>
                                    <div>
                                        <input id="password" type="password" className="validate white-text"/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="col s12">
                                        <a className="col s6 waves-effect waves-light btn" onClick={login}>login</a>
                                        <a className="col s6 waves-effect waves-light btn" onClick={signup}>sign up</a>
                                    </div>
                                    <span></span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
