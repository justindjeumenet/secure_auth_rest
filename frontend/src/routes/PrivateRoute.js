import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

export default function(ComposedComponent) {
    class Authentication extends Component {

        static propTypes = {
            history: PropTypes.object
        };
        componentDidMount() {
            this.checkAuthentication(this.props);

        }
        UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
             this.checkAuthentication(nextProps);
        }
        checkAuthentication(props) {
            if (!props.authenticated) {
                this.props.history.push("/sign-in");
            }
        }
        render() {
            return <ComposedComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated}
    }

    return withRouter(connect(mapStateToProps)(Authentication));
}