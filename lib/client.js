'use strict';

const axios = require("axios");

class Webshrinker {
    constructor(options) {
        if (options.key === undefined || options.secret === undefined) throw new Error("You have to provide key and secret.");
        this.authorization = 'Basic ' + Buffer.from(`${options.key}:${options.secret}`).toString('base64');
    }
}

Webshrinker.prototype.dispatch = function(baseURL) {
    return axios.create({
        baseURL,
        timeout: this.options || 2000,
        headers: {'Authorization': this.authorization}
    }).get()
};

Webshrinker.prototype.getCategories = require("./getCategories");

module.exports = Webshrinker;