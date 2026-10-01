import { useState } from 'react'
import { AppleCredit, FoldablePhone, FoldHalt, FoldScrubber, FoldToggle, PhoneBackground, PhoneDevice } from './iphone-duo'
import { insight, buildNotes, screenShader, codeSnippet, details, nextSteps, credits } from './content'

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <main className={dark ? 'study dark' : 'study'}>
      <a
        className="github-link"
        href="https://github.com/RJoshi141/iphone-duo-casestudy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
      >
        <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>

      <button className="theme-toggle" type="button" onClick={() => setDark(!dark)}>
        {dark ? 'Light mode' : 'Dark mode'}
      </button>

      <header className="hero">
        <p className="eyebrow">3D &amp; interaction case study</p>
        <h1>iPhone Duo, in motion</h1>
        <p className="dek">
          Apple ships the iPhone Duo as a still 3D model on its site, a shell you can only look
          at. I wanted to see if I could make it actually fold: drag it open, watch the screen
          come into focus, feel the hinge settle into place. This is what that took: Apple's own
          model, a shader that fakes a working display, and a lot of small physical details that
          make a fold feel real instead of animated.
        </p>
      </header>

      <section className="phone-stage" aria-label="Interactive iPhone Duo model">
        <FoldablePhone className="phone-study" defaultValue={0} duration={2}>
          <PhoneBackground />
          <PhoneDevice
            modelSrc="/models/iphone-duo.glb"
            screenSrc={dark ? '/wallpapers/apple-desert-night.avif' : '/wallpapers/apple-desert-day.avif'}
            coverSrc={dark ? '/wallpapers/apple-desert-night-cover.avif' : '/wallpapers/apple-desert-day-cover.avif'}
            screenOverlaySrc={dark ? '/wallpapers/home-apps.svg' : '/wallpapers/home-apps-light.svg'}
            coverOverlaySrc={dark ? '/wallpapers/home-cover.svg' : '/wallpapers/home-cover-light.svg'}
            rotation={0}
            blur={48}
            parallax={1}
          />
          <div className="phone-controls">
            <FoldToggle foldIcon="/icons/fold.png" unfoldIcon="/icons/unfold.png" />
            <FoldHalt icon="/icons/half.png">Half</FoldHalt>
            <FoldScrubber />
          </div>
          <p className="phone-caption">
            Drag to unfold, use the slider, or scroll to zoom. <AppleCredit />
          </p>
        </FoldablePhone>
      </section>

      <section className="section" aria-labelledby="brief">
        <p className="kicker">The brief</p>
        <h2 id="brief">A still model, not a working phone</h2>
        <p>{buildNotes[0].body}</p>
      </section>

      <section className="section" aria-labelledby="model">
        <p className="kicker">The model</p>
        <h2 id="model">{buildNotes[1].title}</h2>
        <p>{buildNotes[1].body}</p>
      </section>

      <blockquote className="pull-quote">
        <p>&ldquo;{insight.text}&rdquo;</p>
      </blockquote>

      <section className="section" aria-labelledby="shader">
        <p className="kicker">{screenShader.kicker}</p>
        <h2 id="shader">{screenShader.heading}</h2>
        <p>{screenShader.body}</p>
        <p>{screenShader.body2}</p>
        <p>{screenShader.body3}</p>
      </section>

      <section className="section" aria-labelledby="choreography">
        <p className="kicker">The choreography</p>
        <h2 id="choreography">One number driving the whole phone</h2>
        <div className="code-card">
          <span className="code-label">{codeSnippet.label}</span>
          <pre><code>{codeSnippet.code}</code></pre>
        </div>
        <p>{codeSnippet.note}</p>
      </section>

      <section className="section" aria-labelledby="controls">
        <p className="kicker">The controls</p>
        <h2 id="controls">Drag it, scrub it, or just click</h2>
        <div className="stack">
          {details.map(item => (
            <article className="stack-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="next">
        <p className="kicker">What's next</p>
        <h2 id="next">Where I'd take this next</h2>
        <div className="card-grid">
          {nextSteps.map(item => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          The 3D model and its textures are Apple's, used here under the same independent-study
          terms as the demo this page is built on. The day/night desert wallpapers are third-party
          images, not mine. See THIRD_PARTY.md in this repository. This is not an Apple product.
        </p>
        <h3>Built with</h3>
        <ul className="sources">
          {credits.map(c => (
            <li key={c.url}>
              <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}
