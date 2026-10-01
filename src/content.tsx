export const insight = {
  text: 'The hinge itself was the easy part. Making a photo look like a screen was not.',
}

export const buildNotes = [
  {
    title: 'A still model, not a working phone',
    body: "Apple's own product page uses a viewer a lot like this one: the same 3D file, slowly rotating, responding to a drag. It looks great and does nothing. The screen is a single image baked onto the mesh, and that's the whole interaction. I wanted to see what it would take to make that file actually work: fold it, stop it halfway, watch the outer screen wake up while the inner one goes soft. No pre-rendered animation and no video standing in for the display. Just the real file Apple publishes, driven by code.",
  },
  {
    title: "What's already in Apple's file",
    body: "The glTF isn't just a shape. One mesh inside it is named folding-half, so the asset itself marks which part of the body needs to rotate and around what hinge line. That's the one hint Apple leaves you. Everything else, how far it swings, how fast, what the screen does while it moves, is left to whoever renders it. I load the file once with three.js's GLTFLoader, find that node by name, and from then on, moving the phone is just setting one rotation value on one object, every frame. Two of the materials are named too, inner-screen and cover-screen, so I can find them and swap in my own shader without touching the frame, the glass, or the camera bump Apple modeled. A small environment map, built from three.js's RoomEnvironment and baked down with PMREMGenerator, gives the titanium something real to reflect, and the renderer runs in ACES filmic tone mapping so the highlights don't blow out under the key light.",
  },
]

export const screenShader = {
  kicker: 'The screen',
  heading: 'Faking a screen that is actually a photo',
  body: "There's no video and no second render target behind the glass. The screen is a flat wallpaper image projected onto the curved display mesh in real time, with a shader doing the work real pixels would do. For every point on the screen, it works out where a ray from the camera through that point would cross a flat plane facing the lens, then uses that crossing point to look up a pixel in the wallpaper. Tilt the phone and the image shifts like it's sitting behind the glass instead of painted on it.",
  body2: "The inner and outer screens needed different math. The inner display is one flat plane, so it just needs a camera-facing projection. The cover display curves further around the body, so I gave it two reference points along the hinge edge instead and project along the line between them. That's the difference between a screen that looks right from one angle and one that holds up while you spin the whole phone around. A second image, the home screen icons, blends on top through its own alpha channel, so the wallpaper shows through everywhere an icon doesn't sit.",
  body3: "There's also no real screen to go soft, so I fake depth of field by hand: sampling a blurred mip level of the texture and jittering four extra samples in a small ring around each pixel, weighted by distance. How strong that blur is depends on how far open the phone is, so the inner screen visibly softens as you close it and the cover screen sharpens as it comes into view.",
}

export const codeSnippet = {
  label: 'fold-choreography.ts',
  code: `export function foldChoreography(progress: number) {
  const p = Math.max(0, Math.min(1, progress))
  const hinge = Math.min(1, p / 0.96)
  return {
    angle: (1 - hinge) * Math.PI,
    coverFocusEdge: 1.25 - Math.min(1, p / 0.45) * 1.1,
    innerDefocus: (1 - p) ** 0.65,
  }
}`,
  note: "Every visual change on the phone comes from this one function. It takes a single 0 to 1 value, how far open the phone is, and turns it into the hinge angle, where the focus line sits on the cover screen, and how blurred the inner screen gets. The last four percent of travel is reserved on purpose: the hinge finishes closing a beat before the fold animation ends, so the focus and blur effects have room to settle instead of cutting off abruptly.",
}

export const details = [
  {
    title: 'Drag it, scrub it, or click',
    body: 'Three different inputs move the same underlying value. A click flips the phone between fully open and fully closed over a two second ease. Pressing and dragging tracks your pointer directly with no animation at all, so it feels like you are pulling the hinge yourself. A slider underneath lets you stop at an exact angle, and it doubles as the accessible control: a screen reader announces the position in degrees instead of a raw decimal.',
  },
  {
    title: 'Telling a drag from a click',
    body: 'A press that moves more than five pixels before release counts as a drag, and once it does, the click event that follows gets swallowed so letting go does not also trigger a toggle. Scrolling or pinching zooms the camera instead, clamped to a range close enough to see detail and far enough to see the whole phone, entirely separate from the fold gesture.',
  },
  {
    title: 'Keeping the hinge in frame',
    body: 'As the phone closes, the whole model also shifts sideways by a small amount tied to the same hinge angle, so the fold point stays roughly centered instead of one half swinging out of view. It is a tiny adjustment, but without it the phone visibly drifts off frame by the time it is shut.',
  },
  {
    title: 'Built to turn off',
    body: 'With reduced motion on, none of the eased animation plays. The fold jumps straight to its new position, including mid-drag, which took more care than adding it as an afterthought: it has to cleanly interrupt whatever animation might already be running. The day and night wallpapers swap as separate textures tied to the theme toggle, so a light or dark switch never needs a new model load, and every control is a plain button or range input, not canvas-drawn, so a keyboard and a screen reader both just work.',
  },
]

export const nextSteps = [
  {
    title: 'Give the hinge some resistance',
    body: 'Right now opening and closing both move at the same constant rate. A real hinge has friction and a bit of give near the ends. Swapping the linear ease for a spring would make the motion feel less like a slider and more like a mechanism.',
  },
  {
    title: 'Bake the crease in, not fake it',
    body: 'The crease right now is a shading trick in the shader, a darkening gradient timed to the fold. A proper displacement or normal map baked along the hinge line would hold up under closer inspection and under more dramatic lighting.',
  },
  {
    title: 'Drive it from a real sensor',
    body: 'On a device with a hinge angle sensor or even just an accelerometer, the same progress value this page animates by hand could come from the actual phone in your actual hands.',
  },
]

export const credits: { label: string; url: string }[] = [
  { label: 'Apple: the iPhone Duo page this model and its textures come from', url: 'https://www.apple.com/iphone-duo/' },
  { label: 'three.js, for the renderer, the glTF loader, and the environment lighting', url: 'https://threejs.org/' },
  { label: 'Motion, for the fold progress value and its animation', url: 'https://motion.dev/' },
]
