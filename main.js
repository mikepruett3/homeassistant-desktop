// main.js

const { app, BrowserWindow } = require('electron')
const config = require('./config');

var args = process.argv

createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 800,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            //webSecurity: false
            //preload: path.join(__dirname, 'preload.js')
        }
    })

    if (args[2]) {
        win.loadURL(config.ALT_HASS_URL);
    } else {
        win.loadURL(config.HASS_URL);
    }
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
