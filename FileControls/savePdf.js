//puppeteer , pdfkit 사용해 aws s3에 업로드 하는 코드!

const fs = require('fs');
const AWS = require('aws-sdk');
const pdfDocument = require('pdfkit');
const sizeOf = require('buffer-image-size');
const puppeteer = require('puppeteer');

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey
});

const bucket='버킷 주소';

Catalog.savePdf = (id, isA4, cb) => {
Catalog.findById(id, {})
.then(async (catalog) => {
try {
const pages=[];
const User = app.models.user;
const number =pages.length;

const url = 'url';

          //puppeteer 시작
          const browser = await puppeteer.launch();

          //browser에 있는 페이지 읽어오기
          const page = await browser.newPage();

          const fileName = '파일 이름';
          const pathName = path.join(__dirname, '../../' + fileName);

          //캡쳐할 넓이 높이 설정
          await page.setViewport({
            width,
            height,
          });

          //캡쳐 할 url 설정
          await page.goto(url, { waitUntil: 'networkidle0' });
          //2000ms 기다리기
          await page.waitFor(2000);

          //여러 페이지일 경우 빈 값의 여러 페이지 array 생성
          let screenshots = Array(number).fill(null);

          //pdf 문서 생성
          const doc = new pdfDocument({ autoFirstPage: false, dpi: 300 });

          //여러 장의 페이지 스크린 샷 찍으면서 pdf 한 페이지씩 생성
          await screenshots.reduce(async (prev, _, index) => {
            await prev;
            return new Promise(async (resolve, reject) => {
              try {
                //스크린샷 옵션 설정에 따라 캡쳐
                const shot = await page.screenshot({
                  fullPage: true,
                  omitBackground: true,
                });
                //이미지 사이즈
                const imageSize = sizeOf(shot);


                //pdf한 페이지에 스크린샷 한 장씩 추가하기
                doc
                  .addPage({
                    size: isA4 ? 'A4' : [imageSize.width, imageSize.height],
                  })
                  .image(shot, 0, 0, {
                    fit: isA4
                      ? [298, 842]
                      : [imageSize.width, imageSize.height],
                  });

                // await page.evaluate(() => {
                //   const carouselNextBtn = document.querySelector(
                //     '#page-carousel-controls-next'
                //   );
                //   if (carouselNextBtn) carouselNextBtn.click();
                //   else return;
                // });

                //1000ms 텀 두기
                await page.waitFor(1000);
                resolve();
              } catch (error) {
                reject(error);
              }
            });
          }, Promise.resolve());
          await browser.close();

          //ㄱㄱㅏ먹음 나중에 다시 정리
          doc.pipe(fs.createWriteStream(pathName)).on('finish', () => {
            const params = {
              Bucket: bucket,
              Key: fileName,
              Body: fs.readFileSync(pathName),
              contentType: 'application/pdf',
              ACL: 'public-read',
            };


            //aws s3에 업로드하기
            s3.upload(params, async (err, res) => {
              if (err) return cb(err);
              fs.unlinkSync(pathName);
              return cb(
                null,
                res.Location.replace('다운 받을 s3 주소')
              );
            });
          });

          doc.end();
        } catch (e) {
          return cb(e);
        }
      })
      .catch((err) => {
        return cb(err);
      });

};
