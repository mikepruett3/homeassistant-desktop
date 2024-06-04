// main.js

// https://www.electronforge.io/config/makers/squirrel.windows
if (require('electron-squirrel-startup')) return;

const { app, BrowserWindow, Tray, Menu, nativeImage, dialog } = require('electron')
const prompt = require('electron-prompt');
const { getURL, setURL, delURL, getHA, setHA } = require('./settings.js');

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
if (!getHA()) {
    app.disableHardwareAcceleration()
}

createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Home Assistant Desktop',
        icon: nativeImage.createFromPath(__dirname + '/images/HomeAssistant.png'),
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            webviewTag: true,
            nodeIntegration: true,
            nativeWindowOpen: true,
        }
    })

    const url = getURL();
    if (url) {
        win.loadURL(url);
    } else {
        prompt({
            title: 'Homeassistant Website',
            label: 'URL:',
            value: 'http://homeassistant.local:8123',
            inputAttrs: {
                type: 'url'
            },
            type: 'input',
            resizable: true
        })
        .then((r) => {
            if(r === null) {
                console.log('user cancelled');
            } else {
                setURL(r);
                win.loadURL(r);
                console.log('result', r);
            }
        })
        .catch(console.error);
    }

    const icon = nativeImage.createFromPath(__dirname + '/images/HomeAssistant.png')
    tray = new Tray(icon)

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Hardware Acceleration',
            type: 'checkbox',
            checked: getHA(),
            click({ checked }) {
                setHA(checked)
                dialog.showMessageBox(
                    null,
                    {
                        type: 'info',
                        title: 'info',
                        message: 'Exiting Applicatiom, as Hardware Acceleration setting has been changed...'

                    })
                    .then(result => {
                      if (result.response === 0) {
                        app.relaunch();
                        app.exit()
                      }
                    }
                );
            }
        },
        {
            label: 'Delete Stored URL',
            click: () => {
                delURL();
                app.relaunch();
                app.exit();
            }
        },
        {
            label: 'Clear Cache',
            click: () => {
                session.defaultSession.clearStorageData()
                app.relaunch();
                app.exit();
            }
        },
        {
            label: 'Reload',
            click: () => win.reload()
        },
        {
            label: 'Quit',
            type: 'normal',
            role: 'quit'
        }
    ])

    tray.setToolTip('Home Assistant Desktop')
    tray.setTitle('Home Assistant Desktop')
    tray.setContextMenu(contextMenu)
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