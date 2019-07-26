const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
const users = require('./users.json');

const binance = require('node-binance-api')().options({
  APIKEY: 'B6HuDIMOEuFImUwx66i55Kz4MMIUXjI1K1wTe5S3fN5koNmm3MWMOoaWxK31TxTP',
  APISECRET: 's8F3CnKzIztOERwpGQemb4pe2ZoL2zQWf087IoUERVGlosYDPG71InfQkh5GX26Y',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});

require('./passport.config');

server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/info', /*passport.authenticate('jwt'),*/ function (req, res) {
  res.sendFile(path.join(__dirname, 'info.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', function (req, res) {
  const userFromReq = req.body;
  const userInDB = users.find(user => user.login === userFromReq.login);
  if (userInDB && userInDB.password === userFromReq.password) {
    const token = jwt.sign(userFromReq, 'someSecret', { expiresIn: '24h' });
    res.status(200).json({ auth: true, token });
  } else {
    res.status(401).json({ auth: false });
  }
});



io.on('connection', socket => {

  
  //BNBBTC
    
  binance.websockets.prevDay('BNBBTC', (error, response) => {
    try {
      io.sockets.emit('infoBNB', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high: response.high,
         low: response.low,
         volume: response.quoteVolume
         
        });
      } catch (err) {
        if(err) throw err;
      }
  });

  //ETHBTC


  binance.websockets.prevDay('ETHBTC', (error, response) => {
    try {
      io.sockets.emit('infoETH', {
        name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (err) {
        if(err) throw err;
      }
  });


  //RENBTC
  binance.websockets.prevDay('RENBTC', (error, response) => {
    try {
      io.sockets.emit('infoREN', {
        name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (err) {
        if(err) throw err;
      }
  });

  //TRXBTC
  binance.websockets.prevDay('TRXBTC', (error, response) => {
    try {
      io.sockets.emit('infoTRX', {
        name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LTCBTC
  binance.websockets.prevDay('LTCBTC', (error, response) => {
    try {
      io.sockets.emit('infoLTC', {
        name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LINKBTC
  binance.websockets.prevDay('LINKBTC', (error, response) => {
    try {
      io.sockets.emit('infoLINK', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //XRPBTC
  binance.websockets.prevDay('XRPBTC', (error, response) => {
    try {
      io.sockets.emit('infoXRP', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DUSKBTC
  binance.websockets.prevDay('DUSKBTC', (error, response) => {
    try {
      io.sockets.emit('infoDUSK', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //RVNBTC
  binance.websockets.prevDay('RVNBTC', (error, response) => {
    try {
      io.sockets.emit('infoRVN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  binance.websockets.prevDay('ANKRBTC', (error, response) => {
    try {
      io.sockets.emit('infoANKR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //EOSBTC
  binance.websockets.prevDay('EOSBTC', (error, response) => {
    try {
      io.sockets.emit('infoEOS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BCHABCBTC
  binance.websockets.prevDay('BCHABCBTC', (error, response) => {
    try {
      io.sockets.emit('infoBCHABC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ADABTC
  binance.websockets.prevDay('ADABTC', (error, response) => {
    try {
      io.sockets.emit('infoADA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NANO
  binance.websockets.prevDay('NANOBTC', (error, response) => {
    try {
      io.sockets.emit('infoNANO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NEO
  binance.websockets.prevDay('NEOBTC', (error, response) => {
    try {
      io.sockets.emit('infoNEO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ERD
  binance.websockets.prevDay('ERDBTC', (error, response) => {
    try {
      io.sockets.emit('infoERD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //WAVES
  binance.websockets.prevDay('WAVESBTC', (error, response) => {
    try {
      io.sockets.emit('infoWAVES', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //KMD
  binance.websockets.prevDay('KMDBTC', (error, response) => {
    try {
      io.sockets.emit('infoKMD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //WTC
  binance.websockets.prevDay('WTCBTC', (error, response) => {
    try {
      io.sockets.emit('infoWTC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //XMR
  binance.websockets.prevDay('XMRBTC', (error, response) => {
    try {
      io.sockets.emit('infoXMR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SKY
  binance.websockets.prevDay('SKYBTC', (error, response) => {
    try {
      io.sockets.emit('infoSKY', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //XLM
  binance.websockets.prevDay('XLMBTC', (error, response) => {
    try {
      io.sockets.emit('infoXLM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NPXS
  binance.websockets.prevDay('NPXSBTC', (error, response) => {
    try {
      io.sockets.emit('infoNPXS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //FTM
  binance.websockets.prevDay('FTMBTC', (error, response) => {
    try {
      io.sockets.emit('infoFTM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //HOT
  binance.websockets.prevDay('HOTBTC', (error, response) => {
    try {
      io.sockets.emit('infoHOT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BTT
  binance.websockets.prevDay('BTTBTC', (error, response) => {
    try {
      io.sockets.emit('infoBTT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //AGI
  binance.websockets.prevDay('AGIBTC', (error, response) => {
    try {
      io.sockets.emit('infoAGI', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DENT
  binance.websockets.prevDay('DENTBTC', (error, response) => {
    try {
      io.sockets.emit('infoDENT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //ZEC
  binance.websockets.prevDay('ZECBTC', (error, response) => {
    try {
      io.sockets.emit('infoZEC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //VET
  binance.websockets.prevDay('VETBTC', (error, response) => {
    try {
      io.sockets.emit('infoVET', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //CELR
  binance.websockets.prevDay('CELRBTC', (error, response) => {
    try {
      io.sockets.emit('infoCELR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //MTL
  binance.websockets.prevDay('MTLBTC', (error, response) => {
    try {
      io.sockets.emit('infoMTL', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //ELF
  binance.websockets.prevDay('ELFBTC', (error, response) => {
    try {
      io.sockets.emit('infoELF', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //MATIC
  binance.websockets.prevDay('MATICBTC', (error, response) => {
    try {
      io.sockets.emit('infoMATIC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //ATOM
  binance.websockets.prevDay('ATOMBTC', (error, response) => {
    try {
      io.sockets.emit('infoATOM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ADX
  binance.websockets.prevDay('ADXBTC', (error, response) => {
    try {
      io.sockets.emit('infoADX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //QTUM
  binance.websockets.prevDay('QTUMBTC', (error, response) => {
    try {
      io.sockets.emit('infoQTUM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });



  //ONE
  binance.websockets.prevDay('ONEBTC', (error, response) => {
    try {
      io.sockets.emit('infoONE', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //BAT
  binance.websockets.prevDay('BATBTC', (error, response) => {
    try {
      io.sockets.emit('infoBAT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //IOTA
  binance.websockets.prevDay('IOTABTC', (error, response) => {
    try {
      io.sockets.emit('infoIOTA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //TNT
  binance.websockets.prevDay('TNTBTC', (error, response) => {
    try {
      io.sockets.emit('infoTNT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //THETA
  binance.websockets.prevDay('THETABTC', (error, response) => {
    try {
      io.sockets.emit('infoTHETA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });


  //ICX
  binance.websockets.prevDay('ICXBTC', (error, response) => {
    try {
      io.sockets.emit('infoICX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ALGO
  binance.websockets.prevDay('ALGOBTC', (error, response) => {
    try {
      io.sockets.emit('infoALGO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ELF
  binance.websockets.prevDay('ELFBTC', (error, response) => {
    try {
      io.sockets.emit('infoELF', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SNGLS
  binance.websockets.prevDay('SNGLSBTC', (error, response) => {
    try {
      io.sockets.emit('infoSNGLS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //QKС
  binance.websockets.prevDay('QKCBTC', (error, response) => {
    try {
      io.sockets.emit('infoQKC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ZIL
  binance.websockets.prevDay('ZILBTC', (error, response) => {
    try {
      io.sockets.emit('infoZIL', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //STORJ
  binance.websockets.prevDay('STORJBTC', (error, response) => {
    try {
      io.sockets.emit('infoSTORJ', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //OAX
  binance.websockets.prevDay('OAXBTC', (error, response) => {
    try {
      io.sockets.emit('infoOAX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ONT
  binance.websockets.prevDay('ONTBTC', (error, response) => {
    try {
      io.sockets.emit('infoONT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LSK
  binance.websockets.prevDay('LSKBTC', (error, response) => {
    try {
      io.sockets.emit('infoLSK', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DASH
  binance.websockets.prevDay('DASHBTC', (error, response) => {
    try {
      io.sockets.emit('infoDASH', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ETC
  binance.websockets.prevDay('ETCBTC', (error, response) => {
    try {
      io.sockets.emit('infoETC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ARDR
  binance.websockets.prevDay('ARDRBTC', (error, response) => {
    try {
      io.sockets.emit('infoARDR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  binance.websockets.prevDay('ARKBTC', (error, response) => {
    try {
      io.sockets.emit('infoARK', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ENJ
  binance.websockets.prevDay('ENJBTC', (error, response) => {
    try {
      io.sockets.emit('infoENJ', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //MANA
  binance.websockets.prevDay('MANABTC', (error, response) => {
    try {
      io.sockets.emit('infoMANA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SNT
  binance.websockets.prevDay('SNTBTC', (error, response) => {
    try {
      io.sockets.emit('infoSNT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BQX
  binance.websockets.prevDay('BQXBTC', (error, response) => {
    try {
      io.sockets.emit('infoBQX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //FET
  binance.websockets.prevDay('FETBTC', (error, response) => {
    try {
      io.sockets.emit('infoFET', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BTG
  binance.websockets.prevDay('BTGBTC', (error, response) => {
    try {
      io.sockets.emit('infoBTG', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //TFUEL
  binance.websockets.prevDay('TFUELBTC', (error, response) => {
    try {
      io.sockets.emit('infoTFUEL', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //HC
  binance.websockets.prevDay('HCBTC', (error, response) => {
    try {
      io.sockets.emit('infoHC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //MITH
  binance.websockets.prevDay('MITHBTC', (error, response) => {
    try {
      io.sockets.emit('infoMITH', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });
  
  //OMG
  binance.websockets.prevDay('OMGBTC', (error, response) => {
    try {
      io.sockets.emit('infoOMG', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ARD
  binance.websockets.prevDay('ARDBTC', (error, response) => {
    try {
      io.sockets.emit('infoARD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GRS
  binance.websockets.prevDay('GRSBTC', (error, response) => {
    try {
      io.sockets.emit('infoGRS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //MFT
  binance.websockets.prevDay('MFCBTC', (error, response) => {
    try {
      io.sockets.emit('infoMFC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DLT
  binance.websockets.prevDay('DLTBTC', (error, response) => {
    try {
      io.sockets.emit('infoDLT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ZRX
  binance.websockets.prevDay('ZRXBTC', (error, response) => {
    try {
      io.sockets.emit('infoZRX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //CMT
  binance.websockets.prevDay('CMTBTC', (error, response) => {
    try {
      io.sockets.emit('infoCMT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //OST
  binance.websockets.prevDay('OSTBTC', (error, response) => {
    try {
      io.sockets.emit('infoOST', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //MCO
  binance.websockets.prevDay('MCOBTC', (error, response) => {
    try {
      io.sockets.emit('infoMCO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //POE
  binance.websockets.prevDay('POEBTC', (error, response) => {
    try {
      io.sockets.emit('infoPOE', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DOCK
  binance.websockets.prevDay('DOCKBTC', (error, response) => {
    try {
      io.sockets.emit('infoDOCK', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LOOM
  binance.websockets.prevDay('LOOMBTC', (error, response) => {
    try {
      io.sockets.emit('infoLOOM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //IOST
  binance.websockets.prevDay('IOSTBTC', (error, response) => {
    try {
      io.sockets.emit('infoIOST', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //KNC
  binance.websockets.prevDay('KNCBTC', (error, response) => {
    try {
      io.sockets.emit('infoKNC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //CDT
  binance.websockets.prevDay('CDTBTC', (error, response) => {
    try {
      io.sockets.emit('infoCDT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GTO
  binance.websockets.prevDay('GTOBTC', (error, response) => {
    try {
      io.sockets.emit('infoGTO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //AST
  binance.websockets.prevDay('ASTBTC', (error, response) => {
    try {
      io.sockets.emit('infoAST', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //AMB
  binance.websockets.prevDay('AMBBTC', (error, response) => {
    try {
      io.sockets.emit('infoAMB', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GVT
  binance.websockets.prevDay('GVTBTC', (error, response) => {
    try {
      io.sockets.emit('infoGVT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NTH
  binance.websockets.prevDay('NTHBTC', (error, response) => {
    try {
      io.sockets.emit('infoNTH', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //XVG
  binance.websockets.prevDay('XVGBTC', (error, response) => {
    try {
      io.sockets.emit('infoXVG', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //VIB
  binance.websockets.prevDay('VIBBTC', (error, response) => {
    try {
      io.sockets.emit('infoVIB', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //MDA
  binance.websockets.prevDay('MDABTC', (error, response) => {
    try {
      io.sockets.emit('infoMDA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GXC
  binance.websockets.prevDay('GXCBTC', (error, response) => {
    try {
      io.sockets.emit('infoGXC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //IOTX
  binance.websockets.prevDay('IOTXBTC', (error, response) => {
    try {
      io.sockets.emit('infoIOTX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NULS
  binance.websockets.prevDay('NULSBTC', (error, response) => {
    try {
      io.sockets.emit('infoNULS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //CVC
  binance.websockets.prevDay('CVCBTC', (error, response) => {
    try {
      io.sockets.emit('infoCVC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //QLC
  binance.websockets.prevDay('QLCBTC', (error, response) => {
    try {
      io.sockets.emit('infoQLC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //STRAT
  binance.websockets.prevDay('STRATBTC', (error, response) => {
    try {
      io.sockets.emit('infoSTRAT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //VIBE
  binance.websockets.prevDay('VIBEBTC', (error, response) => {
    try {
      io.sockets.emit('infoVIBE', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DOGE
  binance.websockets.prevDay('DOGEBTC', (error, response) => {
    try {
      io.sockets.emit('infoDOGE', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //PPT
  binance.websockets.prevDay('PPTBTC', (error, response) => {
    try {
      io.sockets.emit('infoPPT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //EVX
  binance.websockets.prevDay('EVXBTC', (error, response) => {
    try {
      io.sockets.emit('infoEVX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LRC
  binance.websockets.prevDay('LRCBTC', (error, response) => {
    try {
      io.sockets.emit('infoLRC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //WAN
  binance.websockets.prevDay('WANBTC', (error, response) => {
    try {
      io.sockets.emit('infoWAN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //POLY
  binance.websockets.prevDay('POLYBTC', (error, response) => {
    try {
      io.sockets.emit('infoPOLY', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //POA
  binance.websockets.prevDay('POABTC', (error, response) => {
    try {
      io.sockets.emit('infoPOA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //STEEM
  binance.websockets.prevDay('STEEMBTC', (error, response) => {
    try {
      io.sockets.emit('infoSTEEM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DCR
  binance.websockets.prevDay('DCRBTC', (error, response) => {
    try {
      io.sockets.emit('infoDCR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //XZC
  binance.websockets.prevDay('XZCBTC', (error, response) => {
    try {
      io.sockets.emit('infoXZC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GO
  binance.websockets.prevDay('GOBTC', (error, response) => {
    try {
      io.sockets.emit('infoGO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ONG
  binance.websockets.prevDay('ONGBTC', (error, response) => {
    try {
      io.sockets.emit('infoONG', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //FUEL
  binance.websockets.prevDay('FUELBTC', (error, response) => {
    try {
      io.sockets.emit('infoFUEL', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BRD
  binance.websockets.prevDay('BRDBTC', (error, response) => {
    try {
      io.sockets.emit('infoBRD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BCPT
  binance.websockets.prevDay('BCPTBTC', (error, response) => {
    try {
      io.sockets.emit('infoBCPT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //WABI
  binance.websockets.prevDay('WABIBTC', (error, response) => {
    try {
      io.sockets.emit('infoWABI', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //YOYO
  binance.websockets.prevDay('YOYOBTC', (error, response) => {
    try {
      io.sockets.emit('infoYOYO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //REP
  binance.websockets.prevDay('REPBTC', (error, response) => {
    try {
      io.sockets.emit('infoREP', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NAS
  binance.websockets.prevDay('NASBTC', (error, response) => {
    try {
      io.sockets.emit('infoNAS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //POWR
  binance.websockets.prevDay('POWRBTC', (error, response) => {
    try {
      io.sockets.emit('infoPOWR', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //QSP
  binance.websockets.prevDay('QSPBTC', (error, response) => {
    try {
      io.sockets.emit('infoQSP', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //GNT
  binance.websockets.prevDay('GNTBTC', (error, response) => {
    try {
      io.sockets.emit('infoGNT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NAV
  // binance.websockets.prevDay('NAVBTC', (error, response) => {
  //   try {
  //     io.sockets.emit('infoNAV', {
  //        name: response.symbol,
  //        averagePrice: response.averagePrice,
  //        percentChange: Number(response.percentChange),
  //        high:response.high,
  //        low: response.low,
  //        volume: response.quoteVolume
  //     });
  //     } catch (error) {
  //       if(error) throw error;
  //     }
  // });

  //GAS
  binance.websockets.prevDay('GASBTC', (error, response) => {
    try {
      io.sockets.emit('infoGAS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BLZ
  binance.websockets.prevDay('BLZBTC', (error, response) => {
    try {
      io.sockets.emit('infoBLZ', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LUN
  binance.websockets.prevDay('LUNBTC', (error, response) => {
    try {
      io.sockets.emit('infoLUN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ENG
  binance.websockets.prevDay('ENGBTC', (error, response) => {
    try {
      io.sockets.emit('infoENG', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DNT
  binance.websockets.prevDay('DNTBTC', (error, response) => {
    try {
      io.sockets.emit('infoDNT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SNM
  binance.websockets.prevDay('SNMBTC', (error, response) => {
    try {
      io.sockets.emit('infoSNM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //STORM
  binance.websockets.prevDay('STORMBTC', (error, response) => {
    try {
      io.sockets.emit('infoSTORM', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //WRP
  binance.websockets.prevDay('WRPBTC', (error, response) => {
    try {
      io.sockets.emit('infoWRP', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NEBL
  binance.websockets.prevDay('NEBLBTC', (error, response) => {
    try {
      io.sockets.emit('infoNEBL', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SYS
  binance.websockets.prevDay('SYSBTC', (error, response) => {
    try {
      io.sockets.emit('infoSYS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //PIVX
  binance.websockets.prevDay('PIVXBTC', (error, response) => {
    try {
      io.sockets.emit('infoPIVX', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //RDN
  binance.websockets.prevDay('RDNBTC', (error, response) => {
    try {
      io.sockets.emit('infoRDN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BTS
  binance.websockets.prevDay('BTSBTC', (error, response) => {
    try {
      io.sockets.emit('infoBTS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //INS
  binance.websockets.prevDay('INSBTC', (error, response) => {
    try {
      io.sockets.emit('infoINS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //APPC
  binance.websockets.prevDay('APPCBTC', (error, response) => {
    try {
      io.sockets.emit('infoAPPC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //ZEN
  binance.websockets.prevDay('ZENBTC', (error, response) => {
    try {
      io.sockets.emit('infoZEN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BCD
  binance.websockets.prevDay('BCDBTC', (error, response) => {
    try {
      io.sockets.emit('infoBCD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //REQ
  binance.websockets.prevDay('REQBTC', (error, response) => {
    try {
      io.sockets.emit('infoREQ', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //RCN
  binance.websockets.prevDay('RCNBTC', (error, response) => {
    try {
      io.sockets.emit('infoRCN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NCASH
  binance.websockets.prevDay('NCASHBTC', (error, response) => {
    try {
      io.sockets.emit('infoNCASH', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //NXS
  binance.websockets.prevDay('NXSBTC', (error, response) => {
    try {
      io.sockets.emit('infoNXS', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DATA
  binance.websockets.prevDay('DATABTC', (error, response) => {
    try {
      io.sockets.emit('infoDATA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //DGD
  binance.websockets.prevDay('DGDBTC', (error, response) => {
    try {
      io.sockets.emit('infoDGD', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //SC
  binance.websockets.prevDay('SCBTC', (error, response) => {
    try {
      io.sockets.emit('infoSC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //KEY
  binance.websockets.prevDay('KEYBTC', (error, response) => {
    try {
      io.sockets.emit('infoKEY', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //FUN
  binance.websockets.prevDay('FUNBTC', (error, response) => {
    try {
      io.sockets.emit('infoFUN', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //VIA
  binance.websockets.prevDay('VIABTC', (error, response) => {
    try {
      io.sockets.emit('infoVIA', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //RLC
  binance.websockets.prevDay('RLCBTC', (error, response) => {
    try {
      io.sockets.emit('infoRLC', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //TNB
  binance.websockets.prevDay('TNBBTC', (error, response) => {
    try {
      io.sockets.emit('infoTNB', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //CND
  binance.websockets.prevDay('CNDBTC', (error, response) => {
    try {
      io.sockets.emit('infoCND', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //LEND
  binance.websockets.prevDay('LENDBTC', (error, response) => {
    try {
      io.sockets.emit('infoLEND', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //EDO
  binance.websockets.prevDay('EDOBTC', (error, response) => {
    try {
      io.sockets.emit('infoEDO', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BNT
  binance.websockets.prevDay('BNTBTC', (error, response) => {
    try {
      io.sockets.emit('infoBNT', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });

  //BTCB
  binance.websockets.prevDay('BTCBBTC', (error, response) => {
    try {
      io.sockets.emit('infoBTCB', {
         name: response.symbol,
         averagePrice: response.averagePrice,
         percentChange: Number(response.percentChange),
         high:response.high,
         low: response.low,
         volume: response.quoteVolume
      });
      } catch (error) {
        if(error) throw error;
      }
  });




 

});