require.config({
	"urlArgs": "v=01",
    "baseUrl": "",
    "paths": {
        "react": "node_modules/react/dist/react",
        "react-dom": "node_modules/react-dom/dist/react-dom",
        "moment": "node_modules/moment/min/moment.min",
        "react-onclickoutside": "node_modules/react-onclickoutside/index",
        "react-datepicker": "node_modules/react-datepicker/dist/react-datepicker",
        "main": "scripts/main",
    },
    "shim": {
        "datatable": {
            "deps": ['jquery']
        },
        "dtbootstrap": {
            "deps": ['datatable']
        },
    },
    jsx: {
        fileExtension: ".js",
    }
});

requirejs(['react', 'react-dom', 'main'],
function   (react, reactDom, main) {
});

console.debug("rconfig done");