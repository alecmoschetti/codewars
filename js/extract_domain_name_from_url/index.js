export function domainName(url) {
	const www = "www.";
	const http = "http://";
	const https = "https://";
	if (url.includes(www)) {
		return url.split(".")[1];
	} else if (url.includes(https) || url.includes(http)) {
		return url.split("//")[1].split(".")[0];
	} else {
		return url.split(".")[0];
	}
}
