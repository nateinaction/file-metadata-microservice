import express from 'express'
import multer from 'multer'

const app = express()
const upload = multer()

const form = `
<html>
  <form action="/upload" method="post" enctype="multipart/form-data">
    Select file to upload:
    <input type="file" name="file" id="file">
    <input type="submit" value="Upload" name="submit">
  </form>
</html>
`

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size })
})

app.get('/', (req, res) => {
  res.send(form)
})

app.listen(process.env.PORT || 5000)
