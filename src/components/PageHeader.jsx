const PageHeader = ({ eyebrow, title, description, action }) => (
  <div className="page-header d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
    <div>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h1 className="page-title mb-2">{title}</h1>
      {description && <p className="page-description mb-0">{description}</p>}
    </div>
    {action && <div className="page-header-action">{action}</div>}
  </div>
);

export default PageHeader;