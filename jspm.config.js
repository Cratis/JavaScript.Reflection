SystemJS.config({
    paths: {
        "cratis-javascript-reflection/": "Source/"
    },
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "jspmbeta/": "/Source/"
        }
    },
    nodeConfig: {
        "paths": {
            "npm:": "jspm_packages/npm/",
            "jspmbeta/": "Source/"
        }
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "cratis-javascript-reflection": {
            "main": "Distribution/index.js",
            "format": "csj",
            "defaultExtension": "js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {},
    packages: {}
});