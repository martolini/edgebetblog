import express from 'express'
import favicon from 'serve-favicon'
import { articles, andersArticles } from './config/articles'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000
const SITE_URL = 'http://blog.edgebet.net'
app.set('views', './views')
app.set('view engine', 'jade')

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(favicon(path.join(__dirname, 'static/img/favicon.ico')))

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
    res.render('articles/' + article.template, {article: article, url: SITE_URL + req.url})
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

app.get('/anders', (req, res) => {
  res.render('index', { articles: andersArticles })
})

app.get('/anders/:article', (req, res, next) => {
  const article = andersArticles[`anders/${req.params.article}`]
  if (!!article) {
    res.render(`anders/${article.template}`, { article: article, url: SITE_URL + req.url})
  } else {
    next()
  }
})

app.get('/', (req, res) => {
  res.render('index', {articles: articles})
})

app.use((req, res, next) => {
  res.status(500).send('This page doesn\'t exist.')
})

app.listen(PORT, () => {
  console.log('Listening on port %s', PORT)
})
