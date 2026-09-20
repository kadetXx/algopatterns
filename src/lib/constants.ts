export const STORAGE_KEYS = {} as const;

export const EDITOR = {
  MAX_CODE_SIZE_BYTES: 100 * 1024, // 100KB
  DEFAULT_CODE: `setcpm(170/4)

let chords = chord("<Cm7 Fm7 Gm7 AbMaj7>")

let pad = chords
  .sound("sawtooth")
  .lpf(600)
  .room(0.4)
  .gain(0.5)

let arp = chords
  .arp("0 1 2 3 2 1")
  .sound("triangle")
  .lpf(200)
  .delay(0.3)
  .gain(0.4)

let bass = note("<c2 f2 g2 ab2>")
  .struct("1 ~ 1 ~ 1 ~ [1 1] ~")
  .sound("sawtooth")
  .lpf(800)
  .gain(0.7)

$: stack(pad, arp, bass)

$drums: stack(
  s("bd:1").beat("0,7?,10",16).duck("3:4:5"),
  s("sd:2").beat("4,12",16),
  s("hh:4!8")
)`,
} as const;
