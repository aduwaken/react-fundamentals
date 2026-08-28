import "./Skills.css";

function Skills() {
    var skills = [
        {
            id: 1,
            name: "HTML",
            emoji: "🌐",
            level: "Intermediate"
        },
        {
            id: 2,
            name: "CSS",
            emoji: "🎨",
            level: "Intermediate"
        },
        {
            id: 3,
            name: "JavaScript",
            emoji: "⚡",
            level: "Intermediate"
        },
        {
            id: 4,
            name: "React",
            emoji: "⚛️",
            level: "Beginner"
        },
        {
            id: 5,
            name: "Git",
            emoji: "📦",
            level: "Intermediate"
        },
        {
            id: 6,
            name: "Responsive Design",
            emoji: "📱",
            level: "Intermediate"
        }
    ];

    return (
        <section className="skills-section" id="skills">
            <h2>My Skills</h2>

            <div className="skills-container">
                {skills.map(function (skill) {
                    return (
                        <div className="skill-card" key={skill.id}>
                            <div className="skill-emoji">{skill.emoji}</div>

                            <h3>{skill.name}</h3>

                            <span className={"level " + skill.level.toLowerCase()}>
                                {skill.level}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Skills;