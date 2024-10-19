/**
 * fetchAPIData
 *
 * script that fetches json data from a url
 *
 * FILE NAME:   fetchAPIData.js
 * Location:    /src/helpers
 * Created:     17/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

export const fetchAPIData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  // Re-throw the error so it can be handled by the caller
    }
};
