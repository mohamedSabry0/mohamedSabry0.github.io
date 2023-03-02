import './App.css'

function App() {
  return (
    <div className="App">
      <header>
      <nav>
        <p>Mohamed Sabry</p>
        
        <div className="social_box">
          <a href="http://github.com/mohamedSabry0"><img src="./assets/images/github_icon.svg" alt="github icon" /></a>
          <a href="https://angel.co/u/mohamed-sabry-8"><img src="./assets/images/angellist_icon.svg" alt="angellist icon" /></a>
          <a href="http://www.linkedin.com/in/mohamed-sabry0"><img src="./assets/images/linkedin_icon.svg" alt="linkedin icon" /></a>
          <a href="https://mshasan.hashnode.dev/"><img src="./assets/images/icons8-hashnode.svg" alt="hashnode icon" /></a>
          <a href="https://twitter.com/mohsmh0"><img src="./assets/images/twitter_icon.svg" alt="twitter icon" /></a>
        </div>
      </nav>
    </header>
    <section id='about' className='about-section'>
      <h3>Hey there,</h3>
      <p className="about-text">
        I'm Mohamed Sabri,        
        and I've been a full stack developer for about 3 years.

        I would love to work in an environment where I can deepen and build upon
        my expertise in software development, 
        along with great teammates and managers. <br />

        Further down the road, I am passionate about becoming a senior developer, 
        responsible for sustaining a friendly and productive team environment, 
        capable of having my team’s trust suggesting significant factors for scaling 
        software applications into serving multi-billion user bases
      </p>
    </section>
    <section>
      <h3>My Featured Projects</h3>
      <article>
        <img src="" alt="" />
        <div>
          <p>Reading time-management app, allows a user to add, edit, and remove groups,
             time spans(and add them to groups), sharing them with other, with view-only access.
              Built with Ruby, and Rails. 
            <a className='icon-link' href="https://github.com/mohamedSabry0/reading-hour"><img src="./assets/images/github_icon.svg" alt="github icon" /></a>
          </p>
        </div>
        <div>
          <p>RuLint  — Light weight ruby linter, with minimal functionality. 
          <a className='icon-link' href="https://github.com/mohamedSabry0/ruLint">
            <img src="src/assets/images/github_icon.svg" alt="github icon" />
          </a>,
            <a href="https://repl.it/@mohammadSabri/ruLint">Demo</a>,
             Built with: (Ruby, RSpec)
          </p>
        </div>
        <div>
          <p>
            Math-geeks  — feeling like fiddling with a calculator? An interesting quote? Or the old lorem Home page? All in place!
            <a className='icon-link' href="https://github.com/mohamedSabry0/math-geeks">
              <img src="./assets/images/github_icon.svg" alt="github icon" />
            </a>,
            <a href="https://mathgeeks-4y9n.onrender.com">Demo</a>,
            Built with: (ReactJS, React Router)
          </p>
        </div>
      </article>
    </section>
    </div>
  )
}

export default App
