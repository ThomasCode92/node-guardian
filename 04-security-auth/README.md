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

3. **Start the application**

   Start the server by running `npm run start`. Once the server is running, open your web browser and visit `https://localhost:3000` to experience the application hosted securely via HTTPS.
