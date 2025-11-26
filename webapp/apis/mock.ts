import type { PayInQuote } from "@/types";

function getReference() {
	return `test_reference_in_${Math.random().toString(36).substring(7)}`;
}

export function getBodyForCreate() {
	return JSON.stringify({
		merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
		type: "IN",
		amount: 200,
		currency: "ZAR",
		reference: getReference(),
		customerId: "123",
		complianceDetails: {
			requesterIpAddress: "127.0.0.1",
			partyDetails: [
				{
					type: "ORIGINATOR",
					entityType: "INDIVIDUAL",
					relationshipType: "SELF_OWNED",
					firstName: "firstName",
					middleName: "middleName",
					lastName: "lastName",
					dateOfBirth: "1983-03-28",
				},
			],
		},
	});
}

export function getMock(): PayInQuote {
	const mockResponse: PayInQuote = {
		metadata: {},
		uuid: "019ac001-eecd-73cf-af4d-413b04e1bfe4",
		merchantDisplayName: "Business Account",
		merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
		dateCreated: Date.now(),
		expiryDate: Date.now() + 60000,
		quoteExpiryDate: null,
		acceptanceExpiryDate: null,
		quoteStatus: "TEMPLATE",
		reference: "test_reference_in_0u68Rz",
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
		feeCurrency: null,
		networkFeeCurrency: null,
		displayRate: null,
		exchangeRate: null,
		address: null,
		returnUrl: "",
		redirectUrl:
			"https://pay.sandbox.bvnk.com/payin/019ac001-eecd-73cf-af4d-413b04e1bfe4",
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
				protocols: ["SOL", "POLYGON", "ERC20", "BEP20", "BASE"],
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
		walletId: "acc:23072827499842:8OyLj:0",
	};
	return mockResponse;
}
