# BVNK payments coding task

The project consists of an npm workspace containing:

* ui-kit: a storybook ui library
* webapp: a nextjs app for generating and confirming BVNK quotes
* e2e: a playwright e2e tests project

## Running the project

Requirements: `node >= 24` and `npm >= 11`

Note: all commands are run from the root of the project.

Run `npm install` to install the project dependencies.

Run `npm run dev` to start the nextjs app. The default port is `3000`.
To view a payment quote:
* Create a quote using BVNK's api via Postman and copy the quote's uuid.
* navigate to http://localhost:3000/payin/:uuid
* OR navigate to http://localhost:3000/payin/create to create a new quote. The app will then redirect you to the /payin/:uuid page to view the newly generated quote.

Run `npm run test` to execute the unit tests.

Run `npm run e2e` to execute the e2e tests. Ensure the webapp is running (`npm run dev`) before executing the e2e tests. You may be prompted to install the required headless browsers if they are not already installed.

Run `npm run storybook` to start the storybook component library. The default port is `6006`.

## Thoughts/Considerations

Left out due to time contraints

* api calls with retry logic on error
* displaying error message when api requests fail
* adding more unit tests to the webapp and ui-kit
* Updating the select component arrow icon
* lazy loading of the QRCode lib
