'use strict';

require("./getCategories");

module.exports = function getCategories(testUrl) {
    const base64TestUrl = Buffer.from(testUrl).toString('base64');
    const baseUrl = `https://api.webshrinker.com/categories/v3/${base64TestUrl}`;

    return this.dispatch(baseUrl)
        .then(resp => {
            if ((resp.data.data === undefined) || (resp.data.data.length === 0)) throw new Error("No data received");
            if (resp.data.data[0].categories === undefined || resp.data.data[0].categories.length === 0) throw new Error("No categories received");

            return resp.data.data[0].categories;
        })
};