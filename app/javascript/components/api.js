const api = {
	deviseRegister: (listener) => call2('GET', "/users/sign_up", {}, listener),
	//New objects
	new: (controller, listener) => call("GET", `${controller}/new`, {}, listener),
	create: (object, images = {}, authenticity_token, controller, listener) => {
		const params = { data: JSON.stringify(object), images, authenticity_token }
		const c = object.id ? { url: `${controller}/${object.id}`, method: "PUT" } : { url: controller, method: "POST" }
		call(c.method, c.url, params, listener)
	},
	verifyAvailable: (data, listener) => call("GET",'/stock', data, listener),
	findText: (id, arr) => arr.find(text => text.id === 1)

}

const setParams = function (data, get) {
	var formData = get ? {} : new FormData();
	var checkNested = function (fD, key, value) {
		const insertField = (k, v) => get ? fD[k] = v : fD.append(k, v)

		if (typeof value != "object") return insertField(key, value)
		if (Array.isArray(value)) return insertField(key, value.join(","))
		if (key === "images" && !get) { for (let k in value) fD.append(k, value[k], value[k].name); return }
		for (var obj in value) checkNested(fD, `${key}[${obj}]`, value[obj]);
	}
	for (var obj in data) checkNested(formData, obj, data[obj])
	return formData;
}

const setDefaults = function (data = {}, defaults = {}) { for (var key in defaults) data[key] = defaults[key]; return data; }

const call2 = function (method, services, data, listener) {
	const formData = setParams(data, method === "GET")
	let url = window.location.origin
	console.log(method, services, formData)
	//Set Headers
	var myHeaders = new Headers();
	myHeaders.append("Accept", "text/html");
	var miInit = { method: method, headers: myHeaders, mode: 'cors', cache: 'default' };
	//Include formData in body if post or put
	if (formData && (method === "POST" || method === "PUT" || method === "DELETE")) {
		//console.log('miInit =>', miInit); 
		formData.append("noEmpty", "true") //avoid multipart errors
		miInit.body = formData;
	}
	//Call
	function middlewareListener(data) {
		if (listener != null && listener !== undefined) { listener(data) } else { console.log("Middleware data:", data) }
	}
	var built = new URL(url + services)
	if (method === "GET") Object.keys(formData).forEach(key => built.searchParams.append(key, formData[key]))

	fetch(built, miInit)
		.then(response => response.json()).then(function (data) { middlewareListener(data) });
}

const call = function (method, services, data, listener) {
	const formData = setParams(data, method === "GET")
	let url = window.location.origin
	console.log(method, services, formData)
	//Set Headers
	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	var miInit = { method: method, headers: myHeaders, mode: 'cors', cache: 'default' };
	//Include formData in body if post or put
	if (formData && (method === "POST" || method === "PUT" || method === "DELETE")) {
		//console.log('miInit =>', miInit); 
		formData.append("noEmpty", "true") //avoid multipart errors
		miInit.body = formData;
	}
	//Call
	function middlewareListener(data) {
		if (listener != null && listener !== undefined) { listener(data) } else { console.log("Middleware data:", data) }
	}
	var built = new URL(url + services)
	if (method === "GET") Object.keys(formData).forEach(key => built.searchParams.append(key, formData[key]))

	fetch(built, miInit)
		.then(response => response.json()).then(function (data) { middlewareListener(data) });
}


export default api;