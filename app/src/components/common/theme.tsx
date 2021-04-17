import React, {Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons"

import Styles from "@/components/styles"
import {ThemeState} from "@/components/styles/styleHeader"


export class Theme extends Component<ThemeState> {
    static defaultProps = {
        theme: null,
        setTheme: null,
    }

    render() {
        return <Styles.Skeleton.NavItem onClick={this.props.setTheme}>
            <Styles.Element.ThemeButton>
                {this.props.theme === 'light' ?
                    <Styles.Element.ThemeButtonItem theme={this.props.theme}>
                        <FontAwesomeIcon icon={faSun}/>
                    </Styles.Element.ThemeButtonItem> :
                    <Styles.Element.ThemeButtonItem theme={this.props.theme}>
                        <FontAwesomeIcon icon={faMoon}/>
                    </Styles.Element.ThemeButtonItem>
                }
            </Styles.Element.ThemeButton>
        </Styles.Skeleton.NavItem>
    }
}

export default Theme