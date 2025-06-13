const os = require('os');
const app = require('./app');
const port = 3000;

app.listen(port, () => {
  const interfaces = os.networkInterfaces();
  console.log(`App is running on port ${port}`);
  console.log(`Local access: http://localhost:${port}`);
  console.log(`External access: http://<your-ec2-public-ip>:${port}`);
});
