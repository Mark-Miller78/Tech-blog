const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

router.get('/', (req, res)=>{
    Comment.findAll()
    .then(dbCommentData =>res.json(dbCommentData))
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    })
});

router.post('/', (req, res)=>{
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
    .then(dbCommentData=>res.json(dbCommentData))
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res)=>{
    Comment.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(dbCommentData =>{
        if(!dbCommentData){
            console.log('No comment found with this id.');
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;