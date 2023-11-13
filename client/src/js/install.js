const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler for `beforeinstallprompt`
window.addEventListener('beforeinstallprompt', (event) => {   
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// event handler for `butInstall`
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// event handler for the `appinstalled`
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
