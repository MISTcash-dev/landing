// Polyfill fetch for Node.js
import fetch from 'node-fetch';
(global as any).fetch = fetch;