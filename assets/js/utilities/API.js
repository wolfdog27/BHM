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

    // Registers the user. Expects an object with the keys of email, password, firstName, lastName, address, city, state, zip, and, phoneNumber.
    register: (userData) => axios.post(`${baseURL}/api/users/register`, userData),

    // Updates a user. Requires two items. The first is the user's ID. This is stored in the cookie. The second is an object with all the parameters you'd like to update.
    updateUser: (id, userData) => axios.put(`${baseURL}/api/users/update/${id}`, userData),

    // Deletes a user's profile. I doubt this will even get used.
    deleteUser: (id) => axios.delete(`${baseURL}/api/users/delete/${id}`),

    // CLASS METHODS
    // ======================================================
    // Retreives all the classes and their data.
    getAllClasses: () => axios.get(`${baseURL}/api/classes/getAll/`),

    // Retreives a single classes info.
    getSingleClass: (id) => axios.get(`${baseURL}/api/classes/${id}`),

    // Registers a class. Expects an object with the keys of adminId(optional), name, price, inventory(How many seats left), description, isActive(Whether the class is still going), time, and gradeRange.
    register: (classData) => axios.post(`${baseURL}/api/classes/create`, classData),

    // Adds a student to any class' roster. Expects an object with the keys of itemId(the class you'd like to add a student to), and userId(the user you want to add).
    addStudent: (classData) => axios.post(`${baseURL}/api/classes/create`, classData),

    // Updates a classes information. Requires two items. The first is the class' ID. The second is an object with all the parameters you'd like to update.
    updateClass: (id, classData) => axios.put(`${baseURL}/api/classes/update/${id}`, classData),

    // Deletes a class. Alternatively, considering marking a class inactive.
    deleteClass: (id) => axios.delete(`${baseURL}/api/classes/delete/${id}`),

    // Deletes a user's profile. I doubt this will even get used.
    removeStudent: (itemId, userId) => axios.delete(`${baseURL}/api/classes/removeStudent/${itemId}/${userId}`),

        // SHOPPING METHODS
    // ======================================================
}


// EXPORT
// ======================================================
export default API