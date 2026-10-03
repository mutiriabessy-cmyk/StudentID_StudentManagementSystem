import { Link } from "react-router-dom";

const Home = () => (
    <div className="home-page">
        <section className="home-welcome">
            <p className="eyebrow mb-2">BRIGHTPATH COLLEGE / ADMINISTRATION</p>
            <h1 className="home-title mb-3">Welcome to the student directory</h1>
            <p className="home-intro mb-4">
                Browse student records and open a profile to see the full details. Registration is available as a non-saving preview.
            </p>
            <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-success" to="/students">View students</Link>
                <Link className="btn btn-outline-secondary" to="/add-student">Add student</Link>
            </div>
        </section>

        <section className="home-guide" aria-labelledby="home-guide-heading">
            <div className="home-guide-heading">
                <p className="eyebrow mb-1">QUICK LINKS</p>
                <h2 id="home-guide-heading" className="h5 mb-0">Common tasks</h2>
            </div>
            <Link className="home-guide-link" to="/students">
                <span><strong>Browse students</strong><small>View names, courses and contact details</small></span>
                <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="home-guide-link" to="/add-student">
                <span><strong>Registration form</strong><small>Preview the student information form</small></span>
                <span aria-hidden="true">&rarr;</span>
            </Link>
        </section>
    </div>
);

export default Home;