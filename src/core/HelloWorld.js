// Class Component
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export class HelloWorldClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 'test'
    }
  }
  componentDidMount () {
    console.log('componentDidMount')
    this.setState({
      test: 'test2 Class'
    })
  }
  render () {
    const { test } = this.state
    const { cheeseburger } = this.props
    return (
      <p>
         Hello World, {test}! You can haz a { cheeseburger }!
      </p>
    )
  }
}

// Function Component
export const HelloWorldFunctional = ({ hotdog, isEnabled, children }) => {
  const [name, setName] = useState('test')
  useEffect(() => {
    setName('test2 Functional')
  }, [])

  return isEnabled && (
    <>
      <p>
        Hello World, {name}! Maybe you'd like to eat a {hotdog}!
      </p>
      <p>
        { children }
      </p>
    </>
  )
}

HelloWorldClass.propTypes = {
  cheeseburger: PropTypes.string.isRequired
}

HelloWorldFunctional.propTypes = {
  hotdog: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool.isRequired
}

HelloWorldFunctional.defaultProps = {
  hotdog: 'Hihihi',
  isEnabled: false
}
