import styled from 'styled-components'
import {MeState, ThemeType, ThemeColors} from '@/components/styles/styleHeader'


const Main = styled.main<ThemeType>`
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
    background:  ${props => props.theme === 'light' ? ThemeColors.light.background : ThemeColors.dark.background};
    color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
    border-bottom-color: ${props => props.theme === 'light' ? ThemeColors.light.border : ThemeColors.dark.border};
    a {
      background:  ${props => props.theme === 'light' ? ThemeColors.light.background : ThemeColors.dark.background};
      color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
    }
    * {
        color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
    }
    pre{
        border-radius: 5px;
        background:  ${props => props.theme === 'light' ? ThemeColors.light.codebg : ThemeColors.dark.codebg} !important;
    }
    img {
      background:  ${props => props.theme === 'light' ? ThemeColors.light.background : ThemeColors.dark.background};
    }
`

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1200px;
`

const Nav = styled.nav<ThemeType>`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 42px;
    line-height: 42px;
    vertical-align: middle;
    z-index: 999;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme === 'light' ? ThemeColors.light.border : ThemeColors.dark.border};
    background: ${props => props.theme === 'light' ? ThemeColors.light.background : ThemeColors.dark.background};
`

const NavItem = styled.div`
    display: inline-block;
    margin-right: 15px;
`

const NavLeft = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
`

const NavRight = styled.div`
    position: absolute;
    right: 0px;
    display: inline-block;
`

const Footer = styled.footer<ThemeType>`
    text-align: center;
    font-size: x-small;
    padding: 30px 0 30px 0;
    font-family: 'Lato', serif;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: ${props => props.theme === 'light' ? ThemeColors.light.border : ThemeColors.dark.border};
    color: ${props => props.theme === 'light' ? ThemeColors.light.color : ThemeColors.dark.color};
`

const Me = styled.div<MeState>`
    height:  ${props => props.height};
`

const MeContent = styled.div<MeState>`
    position: relative;
    top:  ${props => props.top};
`

const Overview = styled.section<ThemeType>`
    position: relative;
    margin-top: 20px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme === 'light' ? ThemeColors.light.border : ThemeColors.dark.border};
    padding-bottom: 20px;
    a {
      font-weight: bold;
    }
`

const Content = styled.div<{ height: string }>`
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    min-height:  ${props => props.height ? props.height : '100%'};
`

const Skeleton = {
    Main,
    Container,
    Nav,
    NavItem,
    NavLeft,
    NavRight,
    Overview,
    Me,
    MeContent,
    Content,
    Footer,
}

export default Skeleton