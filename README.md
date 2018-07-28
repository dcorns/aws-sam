# aws-sam
A simple example of using aws sam run AWS lambda locally.

**template.yaml**: This is used to create the local lambda server. It creates endpoints for running the functions in products.js . By default, the start-api and invoke commands search working directory for the template.yaml file.

### Usage
Simply execute **sam local start-api**

### Testing
#### /products
use the browser: **http://localhost:3000/products**

using curl: **curl -XDELETE http://localhost:3000/products/1**

#### /Math
restful service:

http://localhost:3000/math/sum/23/10

#### /json

curl -H "Content-Type: application/json" -d '{"name":"Tom","age":"34"}' http://localhost:3000/json