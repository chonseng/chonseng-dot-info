# ChonSeng.info

Chon Seng's Portfolio

## Setting Up the Development Environment

### Starting a Local HTTPS Server

1. Generate a localhost certificate  
   Use `mkcert` to create a self-signed certificate for `localhost`:

   ```bash
   mkcert localhost
   ```

   This will generate two files in your directory:

   - `localhost.pem` (SSL certificate)
   - `localhost-key.pem` (private key)

2. Start the HTTPS server  
   Use `http-server` to serve your files over HTTPS:

   ```bash
   http-server -p 8080 --ssl --cert localhost.pem --key localhost-key.pem
   ```

   Your local HTTPS server will now be accessible at `https://localhost:8080`.
