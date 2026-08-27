import { useState } from 'react'

function ToggleCard({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="toggle-card">
            <div
                className="toggle-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{title}</h3>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="toggle-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default ToggleCard