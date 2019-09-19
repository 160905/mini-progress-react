module.exports = {
  pages: ['pages/index/index', 'pages/events/index', 'pages/issues/index',],
  window: {
    navigationBarTitleText: 'Demo',
    navigationBarBackgroundColor: '#FF1493'
  },
  tabBar: {
    selectedColor: '#FF1493',
    list: [{
      pagePath: 'pages/index/index',
      text: 'Repos',
    }, {
      pagePath: 'pages/events/index',
      text: 'Events',
    }, {
      pagePath: 'pages/issues/index',
      text: 'Issues',
    }]
  },
};
