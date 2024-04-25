# Security and Authentication

This package serves as a practical guide for enhancing security and authentication within Node.js applications. It covers a wide array of topics such as HTTPS, certificates, API keys, OAuth, and more. Its guidance is invaluable for securing Node.js applications and effectively integrating authentication workflows and features.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ThomasCode92/node-toolkit
   cd 04-security-auth
   ```

2. **Create certificates:**

   The following command generates a self-signed SSL certificate (`cert.pem`) along with its private key (`key.pem`) using RSA encryption with a 4096-bit key size. It's valid for 365 days and doesn't prompt for a passphrase for the private key.

   ```bash
   openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
   ```

   Place the generated files into a `cert` folder. These files are essential for initiating the server with the HTTPS protocol.

3. **Environment Variables**

   Access the [Google Developer Console](https://console.cloud.google.com) to initiate a new project. Proceed to activate OAuth for this project by configuring a "_Consent Screen_" and generating credentials. Subsequently, transfer the _Client ID_ and _Client Secret_ to a `.env` file within the current directory.<br />Additionally, include two supplementary values for crafting secure cookie keys.

   ```bash
   # Google OAuth keys
   GOOGLE_OAUTH_CLIENT_ID=<Your Client ID>
   GOOGLE_OAUTH_CLIENT_SECRET=<Your Client Secret>

   # Cookie keys
   COOKIE_KEY_1=<Some Random String>
   COOKIE_KEY_2=<Some Random String>
   ```

4. **Start the application**

   Start the server by running `npm run start`. Once the server is running, open your web browser and visit `https://localhost:3000` to experience the application hosted securely via HTTPS.<br />
   Notice the `/secret` endpoint is only accessible when being logged in (via Google).

### Customize the Server

Feel free to explore and modify the `index.js` file to gain insights into the workings of the (OAuth) authorization flow, security middleware like passport.js, setting up HTTPS, ...<br />Visit the following pages for more information:

- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
- [Passport.js](https://www.passportjs.org/)
- [Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
