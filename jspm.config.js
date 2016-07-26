SystemJS.config({
    defaultJSExtensions: true,
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "cratis.javascript.reflection/": "src/"
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
            "format": "cjs",
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
        "sinon": "npm:sinon@1.17.5",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
        "npm:sinon@1.17.5": {
            "map": {
                "samsam": "npm:samsam@1.1.2",
                "formatio": "npm:formatio@1.1.1",
                "util": "npm:util@0.10.3",
                "lolex": "npm:lolex@1.3.2"
            }
        },
        "npm:formatio@1.1.1": {
            "map": {
                "samsam": "npm:samsam@1.1.3"
            }
        },
        "npm:util@0.10.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
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
