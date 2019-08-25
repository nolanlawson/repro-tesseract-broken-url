import { TesseractWorker } from 'tesseract.js'

(async () => {
  const worker = new TesseractWorker({
    workerPath: `/worker.min.js`,
    langPath: `/`,
    corePath: `/tesseract-core.wasm.js`
  })

  try {
    const response = await worker.recognize('/fake.png')
    console.log('response', response)
  } catch (err) {
    console.err('error', err)
  }

  try {
    const response = await worker.recognize('/testocr.png')
    console.log('response', response)
  } catch (err) {
    console.err('error', err)
  }
})()
