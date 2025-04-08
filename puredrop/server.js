const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

// Light Switch
let isLightOn = false;
app.get('/api/light', (req, res) => {
  res.json({ light: isLightOn });
});
app.post('/api/light', (req, res) => {
  isLightOn = req.body.light;
  console.log(`Light switched ${isLightOn ? 'ON' : 'OFF'}`);
  res.json({ light: isLightOn });
});

// Night Mode
let nightMode = false;
app.get('/api/night-mode', (req, res) => {
  res.json({ nightMode });
});
app.post('/api/night-mode', (req, res) => {
  nightMode = req.body.nightMode;
  console.log(`Night mode is ${nightMode ? 'ENABLED' : 'DISABLED'}`);
  res.json({ nightMode });
});

// Energy Saving
let energySaving = false;
app.get('/api/energy-saving', (req, res) => {
  res.json({ energySaving });
});
app.post('/api/energy-saving', (req, res) => {
  energySaving = req.body.energySaving;
  console.log(`Energy Saving is ${energySaving ? 'ON' : 'OFF'}`);
  res.json({ energySaving });
});

// Smart Heating Mode
let smartHeating = false;
app.get('/api/smart-heating', (req, res) => {
  res.json({ smartHeating });
});
app.post('/api/smart-heating', (req, res) => {
  smartHeating = req.body.smartHeating;
  console.log(`Smart Heating mode is ${smartHeating ? 'ON' : 'OFF'}`);
  res.json({ smartHeating });
});

// Push and Drink
app.post('/api/push-drink', (req, res) => {
  console.log('Water dispensing triggered.');
  res.json({ message: 'Dispensing started' });
});

// Device Pouring Interval
let pouringInterval = 10; // seconds
app.get('/api/pouring-interval', (req, res) => {
  res.json({ interval: pouringInterval });
});
app.post('/api/pouring-interval', (req, res) => {
  pouringInterval = req.body.interval;
  console.log(`Pouring interval set to ${pouringInterval} seconds`);
  res.json({ interval: pouringInterval });
});

// Debug Logs
let debugLogsEnabled = false;
app.get('/api/debug-logs', (req, res) => {
  res.json({ enabled: debugLogsEnabled });
});
app.post('/api/debug-logs', (req, res) => {
  debugLogsEnabled = req.body.enabled;
  console.log(`Debug logs ${debugLogsEnabled ? 'enabled' : 'disabled'}`);
  res.json({ enabled: debugLogsEnabled });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
