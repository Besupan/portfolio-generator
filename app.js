const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = require('./src/pagetemplate.js');

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Look at the damn file you made.')
});



//const printProfileData = profileDataArr => {
//    //this...
//    for (let i = 0; i < profileDataArr.length; i += 1) {
//        console.log(profileDataArr[i]);
//    }
//
//    console.log('=============');
//
//    //is the same as this..
//    profileDataArr.forEach((profileItem) => {
//        console.log(profileItem)
//    });
//};
//
//printProfileData(profileDataArgs);

