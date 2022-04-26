const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  // TODO implement
  const itemId = event.pathParameters.id;

  const params = {
    TableName: process.env.TABLE,
    Key: {
      id: itemId
    }
  };

  const results = await dynamo.get(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(results.Item)
  };
  return response;
};
