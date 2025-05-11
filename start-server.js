// Windows-compatible server starter
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { config } from 'dotenv';
import { spawn } from 'child_process';

// Load environment variables
config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run the server
const serverProcess = spawn('node', [
  '--loader', 'tsx', 
  resolve(__dirname, 'server/index.ts')
], {
  stdio: 'inherit',
  env: { ...process.env }
});

serverProcess.on('error', (err) => {
  console.error('Failed to start server:', err);
});
