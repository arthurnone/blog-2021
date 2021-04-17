import React, {Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faTelegramPlane, faGithub, faSkype} from "@fortawesome/free-brands-svg-icons"

import Styles from "@/components/styles"
import {MeState} from "@/components/styles/styleHeader"

export class Me extends Component<{}, MeState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
            top: "0px",
            left: "0px",
        }
    }

    componentDidMount() {
        let height = window.innerHeight - 150
        let left = window.innerWidth / 2 - 300
        let top = window.innerHeight / 3
        if (left < 0) {
            left = (window.innerWidth - 300) / 2
        }
        let state = {
            width: `${window.innerWidth}px`,
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
        }
        this.setState(state)
    }

    render() {
        return <Styles.Skeleton.Me width={this.state.width} height={this.state.height} top="" left="">
            <Styles.Skeleton.MeContent width="" height="" top={this.state.top} left="">
                <div className="margin-small center">
                    <Styles.Element.Icon>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </Styles.Element.Icon>
                    root@arthurnone.com
                </div>

                <div className="margin-small center">
                    <Styles.Element.Icon>
                        <FontAwesomeIcon icon={faTelegramPlane}/>
                    </Styles.Element.Icon>
                    <a href="https://t.me/arthurnone" target="_blank" rel="noreferrer">
                        root@arthurnone.com
                    </a>
                </div>

                <div className="margin-small center">
                    <Styles.Element.Icon>
                        <FontAwesomeIcon icon={faSkype}/>
                    </Styles.Element.Icon>
                    root@arthurnone.com
                </div>

                <div className="margin-small center">
                    <Styles.Element.Icon>
                        <FontAwesomeIcon icon={faGithub}/>
                    </Styles.Element.Icon>
                    <a href="https://github.com/arthurnone" target="_blank" rel="noreferrer">
                        root@arthurnone.com
                    </a>
                </div>
            </Styles.Skeleton.MeContent>
        </Styles.Skeleton.Me>


    }
}

export default Me