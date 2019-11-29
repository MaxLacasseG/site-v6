import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as CS from "../styledComponents/ContactStylesComp";
import * as AS from "../styledComponents/AppStylesComp";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class Contact extends Component {
    render() {
        return (
            <CS.Main id="contact">
                <div className="logo">
                    <AS.H6>
                        <AnchorLink href="#wip">Arrow Up</AnchorLink>
                    </AS.H6>
                </div>
                <div className="logo">
                    <AS.H1>Contact</AS.H1>
                </div>
            </CS.Main>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
