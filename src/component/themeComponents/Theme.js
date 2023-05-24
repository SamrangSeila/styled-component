
import {ThemeProvider} from 'styled-components'
const coolTheme= {
    colors:{
        darkerBg:'#222',
        ligterBg:'#4444',
        brightTxt:'#fff',
        dullTxt:'#ddd',
    },
    fonts:['Roboto','sans-serif'],
    fontSizes:{
        xsmall:'0.8rem',
        small:'1.0rem',
        medium:'1.5rem',
        large:'3rem',
        xlarge:'4.5rem',
    },
    fontWeights:{
        light:100,
        normal:300,
        bold:500,
    },
    backGround1:{
        blueLight:'rgb(255, 0, 0)',
    },
    backGround2:{
        blueLight1:'rgb(0, 0, 255)',
    }
};
// const BackGround ={
//     backGround:{
//         blueLight:'rgb(0, 0, 255)',
//     }
// }

export default function Theme({children}){
    return <ThemeProvider  theme = {coolTheme} > {children} </ThemeProvider>
}
