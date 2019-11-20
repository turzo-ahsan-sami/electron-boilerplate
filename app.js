// import { app, BrowserWindow } from 'electron';
const { app, BrowserWindow } = require('electron')

var appWindow;

// Application Window
function initWindow() {

    appWindow = new BrowserWindow({
        // width: 1000, 
        // height: 800,
        center : true,
        fullscreen: true, 
        frame: false,
        backgroundColor: '#ffffff',
        webPreferences:{
            nodeIntegration: true
        }
    });
    
    appWindow.once('ready-to-show', () => {
        appWindow.show()
    })

    appWindow.loadURL(`file://${__dirname}/dist/index.html`);

    // Event when the window is closed.
    appWindow.on('closed', function () {
        appWindow = null
    });
}


app.on('ready', initWindow);

app.on('window-all-closed', function() {    
    if (process.platform !== 'darwin') app.quit();    
});

app.on('activate', function() {
    if(appWindow == null) initWindow();
});