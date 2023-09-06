export type RunOptions = {
  version: number
  model: 'stability' | 'midjourney' | 'dalle2'
  command: 'generate' | 'upscale'
  prompt: string
} & (StabilityOptions | MidjourneyOptions | Dalle2Options)

interface StabilityOptions {
  count: number
  size: string
  style: 'enhance' | 'anime' | 'photographic' | 'digital-art' | 'comic-book' | 'fantasy-art' | 'line-art' | 'analog-film' | 'neon-punk' | 'isometric' | 'low-poly' | 'origami' | 'modeling-compound' | 'cinematic' | '3d-model' | 'pixel-art' | 'tile-texture'
  engine: 'xl-v1.0' | '512-v2.1' | '768-v2.1' | 'v1.5'
}

interface MidjourneyOptions {
  ratio: string
  engine: 'mj-4' | 'mj-5.1' | 'mj-5.1-raw' | 'mj-5.2' | 'mj-5.2-raw' | 'niji-4' | 'niji-5' | 'niji-5-cute' | 'niji-5-expressive' | 'niji-5-original' | 'niji-5-scenic'
  speed: 'relax' | 'fast' | 'turbo'
}

interface Dalle2Options {
  count: number
  size: string
}
