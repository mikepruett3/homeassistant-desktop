module.exports = {
  packagerConfig: {
    asar: true,
    executableName: 'homeassistant-desktop',
    icon: __dirname + '/images/HomeAssistant'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://github.com/mikepruett3/homeassistant-desktop/blob/main/images/HomeAssistant.ico?raw=true',
        setupIcon: __dirname + '/images/HomeAssistant.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mikepruett3',
          name: 'homeassistant-desktop'
        }
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
