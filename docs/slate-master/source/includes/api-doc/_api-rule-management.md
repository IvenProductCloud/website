## Rule Management API

The API to create, edit, update and delete rules to satisfy the business need for the devices and applications.

### POST : Create Alarm Definition

> Create Alarm Definition

```json
{
	"spaceId":"bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
	"name":"SampleAlarmDefiniton",
	"severity":"WARNING"
}
```

> Expected Response (200)

```json
{
    "id": "aafc75d6-65c7-4f03-b4ff-25a854548530"
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

`POST http://api.ivenplatform.com/alarms/definitions`


Severity Types|
--------------|
CRITICAL |
ERROR |
WARNING |
INFO |

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** | space for creating alarm definition (UUID)
**`name`** | alarm definitions unique name
**`description`** | alarm definitions additional informations
**`severity`** | alarm definition type

#### Response Parameters

parameter | description
----------|-------------
**`id`** | IVEN Platform give an unique id for alarm definiton (UUID)

### GET : Alarm Definiton Details

> Expected Response (200)

```json
{
    "id": "aafc75d6-65c7-4f03-b4ff-25a854548530",
    "name": "SampleAlarmDefiniton",
    "description": null,
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "severity": "WARNING",
    "createdAt": 1540974813186,
    "updatedAt": 1540974813186,
    "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
    "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
    "alarms": {
        "items": [],
        "page": 1,
        "pageSize": 5,
        "count": 0,
        "pageCount": 1,
        "first": true,
        "last": true,
        "paged": false,
        "empty": true
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

`GET http://api.ivenplatform.com/alarms/definitions/<alaramDefinitionId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`alarmDefinitionId`** | alarmDefinitonId that want to see details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`alarmDefinitionId`** | gives alarm definition's unique id
**`name`** | gives alarm definition's unique name
**`description`** | gives alarm definition's description
**`spaceId`** | gives alarm definition's space id (UUID)
**`severity`** | gives alarm severity type
**`createdBy`** | who created the alarm definition 
**`updatedBy`** | who last updated the alarm definition
**`createdAt`** | when created the alarm definition
**`updatedAt`** | when last updated the alarm definition
**`alarms`** | gives defined alarm relations 


### GET : List Alarm Definitons by Space Id

> Expected Response (200)

```json
{
    "alarmDefinitions": {
        "items": [
            {
                "id": "8a938757-ba29-4ead-a60d-2376ed7bb8da",
                "name": "High Temperature",
                "description": null,
                "severity": "CRITICAL",
                "createdAt": 1540975307695,
                "updatedAt": 1540975307695,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "alarmStatuses": {},
                "alarmCount": 0
            },
            {
                "id": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
                "name": "Example-AlarmDefiniton",
                "description": null,
                "severity": "WARNING",
                "createdAt": 1540975245005,
                "updatedAt": 1540975245005,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "alarmStatuses": {},
                "alarmCount": 0
            },
            {
                "id": "aafc75d6-65c7-4f03-b4ff-25a854548530",
                "name": "SampleAlarmDefiniton",
                "description": null,
                "severity": "WARNING",
                "createdAt": 1540974813186,
                "updatedAt": 1540974813186,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "alarmStatuses": {},
                "alarmCount": 0
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 3,
        "pageCount": 1,
        "first": true,
        "last": true,
        "paged": false,
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

`GET http://api.ivenplatform.com/alarms/definitions?spaceId=<spaceId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`spaceId`** | spaceId that want to see alarm definition details (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** | which space will be displayed (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: "severity", default settings at "createAt") - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: "ASC") - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives alarm definition's unique id
**`name`** | gives alarm definition's unique name
**`description`** | gives alarm definition's description
**`severity`** | gives alarm severity type
**`createdBy`** | who created the alarm definition 
**`updatedBy`** | who last updated the alarm definition
**`createdAt`** | when created the alarm definition
**`updatedAt`** | when last updated the alarm definition
**`alarmStatuses`** | item counts of alarm statuses that fired
**`alarmCount`** | how many times that alarm fired

### POST : Create Rule

> Create Rule Request Body

```json
{
	"spaceId":"bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
	"name": "example_rule",
	"description": "rule-dscription",
	"triggerEvent":"DeviceDataReceived",
	"condition" : {
        	"eventCondition" : {
        		"expression" : "metadata.tags.year == 2017"
        	}
        },
    "actions" : [
        	{
        	"type" : "CREATE_ALARM",
        	"entityId" : "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
        	"payload" : {
        		"message" : "custom rule message"
        		}
        	}
        ]
}
```

> Expected Response (200)

```json
{
    "id": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb"
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

`POST http://api.ivenplatform.com/rules`

Action Types |
-------------|
CREATE_ALARM |
CLEAR_ALARM |

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** | space id for creating rule
**`name`** | rule's unique name
**`description`** | additional information for rule
**`triggerEvent`** | describe how triggered a rule 
**`condition/eventCondition/expression`** | which device property/tag listen for trigger a rule 
**`actions/type`** | alarm type
**`actions/entityId`** | alarm definition id for create relation (UUID)
**`actions/payload/message`** | custom message when rule triggered

#### Response Parameters

parameter | description
----------|-------------
**`id`** | IVEN Platform gives unique id for created rule

### GET : Rule Details

> Expected Response (200)

```json
{
    "rule": {
        "id": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
        "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
        "name": "example_rule",
        "description": "rule-dscription",
        "triggerEvent": "DeviceDataReceived",
        "condition": {
            "eventCondition": {
                "expression": "metadata.tags.year == 2017"
            }
        },
        "windowOperation": null,
        "actions": [
            {
                "type": "CREATE_ALARM",
                "entityId": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
                "payload": {
                    "message": "custom rule message"
                }
            }
        ],
        "status": "ENABLED"
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

`GET http://api.ivenplatform.com/rules/<ruleId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`ruleId`** | ruleId that want to see rule details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives which rule is lokking for
**`spaceId`** | gives which space is looking for
**`name`** | gives rule name
**`description`** | gives rule description
**`triggerEvent`** | gives which event triggered with this request
**`condition`** | gives which condition is controlling
**`windowOperation`** | 
**`actions`** | gives which operation will apply
**`status`** | gives rule status (ENABLED/DISABLED)

### PUT : Update Rule

> Update Request Body

```json
{
	"name": "test-rule-updated",
	"description": "updated-rule-dscription"
}
```

> Expected Response (200)

```json
{
    "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
    "name": "example_rule_updated",
    "description": "updated-rule-dscription"
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

`PUT http://api.ivenplatform.com/rules/<ruleID>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`ruleId`** | ruleId that want to see rule details (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`name`** | rule name want to change
**`description`** | rule description want to change

#### Response Parameters

parameter | description
----------|-------------
**`ruleId`** | gives which rule looking for
**`name`** | gives updated rule name
**`description`** | gives update rule description

### PUT : Enable Rule

> Request Body

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

`PUT http://api.ivenplatform.com/rules/<ruleId>/enable`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`ruleId`** | ruleId that want to see rule details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolen result of operation

### PUT : Disable Rule

> Request Body

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

`PUT http://api.ivenplatform.com/rules/<ruleId>/disable`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`ruleId`** | ruleId that want to see rule details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolen result of operation

### GET : List Rules of Space

> Expected Response (200)

```json
{
    "rules": {
        "items": [
            {
                "ruleId": "51d8d979-ec21-4bbc-b23a-c733ceeeefc6",
                "name": "test-rule",
                "createdAt": 1540976503966,
                "createdBy": "",
                "status": "DISABLED",
                "updatedAt": 1540977577966,
                "updatedBy": ""
            },
            {
                "ruleId": "2487dc25-7253-4004-8fc0-abb949ac9827",
                "name": "high_temp_rule",
                "createdAt": 1540982058135,
                "createdBy": "",
                "status": "ENABLED",
                "updatedAt": 1540982058135,
                "updatedBy": ""
            },
            {
                "ruleId": "5059ddca-46ed-45b0-b41c-eb3740c43558",
                "name": "high_temperature_rule",
                "createdAt": 1540982172134,
                "createdBy": "",
                "status": "ENABLED",
                "updatedAt": 1540982172134,
                "updatedBy": ""
            },
            {
                "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
                "name": "example_rule",
                "createdAt": 1540982383964,
                "createdBy": "",
                "status": "ENABLED",
                "updatedAt": 1540982383964,
                "updatedBy": ""
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 5,
        "first": true,
        "last": true,
        "pageCount": 1,
        "paged": false,
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
```> Logout Account Response / Expired Token Response (401)

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

`GET http://api.ivenplatform.com/rules?spaceId=<spaceId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`spaceId`** | spaceId that want to see rule list (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** |  (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`ruleId`** |
**`name`** |
**`createdAt`** | when last updated the alarm definition
**`createBy`** | who created the alarm definition 
**`status`** |
**`updatedAt`** | when created the alarm definition
**`updatedBy`** | who last updated the alarm definition
**``** |

### DELETE : Delete Rule

> Request Body

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

> After `Delete Rule` Control the Rule List

```json
{
    "rules": {
        "items": [
            {
                "ruleId": "51d8d979-ec21-4bbc-b23a-c733ceeeefc6",
                "name": "test-rule",
                "createdAt": 1540976503966,
                "createdBy": "",
                "status": "DISABLED",
                "updatedAt": 1540977577966,
                "updatedBy": ""
            },
            {
                "ruleId": "5059ddca-46ed-45b0-b41c-eb3740c43558",
                "name": "high_temperature_rule",
                "createdAt": 1540982172134,
                "createdBy": "",
                "status": "ENABLED",
                "updatedAt": 1540982172134,
                "updatedBy": ""
            },
            {
                "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
                "name": "example_rule",
                "createdAt": 1540982383964,
                "createdBy": "",
                "status": "ENABLED",
                "updatedAt": 1540982383964,
                "updatedBy": ""
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 5,
        "first": true,
        "last": true,
        "paged": false,
        "pageCount": 1,
        "empty": false
    }
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`DELETE http://api.ivenplatform.com/rules/<ruleId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`ruleId`** | ruleId that want to delete  (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolen result of operation


### GET : List Alarms by Space Id

> Expected Response (200)

```json
{
    "alarms": {
        "items": [
            {
                "id": "37dbaaa9-fdd4-4c8d-8260-0c00737f6480",
                "alarmDefinitionId": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
                "groupingType": "SINGLE",
                "deviceId": "969597bf-31cb-4ad1-9ab8-8f33615c2f91",
                "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
                "alarmStatus": "ACTIVE",
                "count": 2,
                "createdAt": 1540982479122,
                "updatedAt": 1540982523070,
                "lastTriggerData": {
                    "temp": 45
                },
                "lastPayload": "custom rule message"
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 1,
        "pageCount": 1,
        "first": true,
        "last": true,
        "paged": false,
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

`GET http://api.ivenplatform.com/alarms?spaceId=<spaceId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`spaceId`** | spaceId that want to see alarm list (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** |  (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives alarm's unique id by IVEN Platform
**`alarmDefinitionId`** | gives alarm definition's id
**`groupingType`** | 
**`deviceId`** | which device triggered the rule
**`ruleId`** | which rule related with the alarm
**`alarmStatus`** | alarm status is ready for trigger or not
**`count`** | how many times alarm triggered
**`createdAt`** | when created the alarm
**`updatedAt`** | when created the alarm
**`lastTriggerData/<propertyName(s)>`** | last triggered property name for given alarm
**`lastPayload`** | last published message


### GET : Alarm Details

<aside class="notice">
This operation doing with MQTT connection!</p>
<b>For observe rule triggers: after connect to device with MQTT connection, space member should <code>publish</code> a data to <code>evt</code> topic.</b>
</aside> 

> Expected Response (200)

```json
{
    "id": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
    "alarmDefinitionId": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
    "groupingType": "SINGLE",
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "alarmStatus": "ACTIVE",
    "deviceId": "969597bf-31cb-4ad1-9ab8-8f33615c2f91",
    "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
    "count": 2,
    "createdAt": 1540982479122,
    "updatedAt": 1540982523070,
    "createdBy": null,
    "updatedBy": null
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

`GET http://api.ivenplatform.com/alarms/<alarmId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`alarmId`** | alarmId that want to see alarm details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives alarm's unique id by IVEN Platform
**`alarmDefinitionId`** | gives alarm definition's id
**`groupingType`** |
**`spaceId`** | which space includes the given alarm
**`alarmStatus`** | alarm status is ready for trigger or not
**`deviceId`** | which device triggered the rule
**`ruleId`** | which rule related with the alarm
**`count`** | how many times alarm triggered
**`createdAt`** | when created the alarm
**`updatedAt`** | when last updated the alarm
**`createdBy`** | who created the alarm
**`updatedBy`** | who last updated the alarm

### PUT : Update Alarm Status

> Request Body

```json
{
	"alarmStatus":"ACKNOWLEDGED"
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

> After `Update Alarm Status` Control the Alarm Details 

```json
{
    "id": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
    "alarmDefinitionId": "0178c406-0c90-4fbe-93f4-8d3205aa7f1a",
    "groupingType": "SINGLE",
    "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "alarmStatus": "ACKNOWLEDGED",
    "deviceId": "969597bf-31cb-4ad1-9ab8-8f33615c2f91",
    "ruleId": "e5ed598f-7fc2-463e-afa5-20abddc9f3eb",
    "count": 2,
    "createdAt": 1540982479122,
    "updatedAt": 1540982523070,
    "createdBy": null,
    "updatedBy": null
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/alarms/<alarmId>`

Alarm Statuses |
---------------|
ACTIVE |
ACKNOWLEDGED |
CLEARED |

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`alarmId`** | ruleId that want to update alarm status (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`alarmStatus`** | which status will be effect to alarm

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolen result of operation
