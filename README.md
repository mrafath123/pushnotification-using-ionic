#pushnotification using ionic
**step1: 
'''
ionic start Appname template --type=angular  --capacitor --package-id=com.devdatic.devpush
'''**
**step2: 
'''
cd pushnotify
'''**
**step3:**
'''
ionic cap add android
'''
**step4:**
'''
npm install @capacitor/push-notifications
npx cap sync
'''
**step5:**
'''
 ionic g service filename //to rightservices code write functions in filename.service.ts and also in app.component.ts
'''
**step6:**
'''
Ionic g page pagename  //for redirection..
...
ionic build
npx cap sync
ionic cap open android
'''
***step6:*** go to chrome/inspect in that check console click object get the token and paste it on firebase for testing
<img width="1920" height="1080" alt="Screenshot 2025-07-15 145413" src="https://github.com/user-attachments/assets/9b821ec6-0005-4135-96e1-0a4d7cc7ec5a" />
