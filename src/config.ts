let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: [
		"https://01.cache.myqwertycoin.com/",
		"https://02.cache.myqwertycoin.com/",
		"https://03.cache.myqwertycoin.com/"
	],
	nodeList: [
		"http://node-00.qwertycoin.org:8197/",
		"http://node-01.qwertycoin.org:8197/",
		"http://node-02.qwertycoin.org:8197/",
		"http://node-03.qwertycoin.org:8197/",
		"http://node-04.qwertycoin.org:8197/",
		"http://node-05.qwertycoin.org:8197/",
		"http://148.251.115.233:8197/"
	],
	electionApiUrl: "https://voting.qwertycoin.org/api",
	websiteApiUrl: "https://www.qwertycoin.org/wp-json",
	mainnetExplorerUrl: "https://explorer.qwertycoin.org/",
	mainnetExplorerUrlHash: "https://explorer.qwertycoin.org/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.qwertycoin.org/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "https://testnet.qwertycoin.org/",
	testnetExplorerUrlHash: "https://testnet.qwertycoin.org/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://testnet.qwertycoin.org/?hash={ID}#blockchain_block",
	testnet: false,
	coinUnitPlaces: 8,
	coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x14820c,
	integratedAddressPrefix: 0x148201,
	addressPrefixTestnet: 0x14820c,
	integratedAddressPrefixTestnet: 0x148201,
	subAddressPrefix: 0x148202,
	subAddressPrefixTestnet: 0x148202,
	coinFee: new JSBigInt('100000000'),
	feePerKB: new JSBigInt('100000000'),
	dustThreshold: new JSBigInt('100000'), //used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'QWC',
	openAliasPrefix: "qwc",
	coinName: 'Qwertycoin',
	coinUriPrefix: 'qwertycoin:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};
