#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packageRoot = path.resolve(__dirname, '..');
const target = process.argv[2] === 'init'
  ? (process.argv[3] || '.agents/skills/flowcraft')
  : null;

if (!target) {
  console.log('FlowCraft — Turn Business Logic into Professional Visuals');
  console.log('');
  console.log('Usage:');
  console.log('  npx --yes github:Daniccy/flowcraft init [target-directory]');
  console.log('');
  console.log('Example:');
  console.log('  npx --yes github:Daniccy/flowcraft init .agents/skills/flowcraft');
  process.exit(0);
}

const destination = path.resolve(process.cwd(), target);
const entries = ['SKILL.md', 'references', 'templates', 'prompts', 'assets'];
fs.mkdirSync(destination, { recursive: true });

for (const entry of entries) {
  const source = path.join(packageRoot, entry);
  const output = path.join(destination, entry);
  fs.cpSync(source, output, { recursive: true });
}

console.log(`FlowCraft installed to ${path.relative(process.cwd(), destination) || '.'}`);
console.log('Load SKILL.md in your Agent Skills-compatible environment.');
