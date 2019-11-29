import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as FS from "../styledComponents/FeaturesStylesComp";
import * as AS from "../styledComponents/AppStylesComp";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class Features extends Component {
    render() {
        return (
            <FS.Main id="features">
                <div className="logo">
                    <AS.H6>
                        <AnchorLink href="#home">Arrow Up</AnchorLink>
                    </AS.H6>
                </div>
                <div className="logo">
                    <AS.H1>Feature</AS.H1>
                </div>
                <div className="logo">
                    <AS.H6>
                        <AnchorLink href="#wip">Arrow Down</AnchorLink>
                    </AS.H6>
                </div>
            </FS.Main>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
