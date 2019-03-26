# Usage

```
git clone https://github.com/jeremija/lerna-ts-example
cd lerna-ts-example

npm install
npm run build:all
```

Two artifacts will be built:

- `packages/main/build-browserify/client.js`
- `packages/main/build-sourceify/client.js`

A sample `index.html` file is provided in both of the build folders.

The patched sourcerify global transform makes the original TypeScript source
file show up in the browser:

## Browserify

![build-browserify](/img/browserify.png)

## Browserify with Sourceify Global Transform

![build-sourceify](/img/sourceify.png)
