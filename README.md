# Nexcis WebApp

## Project Overview
Nexcis WebApp is a modern authentication and notification demo application. It demonstrates Google Sign-In using Firebase Authentication and push notifications using Firebase Cloud Messaging (FCM).

## Features
- **Login Page**: The login page displays your name and a 'Sign in with Google' button. Users can sign in using their Google account.
- **Authentication**: After clicking the sign-in button, users are authenticated via Firebase Auth. Upon successful login, users are redirected to a personalized welcome page.
- **Welcome Page**: Displays a welcome message with the user's name and email. Users can enable notifications and log out from this page.
- **Push Notifications**: The app is integrated with Firebase Cloud Messaging (FCM) to send and receive push notifications. Users receive notifications even when the app is running in the background.

## Screenshots
Below are screenshots demonstrating the app's functionality:

### 1. Push Notification Example
![Push Notification](screenshots/notification.jpg)

### 2. Welcome Page After Login
![Welcome Page](screenshots/welcome.jpg)

### 3. Login Page
![Login Page](screenshots/login.jpg)

> **Note:** To add your screenshots, create a `screenshots` folder in the root of your project and place the images there. Update the image file names if needed.

## How It Works
1. **Login Page**: Users are greeted with a login page that includes your name and a 'Sign in with Google' button.
2. **Google Sign-In**: Clicking the button initiates Firebase Authentication. Users log in with their Google account.
3. **Welcome Page**: After successful login, users are redirected to a welcome page displaying their name, email, and options to enable notifications or log out.
4. **Notifications**: When notifications are enabled, the app registers the device with FCM. Test notifications can be sent and will appear as system notifications on the device.

## Firebase Integration
- **Firebase Auth**: Handles secure Google sign-in and user session management.
- **Firebase Cloud Messaging (FCM)**: Enables push notifications. The integration is fully functional and tested.

## Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/Hamza6387/nexcis-webapp.git
   ```
2. Install dependencies and configure your Firebase project as per the codebase instructions.
3. Run the app and test authentication and notifications.

## Author
Hamza Anwar

---

For any issues or contributions, please open an issue or submit a pull request.
