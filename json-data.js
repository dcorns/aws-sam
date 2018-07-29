/**
 * json-data
 * Created by dcorns on 7/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
exports.handler = (event, context, cb) => {
  console.log('Index Start');
  console.log('event.body:');
  console.log(event.body);
  console.log(event.httpMethod);
  console.log(event.pathParameters);
  switch(event.httpMethod){
    case 'POST':
      cb(null, {body: event.body});
      break;
    default:
      cb(null, {body: 'no json data'});
      break;
  }
  cb(null, {body: 'use only post method'});
};