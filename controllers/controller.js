const objectModel = require('../models/object');

const getHomePage = (req, res) => {
    objectModel.find()
        .then(allObjects => {
            res.render('homePage', { dataTitleInPage: 'Home Page', objects: allObjects });
        })
        .catch(err => {
            console.log(err)
        })
}

const getNewObject = (req, res) => {
    res.render('addNewObject', { dataTitleInPage: 'New Object' });
}

const postObjectPost = (req, res) => {
    const newObject = new objectModel(req.body)
    newObject.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })
}

const delObject = (req, res) => {
    objectModel.findOneAndDelete(req.params.id)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })
}

const getEditObject = (req, res) => {
    objectModel.findOne({ _id: req.params.id })
        .then(object => {
            res.render('editObject', { objectTitle: 'edit Object', object });
        })
        .catch(err => {
            console.log(err)
        })
}

const postEditObject = (req, res) => {
    objectModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    getHomePage,
    getNewObject,
    postObjectPost,
    delObject,
    getEditObject,
    postEditObject
}