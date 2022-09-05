const Bill = require('../models/Bill')

module.exports = {
    getBills: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id})
            // const itemsLeft = await Bill.countDocuments({userId:req.user.id})
            res.render('bills.ejs', {bills: billItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBill: async (req, res)=>{
        try{
            await Bill.create({name: req.body.billName, accountNumber:req.body.billAccount, price:req.body.billPrice, userId: req.user.id})
            console.log('Bill has been added!')
            res.redirect('/bills')
        }catch(err){
            console.log(err)
        }
    },
    deleteBill: async (req, res)=>{
        console.log(req.body.billIdFromJSFile)
        try{
            await Bill.findOneAndDelete({_id:req.body.billIdFromJSFile})
            console.log('Deleted Bill')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    