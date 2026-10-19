# MQTT

## What is MQTT?

MQTT(Message Queuing Telemetry Transport) is light weigth publish/subscribe based messaging protocol. MQTT is the popular message transport protocol for IoT(Internet of Things) ecosystem. The main difference between HTTP(Hyper Text Transport Protocol) and MQTT is the packet sizes  of the messages. In MQTT packet sizes are much more smaller than HTTP packet sizes. This is an important advantange for Machine to Machine (M2M) messages in IoT ecosystem. Additionaly, MQTT supports bidirectional connection for any system.

## Connect/Disconnect

Client want to send a message to a device or take a message from the device, however the device must be connected to IVEN Platform. When the device status in IVEN Platform shows CONNECTED than device can take control of device. When the device connected to MQTT Broker, device or device can send or take any messages. After session ends broker close the device connection and device connection status displays as DISCONNECTED. Additionally, if device wants to close the connection, device is able do so.

### MQTT Requirements

IVEN uses password based authentication connection for connecting the MQTT broker.

`MQTT Broker Host : mqtt://mqtt.qa.ivenplatform.com `<br>
`MQTT Broker Port : 1883 `<br>
`Protocol : mqtt/tcp `<br>
`Username : `<br>
`Password : `<br>
`Keep Alive : 30`<br>

## Publish/Subscribe

### Topic

A device needs to pull(subscribe) or send(publish) message to the producer. Therefore, the device needs a topic in order to identify the action.

### Subscribe

Subscribe is needed for pulling messages from IVEN Platform. If a device subscribe to a topic, than the device can take the data sended to that topic using the MQTT Broker.

### Publish

Publish is needed for sending messages to IVEN Platform. If the user publish a message from IVEN Platform, than the message is transmitted to the devices which are subscribed to the related topic.


## IVEN MQTT Topics


> IVEN MQTT Topic Formats

```json
{
  "type": "act",
  "topicName": "v1/act/<accessToken>",
}
{
  "type": "cmd",
  "topicName": "v1/cmd/<deviceId>",
}
{
  "type": "frm",
  "topicName": "v1/frm/<deviceId>",
}
{
  "type": "evt",
  "topicName": "v1/evt/<deviceId>",
}
{
  "type": "fdb-frm",
  "topicName": "v1/fdb-frm/<deviceId>",
}
{
  "type": "fdb-cmd",
  "topicName": "v1/fdb-cmd/<deviceId>",
}
{
  "type": "test",
  "topicName": "v1/test/<deviceId>",
}
{
  "type": "syslog",
  "topicName": "v1/syslog/<deviceId>",
}
```

 Topic Name | Topic Type | Description 
------------|------------|-------------
**act** | SUBSCRIBE | After device registration, a space member has a Device ID and Activation token.User can have this topic Connected Device subscribes to v1/act/activationToken in order to get activation info (part of registration).By using activation token, user can learn topics to subscribe or publish. After device get activation, then device automatically
**cmd** | SUBSCRIBE | Devices will publish to following topics in order to notify the system about previously sending commands statuses
**frm** | SUBSCRIBE | Devices will subscribe to following topics for getting update firmware requests
**evt** | PUBLISH | Devices will publish to following topics in order to notify the system about device streaming
**fdb-frm** | PUBLISH | Devices will publish to following topics in order to notify the system about previously sending firmwares statuses
**fdb-cmd** | PUBLISH | Devices will publish to following topics in order to notify the system about previously sending commands statuses
**test** | PUBLISH | Devices will publish to following topic for testing connectivity
**syslog** | PUBLISH | Device will publish to following topic for logging all activities of the device
