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
      choices: ["MERN", "Next.js", "Express + PostgreSQL", "Django"],
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

  spinner.text = chalk.yellow("⚙️ Configuring project settings...");
  await new Promise(res => setTimeout(res, 1000));

  setTimeout(() => {
    spinner.succeed(chalk.greenBright.bold(" Setup complete! Check the 'initly-output' folder.\n"));
  }, 2000);

};

main();