import React from "react"
import Typography from 'typography'

const typography = new Typography({ baseFontSize: '24px' })

class Index extends React.Component {

    render() {

        typography.injectStyles()

        return (
            <div style={{ margin: '3rem auto', maxWidth: 600 }}>
                Welcome to my blog :)
                OIE ANGELA!
            </div>
        )
    }
}

export default Index
