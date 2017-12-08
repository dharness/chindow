const axios = require('axios');
const querystring = require('querystring');
const winston = require('winston');


const SLACK_API_URL = 'https://slack.com/api';

module.exports = {

  _extractAccountInfo(accountInfo) {
    const slackInfo = {
      accessToken: accountInfo.access_token,
      team: {
        name: accountInfo.team_name,
        id: accountInfo.team_id
      },
      channel: {
        name: accountInfo.incoming_webhook.channel,
        id: accountInfo.incoming_webhook.channel_id
      },
      imgUrl: accountInfo.team.icon.image_230,
      bot: accountInfo.bot
    };
    return slackInfo;
  },

  _extractAccessToken(data) {
    return data.access_token
  },

  _extractBotToken(data) {
    if (data.bot) {
      return data.bot.bot_access_token;
    }
  },

  async getTeamInfo(accessToken) {
    const response =  await axios.get(`${SLACK_API_URL}/team.info?token=${accessToken}`);
    return response.data;
  },

  getAccessToken(code) {
    return axios.post(`${SLACK_API_URL}/oauth.access`,
        querystring.stringify({
          code,
          scope: [
            'channels:read',
            'channels:write',
            'channels:history',
            'chat:write:user',
            'chat:write:bot',
            'team:read',
            'users:read',
            'bot',
            'rtm:stream',
            'client'
          ],
          client_id: '94105311894.149174096865',
          redirect_uri: process.env.SLACK_REDIRECT_URI,
          client_secret: '059f7bea0e6e4558e0b1e5886986382e',
        }))
        .then(async (response) => {
          if (response.data.ok !== true) {
            return winston.error('authentication failed');
          }
          const accountInfo = response.data;
          const accessToken = this._extractAccessToken(response.data);
          const botToken = this._extractBotToken(response.data);

          const teamInfo = await this.getTeamInfo(accessToken);
          const botInfo = { bot: { botToken } };

          const userProfileReq = axios.post(`${SLACK_API_URL}/users.profile.get`, querystring.stringify({ accessToken }))
            .then(({ data }) => data);

          const teamInfoReq = axios.post(`${SLACK_API_URL}/team.info`, querystring.stringify({ accessToken }))
            .then(({ data }) => Object.assign(accountInfo, data));

          return Promise.all([userProfileReq, teamInfoReq]).then((responses) => {
            responses.push(accountInfo);
            const merged = Object.assign(...responses, botInfo, teamInfo);
            return this._extractAccountInfo(merged);
          });
        });
  },

  signOut(accessToken) {
    return axios.post(`${SLACK_API_URL}/auth.revoke`,
      querystring.stringify({ token: accessToken }));
  },

};
