const http = require('http')
const fs = require('fs')
const path = require('path')
const {v1: uuidv1} = require('uuid')

const downloadpage = (url = 'http://www.nodeprogram.com') => {
    console.log('downloading ', url)
    const fetchPage = (urlF,callback) => {
          http.get(urlF,(response) => {
              let buff = ''
              response.on('data',(chunk) =>{
               // console.log(chunk);
                buff += chunk
              })
              response.on('end',() => {
                  callback(null,buff)
              })
          }).on('error',(error) => {
              console.error('Got error:  ${error.message}')
              callback(error)
          })
    }

    const folderName = uuidv1()

    fs.mkdirSync(folderName)

    fetchPage(url,(error,data) => {
         fs.writeFileSync(path.join(__dirname,folderName,'url.txt'),url)
         fs.writeFileSync(path.join(__dirname,folderName,'file.html'),data)
         console.log('downloading is done in folder',folderName)
    })
}

downloadpage(process.argv[2])