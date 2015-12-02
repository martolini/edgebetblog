import express from 'express'
import favicon from 'serve-favicon'
import articles from './config/articles'
import path from 'path'

const app = express()
const PORT = process.env.port || 3000;
app.set('views', './views')
app.set('view engine', 'jade')

app.use('/static', express.static(path.join(__dirname, 'static')))

const guestArticles = {};
const educationArticles = {};

for (let id in articles) {
  if (articles[id].guest === true) {
    guestArticles[id] = articles[id];
  } else {
    educationArticles[id] = articles[id];
  }
}

app.get('/:article', (req, res, next) => {
  const article = articles[req.params.article]
  if (!!article) {
    res.render('articles/' + article.template, {'article': article})
  } else {
    next()
  }
})

app.get('/guest-articles', (req, res) => {
  res.render('index', {articles: guestArticles})
})

app.get('/education-articles', (req, res) => {
  res.render('index', {articles: educationArticles})
})

app.get('/', (req, res) => {
  res.render('index', {articles: articles})
})

app.use((req, res, next) => {
  res.status(500).send('This page doesn\'t exist;')
})

app.listen(PORT, () => {
  console.log('Listening on port %s', PORT)
})
