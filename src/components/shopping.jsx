import React, {Component} from 'react';

class Shopping extends Component {
    state = {}
    render() {
        return (
            <div class="container text-center pt-5">
                <h1>Welcome to Shopping Website</h1>
                <p class="lead text-muted">
                    Hi {this.props.username}, Please go ahead and click on the below button to start Shopping
                </p>
                <p>
                    <button class="btn btn-primary btn-lg">Lets Shop!</button>
                </p>
            </div>
        )
    }
}
export default Shopping