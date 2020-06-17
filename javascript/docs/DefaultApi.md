# Conf.DefaultApi

All URIs are relative to *https://localhost/conf-api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentials**](DefaultApi.md#createCredentials) | **PUT** /credential | Create credentials
[**createUser**](DefaultApi.md#createUser) | **POST** /user | Create user
[**deleteToscaTemplateByID**](DefaultApi.md#deleteToscaTemplateByID) | **DELETE** /tosca_template/{id} | Deletes a tosca topology template
[**deployProvisionToscaTemplateByID**](DefaultApi.md#deployProvisionToscaTemplateByID) | **GET** /deployer/deploy/{id} | deploy the software tosca template
[**getCredentialIDs**](DefaultApi.md#getCredentialIDs) | **GET** /credential/ids | Get all credential IDs
[**getToscaTemplateByID**](DefaultApi.md#getToscaTemplateByID) | **GET** /tosca_template/{id} | Find topolog template by ID
[**getToscaTemplateIDs**](DefaultApi.md#getToscaTemplateIDs) | **GET** /tosca_template/ids | Get all topolog template IDs
[**planToscaTemplateByID**](DefaultApi.md#planToscaTemplateByID) | **GET** /planner/plan/{id} | plan tosca template
[**provisionPlanToscaTemplateByID**](DefaultApi.md#provisionPlanToscaTemplateByID) | **GET** /provisioner/provision/{id} | provision tosca template
[**scaleProvisionedToscaTemplateByID**](DefaultApi.md#scaleProvisionedToscaTemplateByID) | **GET** /scaler/{id} | scale tosca template
[**updateToscaTemplateByID**](DefaultApi.md#updateToscaTemplateByID) | **PUT** /tosca_template/{id} | Updates exisintg topolog template
[**uploadToscaTemplate**](DefaultApi.md#uploadToscaTemplate) | **POST** /tosca_template | upload a tosca template description file
[**userLogoutGet**](DefaultApi.md#userLogoutGet) | **GET** /user/logout | Logs out current logged in user session
[**userUsernameDelete**](DefaultApi.md#userUsernameDelete) | **DELETE** /user/{username} | Delete user
[**userUsernameGet**](DefaultApi.md#userUsernameGet) | **GET** /user/{username} | Get user by user name


<a name="createCredentials"></a>
# **createCredentials**
> 'String' createCredentials(body)

Create credentials

Creates credentials

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var body = new Conf.Credential(); // Credential | Credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredentials(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Credential**](Credential.md)| Credential | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> 'String' createUser(body)

Create user

This can only be done by admin.

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var body = new Conf.User(); // User | Created user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Created user object | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteToscaTemplateByID"></a>
# **deleteToscaTemplateByID**
> 'String' deleteToscaTemplateByID(id, opts)

Deletes a tosca topology template

If the topology is provisoned it will delete the provison (Infrastructure). If it is deployed it will delete the deploymet too (Application)

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topology template to return

var opts = { 
  'nodeNames': ["nodeNames_example"] // [String] | The node(s) to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteToscaTemplateByID(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topology template to return | 
 **nodeNames** | [**[String]**](String.md)| The node(s) to delete | [optional] 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deployProvisionToscaTemplateByID"></a>
# **deployProvisionToscaTemplateByID**
> 'String' deployProvisionToscaTemplateByID(id)

deploy the software tosca template

Returns the deployment ID

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to deploy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deployProvisionToscaTemplateByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to deploy | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getCredentialIDs"></a>
# **getCredentialIDs**
> ['String'] getCredentialIDs()

Get all credential IDs

Returns all IDss 

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCredentialIDs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getToscaTemplateByID"></a>
# **getToscaTemplateByID**
> 'String' getToscaTemplateByID(id)

Find topolog template by ID

Returns a single topolog template

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getToscaTemplateByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to return | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getToscaTemplateIDs"></a>
# **getToscaTemplateIDs**
> ['String'] getToscaTemplateIDs()

Get all topolog template IDs

Returns all IDs

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getToscaTemplateIDs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="planToscaTemplateByID"></a>
# **planToscaTemplateByID**
> 'String' planToscaTemplateByID(id)

plan tosca template

Returns the ID of the planed topolog template

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to plan


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.planToscaTemplateByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to plan | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="provisionPlanToscaTemplateByID"></a>
# **provisionPlanToscaTemplateByID**
> 'String' provisionPlanToscaTemplateByID(id)

provision tosca template

deletes the provisioned Infrastructure

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to plan


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.provisionPlanToscaTemplateByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to plan | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="scaleProvisionedToscaTemplateByID"></a>
# **scaleProvisionedToscaTemplateByID**
> 'String' scaleProvisionedToscaTemplateByID(id, nodeName, nodeNum)

scale tosca template

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to scale

var nodeName = "nodeName_example"; // String | The node to scale

var nodeNum = 56; // Number | The number of nodes to scale


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scaleProvisionedToscaTemplateByID(id, nodeName, nodeNum, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to scale | 
 **nodeName** | **String**| The node to scale | 
 **nodeNum** | **Number**| The number of nodes to scale | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="updateToscaTemplateByID"></a>
# **updateToscaTemplateByID**
> 'String' updateToscaTemplateByID(id, opts)

Updates exisintg topolog template



### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var id = "id_example"; // String | ID of topolog template to return

var opts = { 
  'file': "/path/to/file.txt" // File | tosca Template description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateToscaTemplateByID(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of topolog template to return | 
 **file** | **File**| tosca Template description | [optional] 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain

<a name="uploadToscaTemplate"></a>
# **uploadToscaTemplate**
> 'String' uploadToscaTemplate(file)

upload a tosca template description file

uploads and validates TOSCA template file

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var file = "/path/to/file.txt"; // File | tosca Template description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadToscaTemplate(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| tosca Template description | 

### Return type

**'String'**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="userLogoutGet"></a>
# **userLogoutGet**
> userLogoutGet()

Logs out current logged in user session



### Example
```javascript
var Conf = require('conf');

var apiInstance = new Conf.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userLogoutGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userUsernameDelete"></a>
# **userUsernameDelete**
> userUsernameDelete(username)

Delete user

This can only be done by the logged in user.

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var username = "username_example"; // String | The name that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userUsernameDelete(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userUsernameGet"></a>
# **userUsernameGet**
> User userUsernameGet(username)

Get user by user name



### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.DefaultApi();

var username = "username_example"; // String | The name that needs to be fetched. Use user1 for testing. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUsernameGet(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

