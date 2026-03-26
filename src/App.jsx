import heroImg from './assets/hero-lake.svg'
import aboutCard from './assets/about-meeting.svg'
import approachCard from './assets/forest-path.svg'
import pathwaysCard from './assets/pathways-wellness.svg'
import communityCard from './assets/community-circle.svg'
import scienceBanner from './assets/science-soil.svg'
import scienceSide from './assets/lab-people.svg'
import footerBg from './assets/footer-texture.svg'

const nav = ['About', 'About', 'Approach', 'Pathways', 'Research', 'Community', 'Support']

function ImageCard({ image, title, text, button, theme='gold', overlay=true }) {
  return (
    <div className="card-block">
      <img src={image} alt={title} className="card-img" />
      {overlay ? (
        <div className="card-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <button className={`btn ${theme}`}>{button}</button>
        </div>
      ) : (
        <div className="plain-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <button className={`btn ${theme}`}>{button}</button>
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <nav className="nav left">
          {nav.slice(0,5).map((item, idx) => <a key={idx} href="#">{item}</a>)}
        </nav>
        <div className="hero-brand">
          <div className="hero-logo">✿</div>
          <div className="hero-brand-text">
            <div className="brand-main">Liuli Society</div>
            <div className="brand-sub">OF AMERICA</div>
          </div>
        </div>
        <nav className="nav right">
          {nav.slice(5).map((item, idx) => <a key={idx} href="#">{item}</a>)}
        </nav>
      </header>

      <section className="hero" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="hero-overlay">
          <h1>Cultivating Holistic Wellness & Harmony with Nature</h1>
          <p>
            Empowering minds, bodies, and our planet through integrative education,
            sustainable practices, and environmental stewardship.
          </p>
          <div className="hero-actions">
            <button className="btn gold">Learn More</button>
            <button className="btn green">Get Involved</button>
          </div>
        </div>
      </section>

      <main className="content">
        <div className="grid two">
          <ImageCard
            image={aboutCard}
            title="About Us"
            text="A mission for mindful living, environmental care, and a healthier relationship between people and nature."
            button="Our Mission"
            theme="gold"
          />
          <ImageCard
            image={approachCard}
            title="Our Approach"
            text="Insights into how we promote holistic wellbeing, sustainable living, and harmony with the environment."
            button="How We Help"
            theme="green"
          />
        </div>

        <div className="grid two second-row">
          <ImageCard
            image={pathwaysCard}
            title="Our Pathways"
            text="Explore our integrative wellness programs designed to nurture mind, body, and spirit."
            button="View Programs"
            theme="green"
            overlay={false}
          />
          <ImageCard
            image={communityCard}
            title="Connect & Grow"
            text="Join our community-centered initiatives dedicated to learning, connection, and sustainable living."
            button="Get Involved"
            theme="gold"
            overlay={false}
          />
        </div>

        <div className="science-row">
          <div className="science-banner" style={{backgroundImage: `url(${scienceBanner})`}}>
            <div className="science-overlay">
              <h2>Advancing the Science of Well-Being</h2>
              <p>
                Supporting research on holistic solutions and sustainable health
                practices for a healthier planet.
              </p>
              <button className="btn gold">Learn More</button>
            </div>
          </div>
          <div className="science-side">
            <img src={scienceSide} alt="Research lab" />
          </div>
        </div>
      </main>

      <footer className="footer" style={{backgroundImage: `url(${footerBg})`}}>
        <div className="footer-overlay">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="hero-logo">✿</div>
              <div>
                <div className="footer-title">Liuli Society</div>
                <div className="footer-sub">OF AMERICA</div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#">Home</a>
              <a href="#">Approach</a>
              <a href="#">Pathways</a>
              <a href="#">Community</a>
              <a href="#">Support</a>
            </div>
            <div className="footer-col">
              <h4>Email</h4>
              <a href="#">Approach</a>
              <a href="#">Pathways</a>
              <a href="#">Research</a>
              <a href="#">Community</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p>info@liulisociety.org</p>
              <p>(623) 122–4567</p>
              <p>Harmony, NH 02834</p>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p>(533) 123–4587</p>
              <p>126 Holistic Way</p>
              <p>Harmony, NH 02834</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Liuli Society</span>
            <span>All rights reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
