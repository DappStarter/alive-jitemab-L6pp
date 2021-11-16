require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stove cruise spice pumpkin gesture bag army giggle'; 
let testAccounts = [
"0xd9d284a1dc5aabe0774e2f0e300bc1cb2c151364dd4e0623f9664ecfac178aa1",
"0x17acda56fa7b6ed45f5d710ce32d86e0e7385169911280f8afa86dda88ea2f98",
"0x4efe7d0db3c8f1e4e09e9418cece10ba15c9ec65ab76067f677f23bf2326dbcc",
"0x63e7bea4819edf1863e225228601b7ce7579dc5ca782bf5c166f26250a4c425b",
"0xd824b56b921a873fbe9e36d8037d77d1672539433db80094502d59dc1adfa97c",
"0x1070010606079523029976371f91831262562adf01dbb8251f0438d092812c76",
"0xe7d8606e89e6abb08eeb5cf8c22e0e4fad5be8c2e9db432c4bb26daf7bbe78d8",
"0x1664801d79859edfa5bf9cccd732f4ab0ef8064e868ab7ee9dc5c641901023e7",
"0x6f4f30a92dcfccec4376429fa61ceb286c2f15f1c820fc2cca4186974ee0620e",
"0x2ed1cc18225cf424c09ad32529b930cd5644b75a5f05542f8b1b01f40fe056c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


