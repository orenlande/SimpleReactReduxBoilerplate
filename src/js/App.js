import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { simpleAction } from './actions';

import image from '../images/cloud-upload-download-data-transfer.svg';

class App extends React.Component {

    constructor(props){
        super(props);
    }

    dispatchSimpleAction(){
        this.props.simpleAction("value")
    }

    
    componentDidMount() {
        console.log(this.props.simpleLocalState)
    }
    

    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>My react redux boilerplate</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        This is my very one boilerplate for react-redux
                        <button className="btn btn-primary" onClick={(e) => this.dispatchSimpleAction()}>Dispatch simple action</button>
                        <div>
                            This is simpleGlobalState: {this.props.simpleLocalState}
                        </div>
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({simpleGlobalState}){
    return {simpleLocalState: simpleGlobalState}
}

export default connect(mapStateToProps, {simpleAction})(App);
