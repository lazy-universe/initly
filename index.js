#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.cyanBright.bold("\n🚀 Welcome to Initly — Your Infra Setup Companion!\n"));

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "stack",
      message: "Choose your tech stack:",
      choices: ["MERN", "Next.js", "Express + PostgreSQL", "Django"],
    },
    {
      type: "confirm",
      name: "docker",
      message: "Add Docker support?",
      default: true,
    },
  ]);

  console.log(chalk.green("\n✨ Generating your project setup...\n"));

  // Create project folder
  const projectPath = path.join(process.cwd(), "initly-output");
  if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath);

  // Copy MERN template
  if (answers.stack === "MERN") {
    const srcDir = path.join(__dirname, "templates", "mern");
    const files = fs.readdirSync(srcDir);
    files.forEach((file) => {
      fs.copyFileSync(path.join(srcDir, file), path.join(projectPath, file));
    });
    console.log(chalk.yellow("📦 MERN template generated in /initly-output"));
  }
  if (answers.stack === "Next.js") {
  const srcDir = path.join(__dirname, "templates", "nextjs");
  const destDir = projectPath;

  try {
    // Recursively copy entire folder structure
    fs.cpSync(srcDir, destDir, { recursive: true });
    console.log(chalk.yellow("📦 Next.js template generated in /initly-output"));
  } catch (err) {
    console.error(chalk.red("❌ Failed to copy Next.js template:"), err);
  }
}

  console.log(chalk.cyanBright("\n✅ Setup complete! Check the 'initly-output' folder.\n"));
};

main();