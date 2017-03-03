var GAS = (function(GAS) {
    var scenarios = [
		{
			description: 'Warsaw',
			os: '*',
			browser: '*',
			require: 'none'
		}]; 
    GAS.scenarios = scenarios;
    return GAS;
})(GAS || {});

function gas_init(username, channel, sessionId, debug){	
	gas_debug(debug, 'GAS: gas_init Started');	
	window['GAS_User'] = {
							user: username,
							channel: channel,
							sessionId: sessionId
						};	
	getGasToolkitResponse(debug);
}

function getGasToolkitResponse(debug){
	try{
		var gas_options = {
			client: 'pgs',
			seed: 'efvfxVQ6EvLYz2C4sIJaWTuAyahCRoWmP2vtdcM5+fO2TH+SIszXKXSR8455YXixo+wKfayKhcm53psl/ryYiaI4/4PHEUBduhx8ruIco5SYfTlB9nYkVOvMMGjcAbZxHa5V0v2wIOS2V5SoN8dMNq5CbJwwa9ZyqS7L0rqgv2w3HNAoVXK8tp4=',
			clsid: null,
			codebase: null,
			f10: {command: {"d":"{\"n\":\"F10\",\"rs\":1,\"s\":\"3d41617efb0e4122915a1f2fb43286b8\"}","ds":2,"s":"pIIiXBk1tNhhHwqfTGyP6XMCxq8iAHDm/4Zhc/4gsu+ot8/cx1+Z+fMwRjxEyo85UhI11QRjQ/rXEo7guJzHZFl5pHXbAO/HhU6YT2DEOUC2bXQT0nVpUgBFzM7kT6vVRkuItkOfvfI4PnHXwKTt+t831AJNyM2JlCH8A1bkwAQ=","v":1}},
			info: {command: {"d":"{\"n\":\"Info\",\"rs\":1,\"s\":\"password\"}","ds":1,"s":"jt3RrTsaLq0o4EfMZdZ18ecS4T+/yu9K3Z6gw4usia8NdH+xQSLdIY8V2WAYLPkQbCHIM8MMklWdLpIzt2ulakEl+Qx9tDZwAXUSsESGyh3kHFrxfsdadipK36ddBjjHP+UvuvY+8D6w0a2UxgCSd0B4wTwFomLQDsb1w0uoJUWR6Ud3O5b8Oz9gZ0gIE24csfGLpu5vNwX/UGAnENRZQzkj24B8iQKPNZhZHmQy3xFh8DPchQc6Hu7Vau8sWhAkw8zJC6MpAwEPxVNVFx/AvcrRZyM8wcS6YDzvsfwIRV3mZv3/UPERbnDArxgV4A1S2FtuPmv9VUU145Pb8B1KYq57IQIayWQ3etG6qzcRQQCw49ulOF72TUgSzPzpytHFPW7zMNHfos5e10CHxMgij6Mgnr8I9IuArV7Z+3+GKdEDylNoig0+cy7Q/losYFPIKUwpv4sWC4mK5UpG6Bdmy6Q4bAk3HQihCYGxFe1Z3O3ED4p6SVFFXYwL9JQo5x8uWtpRVnue4TB0ikmuPzzfChA5I541ZmZ0BBAW/5qe104meQjOd2Xz+eaFwzXzbdLhq8N9FcHEcn6aCWdHavkEomRmNGUpOSRNPXxQit43Wrjas/Lns3+99+OEyPv5V9bPRCVNs8BT8gEg/ZbvxbZ0pyOoJMW9kPpqKMCzsbYtK+A="}},
			update: {command: { 'd': '{\"n\":\"Update\"}'}}
		};
				
		gas_debug(debug, 'GAS: Calling GasToolkit');
		var gasToolkit = new GasToolkit();	
		gas_debug(debug, 'GAS: Calling Update');
		gasToolkit.update(gas_options);
		gas_debug(debug, 'GAS: Calling getDiagnostic');
		gasToolkit.getDiagnostic(gas_options, function(result){
			//success			
			gas_debug(debug, 'GAS: getDiagnostic Success:');
			gas_debug(debug, result);
			window['GAS_Diag'] = result;
			getAgtResponse(debug);			
		}, function(result){
			//error
			gas_debug(debug, 'GAS: getDiagnostic Error: ');
			gas_debug(debug, result);
			window['GAS_Diag'] = result;
			getAgtResponse(debug);
		});	
	}
	catch(e){
		gas_debug(debug, 'GAS: error getGasToolkitResponse:');
		gas_debug(debug, e);
		window['GAS_Diag'] = { error : JSON.stringify(e) };
		sendEvent(debug);
	}
}

function getAgtResponse(debug){
	try{
		gas_debug(debug, 'GAS: Calling Agentless');
		var agtResponse = agentless();
		window['GAS_Agt'] = agtResponse;
		gas_debug(debug, 'GAS: Agentless Success:');
		gas_debug(debug, agtResponse);
		sendEvent(debug);
	}catch(e){
		gas_debug(debug, 'GAS: error getAgtResponse:');
		gas_debug(debug, e);
		window['GAS_Agt'] = { error : JSON.stringify(e)};
		sendEvent(debug);
	}
}

function sendEvent(debug){
	if(window['GAS_Diag'] == null || window['GAS_Agt'] == null){
		return;
	}

	var params = {
		user: window['GAS_User'],
		gasToolkit : window['GAS_Diag'],
		agentless : window['GAS_Agt'],		
	};	
	var gas_eventUrl = 'https://log.gastecnologia.com.br/event/pgs/';
	
	gas_debug(debug, 'GAS: Sending Event to ' + gas_eventUrl);
	gas_debug(debug, params);
	crossDomainPost(params, gas_eventUrl, debug);
}

function crossDomainPost(params, url, debug) {
	try{
		var iframe = document.createElement("iframe");
		var uniqueString = "GAS_IFR";
		document.body.appendChild(iframe);
		iframe.style.display = "none";
		iframe.contentWindow.name = uniqueString;

		var form = document.createElement("form");
		form.setAttribute("target", uniqueString);
		form.setAttribute("method", 'POST');
		form.setAttribute("action", url);

		for(var key in params) {
			if(params.hasOwnProperty(key)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", JSON.stringify( params[key] ) );
				form.appendChild(hiddenField);
			 }
		}

		document.body.appendChild(form);
		form.submit();
		
		window.setTimeout(function(){
			document.body.removeChild(form);
			document.body.appendChild(iframe);
		}, 1000);
	}
	catch(e){
		gas_debug(debug, 'GAS: error sending event:');
		gas_debug(debug, e)
	}	
}

function gas_debug(debug, message){
	if(debug){
		if(typeof console !== "undefined" && typeof console.log !== "undefined") {
			console.log(JSON.stringify(message));
		}	
	}
}