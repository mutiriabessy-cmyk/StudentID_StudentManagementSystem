const StateMessage = ({ type, title, children }) => {
  if (type === "loading") {
    return (
      <div className="alert alert-light border d-flex align-items-center gap-3" role="status">
        <span className="spinner-border spinner-border-sm text-success" aria-hidden="true" />
        <span>{title || "Loading records..."}</span>
      </div>
    );
  }

  return (
    <div className={`alert alert-${type === "error" ? "danger" : "info"} mb-0`} role={type === "error" ? "alert" : "status"}>
      <h2 className="h6 alert-heading mb-1">{title}</h2>
      {children && <p className="mb-0">{children}</p>}
    </div>
  );
};

export default StateMessage;