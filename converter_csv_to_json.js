const csv=require('csvtojson');

const readStream=require('fs').createReadStream('region.csv');

const writeStream=request.put('region.json');

readStream.pipe(csv()).pipe(writeStream);


