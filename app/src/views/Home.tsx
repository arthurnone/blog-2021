import React, {Component} from "react"
import {ThemeType} from "@/components/styles/styleHeader"
import Overview from "@/views/Page/Overview"


interface HomeState {
    data: object[]
}

export class Home extends Component<ThemeType, HomeState> {
    constructor(props: ThemeType) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        fetch("/api/project")
            .then(response => response.json())
            .then(res => {
                let data = res.data
                this.setState({
                    data,
                })
            });
    }

    render() {
        return (
            <div>
                <Overview data={this.state.data} theme={this.props.theme}/>
            </div>
        );
    }
}

export default Home