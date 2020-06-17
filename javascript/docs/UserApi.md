# Conf.UserApi

All URIs are relative to *https://localhost/conf-api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userLoginGet**](UserApi.md#userLoginGet) | **GET** /user/login | Logs user into the system
[**userUsernamePut**](UserApi.md#userUsernamePut) | **PUT** /user/{username} | Updated user


<a name="userLoginGet"></a>
# **userLoginGet**
> 'String' userLoginGet(username, password)

Logs user into the system



### Example
```javascript
var Conf = require('conf');

var apiInstance = new Conf.UserApi();

var username = "username_example"; // String | The user name for login

var password = "password_example"; // String | The password for login in clear text


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userLoginGet(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userUsernamePut"></a>
# **userUsernamePut**
> userUsernamePut(username, body)

Updated user

This can only be done by the logged in user.

### Example
```javascript
var Conf = require('conf');
var defaultClient = Conf.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Conf.UserApi();

var username = "username_example"; // String | name that need to be updated

var body = new Conf.User(); // User | Updated user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userUsernamePut(username, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| name that need to be updated | 
 **body** | [**User**](User.md)| Updated user object | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

