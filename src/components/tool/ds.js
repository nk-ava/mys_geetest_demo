import md5 from "md5"

export function getHeaders(query = '', body = '') {
	return {
		'x-rpc-app_version': '2.40.1',
		'x-rpc-client_type': 5,
		'x-rpc-device_fp': '38d7edaad494f',
		DS: getDs(query, body)
	}
}

function getDs(q = '', b = '') {
	let n = 'xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs'
	let t = Math.round(new Date().getTime() / 1000)
	let r = Math.floor(Math.random() * 900000 + 100000)
	let DS = md5(`salt=${n}&t=${t}&r=${r}&b=${b}&q=${q}`)
	return `${t},${r},${DS}`
}