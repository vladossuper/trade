window.onload = () => {

    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
        location.replace('/login');
    } else {
        const socket = io.connect('http://localhost:3000');

        const root = document.getElementById('root');

        const table = document.getElementById('table');
        
        const btc = document.querySelector('.btc');
        const eth = document.querySelector('.eth');
        const ren = document.querySelector('.ren');
        const trx = document.querySelector('.trx');
        const ltc = document.querySelector('.ltc');
        const link = document.querySelector('.link');
        const xrp = document.querySelector('.xrp');
        const dusk = document.querySelector('.dusk');
        const rvn = document.querySelector('.rvn');
        const ankr = document.querySelector('.ankr');
        const eos = document.querySelector('.eos');
        const bchabc = document.querySelector('.bchabc');
        const ada = document.querySelector('.ada');
        const nano = document.querySelector('.nano');
        const neo = document.querySelector('.neo');
        const erd = document.querySelector('.erd');
        const waves = document.querySelector('.waves');
        const kmd = document.querySelector('.kmd');
        const wtc = document.querySelector('.wtc');
        const xmr = document.querySelector('.xmr');
        const sky = document.querySelector('.sky');
        const xlm = document.querySelector('.xlm');
        const npxs = document.querySelector('.npxs');
        const hot = document.querySelector('.hot');
        const btt = document.querySelector('.btt');
        const agi = document.querySelector('.agi');
        const ftm = document.querySelector('.ftm');
        const dent = document.querySelector('.dent');
        const zec = document.querySelector('.zec');
        const vet = document.querySelector('.vet');
        const celr = document.querySelector('.celr');
        const mtl = document.querySelector('.mtl');
        const elf = document.querySelector('.elf');
        const matic = document.querySelector('.matic');
        const atom = document.querySelector('.atom');
        const adx = document.querySelector('.adx');
        const qtum = document.querySelector('.qtum');
        const one = document.querySelector('.one');
        const bat = document.querySelector('.bat');
        const iota = document.querySelector('.iota');
        const tnt = document.querySelector('.tnt');
        // 
        const theta = document.querySelector('.theta');
        const icx = document.querySelector('.icx');
        const algo = document.querySelector('.algo');
        const sngls = document.querySelector('.sngls');
        const qkc = document.querySelector('.qkc');
        const zil = document.querySelector('.zil');
        const storj = document.querySelector('.storj');
        const oax = document.querySelector('.oax');
        const ont = document.querySelector('.ont');
        const lsk = document.querySelector('.lsk')
        const dash = document.querySelector('.dash');
        const etc = document.querySelector('.etc');
        const ardr = document.querySelector('.ardr');
        const ark = document.querySelector('.ark');
        const enj = document.querySelector('.enj');

        const mana = document.querySelector('.mana');
        const snt = document.querySelector('.snt');
        const bqx = document.querySelector('.bqx');
        const fet = document.querySelector('.fet');
        const btg = document.querySelector('.btg');
        const tfuel = document.querySelector('.tfuel');
        const hc = document.querySelector('.hc');
        const mith = document.querySelector('.mith');
        const omg = document.querySelector('.omg');
        const ard = document.querySelector('.enj');
        const grs = document.querySelector('.grs');



        const mft = document.querySelector('.mft');
        const dlt = document.querySelector('.dlt');
        const zrx = document.querySelector('.zrx');
        const cmt = document.querySelector('.cmt');
        const ost = document.querySelector('.ost');
        const mco = document.querySelector('.mco');
        const poe = document.querySelector('.poe');
        const dock = document.querySelector('.dock');
        const loom = document.querySelector('.loom');
        const iost = document.querySelector('.iost');
        const knc = document.querySelector('.knc');
        const cdt = document.querySelector('.cdt');
        

        const gto = document.querySelector('.gto');
        const ast = document.querySelector('.ast');
        const amb = document.querySelector('.amb');
        const gvt = document.querySelector('.gvt');
        const nth = document.querySelector('.nth');
        const xvg = document.querySelector('.xvg');
        const vib = document.querySelector('.vib');
        const mda = document.querySelector('.mda');
        const gxc = document.querySelector('.gxc');
        const iotx = document.querySelector('.iotx');
        const nuls = document.querySelector('.nuls');
        const cvc = document.querySelector('.cvc');

        const qlc = document.querySelector('.qlc');
        const strat = document.querySelector('.strat');
        const vibe = document.querySelector('.vibe');
        const doge = document.querySelector('.doge');
        const ppt= document.querySelector('.ppt');
        const evx = document.querySelector('.evx');
        const lrc = document.querySelector('.lrc');
        const wan = document.querySelector('.wan');
        const poly = document.querySelector('.poly');
        const poa = document.querySelector('.poa');
        const steem = document.querySelector('.steem');
        const dcr = document.querySelector('.dcr');
        const xzc = document.querySelector('.xzc');


        const go = document.querySelector('.go');
        const ong = document.querySelector('.ong');
        const fuel = document.querySelector('.fuel');
        const brd = document.querySelector('.brd');
        const bcpt = document.querySelector('.bcpt');
        const wabi = document.querySelector('.wabi');
        const yoyo = document.querySelector('.yoyo');
        const rep = document.querySelector('.rep');
        const nas = document.querySelector('.nas');
        const powr = document.querySelector('.powr');
        const qsp = document.querySelector('.qsp');
        const gnt = document.querySelector('.gnt');
        // const nav = document.querySelector('.nav');
        const gas = document.querySelector('.gas');
        const blz = document.querySelector('.blz');
        const lun = document.querySelector('.lun');
        const eng = document.querySelector('.eng');
        const dnt = document.querySelector('.dnt');
        const snm = document.querySelector('.snm');
        const storm = document.querySelector('.storm');
        const wrp = document.querySelector('.wrp');
        const nebl = document.querySelector('.nebl');
        const sys = document.querySelector('.sys');
        const pivx = document.querySelector('.pivx');
        const rdn = document.querySelector('.rdn');
        const bts = document.querySelector('.bts');
        const ins = document.querySelector('.ins');
        const appc = document.querySelector('.appc');
        const zen = document.querySelector('.zen');
        const bcd = document.querySelector('.bcd');
        const req = document.querySelector('.req');
        const rcn = document.querySelector('.rcn');
        const ncash = document.querySelector('.ncash');
        const nxs = document.querySelector('.nxs');
        const data = document.querySelector('.data');
        const dgd = document.querySelector('.dgd');
        const sc = document.querySelector('.sc');
        const key = document.querySelector('.key');
        const fun = document.querySelector('.fun');
        const via = document.querySelector('.via');
        const rlc = document.querySelector('.rlc');
        const tnb = document.querySelector('.tnb');
        const cnd = document.querySelector('.cnd');
        const lend = document.querySelector('.lend');
        const edo = document.querySelector('.edo');
        const bnt = document.querySelector('.bnt');
        const btcb = document.querySelector('.btcb');

        


        
        
        // newTr.appendChild(newTd)

        socket.on('infoBNB', payload => {
           

            btc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-btc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-btc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-btc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-btc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-btc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-btc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-btc').classList.add('up-change');
            }
        });

        socket.on('infoETH', payload => {
            eth.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-eth">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-eth').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-eth').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-eth').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-eth').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-eth').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-eth').classList.add('up-change');
            }
        });

        socket.on('infoREN', payload => {
            ren.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ren">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ren').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ren').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ren').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ren').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ren').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ren').classList.add('up-change');
            }
        });

        socket.on('infoTRX', payload => {
            trx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-trx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-trx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-trx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-trx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-trx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-trx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-trx').classList.add('up-change');
            }
        });

        socket.on('infoLTC', payload => {
            ltc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ltc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ltc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ltc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ltc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ltc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ltc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ltc').classList.add('up-change');
            }
        });

        socket.on('infoLINK', payload => {
            link.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-link">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-link').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-link').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-link').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-link').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-link').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-link').classList.add('up-change');
            }
        });

        socket.on('infoXRP', payload => {
            xrp.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-xrp">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-xrp').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-xrp').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-xrp').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-xrp').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-xrp').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-xrp').classList.add('up-change');
            }
        });

        socket.on('infoDUSK', payload => {
            dusk.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dusk">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dusk').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dusk').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dusk').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dusk').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dusk').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dusk').classList.add('up-change');
            }
        });

        socket.on('infoRVN', payload => {
            rvn.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-rvn">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-rvn').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-rvn').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-rvn').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-rvn').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-rvn').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-rvn').classList.add('up-change');
            }
        });

        socket.on('infoANKR', payload => {
            ankr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ankr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ankr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ankr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ankr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ankr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ankr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ankr').classList.add('up-change');
            }
        });

        socket.on('infoEOS', payload => {
            eos.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-eos">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-eos').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-eos').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-eos').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-eos').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-eos').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-eos').classList.add('up-change');
            }
        });

        socket.on('infoBCHABC', payload => {
            bchabc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bchabc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bchabc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bchabc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bchabc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bchabc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-chang-bchabce').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bchabc').classList.add('up-change');
            }
        });

        socket.on('infoADA', payload => {
            ada.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ada">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ada').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ada').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ada').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ada').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ada').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ada').classList.add('up-change');
            }
        });

        socket.on('infoNANO', payload => {
            nano.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nano">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nano').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nano').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nano').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nano').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nano').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nano').classList.add('up-change');
            }
        });

        socket.on('infoNEO', payload => {
            neo.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-neo">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-neo').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-neo').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-neo').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-neo').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-neo').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-neo').classList.add('up-change');
            }
        });

        socket.on('infoERD', payload => {
            erd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-erd">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-erd').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-erd').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-erd').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-erd').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-erd').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-erd').classList.add('up-change');
            }
        });

        socket.on('infoWAVES', payload => {
            waves.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-waves">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-waves').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-waves').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-waves').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-waves').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-waves').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-waves').classList.add('up-change');
            }
        });

        socket.on('infoKMD', payload => {
            kmd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-kmd">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-kmd').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-kmd').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-kmd').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-kmd').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-kmd').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-kmd').classList.add('up-change');
            }
        });

        socket.on('infoWTC', payload => {
            wtc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-wtc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-wtc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-wtc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-wtc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-wtc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-wtc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-wtc').classList.add('up-change');
            }
        });

        socket.on('infoXMR', payload => {
            xmr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-xmr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-xmr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-xmr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-xmr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-xmr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-xmr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-xmr').classList.add('up-change');
            }
        });

        socket.on('infoSKY', payload => {
            sky.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-sky">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-sky').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-sky').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-sky').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-sky').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-sky').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-sky').classList.add('up-change');
            }
        });

        socket.on('infoXLM', payload => {
            xlm.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-xlm">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-xlm').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-xlm').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-xlm').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-xlm').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-xlm').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-xlm').classList.add('up-change');
            }
        });

        socket.on('infoNPXS', payload => {
            npxs.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-npxs">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-npxs').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-npxs').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-npxs').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-npxs').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-npxs').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-npxs').classList.add('up-change');
            }
        });

        socket.on('infoFTM', payload => {
            ftm.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ftm">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ftm').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ftm').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ftm').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ftm').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ftm').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ftm').classList.add('up-change');
            }
        });

        socket.on('infoHOT', payload => {
            hot.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-hot">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-hot').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-hot').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-hot').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-hot').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-hot').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-hot').classList.add('up-change');
            }
        });

        socket.on('infoBTT', payload => {
            btt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-btt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-btt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-btt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-btt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-btt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-btt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-btt').classList.add('up-change');
            }
        });

        socket.on('infoAGI', payload => {
            agi.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-agi">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-agi').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-agi').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-agi').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-agi').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-agi').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-agi').classList.add('up-change');
            }
        });



        socket.on('infoDENT', payload => {
            dent.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dent">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dent').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dent').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dent').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dent').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dent').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dent').classList.add('up-change');
            }
        });

        socket.on('infoZEC', payload => {
            zec.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-zec">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-zec').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-zec').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-zec').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-zec').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-zec').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-zec').classList.add('up-change');
            }
        });

        socket.on('infoDENT', payload => {
            dent.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dent">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dent').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dent').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dent').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dent').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dent').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dent').classList.add('up-change');
            }
        });

        socket.on('infoVET', payload => {
            vet.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-vet">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-vet').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-vet').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-vet').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-vet').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-vet').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-vet').classList.add('up-change');
            }
        });

        socket.on('infoCELR', payload => {
            celr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-celr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-celr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-celr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-celr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-celr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-celr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-celr').classList.add('up-change');
            }
        });

        socket.on('infoMTL', payload => {
            mtl.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mtl">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mtl').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mtl').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mtl').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mtl').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mtl').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mtl').classList.add('up-change');
            }
        });

        socket.on('infoELF', payload => {
            elf.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-elf">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-elf').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-elf').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-elf').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-elf').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-elf').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-elf').classList.add('up-change');
            }
        });

        socket.on('infoMATIC', payload => {
            matic.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-matic">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-matic').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-matic').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-matic').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-matic').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-matic').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-matic').classList.add('up-change');
            }
        });

        socket.on('infoATOM', payload => {
            atom.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-atom">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-atom').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-atom').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-atom').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-atom').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-atom').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-atom').classList.add('up-change');
            }
        });

        socket.on('infoADX', payload => {
            adx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-adx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-adx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-adx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-adx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-adx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-adx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-adx').classList.add('up-change');
            }
        });

        socket.on('infoQTUM', payload => {
            qtum.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-qtum">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-qtum').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-qtum').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-qtum').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-qtum').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-qtum').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-qtum').classList.add('up-change');
            }
        });


        socket.on('infoONE', payload => {
            one.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-one">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-one').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-one').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-one').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-one').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-one').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-one').classList.add('up-change');
            }
        });

        socket.on('infoBAT', payload => {
            bat.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bat">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bat').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bat').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bat').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bat').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bat').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bat').classList.add('up-change');
            }
        });

        socket.on('infoIOTA', payload => {
            iota.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-iota">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-iota').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-iota').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-iota').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-iota').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-iota').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-iota').classList.add('up-change');
            }
        });

        socket.on('infoTNT', payload => {
            tnt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-tnt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-tnt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-tnt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-tnt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-tnt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-tnt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-tnt').classList.add('up-change');
            }
        });

        socket.on('infoTHETA', payload => {
            theta.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-theta">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-theta').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-theta').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-theta').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-theta').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-theta').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-theta').classList.add('up-change');
            }
        });

        socket.on('infoICX', payload => {
            icx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-icx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-icx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-icx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-icx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-icx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-icx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-icx').classList.add('up-change');
            }
        });

        socket.on('infoALGO', payload => {
            algo.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-algo">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-algo').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-algo').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-algo').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-algo').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-algo').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-algo').classList.add('up-change');
            }
        });

        socket.on('infoSNGLS', payload => {
            sngls.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-sngls">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-sngls').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-sngls').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-sngls').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-sngls').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-sngls').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-sngls').classList.add('up-change');
            }
        });

        socket.on('infoQKC', payload => {
            qkc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-qkc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-qkc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-qkc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-qkc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-qkc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-qkc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-qkc').classList.add('up-change');
            }
        });

        socket.on('infoZIL', payload => {
            zil.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-zil">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-zil').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-zil').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-zil').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-zil').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-zil').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-zil').classList.add('up-change');
            }
        });

        socket.on('infoSTORJ', payload => {
            storj.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-storj">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-storj').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-storj').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-storj').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-storj').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-storj').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-storj').classList.add('up-change');
            }
        });

        socket.on('infoOAX', payload => {
            oax.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-oax">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-oax').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-oax').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-oax').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-oax').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-oax').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-oax').classList.add('up-change');
            }
        });

        socket.on('infoONT', payload => {
            ont.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ont">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ont').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ont').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ont').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ont').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ont').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ont').classList.add('up-change');
            }
        });

        socket.on('infoLSK', payload => {
            lsk.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-slk">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-slk').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-slk').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-slk').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-slk').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-slk').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-slk').classList.add('up-change');
            }
        });

        socket.on('infoDASH', payload => {
            dash.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dash">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dash').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dash').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dash').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dash').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dash').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dash').classList.add('up-change');
            }
        });

        socket.on('infoETC', payload => {
            etc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-etc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-etc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-etc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-etc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-etc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-etc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-etc').classList.add('up-change');
            }
        });

        socket.on('infoARDR', payload => {
            ardr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ardr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ardr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ardr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ardr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ardr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ardr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ardr').classList.add('up-change');
            }
        });

        socket.on('infoARK', payload => {
            ark.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ark">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ark').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ark').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ark').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ark').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ark').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ark').classList.add('up-change');
            }
        });

        socket.on('infoENJ', payload => {
            enj.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-enj">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-enj').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-enj').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-enj').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-enj').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-enj').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-enj').classList.add('up-change');
            }
        });


        socket.on('infoMANA', payload => {
            mana.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mana">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mana').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mana').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mana').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mana').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mana').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mana').classList.add('up-change');
            }
        });

        socket.on('infoSNT', payload => {
            snt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-snt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-snt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-snt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-snt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-snt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-snt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-snt').classList.add('up-change');
            }
        });

        socket.on('infoBQX', payload => {
            bqx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bqx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bqx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bqx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bqx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bqx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bqx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bqx').classList.add('up-change');
            }
        });

        socket.on('infoFET', payload => {
            fet.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-fet">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-fet').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-fet').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-fet').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-fet').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-fet').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-fet').classList.add('up-change');
            }
        });

        socket.on('infoBTG', payload => {
            btg.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-btg">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-btg').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-btg').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-btg').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-btg').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-btg').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-btg').classList.add('up-change');
            }
        });

        socket.on('infoTFUEL', payload => {
            tfuel.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-tfuel">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-tfuel').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-tfuel').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-tfuel').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-tfuel').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-tfuel').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-tfuel').classList.add('up-change');
            }
        });

        socket.on('infoHC', payload => {
            hc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-hc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-hc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-hc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-hc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-hc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-hc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-hc').classList.add('up-change');
            }
        });

        socket.on('infoMITH', payload => {
            mith.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mith">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mith').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mith').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mith').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mith').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mith').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mith').classList.add('up-change');
            }
        });

        socket.on('infoOMG', payload => {
            omg.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-omg">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-omg').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-omg').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-omg').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-omg').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-omg').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-omg').classList.add('up-change');
            }
        });

        socket.on('infoARD', payload => {
            ard.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ard">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ard').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ard').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ard').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ard').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ard').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ard').classList.add('up-change');
            }
        });

        socket.on('infoGRS', payload => {
            grs.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-grs">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-grs').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-grs').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-grs').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-grs').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-grs').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-grs').classList.add('up-change');
            }
        });

        socket.on('infoMFT', payload => {
            mft.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mft">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mft').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mft').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mft').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mft').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mft').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mft').classList.add('up-change');
            }
        });

        socket.on('infoDLT', payload => {
            dlt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dlt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dlt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dlt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dlt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dlt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dlt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dlt').classList.add('up-change');
            }
        });

        socket.on('infoZRX', payload => {
            zrx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-zrx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-zrx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-zrx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-zrx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-zrx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-zrx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-zrx').classList.add('up-change');
            }
        });

        socket.on('infoCMT', payload => {
            cmt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-cmt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-cmt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-cmt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-cmt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-cmt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-cmt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-cmt').classList.add('up-change');
            }
        });

        socket.on('infoOST', payload => {
            ost.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ost">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ost').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ost').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ost').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ost').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ost').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ost').classList.add('up-change');
            }
        });

        socket.on('infoMCO', payload => {
            mco.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mco">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mco').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mco').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mco').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mco').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mco').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mco').classList.add('up-change');
            }
        });

        socket.on('infoPOE', payload => {
            poe.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-poe">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-poe').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-poe').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-poe').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-poe').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-poe').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-poe').classList.add('up-change');
            }
        });
        
        socket.on('infoDOCK', payload => {
            dock.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dock">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dock').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dock').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dock').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dock').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dock').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dock').classList.add('up-change');
            }
        });

        socket.on('infoLOOM', payload => {
            loom.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-loom">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-loom').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-loom').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-loom').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-loom').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-loom').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-loom').classList.add('up-change');
            }
        });

        socket.on('infoIOST', payload => {
            iost.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-iost">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-iost').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-iost').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-iost').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-iost').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-iost').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-iost').classList.add('up-change');
            }
        });

        socket.on('infoKNC', payload => {
            knc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-knc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-knc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-knc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-knc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-knc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-knc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-knc').classList.add('up-change');
            }
        });

        socket.on('infoCDT', payload => {
            cdt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-cdt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-cdt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-cdt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-cdt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-cdt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-cdt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-cdt').classList.add('up-change');
            }
        });

        socket.on('infoGTO', payload => {
            gto.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-gto">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-gto').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-gto').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-gto').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-gto').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-gto').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-gto').classList.add('up-change');
            }
        });
        
        socket.on('infoAST', payload => {
            ast.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ast">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ast').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ast').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ast').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ast').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ast').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ast').classList.add('up-change');
            }
        });

        socket.on('infoAMB', payload => {
            amb.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-amb">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-amb').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-amb').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-amb').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-amb').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-amb').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-amb').classList.add('up-change');
            }
        });
        
        socket.on('infoGVT', payload => {
            gvt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-gvt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-gvt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-gvt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-gvt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-gvt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-gvt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-gvt').classList.add('up-change');
            }
        });

        socket.on('infoNTH', payload => {
            nth.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nth">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nth').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nth').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nth').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nth').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nth').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nth').classList.add('up-change');
            }
        });

        socket.on('infoXVG', payload => {
            xvg.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-xvg">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-xvg').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-xvg').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-xvg').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-xvg').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-xvg').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-xvg').classList.add('up-change');
            }
        });

        socket.on('infoVIB', payload => {
            vib.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-vib">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-vib').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-vib').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-vib').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-vib').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-vib').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-vib').classList.add('up-change');
            }
        });

        socket.on('infoMDA', payload => {
            mda.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-mda">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-mda').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-mda').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-mda').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-mda').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-mda').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-mda').classList.add('up-change');
            }
        });

        socket.on('infoGXC', payload => {
            gxc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-gxc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-gxc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-gxc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-gxc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-gxc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-gxc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-gxc').classList.add('up-change');
            }
        });

        socket.on('infoIOTX', payload => {
            iotx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-iotx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-iotx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-iotx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-iotx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-iotx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-iotx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-iotx').classList.add('up-change');
            }
        });

        socket.on('infoNULS', payload => {
            nuls.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nuls">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nuls').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nuls').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nuls').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nuls').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nuls').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nuls').classList.add('up-change');
            }
        });

        socket.on('infoCVC', payload => {
            cvc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-cvc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-cvc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-cvc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-cvc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-cvc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-cvc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-cvc').classList.add('up-change');
            }
        });

        socket.on('infoQLC', payload => {
            qlc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-qlc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-qlc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-qlc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-qlc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-qlc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-qlc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-qlc').classList.add('up-change');
            }
        });

        socket.on('infoSTRAT', payload => {
            strat.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-strat">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-strat').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-strat').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-strat').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-strat').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-strat').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-strat').classList.add('up-change');
            }
        });

        socket.on('infoVIBE', payload => {
            vibe.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-vibe">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-vibe').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-vibe').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-vibe').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-vibe').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-vibe').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-vibe').classList.add('up-change');
            }
        });

        socket.on('infoDOGE', payload => {
            doge.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-doge">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-doge').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-doge').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-doge').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-doge').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-doge').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-doge').classList.add('up-change');
            }
        });

        socket.on('infoPPT', payload => {
            ppt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ppt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ppt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ppt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ppt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ppt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ppt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ppt').classList.add('up-change');
            }
        });

        socket.on('infoEVX', payload => {
            evx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-evx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-evx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-evx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-evx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-evx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-evx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-evx').classList.add('up-change');
            }
        });

        socket.on('infoLRC', payload => {
            lrc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-lrc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-lrc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-lrc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-lrc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-lrc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-lrc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-lrc').classList.add('up-change');
            }
        });

        socket.on('infoWAN', payload => {
            wan.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-wan">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-wan').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-wan').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-wan').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-wan').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-wan').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-wan').classList.add('up-change');
            }
        });

        socket.on('infoPOLY', payload => {
            poly.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-poly">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-poly').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-poly').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-poly').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-poly').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-poly').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-poly').classList.add('up-change');
            }
        });

        socket.on('infoPOA', payload => {
            poa.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-poa">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-poa').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-poa').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-poa').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-poa').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-poa').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-poa').classList.add('up-change');
            }
        });

        socket.on('infoSTEEM', payload => {
            steem.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-steem">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-steem').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-steem').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-steem').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-steem').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-steem').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-steem').classList.add('up-change');
            }
        });

        socket.on('infoDCR', payload => {
            dcr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dcr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dcr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dcr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dcr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dcr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dcr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dcr').classList.add('up-change');
            }
        });

        socket.on('infoXZC', payload => {
            xzc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-xzc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-xzc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-xzc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-xzc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-xzc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-xzc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-xzc').classList.add('up-change');
            }
        });

        socket.on('infoGO', payload => {
            go.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-go">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-go').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-go').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-go').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-go').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-go').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-go').classList.add('up-change');
            }
        });

        socket.on('infoONG', payload => {
            ong.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ong">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ong').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ong').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ong').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ong').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ong').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ong').classList.add('up-change');
            }
        });

        socket.on('infoFUEL', payload => {
            fuel.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-fuel">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-fuel').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-fuel').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-fuel').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-fuel').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-fuel').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-fuel').classList.add('up-change');
            }
        });

        socket.on('infoBRD', payload => {
            brd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-brd">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-brd').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-brd').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-brd').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-brd').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-brd').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-brd').classList.add('up-change');
            }
        });

        socket.on('infoBCPT', payload => {
            bcpt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bcpt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bcpt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bcpt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bcpt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bcpt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bcpt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bcpt').classList.add('up-change');
            }
        });

        socket.on('infoWABI', payload => {
            wabi.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-wabi">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-wabi').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-wabi').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-wabi').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-wabi').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-wabi').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-wabi').classList.add('up-change');
            }
        });

        socket.on('infoYOYO', payload => {
            yoyo.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-yoyo">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-yoyo').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-yoyo').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-yoyo').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-yoyo').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-yoyo').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-yoyo').classList.add('up-change');
            }
        });

        socket.on('infoREP', payload => {
            rep.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-rep">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-rep').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-rep').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-rep').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-rep').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-rep').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-rep').classList.add('up-change');
            }
        });

        socket.on('infoNAS', payload => {
            nas.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nas">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nas').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nas').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nas').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nas').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nas').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nas').classList.add('up-change');
            }
        });

        socket.on('infoPOWR', payload => {
            powr.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-powr">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-powr').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-powr').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-powr').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-powr').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-powr').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-powr').classList.add('up-change');
            }
        });

        socket.on('infoQSP', payload => {
            qsp.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-qsp">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-qsp').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-qsp').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-qsp').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-qsp').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-qsp').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-qsp').classList.add('up-change');
            }
        });

        socket.on('infoGNT', payload => {
            gnt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-gnt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-gnt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-gnt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-gnt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-gnt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-gnt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-gnt').classList.add('up-change');
            }
        });

        // socket.on('infoNAV', payload => {
        //     nav.innerHTML = `
        //     <td class="btc-name">${payload.name}</td>
        //     <td class="btc-last-price">${payload.averagePrice}</td>
        //     <td class="btc-24-change">${payload.percentChange}</td>
        //     <td class="btc-24-change-high">${payload.high}</td>
        //     <td class="24-change-low">${payload.low}</td>
        //     <td class="btc-market-cap"></td>
        //     <td class="btc-24-volume">${payload.volume}</td> `;
        // });

        socket.on('infoGAS', payload => {
            gas.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-gas">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-gas').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-gas').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-gas').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-gas').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-gas').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-gas').classList.add('up-change');
            }
        });

        socket.on('infoBLZ', payload => {
            blz.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-blz">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-blz').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-blz').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-blz').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-blz').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-blz').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-blz').classList.add('up-change');
            }
        });

        socket.on('infoLUN', payload => {
            lun.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-lun">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-lun').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-lun').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-lun').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-lun').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-lun').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-lun').classList.add('up-change');
            }
        });

        socket.on('infoENG', payload => {
            eng.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-eng">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-eng').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-eng').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-eng').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-eng').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-eng').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-eng').classList.add('up-change');
            }
        });

        socket.on('infoDNT', payload => {
            dnt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dnt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dnt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dnt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dnt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dnt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dnt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dnt').classList.add('up-change');
            }
        });

        socket.on('infoSNM', payload => {
            snm.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-snm">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-snm').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-snm').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-snm').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-snm').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-snm').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-snm').classList.add('up-change');
            }
        });

        socket.on('infoSTORM', payload => {
            storm.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-storm">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-storm').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-storm').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-storm').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-storm').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-storm').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-storm').classList.add('up-change');
            }
        });

        socket.on('infoWRP', payload => {
            wrp.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-wrp">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-wrp').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-wrp').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-wrp').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-wrp').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-wrp').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-wrp').classList.add('up-change');
            }
        });

        socket.on('infoNEBL', payload => {
            nebl.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nebl">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nebl').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nebl').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nebl').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nebl').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nebl').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nebl').classList.add('up-change');
            }
        });

        socket.on('infoSYS', payload => {
            sys.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-sys">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-sys').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-sys').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-sys').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-sys').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-sys').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-sys').classList.add('up-change');
            }
        });

        socket.on('infoPIVX', payload => {
            pivx.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-pivx">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-pivx').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-pivx').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-pivx').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-pivx').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-pivx').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-pivx').classList.add('up-change');
            }
        });

        socket.on('infoRDN', payload => {
            rdn.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-rdn">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-rdn').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-rdn').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-rdn').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-rdn').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-rdn').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-rdn').classList.add('up-change');
            }
        });

        socket.on('infoBTS', payload => {
            bts.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bts">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bts').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bts').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bts').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bts').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bts').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bts').classList.add('up-change');
            }
        });

        socket.on('infoINS', payload => {
            ins.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ins">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ins').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ins').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ins').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ins').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ins').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ins').classList.add('up-change');
            }
        });

        socket.on('infoAPPC', payload => {
            appc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-appc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-appc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-appc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-appc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-appc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-appc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-appc').classList.add('up-change');
            }
        });

        socket.on('infoZEN', payload => {
            zen.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-zen">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-zen').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-zen').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-zen').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-zen').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-zen').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-zen').classList.add('up-change');
            }
        });

        socket.on('infoBCD', payload => {
            bcd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bcd">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bcd').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bcd').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bcd').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bcd').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bcd').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bcd').classList.add('up-change');
            }
        });

        socket.on('infoREQ', payload => {
            req.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-req">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-req').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-req').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-req').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-req').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-req').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-req').classList.add('up-change');
            }
        });

        socket.on('infoRCN', payload => {
            rcn.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-rcn">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-rcn').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-rcn').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-rcn').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-rcn').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-rcn').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-rcn').classList.add('up-change');
            }
        });

        socket.on('infoNCASH', payload => {
            ncash.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-ncash">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-ncash').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-ncash').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-ncash').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-ncash').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-ncash').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-ncash').classList.add('up-change');
            }
        });

        socket.on('infoNXS', payload => {
            nxs.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-nxs">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-nxs').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-nxs').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-nxs').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-nxs').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-nxs').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-nxs').classList.add('up-change');
            }
        });

        socket.on('infoDATA', payload => {
            data.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-data">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-data').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-data').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-data').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-data').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-data').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-data').classList.add('up-change');
            }
        });

        socket.on('infoDGD', payload => {
            dgd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-dgd">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-dgd').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-dgd').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-dgd').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-dgd').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-dgd').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-dgd').classList.add('up-change');
            }
        });

        socket.on('infoSC', payload => {
            sc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-sc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-sc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-sc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-sc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-sc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-sc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-sc').classList.add('up-change');
            }
        });

        socket.on('infoKEY', payload => {
            key.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-key">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-key').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-key').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-key').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-key').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-key').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-key').classList.add('up-change');
            }
        });

        socket.on('infoFUN', payload => {
            fun.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-fun">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-fun').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-fun').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-fun').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-fun').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-fun').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-fun').classList.add('up-change');
            }
        });

        socket.on('infoVIA', payload => {
            via.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-via">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-via').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-via').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-via').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-via').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-via').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-via').classList.add('up-change');
            }
        });

        socket.on('infoRLC', payload => {
            rlc.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-rlc">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-rlc').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-rlc').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-rlc').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-rlc').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-rlc').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-rlc').classList.add('up-change');
            }
        });

        socket.on('infoTNB', payload => {
            tnb.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-tnb">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-tnb').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-tnb').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-tnb').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-tnb').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-tnb').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-tnb').classList.add('up-change');
            }
        });

        socket.on('infoCND', payload => {
            cnd.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-cdn">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-cdn').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-cdn').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-cdn').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-cdn').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-cdn').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-cdn').classList.add('up-change');
            }
        });

        socket.on('infoLEND', payload => {
            lend.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-lend">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-lend').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-lend').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-lend').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-lend').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-lend').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-lend').classList.add('up-change');
            }
        });

        socket.on('infoEDO', payload => {
            edo.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-edo">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-edo').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-edo').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-edo').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-edo').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-edo').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-edo').classList.add('up-change');
            }
        });

        socket.on('infoBNT', payload => {
            bnt.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-bnt">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-bnt').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-bnt').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-bnt').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-bnt').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-bnt').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-bnt').classList.add('up-change');
            }
        });

        socket.on('infoBTCB', payload => {
            btcb.innerHTML = `
            <td class="btc-name">${payload.name}</td>
            <td class="btc-last-price">${payload.averagePrice}</td>
            <td class="btc-24-change-btcb">${payload.percentChange}%</td>
            <td class="btc-24-change-high">${payload.high}</td>
            <td class="24-change-low">${payload.low}</td>
            <td class="btc-market-cap"></td>
            <td class="btc-24-volume">${payload.volume}</td> `;
            if(payload.percentChange < 0) {
                if(document.querySelector('.btc-24-change-btcb').classList.contains('up-change')) {
                    document.querySelector('.btc-24-change-btcb').classList.remove('up-change')
                }
                document.querySelector('.btc-24-change-btcb').classList.add('down-change');
                
            } else {
                if(document.querySelector('.btc-24-change-btcb').classList.contains('down-change')) {
                    document.querySelector('.btc-24-change-btcb').classList.remove('down-change')
                }
                document.querySelector('.btc-24-change-btcb').classList.add('up-change');
            }
        });

        
    }

}
