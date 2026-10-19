## Device Management API

The API to create devices, monitor data streaming, manage connectivity and send commands to the devices under the same space.

### POST : Device Create

> Create Device on IVEN Platform

```json
{
    "propertiesSchema": {
       "$schema": "http://json-schema.org/draft-04/schema#",
       "type": "object",
       "properties": {
           "temp": {
               "type": "number"
           },
           "high_temp": {
               "type": "boolean",
               "function": "temp>81"
           },
           "temp_kelvin":{
               "type": "number",
               "function":"temp+273"
           }
       }
   },
    "tags":{
    	"tagName":"deneme"
    	
    },
    "verifyPayload":false,
    "name":"test-device",
    "uniqueId":"3oy59n5cpkdw2glh16ge",
    "spaceId":"bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea"
}
```

> Expected Response (200)

```json
{
    "id": "214e68fd-8b59-4e72-aa9d-058433a44328"
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/devices`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`propertiesSchema`** | device properties that send/receive data types to device. Additionaly IVEN Platform supports MVEL. With MVEL operations space member can describe a special property of change of any property. 
 | **Example:** Space member describe "temp" property to data operations and member can describe a new property that control/check/type transformation etc. of "temp" property. "high_temp" is a boolean parameter and checks "temp" bigger "81" or not. "temp_kelvin" is a number parameter and transform Calcius to Kelvin.
**`tags`** | device specific tags for grouping devices
**`verifyPayload`** | 
**`name`** | device name (should be unique)
**`uniqueId`** | device specific id (should be unique) (UUID)
**`spaceId`** | space id of creating device

#### Response Parameters

parameter | description
----------|-------------
**`id`** | special id of created device (UUID)

### GET : Device Details With DeviceId

> Expected Response (200)

```json
{
    "id": "214e68fd-8b59-4e72-aa9d-058433a44328",
    "name": "test-device",
    "description": null,
    "uniqueId": "3oy59n5cpkdw2glh16ge",
    "templateId": null,
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "assignedFirmwareVersion": null,
    "assignedFirmwareId": null,
    "reportedFirmwareVersion": null,
    "testModeActivated": true,
    "tags": {
        "tagName": "deneme"
    },
    "propertiesSchema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "temp": {
                "type": "number"
            },
            "high_temp": {
                "type": "boolean",
                "function": "temp>81"
            },
            "temp_kelvin": {
                "type": "number",
                "function": "temp+273"
            }
        }
    },
    "status": "ACTIVE",
    "connectionStatus": "DISCONNECTED",
    "topicInfoDeliveryStatus": "TOPIC_INFO_SENT",
    "currentSecretId": "c500b5eb-b76b-43e2-a0d8-988c6fa45f1f",
    "desiredSecretId": null
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

`GET http://api.ivenplatform.com/devices/<deviceId>` 

<aside class="notice">
This operation doing with HTTP connection!
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceID`** | deviceId that want to see details (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | given device id from IVEN Platform (UUID)
**`name`** | given device name by space member
**`description`** | given device description by space member
**`uniqueId`** | given unique id by space member 
**`templateId`** | reference template id for tags and properties
**`spaceId`** | which space belong to given device
**`assignedFirmwareVersion`** | which firmware version assigned to given device
**`assignedFirmwareId`** | assigned firmware id to device
**`reportedFirmwareVersion`** | which firmware version accepted by device
**`testModeActivated`** | test mode status (TRUE/FALSE)
**`tags`** | given device tags by space member
**`propertiesSchema`** | given device properties by space member
**`status`** | device status
**`connectionStatus`** | device connection status
**`topicInfoDeliveryStatus`** | topic info delivery status
**`currentSecretId`** | which secret id hashed with device id at device register
**`desiredSecretId`** | which secret key is acceptaple alternatively


Device Status Parameters |
-------------------------|
NOT_CREATED |
CREATED |
ACTIVE |
PASSIVE |
DELETED |

Device Connection Status Parameters |
----------|
UNKNOWN |
CONNECTED |
DISCONNECTED |

Topic Information Status Parameters |
------------------------------------|
TOPIC_INFO_NOT_PUBLISHED |
TOPIC_INFO_PUBLISHED |
TOPIC_INFO_SENT |
TOPIC_INFO_DELIVERED |

### GET : Device Details With UniqueId

> Expected Response (200)

```json
{
    "id": "214e68fd-8b59-4e72-aa9d-058433a44328",
    "name": "test-device",
    "description": null,
    "uniqueId": "3oy59n5cpkdw2glh16ge",
    "templateId": null,
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "assignedFirmwareVersion": null,
    "assignedFirmwareId": null,
    "reportedFirmwareVersion": null,
    "testModeActivated": true,
    "tags": {
        "tagName": "deneme"
    },
    "propertiesSchema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "temp": {
                "type": "number"
            },
            "high_temp": {
                "type": "boolean",
                "function": "temp>81"
            },
            "temp_kelvin": {
                "type": "number",
                "function": "temp+273"
            }
        }
    },
    "status": "ACTIVE",
    "connectionStatus": "DISCONNECTED",
    "topicInfoDeliveryStatus": "TOPIC_INFO_SENT",
    "currentSecretId": "c500b5eb-b76b-43e2-a0d8-988c6fa45f1f",
    "desiredSecretId": null
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

`GET http://api.ivenplatform.com/devices/uniqueId/<uniqueId>` 

<aside class="notice">
This operation doing with HTTP connection!
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`uniqueId`** | device uniqueId that want to see details (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | given device id from IVEN Platform (UUID)
**`name`** | given device name by space member
**`description`** | given device description by space member
**`uniqueId`** | given unique id by space member 
**`templateId`** | reference template id for tags and properties
**`spaceId`** | which space belong to given device
**`assignedFirmwareVersion`** | which firmware version assigned to given device
**`assignedFirmwareId`** | assigned firmware id to device
**`reportedFirmwareVersion`** | which firmware version accepted by device
**`testModeActivated`** | test mode status (TRUE/FALSE)
**`tags`** | given device tags by space member
**`propertiesSchema`** | given device properties by space member
**`status`** | device status
**`connectionStatus`** | device connection status
**`topicInfoDeliveryStatus`** | topic info delivery status
**`currentSecretId`** | which secret id hashed with device id at device register
**`desiredSecretId`** | which secret key is acceptaple alternatively


Device Status Parameters |
-------------------------|
NOT_CREATED |
CREATED |
ACTIVE |
PASSIVE |
DELETED |

Device Connection Status Parameters |
----------|
UNKNOWN |
CONNECTED |
DISCONNECTED |

Topic Information Status Parameters |
------------------------------------|
TOPIC_INFO_NOT_PUBLISHED |
TOPIC_INFO_PUBLISHED |
TOPIC_INFO_SENT |
TOPIC_INFO_DELIVERED |

### PUT : Activate Device

> Device Activate

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

> Already Activated Device Response (400)

```json
{
    "httpStatus": 400,
    "errorCode": "020005",
    "domain": "DEVICE",
    "devMessage": "Command io.iven.platform.device.impl.cmd.ActivateDevice@59f827d1 is invalid in the current state of app 214e68fd-8b59-4e72-aa9d-058433a44328 (ACTIVE)",
    "userMessage": "Invalid command",
    "time": 1542024888138
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/devices/<deviceId>/activate`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### PUT : Deactivate Device

> Device Deactivate Test Mode

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

> Already Deactivated Device Response (400)

```json
{
    "httpStatus": 400,
    "errorCode": "020005",
    "domain": "DEVICE",
    "devMessage": "Command io.iven.platform.device.impl.cmd.DeactivateDevice@560be9a2 is invalid in the current state of app 214e68fd-8b59-4e72-aa9d-058433a44328 (PASSIVE)",
    "userMessage": "Invalid command",
    "time": 1542024916337
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/devices/<deviceId>/deactivate`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### POST : Create Secret

> Create Secret

```json
{
	"name": "secretKey",
	"spaceId" : "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2e"
}
```

> Expected Response (200)

```json
{
    "id": "c500b5eb-b76b-43e2-a0d8-988c6fa45f1f",
    "key": "3c303f664fe4ea927b4a888aa28d9671"
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

> Already Exists Secret Key Response (409)

```json
{
    "httpStatus": 409,
    "errorCode": "050011",
    "domain": "DEVICE_AUTH",
    "devMessage": "Secret with provided name exists for space",
    "userMessage": "Secret with provided name exists for space",
    "time": 1542019079047
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/secrets`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`name`** | secret key name (should be unique)
**`spaceId`** | which space will create secret (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | special id of created secret key (for public use) (UUID)
**`key`** | special key of created secret key (for private use)

### GET : Secret Key List

> Expected Response (200)

```json
{
    "secrets": {
        "items": [
            {
                "id": "d02cc413-4819-41dd-94b2-78a7e74ef310",
                "name": "s-key",
                "enabled": true,
                "createdAt": 1540191915305,
                "updatedAt": 1540191915305,
                "createUserId": "",
                "updateUserId": ""
            },
            {
                "id": "f724af49-43b6-41be-847e-f5d1a51a6355",
                "name": "very-secret-key",
                "enabled": true,
                "createdAt": 1539608753700,
                "updatedAt": 1539608753700,
                "createUserId": "",
                "updateUserId": ""
            },
            {
                "id": "7cd85b73-dbae-4951-a954-2ec72d897c91",
                "name": "secret-key",
                "enabled": true,
                "createdAt": 1539587665106,
                "updatedAt": 1539587665106,
                "createUserId": "",
                "updateUserId": ""
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 3,
        "first": true,
        "last": true,
        "paged": false,
        "pageCount": 1,
        "empty": false
    }
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`GET http://api.ivenplatform.com/secrets?spaceID=<spaceId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`spaceId`** | which space will create secret (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | special id of created secret key (for public use) (UUID)
**`name`** | special key of created secret key (for private use)
**`enabled`** | gives secret key status (TRUE/FALSE)
**`createdAt`** | when created the secret key
**`updatedAt`** | when last updated the secret key
**`createUserId`** | who created the secret key information
**`updateUserId`** | who last updated the secret key information

### PUT : Enable Secret Key

> Enable Secret Key

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/secrets/<secretId>/enable`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### PUT : Disable Secret Key

> Disable Secret Key

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/secrets/<secretId>/disable`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### PUT : Device Register

> Device Register 

```json
{
	"secretId":"c500b5eb-b76b-43e2-a0d8-988c6fa45f1f"
}
```

> Expected Response (200)

```json
{
    "accessToken": "2f97d26007339785e41723d4442d1c4c",
    "deviceTopicItem": [
        {
            "type": "act",
            "topicName": "v1/act/2f97d26007339785e41723d4442d1c4c"
        },
        {
            "type": "evt",
            "topicName": "v1/evt/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "cmd",
            "topicName": "v1/cmd/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "frm",
            "topicName": "v1/frm/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "fdb-frm",
            "topicName": "v1/fdb-frm/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "fdb-cmd",
            "topicName": "v1/fdb-cmd/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "test",
            "topicName": "v1/test/214e68fd-8b59-4e72-aa9d-058433a44328"
        },
        {
            "type": "syslog",
            "topicName": "v1/syslog/214e68fd-8b59-4e72-aa9d-058433a44328"
        }
    ]
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

> Not Exists Secret Key Response (404)

```json
{
    "httpStatus": 404,
    "errorCode": "050100",
    "domain": "DEVICE_AUTH",
    "devMessage": "secret not found",
    "userMessage": "Secret not found",
    "time": 1542019181063
}
```

> Not Exists Device Register Response (400)

```json
{
    "httpStatus": 400,
    "errorCode": "020005",
    "domain": "DEVICE",
    "devMessage": "Command io.iven.platform.device.impl.cmd.GetDevice@59e647e3 is invalid in the current state of app 9082797b-1061-48fb-acb9-60efde5b6aba (NOT_CREATED)",
    "userMessage": "Invalid command",
    "time": 1542019239871
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/devices/<deviceId>/register`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### Request Parameter

parameter | description
----------|-------------
**`secretId`** | want to hash with given deviceId at url (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`accessToken`** | for use device connection operation
**`deviceTopicItem`** gives usable topic names with how to use (accessToken or deviceId)

### POST : Update Device Secret Key

> Update Device Secret Key

```json
{
	"secretId":"f724af49-43b6-41be-847e-f5d1a51a6355"
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

> After Update Secret Key Control Device

```json
{
    "id": "214e68fd-8b59-4e72-aa9d-058433a44328",
    "name": "test-device",
    "description": null,
    "uniqueId": "3oy59n5cpkdw2glh16ge",
    "templateId": null,
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "assignedFirmwareVersion": null,
    "assignedFirmwareId": null,
    "reportedFirmwareVersion": null,
    "testModeActivated": true,
    "tags": {
        "tagName": "deneme"
    },
    "propertiesSchema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "temp": {
                "type": "number"
            },
            "high_temp": {
                "type": "boolean",
                "function": "temp>81"
            },
            "temp_kelvin": {
                "type": "number",
                "function": "temp+273"
            }
        }
    },
    "status": "ACTIVE",
    "connectionStatus": "DISCONNECTED",
    "topicInfoDeliveryStatus": "TOPIC_INFO_SENT",
    "currentSecretId": "c500b5eb-b76b-43e2-a0d8-988c6fa45f1f",
    "desiredSecretId": "f724af49-43b6-41be-847e-f5d1a51a6355"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/devices/<deviceId>/updateSecret`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### GET : Device Topic List

> Expected Response (200)

```json
{
    "topicItems": [
        {
            "type": "act",
            "topicName": "v1/act/b10246ad6ecc37850e6ec18347b6217b"
        },
        {
            "type": "evt",
            "topicName": "v1/evt/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "cmd",
            "topicName": "v1/cmd/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "frm",
            "topicName": "v1/frm/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "fdb-frm",
            "topicName": "v1/fdb-frm/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "fdb-cmd",
            "topicName": "v1/fdb-cmd/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "test",
            "topicName": "v1/test/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        },
        {
            "type": "syslog",
            "topicName": "v1/syslog/4932833e-6b84-46c7-ba0e-85be1e5fb132"
        }
    ],
    "activationTopic": null,
    "eventTopic": null,
    "commandTopic": null,
    "firmwareTopic": null,
    "feedbackFirmwareTopic": null,
    "feedbackCommandTopic": null,
    "testTopic": null,
    "sysTopic": null
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`GET http://api.ivenplatform.com/devices/<deviceId>/topics`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Response Parameter

parameter | description
----------|-------------
**`type`** | gives IVEN Kafka Topic types
**`topicName`** | gives IVEN Kafka Topic names with how to use

### PUT : Device Activate Test Mode

> Device Activate Test Mode

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/devices/<deviceId>/activateTest`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### PUT : Device Deactivate Test Mode

> Device Deactivate Test Mode

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/devices/<deviceId>/deactivateTest`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`deviceId`** | deviceId that want to hash (UUID)

#### URL Request Parameter

parameter | description
----------|-------------
**`done`** | gives boolean result of operation

### SUBSCRIBE : Device Activate

> Subcribe Response Message

```json
{
  "messageId":"7d62267c-8b5b-46d5-aef6-67a91de538d5",
  "data":{
    "deviceId":"214e68fd-8b59-4e72-aa9d-058433a44328",
    "topicInfo":{
      "fdb-cmd":{
        "name":"v1/fdb-cmd/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"PUBLISH"
      },
      "fdb-frm":{
        "name":"v1/fdb-frm/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"PUBLISH"
      },
      "syslog":{
        "name":"v1/syslog/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"PUBLISH"
      },
      "cmd":{
        "name":"v1/cmd/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"SUBSCRIBE"
      },
      "evt":{
        "name":"v1/evt/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"PUBLISH"
      },
      "frm":{
        "name":"v1/frm/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"SUBSCRIBE"
      },
      "test":{
        "name":"v1/test/214e68fd-8b59-4e72-aa9d-058433a44328",
        "access":"PUBLISH"
      }
    }
  }
}
```

`SUBSCRIBE v1/act/2f97d26007339785e41723d4442d1c4c`

#### Request Parameter

<aside class="notice">
This operation doing with MQTT connection!
</aside>

**`v1/act/<accessToken>`** : after successfull connection, subscribe to this topic for take usable topic names to device

#### Reponse Parameters

**`messageId` :** IVEN Platform 

### PUBLISH : Data Send Request

> Publish Request Message

```json
{
  "temp":45,
}
```

> After send data

```json
{
    "deviceId": "214e68fd-8b59-4e72-aa9d-058433a44328",
    "connectionInfo": {
        "lastStatusUpdateTime": 1539790668656,
        "lastStatus": "CONNECTED"
    },
    "state": {
        "reported": {
            "temp": {
                "value": 45,
                "timestamp": 1539791149224
            },
            "high_temp": {
                "value": false,
                "timestamp": 1539791149224
            },
            "temp_kelvin": {
                "value": 318,
                "timestamp": 1539791149224
            }
        },
        "delta": {
            "temp": {
                "value": null,
                "timestamp": null
            },
            "high_temp": {
                "value": null,
                "timestamp": null
            },
            "temp_kelvin": {
                "value": null,
                "timestamp": null
            }
        }
    }
}
```

<aside class="notice">
This operation doing with MQTT connection!
</aside>

`PUBLISH v1/evt/214e68fd-8b59-4e72-aa9d-058433a44328`

#### Request Parameters

**`v1/evt/<deviceId>`** : after subscribe to `act` topic, for send data to IVEN Platform `publish` to this topic (UUID)

**`deviceProperties` :** want to send parameters that given device properties when device create operation

#### Response Parameters

After publish operation do not expect any response.

##### Data Control

<aside class="notice">
This operation doing with HTTP connection!
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

For control device details use `GET http://api.ivenplatform.com/devices/<deviceId>` 

#### Response Parameters

parameter | description
----------|-------------
**`deviceId`** | given device id (UUID)
**`connectionInfo`** | currently device state
**`state`** | given device property results
