const butInstall = document.getElementById("buttonInstall");
const installImage = document.getElementById("installImage");

// Function to hide the install button and image
const hideInstallElements = () => {
  butInstall.classList.add('hidden');
  installImage.classList.add('hidden');
};

// Function to show the install button and image
const showInstallElements = () => {
  butInstall.classList.remove('hidden');
  installImage.classList.remove('hidden');
};

// Function to show the install prompt
const showInstallPrompt = () => {
  const promptEvent = window.deferredPrompt;
  if (promptEvent) {
    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;

    // Hide the install button and image after the prompt is shown
    hideInstallElements();
  }
};

butInstall.addEventListener("click", showInstallPrompt);
installImage.addEventListener("click", showInstallPrompt);

// Event listener to detect the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered event
  window.deferredPrompt = event;

  // Hide the default install button initially
  hideInstallElements();

  // Show the install image
  installImage.classList.remove('hidden');
});

// Event listener to detect the appinstalled event
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
