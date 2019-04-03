# Knower

Knower is a Typescript library that makes it easier to deal with `unknown` types so you can make interfaces without contracts a bit more secure. It's currently a pet project that I'm playing with while I figure out better ways to deal with `unknown` types in Typescript. I'll probably be blogging about this too

## Installation

Use [npm](https://npm.org)

```bash
npm install knower
```

Use [yarn](https://yarnpkg.com)

```bash
yarn add knower
```

## Usage

```typescript
// import knower

const yourinput = 'hello' as unknown;
const item = knower.getString(yourinput);
if (item) {
  // we have done all the string checks for you
}
```

## Contact

Email's in the package.json
[Twitter](https://twitter.com/dannolan)

## Blogs

None yet, but they will come

## Contributing

Pull requests are welcome. For major changes open an issue. This is a toy project but I hope it becomes a bit of a guide on how to smartly work with the `unknown` type.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
