import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 1
const getTransitionStyles = {
  entering: {
    position: `relative`,
    //left: '-100vw',
    opacity: 0,
  },
  entered: { 
    position: `relative`,
    transition: `all ${timeout}s ease-in-out`,
    //left: 0,
    opacity: 1,
  },
  exiting: {
    position: `relative`,
    transition: `all ${timeout}s ease-in-out`,
    //left: '-100vw',
    opacity: 0,
  },
}
   
class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition