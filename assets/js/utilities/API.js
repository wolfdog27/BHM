// DEPENDENCIES
// ======================================================
const axios = require("axios")
// LOCAL TESTING
const baseURL = "http://localhost:3001"
// DEPLOYED
// const baseURL = "INSERT THE FINAL URL HERE"


// THE OBJECT
// ======================================================
const API = {

    // USER METHODS
    // ======================================================
    // Reads the session cookie. Within is all their user/cart information.
    readCookie: () => axios.get(`${baseURL}/api/users/readsessions/`),

    // Login route. It expects to be passed an object with keys of email and password.
    login: (userData) => axios.post(`${baseURL}/api/users/login/`, userData),

    // Logs the user out.
    logout: () => axios.get(`${baseURL}/api/users/logout/`),

    // Registers the user. Expects an object with email, password, firstName, lastName, address, city, state, zip, phoneNumber, and confirmedEmail
    register: (userData) => axios.post(`${baseURL}/api/users/register`, userData),

    // Updates a user. Requires two items. The first is the user's ID. This is stored in the cookie. The second is an object with all the parameters you'd like to update.
    updateUser: (id, userData) => axios.put(`${baseURL}/api/users/update/${id}`, userData),

    // Deletes a user's profile. I doubt this will even get used.
    deleteUser: (id) => axios.get(`${baseURL}/api/users/delete/${id}`),

    // CLASS METHODS
    // ======================================================
}


// EXPORT
// ======================================================
export default API