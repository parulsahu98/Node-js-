 const {user} =require('../model/user.model.js');
// const {sequelize} =require('../model/connection.js');
// *********************************************************************

const Register = async (req, res, next) => {
     res.render("User/Register");
}

const RegisterPost = async (req, res, next) => {
    console.log(req.body);
    2 // req.body.Image = req.file.filename;
    console.log(req.file);
    //  sequelize.sync().then(async() => {
    //     console.log('user created successfully!');
    //     console.log(req.body);
    //     let password = req.body.password;      
    //     let saltKey = await bcrypt.genSalt(10);
    //     let encryptedPassword = await bcrypt.hash(password,saltKey); 
    //     todo.create({
    //         Name:req.body
    //     }).then(result => {
    //         console.log(result)
    //         res.json({ message: "Create Successfully" })
    //     }).catch((error) => {
    //         console.error('Failed to create a new  data: ', error);
    //     });
    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // }); 
    // res.render("User/Register");
}
// **********************************************************************

const Login = (req, res, next) => {
    console.log("ready to Execute");
    res.render("User/Login");       
}
const LoginPost = (req, res, next) => {
    console.log("ready to Execute");
    res.render("User/Login");       
}
// **********************************************************************

const Profile = (req, res, next) => {
    console.log("ready to execute");
    res.render("User/Profile"); 
}

const UpdateData = (req, res, next) => {
    console.log("ready to execute");
    res.json({ message: "Update User Successfully" }) 
} 
// ****************************************************************************

const DeleteData = (req, res, next) => {
    console.log("ready to execute");
     res.json({ message: "Delete User Successfully" }) 
}

module.exports = { Register, Login, DeleteData, UpdateData ,Profile,RegisterPost,LoginPost };