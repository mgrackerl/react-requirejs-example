require.config({
	"urlArgs": "v=01",
    "baseUrl": "",
    "paths": {
        "react": "node_modules/react/dist/react",
        "react-dom": "node_modules/react-dom/dist/react-dom",
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