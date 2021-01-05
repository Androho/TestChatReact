import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Messages = ({messages}) => (
    <TransitionGroup component="ul" className="collection">
        {messages.map(message => (
            <CSSTransition
                key={message.id}
                className={'message'}
                timeout={800}>
                <li className="collection-item avatar">
                    <img src={message.userPhotoUrl} alt="" className="circle" style={{maxHeight:50,maxWidth:50}}/>
                    <span className="title">{message.userMail}</span>
                    <p>{new Date(message.timeMessage).toUTCString()} <br/>
                        {message.textMessage}
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)
