import React, { Component } from "react";
import { connect } from "react-redux";
import * as HS from "../styledComponents/HomeStylesComp";
import * as AS from "../styledComponents/AppStylesComp";
export class Home extends Component {
    render() {
        return (
            <HS.Main>
                <AS.H1>Test</AS.H1>
                <AS.H2>Test</AS.H2>
                <AS.H3>Test</AS.H3>
                <AS.H4>Test</AS.H4>
                <AS.H5>Test</AS.H5>
                <AS.H6>Test</AS.H6>
                <AS.Para>
                    If you transition globally, you may also reintermediate magnetically. A company that can incubate faithfully will (at some
                    unspecified point in the future) be able to transition easily. What does the commonly-accepted buzzword 'long-term' really mean?
                    Have you ever been unable to disintermediate your feature set? Without filling out any forms? If all of this comes off as mixed-up
                    to you, that's because it is! If you incentivize proactively then you may also mesh iteravely. If all of this sounds astonishing
                    to you, that's because it is! What does the industry jargon 'co-branded' really mean? Is it more important for something to be
                    dynamic or to be customer-directed? What does the term 'dot-com' really mean? The capability to implement wirelessly leads to the
                    ability to whiteboard without lessening our power to benchmark. Without macro-vertical CAE, you will lack synergies. Our feature
                    set is second to none, but our vertical, customized efficient, user-centric TQM and non-complex configuration is usually
                    considered a terrific achievement. We believe we know that if you incentivize proactively then you may also mesh iteravely. If you
                    target efficiently, you may also reintermediate magnetically. In order to assess the 3rd generation blockchain’s ability to
                    whiteboard without lessening our aptitude to repurpose without lessening our power to deliver.
                </AS.Para>
            </HS.Main>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
