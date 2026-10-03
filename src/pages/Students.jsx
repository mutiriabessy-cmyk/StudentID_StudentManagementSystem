import API_URL from "../api.js";
import PageHeader from "../components/PageHeader.jsx";
import StateMessage from "../components/StateMessage.jsx";
import StudentCard from "../components/StudentCard.jsx";
import useFetch from "../hooks/usefetch.js";

const Students = () => {
    const { data: students, loading, error, retry } = useFetch(`${API_URL}/students`);

    return (
        <section>
            <PageHeader
                eyebrow="STUDENT DIRECTORY"
                title="Students"
                description="Browse the current student records at BrightPath College."
                action={students && !loading && <span className="record-count">{students.length} {students.length === 1 ? "record" : "records"}</span>}
            />
            <div className="mt-4 mt-lg-5">
                {loading && <StateMessage type="loading" title="Loading student records..." />}
                {error && (
                    <div>
                        <StateMessage type="error" title="Student records are unavailable.">Check that JSON Server is running. ({error.message})</StateMessage>
                        <button className="btn btn-outline-danger btn-sm mt-3" type="button" onClick={retry}>Try again</button>
                    </div>
                )}
                {!loading && !error && students?.length === 0 && <StateMessage type="empty" title="No students found.">There are no student records to display yet.</StateMessage>}
                {!loading && !error && students?.length > 0 && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 g-lg-4">
                        {students.map((student) => <div className="col" key={student.id}><StudentCard student={student} /></div>)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Students;