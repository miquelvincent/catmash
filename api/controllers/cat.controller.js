const Cat = require('../models/cat.model');

exports.cat_add = function (req, res, next) {
  let cat = new Cat(
      {
        id: req.body.id,
        scoreRate: req.body.scoreRate
      }
  );

  cat.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })
};