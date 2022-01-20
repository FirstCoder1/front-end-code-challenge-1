# Front End Code Challenge

A coding assignment for prospective developers.

## Challenge Overview

We would like for you to use this simple React/Next.js application as a base to improve upon. Feel free to spend as much or as little time as you'd like. **1 to 2 hours should suffice**. For this challenge, the real value is when we sit down together and discuss the decisions you made in the limited time; and what you would do given more time.

Do not hesitate to contact us with questions. We do not see this as a weakness. 

## Tasks

1. Implement the style guide (see below) using JSX, CSS, and SASS. Choose a target platform and browser (eg, "Windows desktop Chrome") to style against. Report your development platform when you submit your work.
2. Connect to the WebSockets API using the environment variable `WS_URL`. Ping the server to maintain the connection. The default endpoint (`/`) will occassionally broadcast a message. Present this message where indicated in the code.
3. Fetch data from the RESTful API using the `API_URL` environment variable. Look for a JSON string representing an array. Present this array where indicated in the code, and according to the style guide.

## Getting Started

##### (Optional) Fork this repository. Otherwise, clone this repository and work locally.

##### Initialize project

```bash
yarn

```

##### Run development server

```bash
yarn run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##### Publish to static web site

```bash
yarn export
```

## Hints

* Prefer VSCode to other development environments.
* Prefer `yarn` to `npm`.
* Take cues from the project's folder structure to organize code.
* Avoid dependencies which are not already included in the project, if possible.

##### Submit your work

Please submit your work following one of the three options:
* Host the contents of your `out` directory and send us the URL.
* Zip the contents of your `out` directory and attach in an email.
* Provide us with the URL of your fork of this repo and let us know when it is ready to review.

## Style Guide


