import ToggleCard from './components/ToggleCard'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="main-content">
                <h1>Welcome to My React App</h1>
                <p>Built with components!</p>

                <section className="cards-section">
                    <Card
                        emoji="⚡"
                        title="JavaScript"
                        description="Variables, functions, arrays, objects and DOM manipulation."
                    />
                    <Card
                        emoji="⚛️"
                        title="React"
                        description="Component-based UI development with hooks and state."
                    />
                    <Card
                        emoji="🎨"
                        title="CSS"
                        description="Flexbox, Grid, animations and responsive design."
                    />
                </section>

                <Counter />

                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <ToggleCard
                        title="What is React?"
                        content="React is a JavaScript library for building user interfaces using reusable components."
                     />
                    <ToggleCard
                        title="What is a component?"
                        content="A component is a reusable piece of UI that manages its own logic and appearance."
                    />
                    <ToggleCard
                        title="What is useState?"
                        content="useState is a React hook that lets you add state to functional components."
                    />
                </section>
            </main>
        </div>
    )
}

export default App