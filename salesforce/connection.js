const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  clientId: '3MVG9vtcvGoeH2bg7Z9E2n713yxCLPN7pKytpMMYqJdm.5FP.hefkryi0Opju2Z3kOzRc.F3cnXbZPTa3_IsS',
  clientSecret: '9494F778ACB1B91E3DE31B6B7B1795C50B5C67443E09FB26FFDC70A7522F3903',
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: 'kate@ucbclass.com',
  password: 'salesforce1wfMfx4nXakBoZM71h7iCQLMbN',
  oauth: {
    access_token: '6Cel800D3i000000EB9L8883i000000YUg27Gu6quJU9i1I9lqEw69KjaNm6gKipOJanFzL5Iu8gaaFZRWY8ZLLcWcPvSiXpmU7yrwj6vov',
    instance_url: 'https://na112.my.salesforce.com',
  },
});
