# Victorian Plumbing Tech Test

Considering create-react-app is deprecated, I have made a template, using Vite with React and TypeScript, Tailwind and Jest for testing purposes, that provides a minimal setup to get React up and running.

Created using node `v16.14.0`, built using:

- React `v18.2`
- Axios `v1.5.0` (for API integration)
- Tailwind for styling
- Material UI for the pagination component
- React Icons `v4.10.1`

## Features

1. Toilet product listings
2. Sort functionality
3. Pagination functionality
4. Basic styling to make sure the page will work for mobile too.

## How to run

Make sure to run `npm install` to install dependencies.

Make sure to add a `.env` where to add `VITE_API_KEY` and `VITE_BASE_URL`.

Then, in the project's root folder, execute `npm run dev`, the project will be available on http://localhost:3000 (as specified in Vite configuration in `vite.config.ts`)

## More things to do

1. Filter functionality
2. Add unit tests
