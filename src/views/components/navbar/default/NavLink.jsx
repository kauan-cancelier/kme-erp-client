import './navbar.css'
function NavLink({href, label}) {
    return (
        <a href={href}>{label}</a>
    )
}

export default NavLink
