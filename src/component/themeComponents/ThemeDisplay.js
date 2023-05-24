import React from 'react'
import styled from 'styled-components'
import Theme from './Theme.js'

const Box = styled.div`
    padding:1rem;
    margin:1rem;
    color:${(props) => props.theme.colors.darkBg};
    background-color:${(props) => props.theme.backGround1.blueLight};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
`

const  Container  = styled.div`
    background: ${(props) => props.theme.backGround2.blueLight1};
    height: 100px;
`
const ThemeDisplay = () => {
    return (
        <Theme>
            <Box>
                <p>Box</p>
            </Box>
            <Container>
                <span>Text</span>
            </Container>
        </Theme>

    )
}

export default ThemeDisplay
