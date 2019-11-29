import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as WS from "../styledComponents/WipStylesComp";
import * as AS from "../styledComponents/AppStylesComp";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class Wip extends Component {
    render() {
        return (
            <WS.Main id="wip">
                <WS.H6>
                    <AnchorLink href="#features">ArrowUp</AnchorLink>
                </WS.H6>
                <div className="logo">
                    <WS.H1>Work in progress</WS.H1>
                </div>
                <div className="logo">
                    <WS.H6>
                        <AnchorLink href="#home">ArrowDown</AnchorLink>
                    </WS.H6>
                </div>
            </WS.Main>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wip);
