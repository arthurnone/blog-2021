import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Styles from "@/components/styles"

import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import Home from "@/views/Home"
import Me from "@/views/Me"
import Page from "@/views/Page/Page"

interface MainState {
    theme: string,
    height: string
}

export class Main extends Component<{}, MainState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            theme: "light",
            height: "800px",
        }
    }

    componentDidMount() {
        let height = `${window.innerHeight - 180}px`
        this.setState({
            height,
        })
    }

    setTheme = () => {
        let theme = this.state.theme === "light" ? "dark" : "light";
        this.setState({
            theme,
        })
    }

    render() {

        return <Styles.Skeleton.Main theme={this.state.theme}>
            <Router>
                <Header theme={this.state.theme} setTheme={this.setTheme}/>

                <Switch>
                    <Styles.Skeleton.Content height={this.state.height}>
                        <Styles.Skeleton.Container>
                            <Route exact path="/">
                                <Home theme={this.state.theme}/>
                            </Route>
                            <Route path="/index">
                                <Home theme={this.state.theme}/>
                            </Route>
                            <Route path="/me">
                                <Me/>
                            </Route>
                            <Route path="/page/:id" component={Page}/>
                        </Styles.Skeleton.Container>
                    </Styles.Skeleton.Content>
                </Switch>
            </Router>
            <Footer theme={this.state.theme}/>
        </Styles.Skeleton.Main>
    }
}

export default Main;
