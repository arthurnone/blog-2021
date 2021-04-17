import React from "react"
import {useTranslation} from "react-i18next"

import Styles from "@/components/styles"

import cnicon from "../../assets/china.png"
import enicon from "../../assets/usa.png"

function Language() {
    const {i18n} = useTranslation();

    const setlanguage = () => {
        i18n.changeLanguage(i18n.language === 'En' ? 'Zh' : 'En')
    }

    return (
        <Styles.Skeleton.NavItem onClick={setlanguage}>
            <Styles.Element.Language>
                {i18n.language === 'En' ?
                    <img src={enicon} alt="cn"/>
                    :
                    <img src={cnicon} alt="en"/>
                }
            </Styles.Element.Language>
        </Styles.Skeleton.NavItem>
    );
}

export default Language