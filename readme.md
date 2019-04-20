You will need to supply your own MongoDB username and password.
By default, the code looks for a file at:

/config/db.js:
module.exports = {
MONGO_URL: "mongodb+srv://[user]:[pass]@[uri]"
};
