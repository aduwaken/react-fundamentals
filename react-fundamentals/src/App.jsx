import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Counter from './components/Counter'
import ToggleCard from './components/ToggleCard'

// Data arrays defined outside the component
const skills = [
    {
        id: 1,
        emoji: "⚡",
        title: "JavaScript",
        description: "Variables, functions, arrays, objects and DOM manipulation."
    },
    {
        id: 2,
        emoji: "⚛️",
        title: "React",
        description: "Component-based UI development with hooks and state."
    },
    {
        id: 3,
        emoji: "🎨",
        title: "CSS",
        description: "Flexbox, Grid, animations and responsive design."
    },
    {
        id: 4,
        emoji: "🗄️",
        title: "Git & GitHub",
        description: "Version control, repositories, commits and collaboration."
    },
    {
        id: 5,
        emoji: "🌐",
        title: "DOM Manipulation",
        description: "Selecting, creating and modifying HTML elements with JavaScript."
    },
    {
        id: 6,
        emoji: "📱",
        title: "Responsive Design",
        description: "Mobile-first layouts using Flexbox, Grid and media queries."
    }
]

const faqs = [
    {
        id: 1,
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces using reusable components."
    },
    {
        id: 2,
        title: "What is a component?",
        content: "A component is a reusable piece of UI that manages its own logic and appearance."
    },
    {
        id: 3,
        title: "What is useState?",
        content: "useState is a React hook that lets you add state to functional components."
    },
    {
        id: 4,
        title: "What are props?",
        content: "Props are how you pass data from a parent component to a child component in React."
    }
]

function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="main-content">
                <h1>Welcome to My React App</h1>
                <p>Built with components!</p>

                <section className="cards-section">
                    {skills.map((skill) => (
                        <Card
                            key={skill.id}
                            emoji={skill.emoji}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </section>

                <Counter />

                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    {faqs.map((faq) => (
                        <ToggleCard
                            key={faq.id}
                            title={faq.title}
                            content={faq.content}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default App