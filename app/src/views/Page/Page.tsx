import React, {Component} from "react"
import ReactMarkdown from "react-markdown"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"

import Styles from "@/components/styles"

interface PageState {
    id: string,
    date: string,
    text: string,
    name: string,
}

export class Page extends Component<any, PageState> {
    constructor(props: any) {
        super(props)

        this.state = {
            id: "",
            date: "",
            text: "",
            name: "",
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        const id = this.props.match.params.id;
        let api = `/api/project?id=${id}`

        fetch(api)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    id: res.data.id,
                    date: res.data.date,
                    text: res.data.text,
                    name: res.data.name,
                })
            });
    }

    render() {
        return <div id="TOP">
            <Styles.Element.BlogTitle>
                {this.state.name}
            </Styles.Element.BlogTitle>
            <div>
                <Styles.Element.Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Styles.Element.Icon>
                {this.state.date}
            </div>
            <article className="markdown-body margin-middle">
                <ReactMarkdown children={this.state.text}/>
            </article>
        </div>
    }
}

export default Page