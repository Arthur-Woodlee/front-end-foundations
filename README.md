
<body>

  <h1>Front End Foundations</h1>
  <p>A modular, maintainable front-end scaffold built with semantic HTML, token driven SASS and Webpack. This project demonstrates architectural clarity, accessibility best practices and onboarding documentation</p>

  <h2>Purpose</h2>
  <p>This repository supports my application for the APS6 Front End Developer role at the National Museum of Australia. It showcases reusable components, centralised styling logic and accessibility conscious design.</p>

  <h2>Architecture Overview</h2>
  <ul>
    <li><strong>Modular BEM structure</strong> for scalable component development</li>
    <li><strong>Token driven SASS partials</strong> for consistent theming and responsive logic</li>
    <li><strong>Centralised media queries</strong> in <code>media.scss</code> using semantic breakpoints</li>
    <li><strong>Webpack bundling</strong> for asset management and build optimization</li>
  </ul>

  <h2>Accessibility Features</h2>
  <ul>
    <li>Semantic HTML tags (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;button&gt;</code>)</li>
    <li>ARIA roles and labels for screen reader compatibility</li>
    <li>Keyboard accessible toggles with styled focus states</li>
    <li>WCAG aligned contrast and readability considerations</li>
  </ul>

<h2>Folder Structure</h2>
<pre><code>
FRONT_END_FOUNDATIONS/
├── node_modules/              # Installed npm packages
├── src/
│   ├── pages/                 # HTML pages
│   │   ├── about.html
│   │   └── index.html
│   ├── scripts/               # JavaScript files
│   │   ├── about.js
│   │   ├── index.js
│   │   └── theme.js
│   └── styles/
│       ├── components/        # SCSS layout components
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _tech.scss
│       │   └── _theme.scss
│       ├── about.scss
│       ├── functions.scss
│       ├── mixins.scss
│       ├── typography.scss
│       └── variables.scss
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency tree lock file
├── README.md                  # Project documentation
└── webpack.config.js          # Webpack configuration
</code></pre>

<h2>Getting Started</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Arthur-Woodlee/front-end-foundations.git</code></pre>
  </li>
  <li>Open the project folder in <strong>Visual Studio Code</strong>.</li>
  <li>Install dependencies via the integrated terminal:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server using Webpack:
    <pre><code>npx webpack serve</code></pre>
    <p>This will automatically open the app in your default browser on an available port (e.g., <code>http://localhost:5173</code> or similar).</p>
  </li>
  <li>Explore the codebase using the VS Code file explorer, and preview live changes directly in your browser.</li>
</ol>

  <h2>Notes</h2>
  <p>This project is designed to suppport onboarding, with clear naming conventions, centralized logic and maintainable structure. It reflects my commitment to collaborative development and user first design.</p>

</body>
