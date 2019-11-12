# Auth Connect Training Starter

This application shows a typical structure for applications that require authentication in order to get data. The base application uses `email/password` for authentication.

## Getting Started

- clone this repo
- cd ac-training-starter
- npm i
- npm run build
- npx cap update - this may take a while
- npm run build
- npm start - to run in the browser
- npx cap open ios

## General Architecture

### Services

Two services and one HTTP interceptor are related to authentication within the application.

#### `IdentityService`

The `IdentityService` defines the identity of the currently logged in user including the authentication token associated with the user. This service also persists the token so it is available between sessions.

#### `AuthenticationService`

The `AuthenticationService` handles the POSTs to the login and logout endpoints. If these operations are successful it registers this fact with the `IdentityService`.

### Application Workflow

Upon starting up, the application attempts to load the `HomePage`. The `HomePage` displays the username of the currently logged in user. This page is not accessible if the current user is not logged in, in which case, the application navigates to the login page.

## Misc Notes

### Email/Password Login Credentials

To login with the base application, specify any email address with `ionic` as part of the email and any password with `test` as part of the password. Examples:

* `ionic@website.com`/`testpass`
* `guy@ionicframework.com`/`mctesterguy`

### `xcodebuild` Error

On one machine, I kept getting the following error:

```
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```

See the solution here: https://stackoverflow.com/questions/17980759/xcode-select-active-developer-directory-error