exports.createPollGetController = (req, res, next) => {
    res.render('create');
};

exports.createPollPostController = (req, res, next) => {
    let { title, description, options } = req.body;

    res.render('create');
};