import React from 'react'
import { Container as SemanticContainer } from 'semantic-ui-react'

function CustomContainer(props) {
    return (
        <SemanticContainer style={{ marginTop: '5vh' }}>
            {props.children}
            <br />
        </SemanticContainer>
    );
}

export default CustomContainer
