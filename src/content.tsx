export const specs: { term: string; detail: string; note?: string }[] = [
  {
    term: 'Displays',
    detail: '5.4" outer and 7.6" inner, both Super Retina XDR with 120Hz ProMotion and 3,000 nits of outdoor peak brightness.',
    note: 'The inner panel’s nano-texture coating is what scatters light across the crease. It doesn’t remove the fold, it just makes it harder to see.',
  },
  {
    term: 'Chip',
    detail: 'A20 Pro on a 2-nanometer process, the same silicon in the iPhone 18 Pro line.',
  },
  {
    term: 'Hinge',
    detail: 'Titanium, built from more than 100 components, with carbon fiber support plates underneath.',
    note: 'Apple never published a fold-count rating for it.',
  },
  {
    term: 'Durability',
    detail: 'IP68 to 6 meters for 30 minutes, Ceramic Shield 2 on the outer glass, a Grade 5 titanium frame.',
  },
  {
    term: 'Weight and thickness',
    detail: '254 grams, 5.2mm thick when fully open.',
    note: 'That’s 53 grams heavier and 0.7mm thicker than Samsung’s Galaxy Z Fold 8.',
  },
  {
    term: 'Battery',
    detail: 'Up to 24 hours of mixed use, or up to 44 hours of video on the outer screen alone.',
  },
  {
    term: 'Cameras',
    detail: '48-megapixel main and 48-megapixel ultra wide. No telephoto lens.',
  },
  {
    term: 'Price',
    detail: 'Starts at $1,999 for 256GB, up to $3,199 for 2TB.',
    note: 'That’s $700 more than an iPhone 18 Pro Max, which has the telephoto lens this doesn’t.',
  },
]

export const pullQuote = {
  text: 'Hold us accountable to that, please.',
  context:
    'Tom Marieb, Apple’s VP of hardware engineering, on the inner display’s matte finish and whether the crease stays hidden after a year of folding.',
}

export const softwareShifts = [
  {
    title: 'Split View comes to iPhone',
    body: 'iOS 27.1 lets two apps sit side by side on an iPhone for the first time, or two windows of the same app, like a pair of Safari tabs you can actually see at once instead of flipping between them. Apple’s own demo paired Siri answering a question on one side with the source document still open on the other.',
  },
  {
    title: 'The controls move to the edge',
    body: 'The Dock, the Lock Screen controls, and app navigation all shift from the bottom edge to the side edge. The status cluster becomes a small rounded element that tucks into the corner instead of stretching across the top, and the Dynamic Island now runs along the outer edge of the big screen rather than sitting centered up top.',
  },
  {
    title: 'Posture matters, not just open or closed',
    body: 'The software tracks how far the hinge is angled, not just whether the phone is shut or fully flat. Content shifts away from the crease as you partially fold it so your taps still land where you expect, the audio tuning compensates for the growing distance between the speakers as the halves swing apart, and sensors in each half let the phone balance on a table and stay usable without a stand.',
  },
  {
    title: 'The outer screen is more than a preview window',
    body: 'StandBy works on whichever display is facing up, charging or not. The camera system adds Duo Preview, a live mirror of the shot on the outer display for whoever is in front of the lens, Kid Cue, a small Peanuts animation that gets a toddler looking at the right camera, and Duo FaceTime, where someone standing nearby can join a call through the outer screen instead of crowding into frame.',
  },
]

export const critiques = [
  {
    title: 'No fold-count rating anywhere in the spec sheet',
    body: 'Apple published the hinge’s part count, the titanium grade, and an IP68 rating, but not the number that actually describes how long a hinge lasts: how many open-and-close cycles it’s rated for. That’s exactly the kind of number you can’t infer from material specs alone, and for a phone whose entire premise is a moving part, its absence is the most telling line in an otherwise detailed spec sheet.',
  },
  {
    title: 'The crease is a promise, not a measurement',
    body: 'Apple’s VP of hardware engineering described the matte nano-texture finish that scatters light across the fold, then asked people to judge it for themselves over time rather than citing a durability figure. That’s an honest thing to say, and it’s also not a number. The crease looks gone in a demo on day one. Whether it stays that way after a year of folding is something only owners will be able to report back on.',
  },
  {
    title: 'The hinge-angle API is scoped to effects, not layout, as far as I can tell',
    body: 'Developer write-ups from Apple’s September Tech Talks describe a hinge API that reports a discrete state and a continuous angle, scoped to interactions and visual effects rather than layout decisions. If that holds, an app can’t yet reflow its content continuously as you tilt the screen the way this demo reflows a 3D scene. Layout instead branches on size class and on reserved regions. That’s a reasonable first version, but it means the “angle as a real input” idea this demo leans on isn’t fully available to third-party apps yet.',
    confidence: 'Sourced from developer summaries of Apple’s Tech Talks, not the SDK headers themselves. I couldn’t confirm exact signatures on this machine.',
  },
  {
    title: 'The SDK arrived six weeks before the phone did',
    body: 'Apple announced the Duo on September 9 with six Tech Talks and a design guide, but the actual developer tools for handling the fold only landed in the Xcode 27.1 beta later that month. Teams had roughly six weeks to retrofit real layouts before the October 23 ship date. A $1,999 phone launching to a thin app library isn’t really a mystery once you look at that timeline.',
    confidence: 'Pieced together from a developer’s own account of the SDK rollout, not an Apple-published schedule.',
  },
  {
    title: 'A screen shaped for documents fights ordinary video',
    body: 'The inner display’s aspect ratio is great for side-by-side apps and terrible for 16:9 video, which gains a lot of area over a regular iPhone screen but loses a chunk of it right back to letterboxing. It’s a real trade-off, not a bug: the same proportions that make Split View usable are the ones that waste space the moment you open something built for a normal phone screen.',
  },
  {
    title: 'Foldables have never been repairable, and nothing here says this one is different',
    body: 'Even the most repairable foldable on the market today scores a 4 out of 10 on iFixit’s scale, with a 200-plus step guide just to replace the inner screen. Dust still finds its way into every foldable hinge tested so far, IP68 rating or not. Apple hasn’t published anything that suggests the Duo breaks that pattern, which means the realistic plan for a cracked inner screen is probably the same one Samsung owners have had for years: pay Apple directly, or don’t drop it.',
  },
]

export const opportunities = [
  {
    title: 'Pair a source with its explanation',
    body: 'On-device AI is the headline addition to iOS 27 (an upgraded Foundation Models framework, a new Core AI framework for running full local models). The Duo is the first iPhone that can show a document and an AI’s reading of it at the same time, side by side, so a person can check the machine’s work without losing the original. That trust problem, not the summarizing itself, is the interesting thing to design for.',
  },
  {
    title: 'Design for hands-busy, screen-lit moments',
    body: 'Apple called out 3,000 nits of outdoor brightness on the inner display specifically. That spec is wasted on an app meant to be held close and read quietly. It’s built for outdoor, glanceable, one-handed use: coaching, fieldwork, anything where a phone currently gets propped against something because both hands are busy.',
  },
  {
    title: 'Build for two people, not one',
    body: 'A screen that opens flat into two surfaces facing two different people is new to phones. Almost nothing is designed around that yet. Duo FaceTime is Apple’s only shipped example of “this screen now has two audiences,” which leaves the idea wide open for anyone building a portfolio piece.',
  },
  {
    title: 'Keep score on the number Apple won’t publish',
    body: 'Nobody outside Cupertino knows what this hinge is actually rated for. A small utility that quietly counts open-and-close cycles, or just tells you how many folds you’re at, would turn a marketing silence into something an owner can actually track. It’s a tiny app, but it’s the kind a new form factor always needs first: not a port of something that already exists, just a thing that only makes sense because the hardware folds.',
  },
]

export const sources: { label: string; url: string }[] = [
  { label: 'Apple Newsroom: Apple unveils iPhone Duo', url: 'https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/' },
  { label: 'MacRumors: iPhone Duo roundup, everything we know', url: 'https://www.macrumors.com/roundup/iphone-duo/' },
  { label: 'Tom’s Guide: iPhone Duo hands-on', url: 'https://www.tomsguide.com/phones/iphones/iphone-duo-hands-on-apple-nailed-it-and-just-put-everyone-else-on-notice' },
  { label: 'TechRadar: how Apple solved the foldable crease problem', url: 'https://www.techradar.com/phones/iphone/iphone-duo-hands-on' },
  { label: 'MacRumors: Apple exec says “hold us accountable” on the crease', url: 'https://www.macrumors.com/2026/09/19/apple-exec-iphone-crease/' },
  { label: 'Mac Observer: the fold-count rating Apple didn’t publish', url: 'https://www.macobserver.com/tips/round-ups/iphone-duo-hinge-durability-ip68-fold-count-not-published/' },
  { label: 'iFixit: will the iPhone Duo be repairable? We’re skeptical', url: 'https://www.ifixit.com/News/119205/will-the-iphone-duo-be-repairable-were-skeptical' },
  { label: 'Blake Crosley: the 1.42 problem and the SDK gap', url: 'https://blakecrosley.com/blog/iphone-duo-for-developers' },
  { label: 'TechRepublic: iPhone Duo vs iPhone 18 Pro Max, the $700 gap', url: 'https://www.techrepublic.com/article/news-iphone-duo-vs-pro-max/' },
  { label: 'AppleInsider: iPhone Fold and the 2026 foldable shipment rebound', url: 'https://appleinsider.com/articles/26/07/01/iphone-fold-expected-to-take-29-of-2026-foldable-phone-screen-orders' },
  { label: 'DevClass: Apple iPhone Duo makes developers think in folds', url: 'https://www.devclass.com/development/2026/09/16/apple-iphone-duo-makes-developers-think-in-folds/5296425' },
  { label: 'Apple Developer: Xcode 27.1 beta release notes', url: 'https://developer.apple.com/documentation/xcode-release-notes/xcode-27_1-release-notes' },
]
