
<img width="1920" height="1080" alt="Screenshot 2025-07-15 145413" src="https://github.com/user-attachments/assets/9b821ec6-0005-4135-96e1-0a4d7cc7ec5a" />




markdown
# 📲 Push Notification Setup in Ionic Angular with Capacitor & Firebase

This document provides a step-by-step setup to enable push notifications in your Ionic Angular mobile app using Capacitor and Firebase.

---

## 🧰 Prerequisites

- Node.js and npm installed
- Ionic CLI (`npm install -g @ionic/cli`)
- Firebase account and project setup
- Android Studio installed and configured

---

## 🛠️ Steps to Implement

### Step 1: Create a new Ionic Angular app


ionic start Appname template --type=angular --capacitor --package-id=com.devdatic.devpush
Replace Appname with your project name. Choose your desired template (e.g. blank, tabs, etc.).

Step 2: Navigate to the project directory
bash
cd pushnotify
Ensure your directory matches the actual folder name.

Step 3: Add Android platform
bash
ionic cap add android
Step 4: Install Push Notifications plugin
bash
npm install @capacitor/push-notifications
npx cap sync
Step 5: Generate a service to handle push functionality
bash
ionic g service filename
In filename.service.ts, implement push notification logic: registration, token retrieval, and listeners.

Also, add initialization logic in app.component.ts:

ts
import { PushNotifications } from '@capacitor/push-notifications';

PushNotifications.requestPermissions().then(result => {
  if (result.receive === 'granted') {
    PushNotifications.register();
  } else {
    console.log('Permission denied');
  }
});

PushNotifications.addListener('registration', (token) => {
  console.log('Device registered with token:', token.value);
});
Step 6: (Optional) Generate a page for redirection/navigation
bash
ionic g page pagename
Step 7: Build and open the Android project
bash
ionic build
npx cap sync
ionic cap open android
Step 8: Inspect in Chrome for token
Connect your device or emulator.

Open Chrome and go to chrome://inspect

Open your app's console.

Look for the token logged by console.log(token.value);

Copy the token.

Step 9: Firebase Cloud Messaging Testing
Go to Firebase Console

Open Cloud Messaging tab.

Paste the retrieved token into the device token field.

Send a test notification.

Observe notification on device/emulator 🎉

📚 References
🔗 Capacitor Push Notifications

🔗 Firebase Cloud Messaging


