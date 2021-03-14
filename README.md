# Ruby Chat Application
A chat application in which users can message each other in a single chat room. This application implements the basic functionality of a chat
app but without Action Cable.

# Usage
1. Install dependencies of the selected project
```
<project_name>/$ bundle install
```
2. To run the project
```
rails s
```
3. To test the application 
```
Open the application in two tabs. Send a message in one tab and you should see that the new message is also added in the other tab.
```
---
**NOTE - Restart Rails Server**
1. In development mode you need to restart the rails server if:
```
1. You add/remove/update gems in your Gemfile.
2. You make some other change to the ruby environment, perhaps via rvm.
3. You change any files under config/, although routes.rb is reloaded for you.
4. You change any files that you require manually, rather than autoloading.
```
2. In production you need to restart the rails server if:
```
1. You change any code or gems.
```

