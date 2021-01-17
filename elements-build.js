const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/hijridatepicker/polyfills.js',
    './dist/hijridatepicker/runtime.js',
    './dist/hijridatepicker/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/TasheelHijriDatepicker.js');
  await fs.copyFile(
    './dist/hijridatepicker/styles.css',
    'elements/styles.css'
  );
})();