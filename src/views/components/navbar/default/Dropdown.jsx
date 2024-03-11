function Dropdown({ label, children }) {
    return (
        <div className="dropdown">
            <button className="dropbtn">
                {label}
                <i className="fa fa-caret-down"></i>
            </button>
                <div className="dropdown-content">
                    {children}
                </div>
        </div>
    )
}

export default Dropdown
