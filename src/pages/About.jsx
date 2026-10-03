import PageHeader from "../components/PageHeader.jsx";

const About = () => (
    <section>
        <PageHeader
            eyebrow="ABOUT THIS PROJECT"
            title="A clearer student record."
            description="A small front-end directory designed for the day-to-day work of BrightPath College."
        />
        <div className="about-grid row g-4 mt-3 mt-lg-4">
            <div className="col-lg-7">
                <article className="about-section h-100">
                    <p className="eyebrow">PURPOSE</p>
                    <h2 className="h4">Student information, easy to find.</h2>
                    <p className="text-secondary">The Student Management System brings student records into one simple interface. Staff can browse the directory, open an individual profile, and preview the student registration experience.</p>
                    <p className="text-secondary mb-0">Student records are served by JSON Server as a mock API while the college plans its future system.</p>
                </article>
            </div>
            <div className="col-lg-5">
                <article className="about-section developer-section h-100">
                    <p className="eyebrow">DEVELOPER</p>
                    <dl className="developer-details mb-0">
                        <div><dt>Name</dt><dd>Your Name</dd></div>
                        <div><dt>Student ID</dt><dd>Your Student ID</dd></div>
                    </dl>
                </article>
            </div>
            <div className="col-12">
                <article className="about-section technology-section">
                    <p className="eyebrow">BUILT WITH</p>
                    <div className="d-flex flex-wrap gap-2">
                        {['React', 'React Router', 'Bootstrap', 'Fetch API', 'JSON Server'].map((technology) => (
                            <span className="technology-tag" key={technology}>{technology}</span>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    </section>
);

export default About;