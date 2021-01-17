import dataStructures from '../src/data/data-structures.mjs';
import fs from 'fs';

const DATA_STRUCTURES_FILE = 'src/data/data-structures.mjs';
const DATA_STRUCTURES_DIR = 'src/data/data-structure-information';

if(!process.argv || !process.argv.length || !process.argv[2]){
    throw new Error('Please provide a data structure name!');
}

const dataStructureKey = process.argv[2] && process.argv[2].toLowerCase();

if(dataStructureExists()){
    console.log('\x1b[31mFailed to add structure!');
    console.log('\x1b[0m');
    throw new Error('Data structure already exists!');
}

const dataStructureTitle = dataStructureKey.split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase())
    .join(' ');

const dataStructureObject = `
    {
        "key": "${dataStructureKey}",
        "name": "${dataStructureTitle}"
    }
`;

fs.readFile(DATA_STRUCTURES_FILE, 'utf8', (err, data) => {
    if (err) throw err;
    const dataArr = data.split(']');
    dataArr[0] = dataArr[0].substring(0,dataArr[0].length - 1) + ',';
    dataArr[1] = ']' + dataArr[1];
    dataArr.splice(1, 0, `${dataStructureObject}`);

    // re-write to the file
    fs.writeFile(DATA_STRUCTURES_FILE, dataArr.join(''), (err) => {
        if (err) throw err;
        console.log(`Updating ${DATA_STRUCTURES_FILE}`);
        console.log(`Updated ${DATA_STRUCTURES_FILE}`);
        createAndUpdateDataStructurefile();
      });
});


function dataStructureExists(){
    return dataStructures.findIndex((item) => {
        return item.key === dataStructureKey;
    }) > -1;
}

function createAndUpdateDataStructurefile(){
    fs.readFile('src/data/data-structure-blueprint.txt', 'utf8', (err, data) => {
        if (err) throw err;

        // write to the newly created file
        console.log(`Creating boilerplate: ${DATA_STRUCTURES_DIR}/${dataStructureKey}.js`);
        const variableName = process.argv[2].split('-').reduce((accumulator, currentItem) => accumulator + currentItem.charAt(0).toUpperCase() + currentItem.substring(1).toLowerCase());
        data = data.replace(`title: ''`, `title: '${dataStructureTitle}'`);
        const boilerplateText = `const ${variableName} = ${data};\n\nexport default ${variableName};`;
        fs.writeFile(`${DATA_STRUCTURES_DIR}/${dataStructureKey}.js`, boilerplateText, (err) => {
            if (err) throw err;
            console.log(`Updating ${DATA_STRUCTURES_DIR}/${dataStructureKey}.js`);
            console.log(`Updated ${DATA_STRUCTURES_DIR}/${dataStructureKey}.js`);
            console.log('\x1b[32mData structure added successfully!', '\x1b[0m');
        });
    });
}