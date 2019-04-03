# Unkwrap

Unkwrap (unknown unwrap... sorry) is a Typescript library that makes it easier to deal with `unknown` types so you can make interfaces without contracts a bit more secure. It's currently a pet project that I'm playing with while I figure out better ways to deal with `unknown` types in Typescript. I'll probably be blogging about this too. All in all this was an experiment to get a basic Typescript library working with NPM and travis and proper coverage testing.

# To Do

- Figure out what I want this library to actually do
- Potentially add validation
- Potentially give it a shape for an object and have it parse and return correct items and validations
- Add more emoji

## Installation

Use [npm](https://npm.org)

```bash
npm install unkwrap
```

Use [yarn](https://yarnpkg.com)

```bash
yarn add unkwrap
```

## Usage

```typescript
import { getString } from 'unkwrap';

const yourinput = 'hello' as unknown;
const item = getString(yourinput);
if (item) {
  // we have done all the string checks for you
}
```

## Contact

- Email's in the package.json
- [Twitter](https://twitter.com/dannolan)

## Blogs

None yet, but they will come

## Contributing

Pull requests are welcome. For major changes open an issue. This is a toy project but I hope it becomes a bit of a guide on how to smartly work with the `unknown` type.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
