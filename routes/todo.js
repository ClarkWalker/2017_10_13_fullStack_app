const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('todo')
    .select()
    .then(todos => {
      res.render('all', {todos: todos});

    });
});

router.get('/new', (req, res) => {
  res.render('new');

});

function validTodo(todo) {
  return typeof todo.title == 'string' &&
    todo.title.trim() != '' &&
    typeof todo.priority == 'number';
}

router.post('/', (req, res) => {
  console.log(req.body);
  if (validTodo(req.body)) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority
    };
    // insert into the database
    knex('todo')
      .insert(todo, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/todo/${id}`);
      });
  } else {
    // respond w/ error
    res.status(500);
    res.render(`error`, {
      message: 'invalid todo'
    });
  }
});
module.exports = router;
