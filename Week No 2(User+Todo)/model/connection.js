import LocalStrategy from ('passport-local').Strategy;
exports.initializingPassport=(passport)=>{
     passport.use(new LocalStrategy(async(UserName,Password,done)=>{
      try{
                 const users=await user.findOne({UserName});
                 if(!users)return done(null,false);
                 if(user.password !==password )return done(null,false);
                 return done(null,users);
      }catch(error){
        return done(error,false);
      }
     } ))
     passport.serializeUser((user,done)=>{
      done(null,user.ID);
     });
     passport.deserializeUser(async(ID,done)=>{
      try{
          const users=await user.findById(id);
      }catch(err){
        done(error,false);
      }
     })
}