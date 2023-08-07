# Home Assistant Desktop

![HomeAssistantDesktop](https://github.com/mikepruett3/homeassistant-desktop/blob/main/images/HomeAssistant.png?raw=true)

Home Assistant Desktop is a simple Desktop application for viewing Home Assistant sites, built using [ElectronJS](https://www.electronjs.org).

## Features

- Remove Stored URL
- Control for Hardware Acceleration

## Installation

Dowload the latest [release](https://github.com/mikepruett3/homeassistant-desktop/releases) for Windows, Linux and MacOS.

For Windows... a standard Exectuable is provided, as well as a NuGet package. RPM and DEB packages are availbe for Linux Distrubtions (not tested!).

## Launching

To run, just launch the executable via the Desktop Shortcut, or the Executable directly.

## Building

To build locally, clone the repository and install the dependencies.

```powershell
git clone https://github.com/mikepruett3/homeassistant-desktop.git
cd homeassistant-desktop
npm install
```

To run the application locally.

```powershell
npm run test
```

To build the application installer.

```powershell
npm run make
```

## Dependencies

- electron
- electron-forge
- electron-store
- publisher-github

## Errata

Logo borrowed from [Wikipedia](https://commons.wikimedia.org/wiki/File:Home_Assistant_Logo.svg)