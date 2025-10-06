#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ora from "ora";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.cyanBright.bold(`
╔══════════════════════════════════╗
║           ${chalk.yellow("INITLY")} 🚀              ║
║    Your Infra Setup Companion    ║
╚══════════════════════════════════╝
`));

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "stack",
      message: chalk.cyan.bold("🚀 Choose your tech stack:"),
      choices: ["MERN", "Next.js", "FastAPI", "Express + PostgreSQL", "Django"],
    },
    {
      type: "confirm",
      name: "docker",
      message: chalk.blue.bold("🐳 Add Docker support?"),
      default: true,
    },
  ]);

  const spinner = ora(chalk.yellow("Generating your project setup...")).start();


  // Create project folder
  const projectPath = path.join(process.cwd(), "initly-output");
  if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath);

  spinner.text = chalk.yellow("📦 Copying template files...");
  await new Promise(res => setTimeout(res, 1000));

  // Copy MERN template
  if (answers.stack === "MERN") {
    const srcDir = path.join(__dirname, "templates", "mern");
    const files = fs.readdirSync(srcDir);
    files.forEach((file) => {
      fs.copyFileSync(path.join(srcDir, file), path.join(projectPath, file));
    });
    console.log(chalk.yellow("\n 📦 MERN template generated in /initly-output"));
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

  if (answers.stack === "FastAPI") {
    const srcDir = path.join(__dirname, "templates", "fastapi");
    const destDir = projectPath;

    try {
      fs.cpSync(srcDir, destDir, { recursive: true });
      console.log(chalk.yellow("\n  📦 FastAPI template generated in /initly-output"));
    } catch (err) {
      console.error(chalk.red("❌ Failed to copy FastAPI template:"), err);
    }
  }

  spinner.text = chalk.yellow("⚙️ Configuring project settings...");
  await new Promise(res => setTimeout(res, 1000));

  setTimeout(() => {
    spinner.succeed(chalk.greenBright.bold(" Setup complete! Check the 'initly-output' folder.\n"));
  }, 2000);

};

main();