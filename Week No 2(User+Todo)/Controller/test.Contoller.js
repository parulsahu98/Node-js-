import { todo, sequelize } from "../model/todo.model.js";

export const SaveTask = async (req, res, next) => {
    sequelize.sync().then(() => {
        console.log('todo created successfully!');
        todo.create({
            Name: req.body.Name,
            Status: req.body.Status,
            Level: req.body.Level
        }).then(result => {
            res.redirect('/todo');
        }).catch((error) => {
            console.error('Failed to create a new  data: ', error);
        });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

export const ViewTask = async (req, res, next) => {
    console.log("ready to Execute to view task");
    try {
        let result = await todo.findAll({
            order: [
             ["Level", "ASC"]
            ],
          })
        console.log(result[0].Name);
        return res.render("todo/View.ejs", { result: result });

    } catch (err) {
        return res.render("todo/View.ejs", { result: []});
    }
}

export const DeleteTask = (req, res, next) => {
      console.log("Delete ke liye"+req.params.ID);
    todo.destroy({
        where: {
            ID: req.params.id
        }
    }).then(result => {
        res.redirect('/todo');
    }).catch((error) => {
        res.redirect('/todo');
    });
}

export const UpdateTask = (req, res, next) => {
    console.log("ready to execute");

    todo.update({ Name: req.body.Name, Status: req.body.Status, Level: req.body.Level }, {
        where: {
            ID: req.body.ID
        }
    }).then(result => {
        console.log(result)
        res.redirect('/todo');
    }).catch((error) => {
        res.redirect('/todo');
    });
}

export const Edit = async(req,res,next)=>{
    try{
        console.log(req.params.id);
      let result= await  todo.findOne({
            where: {
                ID: req.params.id
            }
        })
        return res.render("todo/Edit.ejs", { result: result });
    }
    catch(err){
        console.log("error :"+ err)
        res.redirect('/todo');
    }
}
export const FilterTask = (req, res, next) => {
    console.log(req.params.Level);
  todo.findAndCountAll({
      where: {
          Status: req.params.Level
      }
  }).then(result => {
    console.log(result);
    return res.render("todo/View.ejs", { result: result.rows});
  }).catch((error) => {
    return res.render("todo/View.ejs", { result: [] });
  });
}

//  ;