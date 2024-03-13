import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'

function Redirect() {
    const navigate = useNavigate()
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false)
            navigate('/home')
        }, 200)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <>
            {showLoader && (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            )}
        </>
    )
}

export default Redirect
