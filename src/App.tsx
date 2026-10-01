import { useState } from 'react'
import { AppleCredit, FoldablePhone, FoldHalt, FoldScrubber, FoldToggle, PhoneBackground, PhoneDevice } from './iphone-duo'
import { softwareShifts, critiques, opportunities, sources, specs, pullQuote } from './content'

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
          Apple's first foldable iPhone ships October 23 at $1,999. This is a close look at what
          the hinge actually changes: the hardware trade-offs Apple made to hit that price, what
          iOS 27.1 does differently once a phone can bend, what still feels unfinished in the
          developer beta, and a few places I'd build if the hinge were mine.
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
        <p className="kicker">Why now</p>
        <h2 id="why-now">Why a foldable iPhone, in 2026</h2>
        <p>
          Foldables have been a mostly-Android category for seven years, and Apple waited through
          nearly all of it. That wait was itself a decision. Samsung and Huawei spent those years
          working out the hinge, the crease, and the battery trade-offs in public, while foldables
          stayed a sliver of the phone market: about 27.5 million foldable screens shipped in 2026,
          against well over a billion phones sold overall. Apple's bet is that the category is
          finally big enough to matter. Analysts expect the iPhone Fold line to take close to 29
          percent of foldable display orders this year, just behind Samsung's 31, and to sell
          something like 6 million units by the end of 2026. iOS 27.1's answer to "why now" is
          Split View, the first time two apps can sit side by side on an iPhone, which only makes
          sense once there's enough width to make two panes usable instead of cramped.
        </p>
      </section>

      <section className="section" aria-labelledby="hardware">
        <p className="kicker">The hardware</p>
        <h2 id="hardware">The numbers Apple did publish</h2>
        <p className="section-note">
          Pulled from Apple's own spec sheet and newsroom post, with a couple of comparisons added
          where the gap says more than the number by itself.
        </p>
        <dl className="specs">
          {specs.map(item => (
            <div className="spec-row" key={item.term}>
              <dt>{item.term}</dt>
              <dd>
                {item.detail}
                {item.note && <span className="spec-note">{item.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <blockquote className="pull-quote">
        <p>&ldquo;{pullQuote.text}&rdquo;</p>
        <cite>{pullQuote.context}</cite>
      </blockquote>

      <section className="section" aria-labelledby="software">
        <p className="kicker">The software</p>
        <h2 id="software">What iOS 27.1 does differently</h2>
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
        <p className="kicker">The rough edges</p>
        <h2 id="critique">Where it's still rough</h2>
        <p className="section-note">
          My own read, written down so it can be wrong in public. Marked where a claim comes from
          a third party's reporting rather than Apple directly.
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
        <p className="kicker">Where I'd build</p>
        <h2 id="opportunities">Four things I'd build first</h2>
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
          images, not mine. See THIRD_PARTY.md in this repository. This is not an Apple product.
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
