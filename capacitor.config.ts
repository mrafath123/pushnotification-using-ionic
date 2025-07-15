import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devdatic.devpush',
  appName: 'pushnotify',
  webDir: 'www',
  plugins: {
    "PushNotifications": {
    "presentationOptions": ["badge", "sound", "alert"]
    }
  }

};

export default config;
