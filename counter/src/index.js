const redis = require('redis');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redisUrl = process.env.REDIS_URL || 'localhost';
const redisPort = process.env.REDIS_PORT || 0;

let client;
let counter = {};

if (redisUrl !== 'localhost') {
  client = redis.createClient(redisPort, redisUrl);
} else {
  client = {
    incr: (param, fn) => {
      param = param.toString();
      console.log(counter,param);
      if (counter[param] === undefined) {
        counter[param] = 1;
      } else {
        counter[param]++;
      }
      return fn(null, counter[param]);
    },
    get: (param, fn) => {
      fn(null, counter.param || 0);
    },
  };
}

app.use(express.json());

app.get('/counter/:bookId/incr', function (req, res) {
  const {bookId} = req.params;
  client.incr(bookId, (err, rep) => {
    if (err) {
      res.status(500).json({message: 'Что-то случилось с хранилищем'});
      return;
    }
    console.log(`incrementing ${bookId}: ${rep}`);
    res.json({counter: rep});
  });
});

app.get('/counter/:bookId', function (req, res) {
  const {bookId} = req.params;
  client.get(bookId, (err, rep) => {
    if (err) {
      res.status(500).json({message: 'Что-то случилось с хранилищем'});
      return;
    }
    console.log(`get counter ${bookId}: ${rep}`);
    res.json({counter: rep || 0});
  });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
