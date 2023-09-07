# [Picogen](https://picogen.io/) Node API Library

This library provides convenient access to the Picogen API from TypeScript or JavaScript.

To learn how to use the Picogen API, check out the [Documentation](https://picogen.io/docs).

## Installation

```sh
npm install picogenai
# or
yarn add picogenai
```

## Usage

The code below shows how to get started using picogenai to generate image.

```js
import PicogenAI from 'picogenai';

const picogenai = new PicogenAI({
  apiKey: 'my api key'
})

async function main () {
  const data = await picogenai.create({
    version: 1,
    model: 'stability',
    command: 'generate',
    prompt: 'in the leaving room',
    style: '3d-model',
    count: 1,
    size: '1024x1024',
    engine: 'xl-v1.0'
  })

  console.log(data)
}

main();
```
