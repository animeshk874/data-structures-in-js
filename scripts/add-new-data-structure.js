const fs = require('fs');

const DATA_STRUCTURES_FILE = 'public/data/data-structures.json';
const DATA_STRUCTURES_DIR = 'public/data/data-structure-information';

if (!process.argv || !process.argv.length || !process.argv[2]) {
  throw new Error('Please provide a data structure name!');
}

const dataStructureKey = process.argv[2] && process.argv[2].toLowerCase();
let dataStructures = [];

(function fetchExistingDataStructures() {
  fs.readFile(DATA_STRUCTURES_FILE, (err, data) => {
    if (err) throw err;
    dataStructures = JSON.parse(data) || [];
    setupDataStructure();
  });
})();


function setupDataStructure() {
  if (dataStructureExists()) {
    console.log('\x1b[31mFailed to add structure!');
    console.log('\x1b[0m');
    throw new Error('Data structure already exists!');
  }

  function dataStructureExists() {
    return dataStructures.findIndex((item) => {
      return item.key === dataStructureKey;
    }) > -1;
  }

  const dataStructureTitle = dataStructureKey.split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase())
    .join(' ');

  const dataStructureObject = {
    key: dataStructureKey,
    name: dataStructureTitle
  };

  const dataArr = dataStructures.slice();
  dataArr.push(dataStructureObject);

  // re-write to the file
  fs.writeFile(DATA_STRUCTURES_FILE, JSON.stringify(dataArr, null, 2), (err) => {
    if (err) throw err;
    console.log(`Updating ${DATA_STRUCTURES_FILE}`);
    console.log(`Updated ${DATA_STRUCTURES_FILE}`);
    createAndUpdateDataStructurefile();
  });


  function createAndUpdateDataStructurefile() {
    fs.readFile('public/data/data-structure-blueprint.json', 'utf8', (err, data) => {
      if (err) throw err;

      // write to the newly created file
      const dummyData = JSON.parse(data) || {};
      console.log(`Creating boilerplate: ${DATA_STRUCTURES_DIR}/${dataStructureKey}.json`);
      dummyData.title = dataStructureTitle;
      dummyData.classImplementationCode = dummyData.classImplementationCode.replace(/DataStructureName/g, dataStructureTitle.split(' ').join());
      fs.writeFile(`${DATA_STRUCTURES_DIR}/${dataStructureKey}.json`, JSON.stringify(dummyData, null, 2), (err) => {
        if (err) throw err;
        console.log(`Updating ${DATA_STRUCTURES_DIR}/${dataStructureKey}.json`);
        console.log(`Updated ${DATA_STRUCTURES_DIR}/${dataStructureKey}.json`);
        console.log('\x1b[32mData structure added successfully!', '\x1b[0m');
      });
    });
  }
}