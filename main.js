// main.js

const { app, BrowserWindow } = require('electron')
//const settings = require('./settings')

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
app.disableHardwareAcceleration()

createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 800,
        title: 'Home Assistant Desktop',
        icon: __dirname + '/images/HomeAssistant.ico',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            webviewTag: true,
            nodeIntegration: true,
            nativeWindowOpen: true,
        }
    })

    //win.settings = settings

    //win.connect = (url) => {
    //    win.url = url
    //    settings.setUrl(url)
    //    win.loadURL(settings.url);
    //}

    win.loadURL('http://homeassistant.local:8123');
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})