import React, {Component} from "react"

import Styles from "@/components/styles"
import {ThemeType} from "@/components/styles/styleHeader"


export class Footer extends Component<ThemeType> {
    static defaultProps = {
        theme: null,
    }

    render() {
        return <Styles.Skeleton.Footer theme={this.props.theme}>
            Copyright © 2021 root@arthurnone.com
        </Styles.Skeleton.Footer>
    }
}

export default Footer