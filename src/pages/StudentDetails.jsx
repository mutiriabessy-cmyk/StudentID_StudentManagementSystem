import { Link, useParams } from "react-router-dom";
import API_URL from "../api.js";
import PageHeader from "../components/PageHeader.jsx";
import StateMessage from "../components/StateMessage.jsx";
import useFetch from "../hooks/usefetch.js";

const StudentDetails = () => {
    const { id } = useParams();
    const { data: student, loading, error, retry } = useFetch(`${API_URL}/students/${encodeURIComponent(id)}`);

    if (loading) return <StateMessage type="loading" title="Loading student profile..." />;
    if (error?.status === 404) {
        return (
            <div className="detail-state">
                <StateMessage type="empty" title="Student not found">No student record matches ID {id}.</StateMessage>
                <Link className="btn btn-success mt-4" to="/students">Back to students</Link>
            </div>
        );
    }
    if (error) {
        return (
            <div className="detail-state">
                <StateMessage type="error" title="Unable to load this profile.">Check that JSON Server is running, then try again. ({error.message})</StateMessage>
                <button className="btn btn-outline-danger btn-sm mt-3" type="button" onClick={retry}>Try again</button>
                <Link className="btn btn-outline-success mt-4" to="/students">Back to students</Link>
            </div>
        );
    }
    if (!student) return null;

    const fields = [
        { label: "Student ID", value: student.id },
        { label: "Full name", value: student.name },
        { label: "Email address", value: student.email },
        { label: "Age", value: `${student.age} years` },
        { label: "Gender", value: student.gender },
        { label: "Course", value: student.course },
    ];

    return (
        <section>
            <Link className="back-link" to="/students"><span aria-hidden="true">&larr;</span> All students</Link>
            <PageHeader eyebrow={`STUDENT PROFILE · ID ${student.id}`} title={student.name} description="Student record and enrolment details." />
            <div className="profile-panel mt-4 mt-lg-5">
                <div className="profile-heading">
                    <span className="student-avatar profile-avatar" aria-hidden="true">
                        {student.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}
                    </span>
                    <div><p className="eyebrow mb-1">ENROLLED STUDENT</p><h2 className="h4 mb-0">{student.name}</h2></div>
                </div>
                <dl className="profile-fields row g-0 mb-0">
                    {fields.map(({ label, value }) => (
                        <div className="col-12 col-md-6 profile-field" key={label}>
                            <dt>{label}</dt><dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <Link className="btn btn-outline-success mt-4" to="/students">Back to students</Link>
        </section>
    );
};

export default StudentDetails;