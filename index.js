'use strict'

const { app, BrowserWindow } = require('electron')

let mainWindow

const onClosed = () => {
  mainWindow = null
}

const createMainWindow = () => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  win.loadURL(`file://${ __dirname }/build/index.html`)
  win.webContents.openDevTools()

  win.on('closed', onClosed)

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (!mainWindow) mainWindow = createMainWindow()
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
