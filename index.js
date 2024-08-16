#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

// Define available templates
const templates = {
  'typescript-sfa':
    'This is a single file TypeScript template app for faster idea testing and prototyping. It contains tests, swagger documentation, one demo root API call, basic async error handling, one demo axios call, and .env support.',
  // Add more templates here as you create them
};

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory()
      ? copyDir(srcPath, destPath)
      : fs.copyFileSync(srcPath, destPath);
  }
}

// Initialize CLI program
const program = new Command()
  .version('1.0.0')
  .description('Generate code templates for various projects.')
  .argument('<templateName>', 'Name of the template to generate')
  .action((templateName) => {
    if (!templates[templateName]) {
      console.error(`Error: Unknown template "${templateName}".\n`);
      program.outputHelp(); // Show help message with available templates
      process.exit(1);
    }

    const templatePath = path.join(__dirname, `/templates/${templateName}`);
    const outputPath = path.join(process.cwd(), templateName);

    if (
      !fs.existsSync(templatePath) ||
      !fs.statSync(templatePath).isDirectory()
    ) {
      console.error(`Error: Template directory "${templatePath}" not found.`);
      process.exit(1);
    }

    copyDir(templatePath, outputPath);
    console.log(`Template "${templateName}" created at ${outputPath}`);
  });

// Add custom help text
program.addHelpText(
  'after',
  `
Available templates:
${Object.entries(templates)
  .map(([key, desc]) => `  - ${key}: ${desc}`)
  .join('\n')}
`
);

program.parse(process.argv);
