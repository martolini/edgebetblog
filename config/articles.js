var articles = {};

articles['staying-under-the-radar-avoid-getting-limited'] = {
  id: 1,
  title: 'Avoid getting limited from bookmakers',
  guest: false,
  template: 'staying_under_the_radar',
  intro: 'Read our insider guide on staying under the radar - extracting more value out of each and every bookmaker.',
  author: 'Jonas Gjelstad',
  date:  new Date(2015, 12, 3),
  image: 'waldo.jpg',
  alt: 'Guide: avoid getting limited from bookmakers',
  minutesRead: 5
}

articles['10x-bankroll-in-two-months'] = {
  id: 3,
  title: 'Guest post: My bankroll increased 10x in under two months',
  guest: true,
  template: '10x_bankroll',
  intro: 'Being a bit skeptical at first I started with $100 just to check out what all the fuzz was about.',
  image: 'tobias.png',
  alt: '10xed my bankroll in under two months',
  date: new Date(2015, 12, 3),
  minutesRead: 5,
  author: 'Tobias'
}

articles['welcome-to-the-edgebet-blog'] = {
  id: 2,
  title: 'Welcome to the Edgebet blog',
  guest: false,
  template: 'welcome_to_the_edgebet_blog',
  intro: 'Finally the Edgebet blog is here. Here, we will post articles about Edgebet, sports betting and requests from our community!',
  image: 'edgebet_logo.png',
  alt: 'Edgebet logo',
  date: new Date(2015, 12, 2),
  minutesRead: 2,
  author: 'Team Edgebet'
}


module.exports = articles;
