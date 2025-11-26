import { createHmac } from "node:crypto";

// TODO retrive keys from .env file
const hawk_auth_id =
	"OPKgv0EPsYakvPG9542LXnvS4PwvP4eBl8QE1NS5gQPcWyJVkJxpk5w9zThCBmhl";
const hawk_auth_key =
	"VIpHztPTiYWNcy0ma6XdRiVTQaWoAQhDYbWI7byscsvQintVreoptyft0A9FIret";

export function getHawkAuthorization(url: string, method: string) {
	// Generate Hawk authorization header
	const timestamp = Math.floor(Date.now() / 1000);
	const nonce = Math.random().toString(36).substring(7);
	const parsedUrl = new URL(url);
	const path = parsedUrl.pathname + parsedUrl.search;
	const host = parsedUrl.host;
	const port =
		parsedUrl.port || (parsedUrl.protocol === "https:" ? "443" : "80");

	// Create normalized request string
	const normalized = `hawk.1.header\n${timestamp}\n${nonce}\n${method}\n${path}\n${host}\n${port}\n\n\n`;

	// Generate MAC
	const mac = createHmac("sha256", hawk_auth_key)
		.update(normalized)
		.digest("base64");

	// Format Hawk header
	return `Hawk id="${hawk_auth_id}", ts="${timestamp}", nonce="${nonce}", mac="${mac}"`;
}
