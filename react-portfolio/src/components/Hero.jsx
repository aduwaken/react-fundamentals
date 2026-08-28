import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="welcome">Hello, I'm</p>
                <h1>Aduwa Kennedy</h1>
                <h2>Aspiring Software Engineer</h2>
                <p className="bio">
                    I am an aspiring software engineer passionate about building
                    useful and responsive web applications. I'm currently developing
                    my skills in JavaScript, React, HTML and CSS.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="primary-button">
                        View Projects
                    </a>

                    <a href="/cv.pdf" className="secondary-button" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;