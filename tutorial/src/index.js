import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h2>Hello</h2>
        <Person />
      </div>
      <div>
        <h2>Div prof</h2>
        <h4>This is Chris, this is my first component</h4>
      </div>
    </React.Fragment>
  )
}

const Person = () => <p>Chris</p>

ReactDom.render(<Greeting />, document.getElementById('root'))
