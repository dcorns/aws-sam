/**
 * another-function
 * Created by dcorns on 7/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Restful Math API function
 */
'use strict';
exports.handler = (event, context, cb) => {
  let svc =  (event.pathParameters || {}).svc || false;
  console.log('Index Start');
  console.log('event.body:');
  console.log(event.body);
  console.log(event.httpMethod);
  console.log(event.pathParameters);
  switch(svc){
    case 'sum':
      cb(null, {body: (parseInt(event.pathParameters.n1) + parseInt(event.pathParameters.n2)).toString()});
      break;
    default:
      cb(null, {body: 'not a valid math function'});
      break;
  }
  cb(null, {body: 'no services'});
};