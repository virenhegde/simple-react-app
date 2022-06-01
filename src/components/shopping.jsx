import React, {Component} from 'react';
import ShoppingDetails from './shoppingDetails'
import ShoppingText from  './shoppingText'

class Shopping extends Component {
    state = {
        letsShopClicked: false,
        lang : 'EN'
    }
    letsShopClick = () => {
        this.setState({letsShopClicked : true})        
    }
    handleLangChange = (event) => {
        this.setState({lang : event.target.value})
    }
    getTextBasedOnLang = () => {
            return (
                <div>
                    <ShoppingText username={this.props.username} lang={this.state.lang} letsShopClick={this.letsShopClick}/>
                </div>
            
            )
    }
    render() {
        if (!this.state.letsShopClicked) {
            return (
                <div className="shopping">
                    <div className="d-flex m-2 lang-style">
                        <div className="col-1">
                        Language : 
                        </div>
                        <div className="col-1">
                            <select value={this.state.lang} onChange={this.handleLangChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option  value="EN">English</option>
                                <option value="FR">French</option>
                                <option value="ES">Spanish</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {this.getTextBasedOnLang()}
                    </div>
                    
    
                </div>
            )
        } else {
            return (
                <ShoppingDetails></ShoppingDetails>
            )
        }
        
    }
}
export default Shopping