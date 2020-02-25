let Excel = require('C:\\Users\\pc\\AppData\\Roaming\\npm\\node_modules\\exceljs');
let faker = require('faker');


describe('Reading Excel Data', function () {


    it('Read values from excel file', function () {

        browser.driver.get("http://demo.automationtesting.in/Register.html");

        let workbook = new Excel.Workbook();

        workbook.xlsx.readFile('E:\\RegisterData.xlsx').then(function () {

            let worksheet = workbook.getWorksheet(1);

            browser.waitForAngularEnabled(false);

            element(by.xpath('//input[@placeholder="First Name"]')).sendKeys(worksheet.getCell('B1').value);

            element(by.xpath('//input[@placeholder="Last Name"]')).sendKeys(worksheet.getCell('B2').value);

            element(by.xpath('/html[1]/body[1]/section[1]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/input[1]')).sendKeys(faker.internet.email());

            element(by.model('Phone')).sendKeys(worksheet.getCell('B4').value);

            element(by.xpath('//input[@value="Male"] [@type="radio"]')).click();

            let Selectall = element(by.xpath('//select[@id="countries"]'));

            Selectall.$('[value="Angola"]').click();

            element(by.xpath('//button[@id="submitbtn"]')).click();

        })

    });
});
