export interface MeState {
    width: string,
    height: string,
    top: string,
    left: string,
}

export interface ThemeType {
    theme: string
}

export interface ThemeState {
    theme: string,
    setTheme: any
}

export const ThemeColors = {
    light: {
        logo: '#141414',
        color: '#520339',
        codebg: '#feffe6',
        background: '#f4ffb8',
        border: '#780650',
    },
    dark: {
        logo: '#fafafa',
        color: '#d6e4ff',
        codebg: '#00474f',
        background: '#002329',
        border: '#f0f5ff',
    }
}