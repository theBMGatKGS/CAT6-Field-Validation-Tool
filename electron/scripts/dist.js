// Builds the Windows NSIS installer, named with the app version (e.g. CAT6.Field.Validation.Tool.Setup.00.01.000.exe).
const fs = require('fs');
const path = require('path');
const builder = require('electron-builder');
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

builder.build({
  targets: builder.Platform.WINDOWS.createTarget('nsis', builder.Arch.x64),
  publish: 'never',
  config: {
    win: {
      ...pkg.build.win,
      artifactName: `CAT6.Field.Validation.Tool.Setup.${pkg.appRevision}.\${ext}`
    }
  }
}).then(files => {
  console.log('Built:\n' + files.join('\n'));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
