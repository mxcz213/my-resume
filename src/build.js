const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const App = require('./index.js');

const mainDom = ReactDOMServer.renderToString(<App />);

const loadingDom = `document.onreadystatechange = function(){
	if(document.readyState == 'complete'){
		var loading = document.getElementById('loading');
		document.body.removeChild(loading);
	}
}`;

const html = `<!DOCTYPE html>
					<html lang="en">
						<head>
							<meta charset="UTF-8">
							<title>何陈娟-web前端-4年</title>
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    						<meta content="何陈娟个人空间，WEB前端开发工程师简历，前端开发，工程师简历，擅长web前端开发，主要包括html，css，javascript，react" name="description"/>
    						<meta content="web前端开发，前端，web前端，前端工程师，前端开发，web前端工程师，F2E，web前端个人简历，前端开发，个人简历，求职简历，何陈娟，工程师，简历，工作经验，js，javascript，html，h5，react，vue" name="keywords"/>
							<link type="text/css" rel="stylesheet" href="../build/css/main.css">
						</head>
						<body>
							<div id="loading" class="loading"><div class="loading-pic"></div></div>
							<div id="app">${mainDom}</div>
							<script src="../build/main.bundle.js"></script>
							<script type="text/javascript">${loadingDom}</script>
						</body>
					</html>`;

module.exports = html;
