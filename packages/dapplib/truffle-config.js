require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind home grace hill forget seed'; 
let testAccounts = [
"0xb0351200a952e5772207dd8f44876f00d68a9bd0a67d2fc5d18d61b1501999d6",
"0xabdf175a25e4e497c6e29690542ef3261fcb32d04ed94aa0043f240fbb466fce",
"0x9e53637e8345a516effe028da7a5caa8a0887926b3e3c2ed10f2debfe9a8f3fc",
"0xd53fa341e65ff6510d703f2b7debcf2623a50012b2e4d1fccf382d9fa558c3e1",
"0xaf3ffcd588d4b2b321cfa4b0e6350193d4d4fb1716c7e81f5c27ff5a1d71eeeb",
"0x3580d2974ef5f907b1dea186c709babdd31af7028b837332c35e45d8a04ae193",
"0xcf1a536c06ec680153449b7fdba53bc12f58c987aaf5111f157dfeeca41783a8",
"0x5711c53742e85c0c4bde4b9f33eb888eb7df75e402d125b6b299e374dc46e6e0",
"0x0a592171147497711b4f3496c4dfefd3c7b9028d1a10755cd619f2123e3addf2",
"0x2731dbdd35e814f7cd92a669cdd2aa6ef5bd6b91707fdc8f17bef1bc915e5257"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

