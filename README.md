#pushnotification using ionic
**step1: 
'''
ionic start Appname template --type=angular  --capacitor --package-id=com.devdatic.devpush
'''**
**step2: 
'''
cd pushnotify
'''**
**step3:
'''
ionic cap add android
'''**
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
