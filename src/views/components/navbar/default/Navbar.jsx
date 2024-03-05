import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function Navbar() {
    const navigate = useNavigate()

    return (
        <Menu style={{ backgroundColor: 'black' }} secondary inverted>
            <Menu.Item
                name='home'
                onClick={() => navigate('/')}
            />

            <Menu.Item
                name='Marcas'
                onClick={() => navigate('/brands')}
            />

        <Menu.Item
                name='Categorias'
                onClick={() => navigate('/categories')}
            />

            <Menu.Menu position='right'>
                <Menu.Item
                    name='Sair'
                    onClick={() => navigate('/login')}
                />
            </Menu.Menu>

        </Menu>
    )
}

export default Navbar
