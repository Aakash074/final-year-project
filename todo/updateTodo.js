const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  // TODO implement
  //const itemId= event.pathParameters.id

  const body = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE,
    Item: body
  };

  const results = await dynamo.put(params).promise();
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  const response = {
    statusCode: 200,
    body: '',
    headers
  };
  return response;
};
