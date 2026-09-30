export const softwareShifts = [
  {
    title: 'Split View comes to iPhone',
    body: 'iOS 27 gives iPhone real two-app multitasking for the first time: two apps side by side, two windows of the same app (two Safari tabs, visibly, not just switched between), and a pattern Apple demoed directly — Siri AI answering on one side while you keep reading on the other.',
  },
  {
    title: 'Controls move to the side',
    body: 'The Dock, Lock Screen controls, and app navigation shift from the bottom edge to the side edge in the new layout. The status bar becomes a circular element that tucks into the corner instead of spanning the top, and the Dynamic Island now runs vertically along the outer display.',
  },
  {
    title: 'Posture, not just open or closed',
    body: 'The software reads how far the phone is angled, not just whether it’s shut or all the way open. Content shifts away from the crease as you partially fold so taps still land correctly, the audio algorithms account for the changing distance between the speakers as the halves move, and sensors in each half let the phone lie flat and stay usable without a stand.',
  },
  {
    title: 'The outer display does real work',
    body: 'StandBy activates on whichever display faces up, even off the charger. The camera system gained Duo Preview (a live preview on the outer display for the person being photographed), Kid Cue (a Peanuts animation that keeps a kid looking at the right lens), and Duo FaceTime, where someone standing near the call can join through the outer display.',
  },
]

export const critiques = [
  {
    title: 'The hinge-angle API is for effects, not layout — as far as I can tell',
    body: 'Developer write-ups since Apple’s September Tech Talks describe a hinge API that reports discrete states and a continuous angle, explicitly scoped to interactions and visual effects, not layout decisions. If that holds, an app can’t yet do something like continuously reflow content as you tilt the screen the way this fold demo reflows a 3D scene. Layout instead branches on size class and on reserved regions that describe the fold and camera-occlusion areas. That’s a reasonable v1 boundary, but it means the "angle as a real input" idea I found so appealing in this demo isn’t fully available to third-party apps yet.',
    confidence: 'Sourced from third-party developer blogs summarizing Apple’s Sept 9 sessions, not the SDK headers directly — I couldn’t confirm exact signatures on this machine.',
  },
  {
    title: 'The ecosystem is starting from zero, again',
    body: 'Apple’s own launch materials name three updated apps: Netflix, Zoom, and Slack. Every other app on the phone runs letterboxed or stretched until someone rebuilds it. This is the same cold start every new Apple form factor has faced — Apple Watch, then Vision Pro — and it means the interesting Duo-native software is going to be scarce for a while. That’s the opening a portfolio project can use.',
  },
  {
    title: 'Day-one gaps in the beta tell you where the stack is unfinished',
    body: 'The Xcode 27.1 simulator can’t run StandBy or most app extensions. Those aren’t launch features being hidden from developers on purpose — they read as pieces of the platform that are still being finished. Anyone building for this device in year one should expect some corners to be rough past what the marketing shows.',
  },
  {
    title: 'This is a first-generation, early-adopter product',
    body: 'A $1,999 starting price and a hinge are both classic first-generation foldable trade-offs — Samsung’s Z Fold line went through the same arc. The product bet here isn’t "everyone upgrades," it’s "establish the form factor and let software slowly catch up," the same playbook Apple ran with the Watch.',
  },
]

export const opportunities = [
  {
    title: 'Pair a source with its explanation',
    body: 'On-device AI is the headline addition to iOS 27 (an upgraded Foundation Models framework, a new Core AI framework for full local LLMs). The Duo is the first iPhone that can show a document and an AI’s reading of it at the same time, linked, so a person can check the machine’s work without losing the original. That trust problem — not the summarization itself — is the interesting product surface.',
  },
  {
    title: 'Design for hands-busy, screen-lit moments',
    body: 'Apple called out 3,000-nit outdoor brightness on the inner display specifically. That spec is wasted on apps meant to be held close and read quietly. It’s meant for outdoor, glanceable, one-handed use — coaching, fieldwork, anything where a phone currently gets propped against something because both hands are busy.',
  },
  {
    title: 'Build for two people, not one',
    body: 'A screen that opens flat into two surfaces facing two different people is new to phones. Almost nothing is designed around it yet. Apple’s own Duo FaceTime is the only shipped example of "this screen now has two audiences." That gap is still open for someone building a portfolio piece to claim.',
  },
]

export const sources: { label: string; url: string }[] = [
  { label: 'Apple Newsroom — Apple unveils iPhone Duo', url: 'https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/' },
  { label: 'MacRumors — Apple Details How iOS 27 Adapts to iPhone Duo’s Displays', url: 'https://www.macrumors.com/2026/09/10/apple-details-how-ios-27-adapts-to-iphone-duo/' },
  { label: 'Apple Newsroom — New intelligence frameworks and developer tools', url: 'https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/' },
  { label: 'Apple Developer — Xcode 27.1 Beta Release Notes', url: 'https://developer.apple.com/documentation/xcode-release-notes/xcode-27_1-release-notes' },
  { label: 'Apple Developer — Xcode 27.2 Beta Release Notes', url: 'https://developer.apple.com/documentation/xcode-release-notes/xcode-27_2-release-notes' },
  { label: 'DevClass — Apple iPhone Duo makes developers think in folds', url: 'https://www.devclass.com/development/2026/09/16/apple-iphone-duo-makes-developers-think-in-folds/5296425' },
]
