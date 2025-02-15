import '../style.css';
import { initializeDiscord } from './discord';
import { initializeUI } from './ui';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application initialized');
    injectSpeedInsights();
    initializeDiscord();
    initializeUI();
}); 