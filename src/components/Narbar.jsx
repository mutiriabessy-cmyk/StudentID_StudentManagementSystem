import { NavLink } from "react-router-dom";

const navigation = [
    { label: "Home", to: "/", end: true },
    { label: "Students", to: "/students" },
    { label: "Add Student", to: "/add-student" },
    { label: "About", to: "/about" },
];

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark app-navbar">
        <div className="container">
            <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                <span>BrightPath College</span>
            </NavLink>
            <button
                className="navbar-toggler d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main-navigation"
                aria-controls="main-navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span>Menu</span>
            </button>
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav ms-auto gap-lg-1">
                    {navigation.map(({ label, to, end }) => (
                        <li className="nav-item" key={to}>
                            <NavLink
                                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                                to={to}
                                end={end}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
