import React, {Component} from 'react';

const counterWrapper = (CounterComponent) => {
    class IncrementCounter extends Component {

        constructor() {
            super();
            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => (
            this.setState(prevState => ({ counter: prevState.counter + 1 }))
        )

        render() {
            return(
            <CounterComponent counter={this.state.counter} incrementCounter={()=>this.incrementCounter()}></CounterComponent>
            )
        }
    }
    return IncrementCounter
}
export default counterWrapper