import React from 'react'
import { Container as SemanticContainer } from 'semantic-ui-react'

function CustomContainer(props) {
    return (
        <SemanticContainer style={{ marginTop: '5vh', height:  '100vh' }}>
            {props.children}
        </SemanticContainer>
    );
}

export default CustomContainer
