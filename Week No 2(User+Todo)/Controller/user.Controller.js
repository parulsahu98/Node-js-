import { user, sequelize } from '../model/user.model.js';

// *********************************************************************
import bcrypt from 'bcryptjs';
export const Register = async (req, res, next) => {
    console.log("in sign up form");
    res.render("User/Register");
}

export const RegisterPost = async (req, res, next) => {
    sequelize.sync().then(async () => {
        req.body.Image = req.file.filename;
        let password = req.body.Password;
        let saltKey = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(password, saltKey);
        user.create({
            UserName: req.body.UserName,
            Password: encryptedPassword,
            Image: req.body.Image,
            IsLog: false
        }).then(result => {
            console.log(result);
            console.log('user created successfully!');
            return res.redirect("User/Login");
        }).catch((error) => {
            console.error('Failed to create a new  data: ', error);
        });
    }).catch((error) => {
        console.error('Unable to create table :', error);
    });
    res.render("User/Register");
}
// **********************************************************************

export const Login = (req, res, next) => {
    console.log("ready to Execute");
    res.render("User/Login");
}
export const LoginPost = async (req, res, next) => {
    console.log("ready to Execute");

    let users = await user.findOne({
        where: {
            UserName: req.body.UserName
        }
    })

    if (user) {
        let validPassword = await bcrypt.compare(req.body.Password, users.Password);
        if (validPassword) {
            req.session.currentUserId = users.ID;
            req.session.currentUserName = users.UserName;
            return res.render("User/Profile", { result: users });

        }
        else
            return res.redirect("/user");
    }
    else
        return res.redirect("/user");

}
// **********************************************************************

export const Profile = (req, res, next) => {
    console.log("ready to execute");
    res.render("User/Profile");
}

export const UpdateData = (req, res, next) => {
    console.log(req.body);
    if (req.file) {
        req.body.Image = req.file.filename;
        user.update({ UserName: req.body.UserName[1], Image: req.body.Image }, {
            where: {
                ID: req.body.UserName[0]
            }
        }).then(result => {
            console.log(result)
            res.json({ message: "Update Successfully" })
        }).catch((error) => {
            console.error('Failed to Update data: ', error);
        });
    }
    else {
        user.update({ UserName: req.body.Username }, {
            where: {
                ID: req.body.ID
            }
        }).then(result => {
            console.log(result)
            res.json({ message: "Update Successfully" })
        }).catch((error) => {
            console.error('Failed to Update data: ', error);
        });
    }

}
// ****************************************************************************

export const DeleteData = (req, res, next) => {
    console.log("ready to execute Deletedata");
    req.session.currentUserId = null;
    req.session.currentUserName = null;
    req.session.destroy();
    return res.redirect("/user/Login");
}

