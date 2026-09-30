# iPhone Duo — a product teardown

A study of Apple's first foldable iPhone, written from a product engineering angle:
what the hardware trades off, what iOS 27 does differently because of the fold, what
looks unfinished in the developer beta, and where I'd build if I had the hinge.

The hero is an interactive 3D model of the phone (drag or use the slider to fold and
unfold) built on an open-source React + Three.js foldable-phone component, paired with
Apple's own model and wallpaper assets — see [THIRD_PARTY.md](THIRD_PARTY.md).

## Run locally

Needs Node 22+.

```sh
npm install
npm run dev
```

Open the local URL it prints.

```sh
npm run build
npm run preview
```

## Sources

Specs and iOS 27 details are pulled from Apple's newsroom, Apple's Xcode release notes,
and developer coverage of Apple's September 2026 Tech Talks — linked at the bottom of
the page itself. Anything sourced from a third party's reading of Apple's developer
sessions, rather than from Apple directly, is marked as such.
