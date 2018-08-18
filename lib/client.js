'use strict';

const axios = require("axios");

module.exports = {
    getClient
};

function getClient(username, password) {
    const authorization = 'Basic ' + Buffer.from(`${username} : ${password}`).toString('base64');

    return {
        getCategories
    };

    function getCategories(testUrl) {
        const base64TestUrl = Buffer.from(testUrl).toString('base64');

        return axios.create({
            baseURL: `https://api.webshrinker.com/categories/v3/${base64TestUrl}`,
            timeout: 20000,
            headers: {'Authorization': authorization}
        })
            .get()
            .then(resp => {
                if ((resp.data.data === undefined) || (resp.data.data.length === 0)) throw new Error("No data received");
                if (resp.data.data[0].categories === undefined || resp.data.data[0].categories.length === 0) throw new Error("No categories received");

                return resp.data.data[0].categories;
            })
            .catch(e => {
                console.log(testUrl);
                console.log(e);
            })
    }
}