import { Link } from "react-router-dom";

const StudentCard = ({ student }) => (
  <article className="card student-card h-100">
    <div className="card-body d-flex flex-column">
      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div>
          <p className="student-id mb-1">STUDENT {student.id}</p>
          <h2 className="h5 card-title mb-0">{student.name}</h2>
        </div>
        <span className="student-avatar" aria-hidden="true">
          {student.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}
        </span>
      </div>
      <p className="student-email mb-3">{student.email}</p>
      <dl className="student-summary row g-2 mb-4">
        <div className="col-7">
          <dt>Course</dt>
          <dd>{student.course}</dd>
        </div>
        <div className="col-5">
          <dt>Age</dt>
          <dd>{student.age} years</dd>
        </div>
      </dl>
      <Link className="btn btn-outline-success mt-auto" to={`/students/${encodeURIComponent(student.id)}`}>
        View details <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  </article>
);

export default StudentCard;