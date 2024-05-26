const router=require('express').Router();

const { Add_Student,Student_Login}=require('../controllers/Students');
router.post("/add",Add_Student);
router.post('/login',Student_Login);

module.exports = router;