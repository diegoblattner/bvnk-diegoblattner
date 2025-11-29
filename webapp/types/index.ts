export type ApiResult<T, E = ErrorItem> = {
	data?: T;
	error?: E;
};

export type ErrorItem = {
	requestId: string | null;
	code?: "MER-PAY-2017" | (string & {});
	parameter?: string;
	message?: string;
	errorList?: ErrorItem[];
};

export type CurrencyAmount = {
	currency: string | null;
	amount: number;
	actual: number;
};

export type CurrencyOption = {
	code: string;
	protocols: string[];
};

export type PayInQuote = {
	uuid: string;
	merchantDisplayName: string;
	merchantId: string;
	dateCreated: number;
	expiryDate: number;
	quoteExpiryDate: number | null;
	acceptanceExpiryDate: number | null;
	quoteStatus: "PENDING" | "TEMPLATE" | "ACCEPTED";
	reference: string;
	type: string;
	subType: string;
	status: "PENDING" | "EXPIRED";

	displayCurrency: CurrencyAmount;
	walletCurrency: CurrencyAmount;
	paidCurrency: CurrencyAmount;
	feeCurrency: CurrencyAmount | null;
	networkFeeCurrency: CurrencyAmount | null;

	displayRate: {
		base: string;
		counter: string;
		rate: number;
	} | null;
	exchangeRate: {
		base: string;
		counter: string;
		rate: number;
	} | null;
	address: {
		address: string;
		tag: string | null;
		protocol: string;
		network: string;
		uri: string;
		alternatives: string[];
	} | null;
	returnUrl: string;
	redirectUrl: string;

	transactions: unknown[]; // replace with a specific type if you have it
	refund: unknown; // replace if you have a defined type
	refunds: unknown[]; // replace if you have a defined type

	currencyOptions: CurrencyOption[];

	flow: string;
	twoStep: boolean;
	pegged: boolean;
	customerId: string;
	networkFeeBilledTo?: string;
	processingFeeBilledTo?: string;

	networkFeeRates?: unknown[]; // replace if you have a defined type
	walletId: string;
	metadata?: Record<string, unknown>;
};
