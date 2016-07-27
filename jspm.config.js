SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "cratis.javascript.reflection/": "Source/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "cratis.javascript.reflection": {
            "main": "cratis.javascript.reflection.js",
            "format": "esm",
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
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.7.1"
            }
        },
        "npm:buffer@4.7.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "isarray": "npm:isarray@1.0.0",
                "ieee754": "npm:ieee754@1.1.6"
            }
        }
    }
});