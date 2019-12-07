const Sequelize = require('sequelize');

const sequelize = new Sequelize('robinhoodclone', 'root', 'young', {
  host: 'localhost',
  dialect: 'mysql'
})

const Stock = sequelize.define('Stock', {
  stock_name: Sequelize.STRING,
  stock_symbol: Sequelize.STRING,
  owner: Sequelize.STRING,
  price: Sequelize.STRING
})

Stock.sync();

const stockData = [
  {"stock_name":"Spark Energy, Inc.","stock_symbol":"SPKE","owner":"blarrie0","price":"$886.00"},
  {"stock_name":"Harte-Hanks, Inc.","stock_symbol":"HHS","owner":"abanasik1","price":"$849.58"},
  {"stock_name":"Uranium Resources, Inc.","stock_symbol":"URRE","owner":"bbartaloni2","price":"$90.81"},
  {"stock_name":"BB&T Corporation","stock_symbol":"BBT^H","owner":"ksutherby3","price":"$162.99"},
  {"stock_name":"Simmons First National Corporation","stock_symbol":"SFNC","owner":"lbenallack4","price":"$941.14"},
  {"stock_name":"Cascadian Therapeutics, Inc.","stock_symbol":"CASC","owner":"efontin5","price":"$917.38"},
  {"stock_name":"Edwards Lifesciences Corporation","stock_symbol":"EW","owner":"vdabney6","price":"$769.85"},
  {"stock_name":"Social Reality, Inc.","stock_symbol":"SRAX","owner":"sgoldie7","price":"$67.58"},
  {"stock_name":"Ingredion Incorporated","stock_symbol":"INGR","owner":"rjoynson8","price":"$393.16"},
  {"stock_name":"Superior Industries International, Inc.","stock_symbol":"SUP","owner":"cburnett9","price":"$815.34"},
  {"stock_name":"First Bancorp, Inc (ME)","stock_symbol":"FNLC","owner":"wlassletta","price":"$153.89"},
  {"stock_name":"The Providence Service Corporation","stock_symbol":"PRSC","owner":"educkittb","price":"$903.95"},
  {"stock_name":"Vanguard Total International Bond ETF","stock_symbol":"BNDX","owner":"lweakleyc","price":"$7.60"},
  {"stock_name":"PowerShares S&P SmallCap Utilities Portfolio","stock_symbol":"PSCU","owner":"gmoxomd","price":"$616.82"},
  {"stock_name":"SL Green Realty Corporation","stock_symbol":"SLG","owner":"ctwinbornee","price":"$983.76"},
  {"stock_name":"XBiotech Inc.","stock_symbol":"XBIT","owner":"psteinhammerf","price":"$465.22"},
  {"stock_name":"ArcBest Corporation","stock_symbol":"ARCB","owner":"icorneckg","price":"$225.39"},
  {"stock_name":"Masonite International Corporation","stock_symbol":"DOOR","owner":"jpettmanh","price":"$824.12"},
  {"stock_name":"Pacific American Income Shares, Inc.","stock_symbol":"PAI","owner":"ladani","price":"$372.42"},
  {"stock_name":"Dominion Energy Midstream Partners, LP","stock_symbol":"DM","owner":"lhamperj","price":"$509.20"},
  {"stock_name":"Global X Health & Wellness Thematic ETF","stock_symbol":"BFIT","owner":"rslitek","price":"$445.05"},
  {"stock_name":"Landauer, Inc.","stock_symbol":"LDR","owner":"begglestonl","price":"$51.17"},
  {"stock_name":"WMIH Corp.","stock_symbol":"WMIH","owner":"cengelbrechtm","price":"$377.98"},
  {"stock_name":"Popular, Inc.","stock_symbol":"BPOPN","owner":"gneln","price":"$319.47"},
  {"stock_name":"CBAK Energy Technology, Inc.","stock_symbol":"CBAK","owner":"brilletto","price":"$472.53"},
  {"stock_name":"American Axle & Manufacturing Holdings, Inc.","stock_symbol":"AXL","owner":"lheughp","price":"$224.81"},
  {"stock_name":"CAE Inc","stock_symbol":"CAE","owner":"crehorekq","price":"$155.24"},
  {"stock_name":"Summit State Bank","stock_symbol":"SSBI","owner":"pwestr","price":"$28.58"},
  {"stock_name":"CVS Health Corporation","stock_symbol":"CVS","owner":"ksigerts","price":"$193.41"},
  {"stock_name":"Iconix Brand Group, Inc.","stock_symbol":"ICON","owner":"bscandredt","price":"$121.69"},
  {"stock_name":"Bank of America Corporation","stock_symbol":"BAC.WS.A","owner":"agianiellou","price":"$470.20"},
  {"stock_name":"ASV Holdings, Inc.","stock_symbol":"ASV","owner":"readmeadsv","price":"$187.68"},
  {"stock_name":"ENSCO plc","stock_symbol":"ESV","owner":"lguisew","price":"$462.94"},
  {"stock_name":"Ally Financial Inc.","stock_symbol":"ALLY^A","owner":"afalkinderx","price":"$954.85"},
  {"stock_name":"Redhill Biopharma Ltd.","stock_symbol":"RDHL","owner":"klittletony","price":"$37.08"},
  {"stock_name":"Mechel PAO","stock_symbol":"MTL^","owner":"hpellattz","price":"$830.04"},
  {"stock_name":"People's United Financial, Inc.","stock_symbol":"PBCTP","owner":"gstarcks10","price":"$491.08"},
  {"stock_name":"Charter Financial Corp.","stock_symbol":"CHFN","owner":"cfoskin11","price":"$170.23"},
  {"stock_name":"Flaherty & Crumrine Preferred Income Fund Incorporated","stock_symbol":"PFD","owner":"ktorry12","price":"$186.42"},
  {"stock_name":"New Relic, Inc.","stock_symbol":"NEWR","owner":"rmccurlye13","price":"$611.99"},
  {"stock_name":"The ExOne Company","stock_symbol":"XONE","owner":"adureden14","price":"$320.50"},
  {"stock_name":"Akoustis Technologies, Inc.","stock_symbol":"AKTS","owner":"fwatmore15","price":"$326.07"},
  {"stock_name":"Kelly Services, Inc.","stock_symbol":"KELYA","owner":"akisbey16","price":"$986.66"},
  {"stock_name":"Advanced Drainage Systems, Inc.","stock_symbol":"WMS","owner":"jrowatt17","price":"$94.96"},
  {"stock_name":"ProShares UltraPro Short QQQ","stock_symbol":"SQQQ","owner":"eflight18","price":"$990.27"},
  {"stock_name":"Farmland Partners Inc.","stock_symbol":"FPI","owner":"caloway19","price":"$900.50"},
  {"stock_name":"Zions Bancorporation","stock_symbol":"ZIONW","owner":"rgirkins1a","price":"$798.09"},
  {"stock_name":"RadiSys Corporation","stock_symbol":"RSYS","owner":"bmacparlan1b","price":"$967.88"},
  {"stock_name":"Taubman Centers, Inc.","stock_symbol":"TCO^J","owner":"mbockett1c","price":"$207.64"},
  {"stock_name":"Public Storage","stock_symbol":"PSA^T","owner":"aherkess1d","price":"$279.19"},
  {"stock_name":"National Energy Services Reunited Corp.","stock_symbol":"NESRW","owner":"mjager1e","price":"$612.03"},
  {"stock_name":"Brixmor Property Group Inc.","stock_symbol":"BRX","owner":"bamthor1f","price":"$215.94"},
  {"stock_name":"Key Tronic Corporation","stock_symbol":"KTCC","owner":"dcomsty1g","price":"$737.61"},
  {"stock_name":"Provident Financial Holdings, Inc.","stock_symbol":"PROV","owner":"tfluin1h","price":"$922.50"},
  {"stock_name":"TearLab Corporation","stock_symbol":"TEAR","owner":"nwride1i","price":"$107.98"},
  {"stock_name":"Nuveen Real Asset Income and Growth Fund","stock_symbol":"JRI","owner":"cstothart1j","price":"$553.93"},
  {"stock_name":"CIRCOR International, Inc.","stock_symbol":"CIR","owner":"mtilliards1k","price":"$854.03"},
  {"stock_name":"Apartment Investment and Management Company","stock_symbol":"AIV","owner":"pabrahim1l","price":"$497.04"},
  {"stock_name":"Rockwell Automation, Inc.","stock_symbol":"ROK","owner":"amillyard1m","price":"$528.40"},
  {"stock_name":"CBIZ, Inc.","stock_symbol":"CBZ","owner":"jsouthon1n","price":"$594.62"},
  {"stock_name":"AllianceBernstein Holding L.P.","stock_symbol":"AB","owner":"aveelers1o","price":"$183.03"},
  {"stock_name":"Ashford Hospitality Trust Inc","stock_symbol":"AHT^F","owner":"vrennicks1p","price":"$212.89"},
  {"stock_name":"Donnelley Financial Solutions, Inc.","stock_symbol":"DFIN","owner":"uscopes1q","price":"$481.97"},
  {"stock_name":"Oxford Lane Capital Corp.","stock_symbol":"OXLCO","owner":"gculross1r","price":"$163.70"},
  {"stock_name":"Voya Infrastructure, Industrials and Materials Fund","stock_symbol":"IDE","owner":"abriddock1s","price":"$879.05"},
  {"stock_name":"WAVE Life Sciences Ltd.","stock_symbol":"WVE","owner":"hneave1t","price":"$992.36"},
  {"stock_name":"Sun Life Financial Inc.","stock_symbol":"SLF","owner":"ccayet1u","price":"$431.58"},
  {"stock_name":"Navient Corporation","stock_symbol":"JSM","owner":"mwitcherley1v","price":"$167.66"},
  {"stock_name":"Nelnet, Inc.","stock_symbol":"NNI","owner":"lstrasse1w","price":"$678.72"},
  {"stock_name":"Cal-Maine Foods, Inc.","stock_symbol":"CALM","owner":"abradley1x","price":"$966.96"},
  {"stock_name":"SunTrust Banks, Inc.","stock_symbol":"STI^E","owner":"gsiemantel1y","price":"$175.41"},
  {"stock_name":"Stellus Capital Investment Corporation","stock_symbol":"SCM","owner":"ccansdale1z","price":"$979.52"},
  {"stock_name":"The Hain Celestial Group, Inc.","stock_symbol":"HAIN","owner":"smcnicol20","price":"$257.09"},
  {"stock_name":"Schneider National, Inc.","stock_symbol":"SNDR","owner":"bludye21","price":"$17.46"},
  {"stock_name":"Gemphire Therapeutics Inc.","stock_symbol":"GEMP","owner":"rdanilyak22","price":"$395.79"},
  {"stock_name":"Planet Payment, Inc.","stock_symbol":"PLPM","owner":"eryall23","price":"$227.30"},
  {"stock_name":"Alexandria Real Estate Equities, Inc.","stock_symbol":"ARE^D","owner":"rbenham24","price":"$956.95"},
  {"stock_name":"Merrill Lynch & Co., Inc.","stock_symbol":"MER^K","owner":"dmccrone25","price":"$477.11"},
  {"stock_name":"Nuveen New York Quality Municipal Income Fund","stock_symbol":"NAN","owner":"fsilcocks26","price":"$748.36"},
  {"stock_name":"Bridgeline Digital, Inc.","stock_symbol":"BLIN          ","owner":"dlievesley27","price":"$645.81"},
  {"stock_name":"Genie Energy Ltd.","stock_symbol":"GNE","owner":"cburtonshaw28","price":"$348.39"},
  {"stock_name":"MSB Financial Corp.","stock_symbol":"MSBF","owner":"einnis29","price":"$877.97"},
  {"stock_name":"Double Eagle Acquisition Corp.","stock_symbol":"EAGLU","owner":"bsemour2a","price":"$787.40"},
  {"stock_name":"Chuy's Holdings, Inc.","stock_symbol":"CHUY","owner":"cabbitt2b","price":"$392.20"},
  {"stock_name":"First Trust Nasdaq Semiconductor ETF","stock_symbol":"FTXL","owner":"tfindlow2c","price":"$685.32"},
  {"stock_name":"First Trust/Aberdeen Emerging Opportunity Fund","stock_symbol":"FEO","owner":"mshay2d","price":"$484.30"},
  {"stock_name":"Aflac Incorporated","stock_symbol":"AFSD","owner":"esculpher2e","price":"$90.54"},
  {"stock_name":"Atlantic Alliance Partnership Corp.","stock_symbol":"AAPC","owner":"cellesworth2f","price":"$176.01"},
  {"stock_name":"J.M. Smucker Company (The)","stock_symbol":"SJM","owner":"rmarcoolyn2g","price":"$769.47"},
  {"stock_name":"State Street Corporation","stock_symbol":"STT^E","owner":"flenton2h","price":"$476.11"},
  {"stock_name":"Voya Global Equity Dividend and Premium Opportunity Fund","stock_symbol":"IGD","owner":"jmartynov2i","price":"$118.88"},
  {"stock_name":"Abbott Laboratories","stock_symbol":"ABT","owner":"mleffek2j","price":"$474.00"},
  {"stock_name":"Nuveen Floating Rate Income Fund","stock_symbol":"JFR","owner":"bhegdonne2k","price":"$278.64"},
  {"stock_name":"Nuveen S&P 500 Dynamic Overwrite Fund","stock_symbol":"SPXX","owner":"agwinn2l","price":"$456.16"},
  {"stock_name":"Oak Valley Bancorp (CA)","stock_symbol":"OVLY","owner":"pmchirrie2m","price":"$592.20"},
  {"stock_name":"iShares MSCI All Country Asia ex Japan Index Fund","stock_symbol":"AAXJ","owner":"vfort2n","price":"$515.72"},
  {"stock_name":"Blackrock Municipal 2020 Term Trust","stock_symbol":"BKK","owner":"vlawden2o","price":"$498.50"},
  {"stock_name":"John Hancock Preferred Income Fund III","stock_symbol":"HPS","owner":"bmaddra2p","price":"$339.03"},
  {"stock_name":"AK Steel Holding Corporation","stock_symbol":"AKS","owner":"tfettiplace2q","price":"$156.92"},
  {"stock_name":"Heritage Commerce Corp","stock_symbol":"HTBK","owner":"bivashnikov2r","price":"$118.19"}
]

//this is the seed function
const seedData = (data) => {
  promiseArr = [];
  for (let i = 0; i < data.length; i++) {
    promiseArr.push(Stock.create(data[i]))
  }
  Promise.all(promiseArr)
  .then(()=> console.log('finished seeding db'))
  .catch(()=> console.log('err seeding db'))
}

seedData(stockData);
