import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function LoginNavbar() {
    const navigate = useNavigate()

    return (
        <Menu style={{ backgroundColor: 'black' }} secondary inverted>
            <Menu.Item
                name='Login'
                onClick={() => navigate('/login')}
            />
            <Menu.Item
                name='Cadastre-se'
                onClick={() => navigate('/users/new')}
            />
        </Menu>
    )
}

export default LoginNavbar
