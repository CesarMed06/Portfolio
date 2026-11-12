function ProjectCover({ title, subtitle }) {
  return (
    <div className="project-cover" aria-hidden="true">
      <span className="project-cover__sub">{subtitle}</span>
      <span className="project-cover__title">{title}</span>
    </div>
  )
}

export default ProjectCover
