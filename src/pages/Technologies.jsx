import './Technologies.css'

const categories = [
    {
        name: 'Lenguajes',
        items: [
            { name: 'HTML5', icon: 'html5' },
            { name: 'CSS3', icon: 'css' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Python', icon: 'python' },
            { name: 'Java', icon: 'java-custom' },
            { name: 'XML', icon: 'xml' },
        ],
    },
    {
        name: 'Frameworks y librerías',
        items: [
            { name: 'React', icon: 'react' },
            { name: 'Django', icon: 'django' },
            { name: 'Node.js', icon: 'nodedotjs' },
            { name: 'Express', icon: 'express' },
            { name: 'Bootstrap', icon: 'bootstrap' },
        ],
    },
    {
        name: 'Bases de datos',
        items: [
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'SQLite', icon: 'sqlite' },
        ],
    },
    {
        name: 'Herramientas',
        items: [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Figma', icon: 'figma' },
            { name: 'VS Code', icon: 'vscode-custom' },
            { name: 'VirtualBox', icon: 'virtualbox' },
            { name: 'VMware', icon: 'vmware' },
        ],
    },
]

const WHITE_ICONS = ['github', 'express', 'xml']

const CUSTOM_ICONS = {
    'vscode-custom':
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    'java-custom':
        'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
}

function Technologies() {
    return (
        <section className="technologies">
            <div className="technologies__header fade-up">
                <p className="technologies__eyebrow">Mi stack</p>
                <h1 className="technologies__title">Tecnologías</h1>
                <p className="technologies__intro">
                    Tecnologías y herramientas que forman parte de mi formación técnica.
                </p>
            </div>

            {categories.map((category, index) => (
                <div
                    key={category.name}
                    className="tech-category fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <h2 className="tech-category__name">{category.name}</h2>
                    <div className="tech-grid">
                        {category.items.map((item) => {
                            let src
                            if (CUSTOM_ICONS[item.icon]) {
                                src = CUSTOM_ICONS[item.icon]
                            } else if (WHITE_ICONS.includes(item.icon)) {
                                src = `https://cdn.simpleicons.org/${item.icon}/white`
                            } else {
                                src = `https://cdn.simpleicons.org/${item.icon}`
                            }
                            return (
                                <div key={item.name} className="tech-card">
                                    <img
                                        src={src}
                                        alt={item.name}
                                        width={36}
                                        height={36}
                                        loading="lazy"
                                    />
                                    <span>{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Technologies