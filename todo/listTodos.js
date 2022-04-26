const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  // TODO implement
  //const itemId= event.pathParameters.id
  const user1 = 'sanjay';

  const params = {
    TableName: process.env.TABLE,
    FilterExpression: 'username = :thisuser',
    ExpressionAttributeValues: { ':thisuser': user1 }
  };

  const results = await dynamo.scan(params).promise();
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(results.Items),
    headers
  };
  return response;
};
