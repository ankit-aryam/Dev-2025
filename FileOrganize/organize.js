let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3", "mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){

    if(srcPath==undefined){
        // console.log("Enter correct path");
        // return;
        srcPath = process.cwd();
    }
    // 1. create directory
    let organizedFiles = path.join(srcPath, "Organized_Files");
    if(fs.existsSync(organizedFiles)){
        console.log("Folder already exists");
    } else{
    fs.mkdirSync(organizedFiles);
    }

    // 2. Identify files and categories
    let allFiles = fs.readdirSync(srcPath);

    for(let i=0;i<allFiles.length;i++){
        let fullPathOfFile = path.join(srcPath, allFiles[i]);
        let isFile = fs.lstatSync(fullPathOfFile).isFile();

        if(isFile){
            let ext = path.extname(allFiles[i]).split(".")[1];
            let folderName = getFolderName(ext);
           // console.log(folderName);

            copyFileToDest(srcPath, fullPathOfFile, folderName);
            
        }
    }
    

    // 3. copy files to the folder
}

function getFolderName(ext){
     for(let type in types){
        for(let i =0;i<types[type].length;i++){
            if(types[type][i]==ext){
                return type;
               //console.log(type)
            }
        }
     }
     return 'other';
   
}

function copyFileToDest(srcPath, fullPathOfFile, folderName){
    // make folder path
    destFolderPath = path.join(srcPath, "Organized_Files", folderName);

    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }

    let fileName = path.basename(fullPathOfFile);
    let destFileName = path.join(destFolderPath, fileName);

    fs.copyFileSync(fullPathOfFile, destFileName);
   // fs.unlinkSync(srcPath);
    console.log(fileName + " is copied to " + folderName);
    
}

module.exports ={
    organize: organize,
}