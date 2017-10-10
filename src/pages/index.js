import React from 'react'
import Link from 'gatsby-link'
import basic_typo from './typography/basic_typo.js'

const header_style = {
    width: '100%', 
    textAlign: 'center'
}

const Header = (props) => 
    <div style={props.style}>
        <h1>Call It Done! I Guess ...</h1>
    </div>

const Body = props => 
    <div></div>

const Call_it_done = (props) =>
    <div>
        <Header style={header_style} />
        <Body />
    </div>

export default Call_it_done
