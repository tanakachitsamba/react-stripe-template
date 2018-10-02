import React from 'react'
import { StripeProvider, Elements, injectStripe } from 'react-stripe-elements'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = { stripe: null }
    }
    componentDidMount() {
        // Create Stripe instance in componentDidMount
        // (componentDidMount only fires in browser/DOM environment)
        this.setState({ stripe: window.Stripe('pk_test_12345') })
    }
    render() {
        return (
            <StripeProvider stripe={this.state.stripe}>
                <div>hello</div>
            </StripeProvider>
        )
    }
}
