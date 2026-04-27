module.exports = {
  apps: [
    {
      name: "melano-ai-hub",
      cwd: "/var/www/melano-inc-features/v0-melano-inc-features",
      script: "npm",
      args: "run start -- --port 3000 --hostname 127.0.0.1",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
