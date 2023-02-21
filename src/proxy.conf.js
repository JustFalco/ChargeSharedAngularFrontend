const PROXY_CONFIG = [
  {
    context: [
      "/api/test",
      "/api/chargers",
      "/api/chargers/:id",
      "/api/user"
    ],
    target: "https://chargesharedapitest.azurewebsites.net",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
