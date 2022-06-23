const { userList } = require("../users/userList");


const getUser = async (req, res, next) => {
    //logic here

    return userDataResponse;
}

const userLogin = async (req, res, next) => {
    
    const userName = req.body.user;
    const password = req.body.password;
    console.log('user login was called!', userName, password);
    let login = {
        valid: false
    }
    if (userList[userName] && userList[userName].password == password) {
        login.valid = true;
    }
    
    res.json(login);
}

const createUser = async () => {


}

exports.userData = getUser;
exports.userLogin = userLogin;