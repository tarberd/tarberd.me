import React from "react"
import Typography from 'typography'

const typography = new Typography({ baseFontSize: '24px' })

typography.injectStyles()

class Index extends React.Component {
    render() {
        return (
            <div style={{ margin: '3rem auto', maxWidth: 600 }}>
                Welcome to my blog :)
            </div>)
    }
}

export default Index
