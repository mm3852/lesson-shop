if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/lesson-shop/sw.js', { scope: '/lesson-shop/' })})}