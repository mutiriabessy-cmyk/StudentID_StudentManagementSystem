import { Link } from "react-router-dom";

const NotFound = () => (
    <section className="not-found text-center py-5">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1 className="page-title">This page isn’t here.</h1>
        <p className="page-description mx-auto mb-4">The address may be incorrect, or the page may have moved.</p>
        <Link className="btn btn-success" to="/">Return home</Link>
    </section>
);

export default NotFound;