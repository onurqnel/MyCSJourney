---
title: Full Stack Web Development
author: Onur Onel
description: "React+TailwindCss Node.js/Express and TypeScript"
---

These notes provide an introduction to modern web development with JavaScript. They begin with building single-page applications using React, followed by techniques for supporting those applications through RESTful APIs and GraphQL services implemented with Node.js. The notes conclude with an overview of TypeScript, highlighting its type-safety features.

### HTTP Headers

Headers are key-value pairs sent in both requests and responses. They provide metadata about the request or response.

**Request Headers Examples:**

- **Host:** Specifies the domain name of the server.
- **User-Agent:** Identifies the browser or client software.
- **Accept:** Tells the server what content types the client can handle
- **Authorization:** Contains credentials for authentication (tokens or API keys).

**Response Headers Examples:**

- **Content-Type:** Specifies the format of the returned data.
- **Content-Length:** Indicates the size of the response body in bytes.
- **Set-Cookie:** Instructs the browser to store a cookie.
- **Cache-Control:** Provides caching policies for browsers and intermediarie

### HTTP Status

Status codes are 3-digit numbers sent in the response to indicate the outcome of the request.
Common Status Code Categories:

- **1xx** Informational: Request received, continuing process.
- **2xx** Success: The request was successful.
- **3xx** Redirection: Further action is needed to complete the request.
- **4xx** Client Error: There was an error in the request.
- **5xx** Server Error: The server failed to fulfill a valid request.

### HTTP GET

The server and the web browser communicate using the HTTP protocol. The HTTP GET method is used to request data such as web pages or JSON from a specified resource on the server without causing any side effects, such as modifying data.

**Characteristics:**

- **Idempotent**: Multiple identical GET requests will have the same effect as a single one.
- **Safe**: It does not modify the server's state or data.
- **Cacheable**: Responses to GET requests can be cached by browsers and servers.
- **Data in URL**: Parameters are included in the URL like:

**Example**: A user opens the following URL in a browser:

```sql
https://example.com/profile?id=123
```

This triggers a GET request to the server, which might return the profile information of the user with ID 123.

### HTTP POST

The POST method is used to send data to the server, typically to create a new resource. Unlike GET, POST can change the server’s state and is not idempotent.

**Characteristics:**

- **Not idempotent:** Sending the same POST request multiple times may result in multiple resource creations.
- **Unsafe:** It modifies server data.
- **Used for creation:** Often used when submitting forms or uploading data.
- **Data in body:** Data is sent in the request body, not in the URL.

**Example**: A client submits the following form to create a new user:

```js
POST /users HTTP/1.1
Content-Type: application/json

{
  "name": "Onur",
  "email": "onur@example.com"
}
```

The server processes the request and may return a 201 Created response with a reference to the newly created user.

### HTTP PUT

The PUT method is used to update an existing resource or create it if it does not exist. It is idempotent, meaning repeated requests produce the same result.

**Characteristics:**

- **Idempotent:** Multiple identical PUT requests will have the same effect.
- **Modifies or creates:** Used to update or fully replace a resource.
- **Data in body:** Entire resource data is sent in the request body.

**Example**: A client updates user information:

```js
PUT /users/123 HTTP/1.1
Content-Type: application/json

{
  "name": "Onur Onel",
  "email": "onuronel@example.com"
}
```

### HTTP DELETE

The DELETE method is used to remove a resource from the server. Like PUT, it is idempotent.

**Characteristics:**

- **Idempotent:** Deleting the same resource multiple times has the same effect as deleting it once.
- **Unsafe:** It changes the server state.
- **Data in body:** Usually no need to send data in the body.

**Example**: A client requests to delete a user:

```js
DELETE /users/123 HTTP/1.1
```

### Document Object Model

Provides a way to connect JavaScript code to the visible page structure, enabling dynamic behavior and real-time updates without reloading the page. DOM represents an HTML or XML document as a tree structures. Each element, attribute, or piece of text in the document is modeled as a node in this tree.

```bash
html
 ├── head
 │    ├── link
 │    └── script
 └── body
      └── div
           ├── h1
           └── div
                ├── ul
                │    ├── li
                │    ├── li
                │    └── li
                └── form
                     ├── input
                     └── input
```

Each element is a node, and the nesting reflects parent-child relationships. The DOM allows developers to:

- Access elements dynamically.
- Modify the structure or content of the page using JavaScript.
- Respond to events such as clicks, form submissions, or key presses.

### Asynchronous JavaScript and XML

AJAX is a technique that allows web pages to send and receive data asynchronously from a server without reloading the entire page. Before AJAX, web applications followed a traditional model. Every user interaction that required new data, such as submitting a form or navigating to another page, would trigger a full-page reload, and the server would respond with a newly generated HTML page.

With AJAX, web applications could:

- Fetch new data in the background
- Update parts of the page dynamically, without a full reload
- Deliver a smoother, more interactive experience

AJAX revolutionized web development by allowing partial page updates. It marked a shift from static, page-by-page reloads to dynamic, responsive user interfaces. Today, AJAX is no longer considered cutting-edge, but it remains a foundational part of how modern web applications function. 

### Single Page Applications

A SPA is a type of web application that loads a single HTML page and dynamically updates its content without requiring full-page reloads as the user interacts with the app.

- When the user first visits the site, the browser loads a single HTML document along with JavaScript and CSS.
- As users navigate or interact with the app, JavaScript handles the routing and content changes by updating the DOM using data fetched from the server
- This avoids reloading the entire page, resulting in a faster and smoother user experience.

---

### Introduction to React

React is a popular JavaScript library developed by Facebook for building dynamic and interactive user interfaces, especially in single-page applications. It focuses on the view layer of web applications, allowing developers to create modular, reusable UI components.

**Key Concepts:**

- **Component-Based Architecture:** UI is broken down into independent, reusable pieces called components.
- **Virtual DOM:** React uses a virtual representation of the DOM to efficiently update only the parts of the UI that change.
- **Declarative Syntax:** Developers describe what the UI should look like, and React handles the rendering.
- **JSX:** A syntax extension that allows writing HTML-like code within JavaScript.

### Create React App

The easiest way to get started with a modern React application is by using a tool called Vite. Vite is a fast build tool that supports modern JavaScript frameworks. It requires Node.js version 18 or higher.

You can initialize a new project by running:

```bash
npm create vite@latest
```

Follow the interactive prompts:

```bash
◆ Project name:
│  demo

◆ Select a framework:
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Svelte
│  ... (other options)

◆ Select a variant:
│  ○ TypeScript
│  ● TypeScript + SWC
│  ○ JavaScript
│  ... (other variants)
```
Once the scaffolding is complete:

```bash
cd demo
npm install
npm run dev
```

This will start the development server and open the app in your browser. You can also create the project with a single command by specifying the name and template:

```bash
npm create vite@latest demo -- --template react
cd demo
npm install
npm run dev
```

Vite starts the application by default on port 5173. If it is not free, Vite uses the next free port number.

### Default App Structure 

After initializing a new project with Vite and React, the directory contains several important files and folders. 

```bash
demo/                            # Root project folder
├── eslint.config.js             # ESLint configuration
├── index.html                   # Entry HTML file (React mounts here)
├── node_modules/                # Installed packages (auto-generated)
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Locks exact versions of dependencies
├── public/                      # Static assets (served as-is)
├── README.md                    # Project documentation
└── src/                         # Application source code
    ├── App.jsx                  # Root React component
    └── main.jsx                 # App entry point, mounts <App /> into DOM
```

- **index.html:**
This is the HTML entry point of the application. It contains a div root where entire React app is injected.

- **package.json:**
Defines project metadata, scripts, and the list of dependencies it can be used for adding or removing packages, defining custom scripts and viewing the app's current setup.

- **main.jsx:** The actual entry point of the React app. It imports the root component App.jsx and mounts it to the DOM using ReactDOM.createRoot(...)

- **App.jsx:** The root component that structures the visible UI. We typically break this into smaller components as app grows.

### React Components

In React, all content to be rendered is typically defined as components. A component is a JavaScript function that returns JSX. The App.jsx file defines the main component of the application.

```js
// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
The main.jsx file is the entry point of the application. It imports the App component and uses createRoot to render it into the HTML element with the ID "root".

```html
<!--index.html-->>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title> 
  </head>
  <body>
    <div id="root"></div> <!--Here-->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

This is the base HTML file served to the browser. React injects the UI into the `<div id="root">` using the main.jsx file.


```js
// App.jsx
const App = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

export default App
```

When using React, all content that needs to be rendered is usually defined as React components. Here, App is a functional React component that returns a `<p>` element. It is exported for use in other parts of the application.


