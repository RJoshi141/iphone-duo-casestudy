import { useState } from 'react'
import { AppleCredit, FoldablePhone, FoldHalt, FoldScrubber, FoldToggle, PhoneBackground, PhoneDevice } from './iphone-duo'
import { softwareShifts, critiques, opportunities, sources } from './content'

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <main className={dark ? 'study dark' : 'study'}>
      <button className="theme-toggle" type="button" onClick={() => setDark(!dark)}>
        {dark ? 'Light mode' : 'Dark mode'}
      </button>

      <header className="hero">
        <p className="eyebrow">Product teardown &middot; September 2026</p>
        <h1>iPhone Duo, taken apart</h1>
        <p className="dek">
          Apple's first foldable iPhone ships October 23. This is a study of what it actually
          changes for a phone: the hardware trade-offs, what iOS 27 does differently, what looks
          unfinished in the developer beta, and where I'd build if I had the hinge.
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

      <section className="section" aria-labelledby="why-now">
        <h2 id="why-now">Why build a foldable phone now</h2>
        <p>
          Foldables have been a mostly-Android category for six years. Apple waiting this long is
          itself a product decision: the display, hinge, and battery engineering had to clear a bar
          Apple was willing to ship at, and the software had to have a real reason to exist beyond
          "the screen is bigger." iOS 27's answer is Split View — the first time two apps can sit
          side by side on an iPhone — which only makes sense once there's enough width to make two
          panes usable rather than cramped.
        </p>
      </section>

      <section className="section" aria-labelledby="software">
        <h2 id="software">What iOS 27 actually does differently</h2>
        <div className="card-grid">
          {softwareShifts.map(item => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="critique">
        <h2 id="critique">Where it's still rough</h2>
        <p className="section-note">
          My own read, written down so it can be wrong in public. Marked where a claim comes from
          a third party's read of Apple's developer sessions rather than Apple directly.
        </p>
        <div className="stack">
          {critiques.map(item => (
            <article className="stack-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.confidence && <p className="confidence">{item.confidence}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="opportunities">
        <h2 id="opportunities">Where I'd build</h2>
        <div className="stack">
          {opportunities.map(item => (
            <article className="stack-item" key={item.title}>
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
          images, not mine — see THIRD_PARTY.md in this repository. This is not an Apple product.
        </p>
        <h3>Sources</h3>
        <ul className="sources">
          {sources.map(s => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}
