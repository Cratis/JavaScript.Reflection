"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Based on information from: http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
// Checking types : http://tobyho.com/2011/01/28/checking-types-in-javascript/

var _owner = new WeakMap();
var _name = new WeakMap();

var setName = function setName(owner) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = funcNameRegex.exec(owner.constructor.toString());
    var name = results && results.length > 1 ? results[1] : "";
    _name.set(owner, name);
};

/**
 * Represents information about a type
 */

var TypeInfo = exports.TypeInfo = function () {
    function TypeInfo(owner) {
        _classCallCheck(this, TypeInfo);

        _owner.set(this, owner);
        setName(owner);
    }

    _createClass(TypeInfo, [{
        key: "name",
        get: function get() {
            var owner = _owner.get(this);
            return _name.get(owner);
        }
    }]);

    return TypeInfo;
}();

if (!Object.prototype.typeInfo) {
    Object.defineProperty(Object.prototype, "typeInfo", {
        get: function get() {
            if (this._typeInfo) return this._typeInfo;
            var typeInfo = new TypeInfo(this);
            this._typeInfo = typeInfo;
            return typeInfo;
        },
        configurable: false
    });
}

/*
Object.prototype.getConstructorName = function () {
   var str = (this.prototype ? this.prototype.constructor : this.constructor).toString();
   var cname = str.match(/function\s(\w*)/)[1];
   var aliases = ["", "anonymous", "Anonymous"];
   return aliases.indexOf(cname) > -1 ? "Function" : cname;
}

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};


if (!Object.prototype.getClassName) {
    Object.prototype.getClassName = function () {
        return Object.prototype.toString.call(this).match(/^\[object\s(.*)\]$/)[1];
    }
}

function isInstance(obj, type) {
    var ret = false,
    isTypeAString = getType(type) == "String",
    functionConstructor, i, l, typeArray, context;
    if (!isTypeAString && getType(type) != "Function") {
        throw new TypeError("type argument must be a string or function");
    }
    if (obj !== undefined && obj !== null && obj.constructor) {
        //get the Function constructor
        functionConstructor = obj.constructor;
        while (functionConstructor != functionConstructor.constructor) {
            functionConstructor = functionConstructor.constructor;
        }
        //get the object's window
        context = functionConstructor == Function ? self : functionConstructor("return window")();
        //get the constructor for the type
        if (isTypeAString) {
            //type is a string so we'll build the context (window.Array or window.some.Type)
            for (typeArray = type.split("."), i = 0, l = typeArray.length; i < l && context; i++) {
                context = context[typeArray[i]];
            }
        } else {
            //type is a function so execute the function passing in the object's window
            //the return should be a constructor
            context = type(context);
        }
        //check if the object is an instance of the constructor
        if (context) {
            ret = obj instanceof context;
            if (!ret && (type == "Number" || type == "String" || type == "Boolean")) {
                ret = obj.constructor == context
            }
        }
    }
    return ret;
}
*/
//# sourceMappingURL=TypeInfo.js.map
