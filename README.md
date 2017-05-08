# Triangle Challenge Solution

The problem to solve is pretty trivial and main interest was to make sure the input is properly validated.

## The algorithm

The algorithm is as simple as just comparing provided sides.
I decided to use regular equation operator since in these case in would be straightforward and easy to understand even for a developer not familiar with Javascript language.
I avoided using nested `if` operators to keep code plane and readable.

## Run the solution

Unit tests were written using `mocha`, `expect.js` and `babel`.
To run them follow the next steps:

1. Install [Node.js](https://nodejs.org/) (I used version 6.9.2)

2. Install [Yarn](https://yarnpkg.com/)

3. Install project dependencies.

  ```shell
  yarn
  ```

4. Run tests.

  ```shell
  yarn test
  ```

## Corner cases

When validating input data I tried to cover as many corner cases as I could think of:
- number of arguments should be exactly 3
- all arguments should be of type `number`
- triangle sides length can't be less or equal to `0`
- arguments should be a valid triangle sides. Three lines can form a triangle only when sum of any two sides is greater then the third one.

>I deliberately skipped big numbers check because it makes little sense to implement it in isolation from business logic. In vast majority of production solutions you don't get to care about big numbers problem and handling it would overcomplicate code. In the cases when it is needed suitable solutions could vary from just using `Number.isFinite` to working with strings and importing special libraries.
