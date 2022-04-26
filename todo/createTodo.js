const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  // TODO implement
  //const itemId= event.pathParameters.id

  const body = JSON.parse(event.body);

  body.id = context.awsRequestId;

  const params = {
    TableName: process.env.TABLE,
    Item: body
  };

  const result = await dynamo.put(params).promise();
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
