const Ranking = require('../models/cat.model');

exports.cat_add = (req, res, next) => {
  let query = {id: req.body.id};
  Ranking.findOneAndUpdate(
    query,
    {$inc: {scoreRate: 1}},
    {upsert: true},
    (err, cat) => {
      if (err) return res.send(500, {error: err});
      return res.send('Succesfully saved  🎊');
    },
  );
};

exports.send_cat = (req, res, next) => {
  Ranking.find({}, (err, cats) => {
    res.send(cats);  
  });
};
