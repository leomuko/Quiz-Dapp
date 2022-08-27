// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v29, from: v81 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v82), {
    at: './index.rsh:30:58:application',
    fs: ['at ./index.rsh:29:14:application call to [unknown function] (defined at: ./index.rsh:29:18:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v81, v82],
    evt_cnt: 0,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [],
    pay: [v82, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v92, time: v91, didSend: v39, from: v90 } = txn2;
      
      const v94 = stdlib.safeAdd(v82, v82);
      sim_r.txns.push({
        amt: v82,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v39, from: v90 } = txn2;
  const v94 = stdlib.safeAdd(v82, v82);
  ;
  const v97 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:38:47:application',
    fs: ['at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:18:function exp)'],
    msg: 'getResult',
    who: 'Attacher'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v81, v82, v90, v94, v97],
    evt_cnt: 1,
    funcNum: 2,
    lct: v91,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v99], secs: v101, time: v100, didSend: v49, from: v98 } = txn3;
      
      ;
      const v103 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:44:10:decimal', stdlib.UInt_max, '2'), v82);
      const v104 = stdlib.ge(v99, stdlib.checkedBigNumberify('./index.rsh:44:34:decimal', stdlib.UInt_max, '70'));
      const v105 = v104 ? v90 : v81;
      const v109 = stdlib.safeSub(v94, v103);
      sim_r.txns.push({
        kind: 'from',
        to: v105,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v81,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v99], secs: v101, time: v100, didSend: v49, from: v98 } = txn3;
  ;
  const v102 = stdlib.addressEq(v90, v98);
  stdlib.assert(v102, {
    at: './index.rsh:41:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
    });
  const v103 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:44:10:decimal', stdlib.UInt_max, '2'), v82);
  const v104 = stdlib.ge(v99, stdlib.checkedBigNumberify('./index.rsh:44:34:decimal', stdlib.UInt_max, '70'));
  const v105 = v104 ? v90 : v81;
  const v109 = stdlib.safeSub(v94, v103);
  ;
  stdlib.protect(ctc2, await interact.seeOutCome(v99), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:5:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)'],
    msg: 'seeOutCome',
    who: 'Attacher'
    });
  
  ;
  return;
  
  
  
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v78 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v78],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v78, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v29, from: v81 } = txn1;
      
      sim_r.txns.push({
        amt: v82,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v29, from: v81 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v39, from: v90 } = txn2;
  const v94 = stdlib.safeAdd(v82, v82);
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v99], secs: v101, time: v100, didSend: v49, from: v98 } = txn3;
  ;
  const v102 = stdlib.addressEq(v90, v98);
  stdlib.assert(v102, {
    at: './index.rsh:41:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v103 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:44:10:decimal', stdlib.UInt_max, '2'), v82);
  const v104 = stdlib.ge(v99, stdlib.checkedBigNumberify('./index.rsh:44:34:decimal', stdlib.UInt_max, '70'));
  const v105 = v104 ? v90 : v81;
  const v109 = stdlib.safeSub(v94, v103);
  ;
  stdlib.protect(ctc1, await interact.seeOutCome(v99), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:5:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)'],
    msg: 'seeOutCome',
    who: 'Deployer'
    });
  
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAY4pZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQADKSSQMQABzJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/VyggNf5JNQUXNf2ABJdO9xc0/RZQsDT+MQASRCQ0AyVbCzX8sSKyATT8sggjshA0/zT+NP2BRg9NsgezsSKyATQDgUhbNPwJsggjshA0/7IHs0IAl0gjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+gASai5F0sDT+SQg1/TT+iADSNP80/hZQMQBQNP0WUChLAVcAUGdIJDUBMgY1AkIAYkiBoI0GiACrIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAIUxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd938038062000cd98339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610a2b80620002ae6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a1591461007857806345f703961461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461077c565b6100d6565b61005261009936600461077c565b6102a9565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86104c6565b60405161006f92919061079f565b6100e66001600054146009610563565b610100813515806100f957506001548235145b600a610563565b600080805560028054610112906107fc565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906107fc565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061084d565b90506101bb6040518060200160405280600081525090565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101ec9291906108b2565b60405180910390a16020820151610203908061058d565b815260208201516102179034146008610563565b60408051608080820183526000808352602080840182815284860183815260608087018581528a516001600160a01b03908116808a528c87015186523385528b518352600297889055436001558a51808801919091529451858b015292519092169083015251818501528551808203909401845260a001909452815192936102a2939192019061068e565b5050505050565b6102b9600260005414600d610563565b6102d3813515806102cc57506001548235145b600e610563565b6000808055600280546102e5906107fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610311906107fc565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b505050505080602001905181019061037691906108ef565b905061038e6040518060200160405280600081525090565b6040805133815284356020808301919091528501358183015290517f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b89181900360600190a16103df3415600b610563565b60408201516103fa906001600160a01b03163314600c610563565b610409600283602001516105e0565b815260466020840135101561041f578151610425565b81604001515b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561045e573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6104828460600151846000015161063f565b6040518115909202916000818181858888f193505050501580156104aa573d6000803e3d6000fd5b50600080805560018190556104c190600290610712565b505050565b6000606060005460028080546104db906107fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610507906107fc565b80156105545780601f1061052957610100808354040283529160200191610554565b820191906000526020600020905b81548152906001019060200180831161053757829003601f168201915b50505050509050915091509091565b816105895760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261059a8382610985565b91508110156105da5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610580565b92915050565b6000811580610604575082826105f6818361099d565b925061060290836109bc565b145b6105da5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610580565b60008261064c83826109de565b91508111156105da5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610580565b82805461069a906107fc565b90600052602060002090601f0160209004810192826106bc5760008555610702565b82601f106106d557805160ff1916838001178555610702565b82800160010185558215610702579182015b828111156107025782518255916020019190600101906106e7565b5061070e92915061074f565b5090565b50805461071e906107fc565b6000825580601f1061072e575050565b601f01602090049060005260206000209081019061074c919061074f565b50565b5b8082111561070e5760008155600101610750565b60006040828403121561077657600080fd5b50919050565b60006040828403121561078e57600080fd5b6107988383610764565b9392505050565b82815260006020604081840152835180604085015260005b818110156107d3578581018301518582016060015282016107b7565b818111156107e5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061081057607f821691505b6020821081141561077657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461084857600080fd5b919050565b60006040828403121561085f57600080fd5b6040516040810181811067ffffffffffffffff8211171561089057634e487b7160e01b600052604160045260246000fd5b60405261089c83610831565b8152602083015160208201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146108e057600080fd5b80604085015250509392505050565b60006080828403121561090157600080fd5b6040516080810181811067ffffffffffffffff8211171561093257634e487b7160e01b600052604160045260246000fd5b60405261093e83610831565b81526020830151602082015261095660408401610831565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156109985761099861096f565b500190565b60008160001904831182151516156109b7576109b761096f565b500290565b6000826109d957634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156109f0576109f061096f565b50039056fea264697066735822122021fba6b20c4793c36056148a7908e4ee9f434680143a822877ec6c64b2178bff64736f6c634300080c0033`,
  BytecodeLen: 3289,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:35:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher": Attacher,
  "Deployer": Deployer
  };
export const _APIs = {
  };
