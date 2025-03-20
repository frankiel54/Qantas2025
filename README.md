Hello!

## Run instructions
To get started, either run in developer mode:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

Or build and run in production mode by:

```bash
npm run build
# then
npm run start
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

To run the tests, please run:

```bash
npm run test
```

# Explanation

Overall my approach was to treat this like a production feature, so I took it as an oppotunity to try to use the latest version of NextJS, using Approuter and MSW (Mock Service Worker) to serve network requests. However, what I didn't realize was that NextJS Approuter does not perform well with MSW, due to the way NextJS has implemented the server fetch. I did get it to work when running in dev mode, but not production mode, so in the end after fighting with it for a couple hours, I gave up trying to get it to work, and just imported the data directly at the page level.

In terms of the tasks, I found this quite enjoyable and thus I probably spent about 10-12 hours on it, which is a bit more than I should have but I did spend a good bit of time trying to get MSW/NextJs working together. I tried my best to replicate the main structure of the UI without being pedantic about things like font/colors, and I think I did a reasonably good job.

In terms of specific talking points:

- I didnt include a storybook instance in this test, but in a real environment, we would definitely be using storybook to present the lower level components built as a part of this feature. 
- Visual components such as PriceDisplay and HotelRating are most ideal to be tested in a visual regression test suite such as Chromatic. Light touch unit tests like what I have included are fine, but I think visual regression are important for these components to ensure their appearence dont break unexpectedly.
- For accessibility, HotelDisplay will toggle its truncated text state when the title is clicked. It may not be the best looking way to do it, but I felt it was sufficient for this test. The unit test for that also does direct class assertion, which isnt ideal, and if I had more time I would figure out a better way of implementing that test.
- If I had more time I would like to get MSW working, as in a real project setting it would be invaluable for unit testing and Storybook.
- In hindsight I probably should have picked Vitest instead of Jest. I have had a good past experience with Vitest, it integrates better with MSW and is faster.
- The design is responsive, but needs breakpoints to change font/rating SVG size to look good on small screen sizes.
- If the hotel rating is >5 or <0 (invalid value), the rating does not show. I chose to do this rather than visually alerting the user to an error, as it's not a critical component of the page function. Presumably in a real scenario, we would have model validators somewhere in the stack to log when invalid values are returned/produced, so they can be addressed without alarming the user.