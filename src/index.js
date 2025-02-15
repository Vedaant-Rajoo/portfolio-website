import { initializeDiscord } from './discord';
import { initializeUI } from './ui';

// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code goes here
    console.log('Application initialized');
    initializeDiscord();
    initializeUI();
}); 