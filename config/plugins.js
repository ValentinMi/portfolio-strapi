module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "dev@misiaszek-valentin.com",
      defaultReplyTo: "dev@misiaszek-valentin.com",
    },
  },
  // ...
});
