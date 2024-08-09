module.exports = {
  apps : [
    {
      name: "Next",
      cwd: "/var/www/html",
      script: "npm run dev || (rm -rf node_modules && npm ci && npm run dev)"
    }
  ]
}