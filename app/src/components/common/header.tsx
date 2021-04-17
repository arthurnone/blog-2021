import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Translation} from "react-i18next"

import Styles from "@/components/styles"
import {ThemeState} from "@/components/styles/styleHeader"

import Language from "@/components/common/language"
import Theme from "@/components/common/theme"


export class Header extends Component<ThemeState, {}> {
    static defaultProps = {
        theme: null,
        setTheme: null,
    }

    render() {
        return <Translation>
            {t =>
                <Styles.Skeleton.Nav theme={this.props.theme}>
                    <Styles.Skeleton.Container>
                        <Styles.Element.Logo theme={this.props.theme}>
                            Arthur
                        </Styles.Element.Logo>
                        <Styles.Skeleton.NavLeft>
                            <Styles.Skeleton.NavItem>
                                <Styles.Element.LinkFather theme={this.props.theme}>
                                    <Link to="/index">
                                        {t('home')}
                                    </Link>
                                </Styles.Element.LinkFather>
                            </Styles.Skeleton.NavItem>
                            <Styles.Skeleton.NavItem>
                                <Styles.Element.LinkFather theme={this.props.theme}>
                                    <Link to="/me">
                                        {t('me')}
                                    </Link>
                                </Styles.Element.LinkFather>
                            </Styles.Skeleton.NavItem>
                        </Styles.Skeleton.NavLeft>
                        <Styles.Skeleton.NavRight>
                            <Language/>
                            <Theme theme={this.props.theme} setTheme={this.props.setTheme}/>
                        </Styles.Skeleton.NavRight>
                    </Styles.Skeleton.Container>
                </Styles.Skeleton.Nav>
            }
        </Translation>
    }
}

export default Header