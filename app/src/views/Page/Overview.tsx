import React from "react"
import {Link} from "react-router-dom"
import ReactMarkdown from "react-markdown"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"

import Styles from "@/components/styles"

interface OverviewProps {
    data: object[],
    theme: string,
}

function Overview(props: OverviewProps) {
    const datas = props.data;
    const theme = props.theme;
    const content = datas.map((data: any) =>
        <Styles.Skeleton.Overview key={data.id} theme={theme}>
            <Styles.Element.BlogTitle>
                <Link to={`/page/${data.id}`}>
                    {data.name}
                </Link>
            </Styles.Element.BlogTitle>
            <div>
                <Styles.Element.Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Styles.Element.Icon>
                {data.date}
            </div>
            <article className="markdown-body margin-middle">
                <ReactMarkdown children={data.des}/>
            </article>
        </Styles.Skeleton.Overview>
    );
    return (
        <div>
            {content}
            <div className="poem">
                That which does not kill us makes us stronger.
            </div>
        </div>
    );
}

export default Overview