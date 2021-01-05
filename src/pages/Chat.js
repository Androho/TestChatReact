import React, {Fragment, useContext, useEffect} from 'react'
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../component/Loader";
import {Messages} from "../component/Messages";

export const Chat = () => {
    const {loading, messages, fetchMessages,authListener} = useContext(FirebaseContext)
    useEffect(() => {
        authListener()
        console.log("testtest.......")
        fetchMessages()
        // eslint-disable-next-line
        }, []
    )
    return <Fragment>

        {loading
            ? <Loader />
            : <Messages messages={messages} />
        }
        <hr/>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">message</i>
                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                        <label htmlFor="icon_prefix2">Input message</label>
                        <i className="material-icons prefix">send</i>
                    </div>
                </div>
            </form>
    </Fragment>
}
