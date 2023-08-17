const express=require("express");
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const cors=require("cors");
const studentModel=require("./model/students");

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


mongoose.connect("mongodb+srv://ChinduAnurag:csmodel52@cluster0.jrwfyam.mongodb.net/collegestudentdb?retryWrites=true&w=majority",{useNewUrlParser:true})
    //==========console.log("mongodb connected successfully")
;

app.post("/api/studentEntry",async(req,res)=>{
try{const data=req.body;
    const student=new studentModel(data);
    await student.save();
    res.send(student);
}catch(error){
    console.log(error)
}
    
    
})
 
app.post("/api/studentViewall",async(req,res)=>{
try{
 var data=  await studentModel.find();
        res.json(data);
}catch(error){
    console.log(error)
}

    
})


   

app.put("/api/studentUpdate",async(req,res)=>{

    try {

       let id = req.body._id
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            rollno:req.body.rollno,
            address:req.body.address,
            college:req.body.college
        }
        let updateData = { $set: item }
        let updateStudent = await studentModel.findByIdAndUpdate({ '_id': id }, updateData)
        res.send(updateStudent)
    } catch (error) {
        console.log(error)

    }
})
app.post("/api/studentSearch",(req,res)=>{

    res.send("testing search");
})
app.delete("/api/studentDelete:id",async(req,res)=>{
    try {
        let id = req.params.id
        const deleteStudent = await DATA.findByIdAndDelete(id)
        res.send(deleteStudent)


    } catch (error) {
        console.log(error)

    }
    
})


app.listen(3000,()=>{
console.log("server started on port 3000");
})
    
