
import './Career.css'

const timelineItems = [
    {
        period: '02/03/2026 - 18/06/2026',
        type: 'Experiencia',
        title: 'Prácticas en Desarrollo Web',
        place: 'Original Merchandising · Bilbao',
        description:
            'Prácticas de empresa centradas en el mantenimiento y actualización de la web corporativa con WordPress, búsqueda y gestión de datos de empresas con Excel, y soporte general en tareas de administración web.',
    },
    {
        period: '2024 - Actualidad',
        type: 'Formación',
        title: 'Desarrollo de Aplicaciones Web',
        place: 'CEI Sevilla',
    },
    {
        period: '15/03/2024 - 21/06/2024',
        type: 'Experiencia',
        title: 'Técnico en Sistemas Microinformáticos y Redes',
        place: 'IES Sotero Hernández · San Juan de Aznalfarache',
        description:
            'Prácticas centradas en instalación de hardware, instalación de software en Windows y Linux, puesta en marcha de equipos y redes y mantenimiento del sistema informático.',
    },
    {
        period: '2022 - 2024',
        type: 'Formación',
        title: 'Grado Medio en Sistemas Microinformáticos y Redes',
        place: 'IES Juan de Mairena',
    },
]

function Career() {
    return (
        <section className="career">
            <div className="career__header fade-up">
                <p className="career__eyebrow">Mi recorrido</p>
                <h1 className="career__title">Trayectoria</h1>
                <p className="career__intro">
                    Formación y experiencia real relacionadas con mi perfil técnico dentro
                    del ámbito informático.
                </p>
            </div>

            <div className="career__legend fade-up fade-up--delay-1">
                <span className="career__badge career__badge--study">Formación</span>
                <span className="career__badge career__badge--work">Experiencia</span>
            </div>

            <div className="timeline fade-up fade-up--delay-2">
                {timelineItems.map((item, index) => (
                    <article
                        key={index}
                        className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'
                            }`}
                    >
                        <span className="timeline__dot"></span>

                        <div className="timeline__card">
                            <span
                                className={`timeline__type ${item.type === 'Experiencia'
                                        ? 'timeline__type--work'
                                        : 'timeline__type--study'
                                    }`}
                            >
                                {item.type}
                            </span>

                            <p className="timeline__period">{item.period}</p>
                            <h2 className="timeline__card-title">{item.title}</h2>
                            <p className="timeline__place">{item.place}</p>

                            {item.description && (
                                <p className="timeline__description">{item.description}</p>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Career