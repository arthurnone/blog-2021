import styled from "styled-components"

import {ThemeType, ThemeColors} from "@/components/styles/styleHeader"

const Button = styled.div`
    min-width: 30px;
    height: 20px;
    line-height: 20px;
    font-size: 18px;
    padding: 2px 5px;
    border-radius: 15px;
    border-style: solid;
    border-width: 3px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
`

const Link = styled.a`
    text-underline: none;
    text-decoration: none;
    outline: none;
`

const LinkFather = styled.div<ThemeType>`
    color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
    a{
        color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
    }
`

const Logo = styled.div<ThemeType>`
    position: relative;
    display: inline-block;
    font-size: 1.4rem;
    font-family: Anton, serif;
    margin-right: 20px;
    cursor: pointer;
    color: ${props => props.theme === 'light' ? ThemeColors.light.logo : ThemeColors.dark.logo};
`


const Language = styled.div`
    position: relative;
    box-sizing: border-box;
    height:42px;
    line-height: 42px;
    padding: 2px 5px;
    vertical-align: middle;
    cursor: pointer;
    .icon{
      display: inline-block;
      position: relative;
      font-size: small;
    }
    img {
      display: inline-block;
      position: relative;
      height: 24px;
      top: 6px;
    }
`

const ThemeButton = styled(Button)`
    text-align: left;
`

const ThemeButtonItem = styled.div<ThemeType>`
    display: inline-block;
    cursor: pointer;
    transition: .4s;
    transform: translateX( ${props => props.theme === "dark" ? "13px" : "0"});
`

const Icon = styled.div`
    display: inline-block;
    margin-right: 5px;
`

const BlogTitle = styled.div`
    font-size: 1.8rem;
    margin: 25px auto 8px auto;
    font-family: Lato, serif;
    font-weight: bold;
`

const Element = {
    Button,
    Link,
    LinkFather,
    Language,
    ThemeButton,
    ThemeButtonItem,
    Logo,
    Icon,
    BlogTitle,
}

export default Element