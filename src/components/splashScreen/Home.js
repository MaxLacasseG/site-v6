import React, { Component } from "react";
import { connect } from "react-redux";
import * as HS from "../styledComponents/HomeStylesComp";
import * as AS from "../styledComponents/AppStylesComp";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class Home extends Component {
    render() {
        return (
            <HS.Main id="home">
                <div className="logo">
                    <AS.H1>MLG</AS.H1>
                </div>
                <div className="logo">
                    <AS.H6>
                        <AnchorLink href="#features">Arrow Down</AnchorLink>
                    </AS.H6>
                </div>
            </HS.Main>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
