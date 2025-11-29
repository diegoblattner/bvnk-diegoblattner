import type { PayInQuote } from "@/types";

export const pendingQuote: PayInQuote = {
	uuid: "019acb81-6de9-79f3-8f24-74b92018b672",
	merchantDisplayName: "Business Account",
	merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
	dateCreated: 1764350849000,
	expiryDate: 1764350909000,
	quoteExpiryDate: null,
	acceptanceExpiryDate: null,
	quoteStatus: "TEMPLATE",
	reference: "test_reference_in_1L4gOL",
	type: "IN",
	subType: "merchantPayIn",
	status: "PENDING",
	displayCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	walletCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	paidCurrency: {
		currency: null,
		amount: 0,
		actual: 0,
	},
	feeCurrency: {
		currency: "ZAR",
		amount: 0,
		actual: 0,
	},
	networkFeeCurrency: {
		currency: null,
		amount: 0,
		actual: 0,
	},
	displayRate: null,
	exchangeRate: null,
	address: null,
	returnUrl: "",
	redirectUrl:
		"https://pay.sandbox.bvnk.com/payin/019acb81-6de9-79f3-8f24-74b92018b672",
	transactions: [],
	refund: null,
	refunds: [],
	currencyOptions: [
		{
			code: "EURC",
			protocols: ["BASE"],
		},
		{
			code: "DOGE",
			protocols: ["DOGE"],
		},
		{
			code: "USDT",
			protocols: ["SOL", "POLYGON", "TRC20", "ERC20", "BEP20"],
		},
		{
			code: "POL",
			protocols: ["POLYGON"],
		},
		{
			code: "PYUSD",
			protocols: ["ERC20"],
		},
		{
			code: "SOL",
			protocols: ["SOL"],
		},
		{
			code: "BTC",
			protocols: ["BTC"],
		},
		{
			code: "XRP",
			protocols: ["XRP"],
		},
		{
			code: "BNB",
			protocols: ["BNB"],
		},
		{
			code: "TRX",
			protocols: ["TRX"],
		},
		{
			code: "ETH",
			protocols: ["ETH"],
		},
		{
			code: "USDC",
			protocols: ["SOL", "POLYGON", "ERC20", "BEP20", "ARBITRUM", "BASE"],
		},
		{
			code: "LTC",
			protocols: ["LTC"],
		},
		{
			code: "ADA",
			protocols: ["ADA"],
		},
		{
			code: "FDUSD",
			protocols: ["ERC20", "BEP20"],
		},
	],
	flow: "DEFAULT",
	twoStep: false,
	pegged: false,
	customerId: "123",
	networkFeeBilledTo: "MERCHANT",
	processingFeeBilledTo: "MERCHANT",
	networkFeeRates: [],
	walletId: "acc:23072827499842:8OyLj:0",
};

export const expiredQuote: PayInQuote = {
	uuid: "019acb81-6de9-79f3-8f24-74b92018b672",
	merchantDisplayName: "Business Account",
	merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
	dateCreated: 1764350849000,
	expiryDate: 1764351000000,
	quoteExpiryDate: 1764350909000,
	acceptanceExpiryDate: 1764351014000,
	quoteStatus: "PENDING",
	reference: "test_reference_in_1L4gOL",
	type: "IN",
	subType: "merchantPayIn",
	status: "EXPIRED",
	displayCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	walletCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	paidCurrency: {
		currency: "BTC",
		amount: 0.00010057,
		actual: 0,
	},
	feeCurrency: {
		currency: "ZAR",
		amount: 0,
		actual: 0,
	},
	networkFeeCurrency: {
		currency: null,
		amount: 0,
		actual: 0,
	},
	displayRate: {
		base: "BTC",
		counter: "ZAR",
		rate: 1988664.61171323,
	},
	exchangeRate: {
		base: "BTC",
		counter: "ZAR",
		rate: 1988685.0692064,
	},
	address: null,
	returnUrl: "",
	redirectUrl:
		"https://pay.sandbox.bvnk.com/payin/019acb81-6de9-79f3-8f24-74b92018b672",
	transactions: [],
	refund: null,
	refunds: [],
	currencyOptions: [
		{
			code: "EURC",
			protocols: ["BASE"],
		},
		{
			code: "DOGE",
			protocols: ["DOGE"],
		},
		{
			code: "USDT",
			protocols: ["SOL", "POLYGON", "TRC20", "ERC20", "BEP20"],
		},
		{
			code: "POL",
			protocols: ["POLYGON"],
		},
		{
			code: "PYUSD",
			protocols: ["ERC20"],
		},
		{
			code: "SOL",
			protocols: ["SOL"],
		},
		{
			code: "BTC",
			protocols: ["BTC"],
		},
		{
			code: "XRP",
			protocols: ["XRP"],
		},
		{
			code: "BNB",
			protocols: ["BNB"],
		},
		{
			code: "TRX",
			protocols: ["TRX"],
		},
		{
			code: "ETH",
			protocols: ["ETH"],
		},
		{
			code: "USDC",
			protocols: ["SOL", "POLYGON", "ERC20", "BEP20", "ARBITRUM", "BASE"],
		},
		{
			code: "LTC",
			protocols: ["LTC"],
		},
		{
			code: "ADA",
			protocols: ["ADA"],
		},
		{
			code: "FDUSD",
			protocols: ["ERC20", "BEP20"],
		},
	],
	flow: "DEFAULT",
	twoStep: false,
	pegged: false,
	customerId: "123",
	networkFeeBilledTo: "MERCHANT",
	processingFeeBilledTo: "MERCHANT",
	networkFeeRates: [],
	walletId: "acc:23072827499842:8OyLj:0",
};

export const acceptedQuote: PayInQuote = {
	uuid: "019acb87-27e1-7f11-97f6-dbb5dd1a1ea6",
	merchantDisplayName: "Business Account",
	merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
	dateCreated: 1764351224000,
	expiryDate: 1764437624000,
	quoteExpiryDate: 1764354851000,
	acceptanceExpiryDate: 1764351281000,
	quoteStatus: "ACCEPTED",
	reference: "test_reference_in_6m1f4k",
	type: "IN",
	subType: "merchantPayIn",
	status: "PENDING",
	displayCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	walletCurrency: {
		currency: "ZAR",
		amount: 200,
		actual: 0,
	},
	paidCurrency: {
		currency: "LTC",
		amount: 0.13904674,
		actual: 0,
	},
	feeCurrency: {
		currency: "ZAR",
		amount: 2,
		actual: 0,
	},
	networkFeeCurrency: {
		currency: null,
		amount: 0,
		actual: 0,
	},
	displayRate: {
		base: "LTC",
		counter: "ZAR",
		rate: 1438.365257610498,
	},
	exchangeRate: {
		base: "LTC",
		counter: "ZAR",
		rate: 1438.365279252764,
	},
	address: {
		address: "tltc1q4jksyy5qjrk7m82d96mr9sv5vqcwwx78slf6pl",
		tag: null,
		protocol: "LTC",
		network: "LITECOIN",
		uri: "litecoin:tltc1q4jksyy5qjrk7m82d96mr9sv5vqcwwx78slf6pl?amount=0.13904674",
		alternatives: [],
	},
	returnUrl: "",
	redirectUrl:
		"https://pay.sandbox.bvnk.com/payin/019acb87-27e1-7f11-97f6-dbb5dd1a1ea6",
	transactions: [],
	refund: null,
	refunds: [],
	currencyOptions: [
		{
			code: "EURC",
			protocols: ["BASE"],
		},
		{
			code: "DOGE",
			protocols: ["DOGE"],
		},
		{
			code: "USDT",
			protocols: ["SOL", "POLYGON", "TRC20", "ERC20", "BEP20"],
		},
		{
			code: "POL",
			protocols: ["POLYGON"],
		},
		{
			code: "PYUSD",
			protocols: ["ERC20"],
		},
		{
			code: "SOL",
			protocols: ["SOL"],
		},
		{
			code: "BTC",
			protocols: ["BTC"],
		},
		{
			code: "XRP",
			protocols: ["XRP"],
		},
		{
			code: "BNB",
			protocols: ["BNB"],
		},
		{
			code: "TRX",
			protocols: ["TRX"],
		},
		{
			code: "ETH",
			protocols: ["ETH"],
		},
		{
			code: "USDC",
			protocols: ["SOL", "POLYGON", "ERC20", "BEP20", "ARBITRUM", "BASE"],
		},
		{
			code: "LTC",
			protocols: ["LTC"],
		},
		{
			code: "ADA",
			protocols: ["ADA"],
		},
		{
			code: "FDUSD",
			protocols: ["ERC20", "BEP20"],
		},
	],
	flow: "DEFAULT",
	twoStep: false,
	pegged: false,
	customerId: "123",
	networkFeeBilledTo: "MERCHANT",
	processingFeeBilledTo: "MERCHANT",
	networkFeeRates: [],
	walletId: "acc:23072827499842:8OyLj:0",
};
