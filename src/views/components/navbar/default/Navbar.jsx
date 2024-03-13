import './navbar.css'
import NavLink from './NavLink';
import DropdownButton from './DropdownButton';
import Dropdown from './Dropdown';
import loggedIn from '../../../../router/Logged';

function Navbar() {
    return (
        <div className="navbar">
            <NavLink href={'/'} label={'Home'}></NavLink>
            {
                loggedIn() ?
                    <>
                        <Dropdown label={'Produtos'}>
                            <DropdownButton label={'Produtos'} href={'/products'} />
                            <DropdownButton label={'Estoque'} href={'/stocks'} />
                            <DropdownButton label={'Categorias'} href={'/categories'} />
                            <DropdownButton label={'Marcas'} href={'/brands'} />
                        </Dropdown>
                        <Dropdown label={'Acesso'}>
                            <DropdownButton label={'Usuários'} href={'/users'} />
                            <DropdownButton label={'Perfis'} href={'/roles'} />
                            <DropdownButton label={ 'Sair'} href={'/login'} />
                        </Dropdown>
                    </>
                    :
                    <Dropdown label={'Acesso'}>
                        <DropdownButton label={'Entrar'} href={'/login'} />
                    </Dropdown>

            }

        </div>
    )
}

export default Navbar
