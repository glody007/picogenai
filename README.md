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
import { PicogenAI } from 'picogenai'

const picogenai = new PicogenAI({
  apiKey: 'my api key'
})

async function main () {
  const data = await picogenai.run({
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

### Request & Response types

This library includes TypeScript definitions for all request params. You may import and use them.

## API of this library 

### Create

Creates a job and returns a response.

`Params`: check out the [Documentation](https://picogen.io/docs)

```js
const data = await picogenai.run({
  version: 1,
  model: 'stability',
  command: 'generate',
  prompt: 'in the leaving room',
  style: '3d-model',
  count: 1,
  size: '1024x1024',
  engine: 'xl-v1.0'
})
```

### Cost

Allows you to validate how much a command and request will cost.

`Params`: check out the [Documentation](https://picogen.io/docs)

```js
const data = await picogenai.cost({
  version: 1,
  model: 'stability',
  command: 'generate',
  prompt: 'in the leaving room',
  style: '3d-model',
  count: 1,
  size: '1024x1024',
  engine: 'xl-v1.0'
})
```

### Get

Provides details about the job, including its status and results. The status can be 'created', 'processing', 'completed', or 'error'. The result can be null or a list of URLs with generated images.

`Params`: id -> job ID

```js
const data = await picogenai.get(id)
```

### List

Returns a list of jobs, their results, payloads, and statuses for a given account.

`Params`: page -> Page number and limit -> Limit per page

```js
const data = await picogenai.list(page, limit)
```
