const router = require('express').Router();

const Post = require('../models/Posts');

router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => {
            console.log(err);
            res.json({
                msg: err
            });
        });
});

router.get('/:title', (req, res) => {
    Post.find({
            'title': req.params.title
        })
        .then(post => res.json(post))
        .catch(err => {
            console.log(err);
            res.json({
                msg: err
            });
        });
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json({
                msg: err
            });
        });
});

router.delete('/:title', (req, res) => {
    Post.remove({
            'title': req.params.title
        })
        .then(post => res.json(post))
        .catch(err => {
            console.log(err);
            res.json({
                msg: err
            });
        });
});

// update a post
router.put('/:title', (req, res) => {
    Post.findOneAndUpdate({
            'title': req.params.title
        }, {
            $set: {
                description: req.body.description
            }
        })
        .then(post => res.json(post))
        .catch(err => {
            console.log(err);
            res.json({
                msg: err
            });
        });
});

module.exports = router;