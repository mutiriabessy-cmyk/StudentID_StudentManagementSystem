import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../api.js";
import PageHeader from "../components/PageHeader.jsx";

const initialForm = {
    name: "",
    email: "",
    age: "",
    gender: "",
    course: "",
};

const AddStudent = () => {
    const [form, setForm] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            const response = await fetch(`${API_URL}/students`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, age: Number(form.age) }),
            });

            if (!response.ok) {
                throw new Error(`Registration failed (${response.status}). Please try again.`);
            }

            navigate("/students");
        } catch (requestError) {
            setError(requestError.message || "Unable to save this student. Check that JSON Server is running.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section>
            <PageHeader
                eyebrow="STUDENT SERVICES"
                title="Add a student"
                description="Enter the student's information to add a record to the directory."
            />
            <form className="form-panel mt-4" onSubmit={handleSubmit}>
                <div className="form-panel-heading"><p className="eyebrow mb-1">NEW RECORD</p><h2 className="h5 mb-0">Student information</h2></div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="student-name">Full name</label>
                        <input className="form-control" id="student-name" name="name" type="text" placeholder="e.g. Amina Hassan" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="student-email">Email address</label>
                        <input className="form-control" id="student-email" name="email" type="email" placeholder="name@brightpath.edu" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="student-age">Age</label>
                        <input className="form-control" id="student-age" name="age" type="number" min="1" step="1" placeholder="Enter age" value={form.age} onChange={handleChange} required />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="student-gender">Gender</label>
                        <select className="form-select" id="student-gender" name="gender" value={form.gender} onChange={handleChange} required>
                            <option value="" disabled>Select gender</option>
                            <option>Female</option><option>Male</option><option>Prefer not to say</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label className="form-label" htmlFor="student-course">Course</label>
                        <select className="form-select" id="student-course" name="course" value={form.course} onChange={handleChange} required>
                            <option value="" disabled>Select a course</option>
                            <option>Software Development</option><option>Networking</option><option>Data Analytics</option>
                            <option>Cybersecurity</option><option>Business IT</option>
                        </select>
                    </div>
                </div>
                <div className="form-actions mt-4">
                    <button className="btn btn-success" type="submit" disabled={submitting}>
                        {submitting ? "Saving student..." : "Submit registration"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddStudent;