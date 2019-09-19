import { request } from 'remax/wechat';

export default {
  async getRepos() {
    const { data } = await request({
      url: 'https://api.github.com/users/chenshuai2144/repos',
    })
    return data
  }
}