import './navbar.css'

function Navbar(){
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-item-container">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Dashboard</div>
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Dashboard</div>
            </div>
            <div className="navbar-logout-container">
                <div className="navbar-logout-item" >logout</div>
            </div>

        </div>
        </>
    )
}

export default Navbar;