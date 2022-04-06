const http = require('http')
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const express = require('express')


const {
  resolve
} = require('path')

const app = express()

puppeteer.launch(
{
    headless: true,
    args: ['--no-sandbox'], 
    ignoreDefaultArgs: ['--disable-extensions']
}
).then(async function (browser) {


  const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve() 
    }))
  }

  const appendFileSync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    }))
  }
 
  const readFileSync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {
      encoding: 'utf-8'
    }, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      resolve(data)
    }))
  }

  const removeFileSync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    }))
  }

  let objectData = {}

  readFileSync(path.resolve(__dirname, 'public', 'alldata.json'))
    .then(async data => {

      async function process() {

        const page = await browser.newPage();

        // await page.setViewport({
        //   width: 1280,
        //   height: 800
        // })

        await page.goto('https://matworld.ru/calculator/transportnaya-zadacha-online.php', {
          waitUntil: 'domcontentloaded',
          timeout: 0
        });

        objectData = await data

        ///////////////////////////////////////////////////////////////////

        let allOBJ = JSON.parse(objectData.split('"all":').pop().split(',"all-end":"",')[0]);

        let supOBJ = {
          length: parseInt(objectData.split('"supplier":{"sup-length":"').pop().split('","sup-length-end":"",')[0]),
          data: JSON.parse(objectData.split('"sup-data":').pop().split(',"sup-data-end":""},')[0])
        }

        let conOBJ = {
          length: parseInt(objectData.split('"consumer":{"con-length":"').pop().split('","con-length-end":"",')[0]),
          data: JSON.parse(objectData.split('"con-data":').pop().split(',"con-end"')[0]),
        }

        let changedMethod = parseInt(objectData.split('"changed-button":').pop().split(',"changed-button-end":""')[0])

        console.log('\x1b[36m%s\x1b[0m', 'барлық мәліметтер:', allOBJ)
        console.log('\x1b[36m%s\x1b[0m', 'қорлар:', supOBJ)
        console.log('\x1b[36m%s\x1b[0m', 'қажеттіліктер:', conOBJ)
        console.log('\x1b[36m%s\x1b[0m', 'таңдалған әдіс:', changedMethod, '\n')

        let objects = {
          "all": await allOBJ,
          "supply": await supOBJ,
          "consumer": await conOBJ,
          "changedmethod": changedMethod
        }

        ////////////////////-=REQUEST=-//-=START=-//////////////////////

        async function getTableCells(currentMandN, currentID) {
          let $elemHandler = await page.$(`#${currentID}`);
          let properties = await $elemHandler.getProperties();
          for (const property of properties.values()) {
            const element = property.asElement();
            if (element) {
              let hText = await element.getProperty("text");
              let text = await hText.jsonValue();
              if (text === `${currentMandN}`) {
                let hValue = await element.getProperty("value");
                let value = await hValue.jsonValue();
                await page.select(`#${currentID}`, value);
              }
            }
          }
        }

        getTableCells( objects.supply.length, 'sel_1')
        getTableCells( objects.consumer.length, 'sel_2')
   
        await page.waitForTimeout(3000)

        for (let sup = 0; sup < parseInt(objects.supply.length); sup++) {
          for (let req = 0; req < parseInt(objects.consumer.length); req++) {
              await page.type(`#inp_A_${sup}_${req}`, `${objects.all[sup][req]}`)
          } 
        }
             
        if (parseInt(objects.supply.length) == parseInt(objects.consumer.length)) {

          for (let sup = 0; sup < parseInt(objects.supply.length); sup++) {
            await page.type(`#inp_A_${sup}_${parseInt(objects.supply.length)}`, `${objects.supply.data[0][sup]}`)
          }
          for (let req = 0; req < parseInt(objects.consumer.length); req++) {
            await page.type(`#inp_A_${parseInt(objects.supply.length)}_${req}`, `${objects.consumer.data[0][req]}`)
          }

        } else if (parseInt(objects.supply.length) > parseInt(objects.consumer.length)) {

          for (let sup = 0; sup < parseInt(objects.supply.length); sup++) {
            await page.type(`#inp_A_${sup}_${parseInt(objects.supply.length) + 1}`, `${objects.supply.data[0][sup]}`)
          }
          for (let req = 0; req < parseInt(objects.consumer.length); req++) {
            await page.type(`#inp_A_${parseInt(objects.supply.length)}_${req}`, `${objects.consumer.data[0][req]}`)
          }

        } else if (parseInt(objects.supply.length) < parseInt(objects.consumer.length)) {
          for (let sup = 0; sup < parseInt(objects.supply.length); sup++) {
            await page.type(`#inp_A_${sup}_${parseInt(objects.supply.length + 1)}`, `${objects.supply.data[0][sup]}`)
          }
           
          for (let req = 0; req < parseInt(objects.consumer.length); req++) {
            await page.type(`#inp_A_${parseInt(objects.supply.length)}_${req}`, `${objects.consumer.data[0][req]}`)
          }
        } 
 
        await page.waitForTimeout(1000)

        switch(objects.changedmethod) {
          case 1:
            getTableCells('Метод северно-западного угла', 'opormeth')
            break
          case 2:
            getTableCells('Метод минимального элемента', 'opormeth')
            break
          case 3: 
            getTableCells('Метод аппроксимации Фогеля', 'opormeth')
            break
          case 4:
            getTableCells('Метод потенциалов', 'optimal')
            break
        }

        // await page.screenshot({
        //   path: `picture.png`
        // })

        await page.click('#solve')

        await page.waitForSelector('div.drow')



        let tables = await page.evaluate(() => {
          let datass = []
          let elements = document.getElementsByClassName('simplex');
          for (var element of elements) {
            datass.push(element.innerHTML);
          }
          return datass
        });
          

        let formulas = await page.evaluate(() => {
          let datas = []
          let elements = document.getElementsByClassName('scroll1');
          for (let element of elements) {
            datas.push(element.innerHTML);
          }
          return datas
        });

        let uls = await page.evaluate(() => {
          let datas = []
          let elements = document.getElementsByTagName('ul');
          for (let element of elements) {
              datas.push(element.innerHTML)
            return datas
          }
        })
 
        
        let allobjects = {
          'style': 'background-color: white td{color: black,font-size:20px} .nofr4{font-size:24px,color:blue}',
          'tables': [...tables],
          'formulas': [...formulas],
          'uls': [...uls]
        }
 
        console.log(tables.length)

        ////////////////////-=REQUEST=-//-=FINISH=-//////////////////////

        await browser.close();

        writeFileAsync(path.resolve(__dirname, 'public', 'togetvalues.json'), JSON.stringify(allobjects))
          .catch(err => console.log(err))
        .then
        (removeFileSync(path.resolve(__dirname, 'public', 'alldata.json')))
          .catch(err => console.log(err))
      }
        setTimeout(process, 2500)
    })
    .catch(err => {
      console.log("\x1b[33m%s\x1b[0m", 'Қосымша ішінен керек әдісті таңдаңыз...\n')
    })
  app.get('/calculator', function (req, res) {
    res.send()
  });
})

const server = http.createServer((req, res) => {



  let filePath = path.join(__dirname, './public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    case '.json':
      contentType = 'application\json'
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, './public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
}) 

const PORT = process.env.PORT || '3030'

server.listen(PORT, () => {
  console.log("\x1b[35m%s\x1b[0m", `\nСервер ${PORT} портында қосылып тұр...\n`)
}) 