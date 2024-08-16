# JS Template Generator

`js-template-generator` is a CLI tool designed to facilitate the creation of various Node.js and TypeScript project templates. This tool simplifies the setup process for common project structures, allowing for rapid development and prototyping.

## Features

- **Generate Templates:** Quickly create pre-defined project structures for Node.js and TypeScript applications.
- **Customizable:** Easily add more templates as your project evolves.
- **Comprehensive Templates:** Includes configurations, tests, and documentation for each template.

## Installation

To install `js-template-generator`, run the following command:

```bash
npm install -g js-template-generator
```

## Usage

To generate a new project template, use the `generate-js-template` command followed by the name of the template. For example:

```bash
generate-js-template typescript-sfa
```

Replace `typescript-sfa` with the desired template name. The tool will create a project directory with the specified template at your current working directory.

## Available Templates

- **`typescript-sfa`**: This is a single-file TypeScript template app for faster idea testing and prototyping. It includes:
  - Tests
  - Swagger documentation
  - A demo root API call
  - Basic async error handling
  - A demo Axios call
  - `.env` support

## Adding New Templates

To add new templates, follow these steps:

1. **Create a Template Directory:** Place your template files inside a new directory within the `templates` folder.
2. **Update Template List:** Add an entry for the new template in the `templates` object in `index.js`.

## Development

For development and contributing to the `js-template-generator`, follow these instructions:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/js-template-generator.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd js-template-generator
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the CLI Tool:**

   ```bash
   npm start
   ```

5. **Lint and Format Code:**

   ```bash
   npm run lint
   npm run format
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project. Ensure your contributions adhere to the project's coding standards and include tests where applicable.

## License

This project is licensed under the [ISC License](LICENSE).

## Contact

For any questions or feedback, please contact:

- **Michael Orji**  
  Email: [orjimichael4886@gmail.com](mailto:orjimichael4886@gmail.com)

---

Feel free to adjust any sections according to your specific project needs and updates.