const { Transform } = require('stream');
const fs = require('fs');

function grep(path, key) {
  const stream = fs.createReadStream(path);

  const splitter = new Transform({
    readableObjectMode: true,

    transform(chunk, encoding, callback) {
      this.push(chunk.toString().trim().split('\n'));
      callback();
    },
  });

  const grepFunc = new Transform({
    writableObjectMode: true,

    transform(chunk, encoding, callback) {
      for (let i = 0; i < chunk.length; i += 1) {
        if (chunk[i].match(key)) this.push(`${chunk[i]}\n`);
      }
      callback();
    },
  });

  stream
    .pipe(splitter)
    .pipe(grepFunc)
    .pipe(process.stdout);
}

grep('./package.json', 'es.i');
