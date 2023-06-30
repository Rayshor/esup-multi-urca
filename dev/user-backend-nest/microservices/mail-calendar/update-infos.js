// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageData = require('./package.json');

const version = packageData.version;
const serviceName = packageData.name;
const info = {
  name: serviceName,
  version,
};

const infoJson = JSON.stringify(info, null, 2);
fs.writeFileSync('src/infos.json', infoJson);
