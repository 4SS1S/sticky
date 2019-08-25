const electron = require('electron');
const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const Store = require('electron-store');
const os = require('os');
const path = require('path');
const isDev = require('electron-is-dev');


const storage = {
    isLoged: false,
}

let window_x = 0;
let window_y = 0;
let mainWindow = null;
let tray = null;

const notes = [
    {
        nota: 1,
        width: 100,
        height: 100
    },
    {
        nota: 2,
        width: 100,
        height: 100
    },
    {
        nota: 3,
        width: 100,
        height: 100
    }
]

/**
 * 
 * @params {}
 * @description get gpu info
 * @example getGpuInfo().then(res => { console.log(res) })
 */
function getGpuInfo() {
    return new Promise((resolve, reject) => {
        const gpu = app.getGPUInfo('complete');
        resolve(gpu);
    });
}


ipcMain.on('new_task', (res, args) => {

    notes.push(args);

    let new_window = new BrowserWindow({ width: 300, height: 500 });
    new_window.loadURL('http://www.google.com')
    new_window.show();
});

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    });
    // mainWindow.loadFile(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.loadURL('http://localhost:3000/sticky')
    mainWindow.show();
    mainWindow.webContents.openDevTools();

    mainWindow.on('close', () => {

    })

    let displays = electron.screen.getAllDisplays();
    let externalDisplay = displays.find((display) => {
        return display.bounds.x !== 0 || display.bounds.y !== 0
    });

    window_x = externalDisplay.bounds.x;
    window_y = externalDisplay.bounds.y;

    notes.forEach((i, j) => {
        const {
            width,
            height,
        } = i;

        let pos_x = parseInt(i.pos_x == undefined ? window_x + width - (window_x / 1.1) : i.pos_x);
        let pos_y = parseInt(i.pos_y == undefined ? height - window_y + (window_y * (j / 2)) : i.pos_y)
        console.log(pos_x)

        let win = new BrowserWindow({ width, height, frame: false });
        win.setPosition(
            pos_x,
            pos_y
        );

        // console.log(os.userInfo().username)

        win.loadURL('http://localhost:3000/sticky');
        win.close(() => {
            console.log(win.getPosition())
        })
    });

    tray = new Tray(
        path.resolve(
            __dirname,
            'public',
            'logo192.png'
        )
    );
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Quit',
            click: () => {
                process.exit();
            }
        }
    ]);
    tray.setContextMenu(contextMenu);
});

