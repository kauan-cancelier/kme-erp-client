import { Component } from "react";
import { useLocation } from "react-router-dom";
import { Message } from "semantic-ui-react";

function Home() {
    const location = useLocation();
    const { message } = location.state || {}
    return (
        <>
            {message ? <div><Message success>{message}</Message></div> : ''}
        </>
    )
}

export default Home
