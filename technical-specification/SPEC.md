# Specification

The specification is designed as follows.

## Definitions
A *node* is a Bluetooth enabled device which can share messages with another.

Nodes can either be internet enabled or not internet enabled.

Nodes can either be dynamic or static in geographic location.

## Flow
The process starts with a user on any node creating a message. This message is stored locally on the device (1).

If the node is static then the message is sent to central server (2).

If the node is dynamic then whenever it comes into contact with any other node the message will be shared (3).

To receive a message a node must come into contact with another node or sync to the server via an internet connection (4).

Through the variety of communication methods messages will propagate through devices via Bluetooth and ultimately through the internet to spread to other devices.

A device can be wired to another for a wired connectivity. Messages, again, can be synced via this method.

## Technical implementation
(1) When the user creates a message some metadata is included. The time of sending and a name to describe the sender. It will then be encrypted with the public key of the receiver. This encrypted data is then wrapped again with more metadata including a unique ID.

(2) A simple HTTP request to a NodeJS server with a MongoDB database would achieve this.

(3) Through BLE technology messages can be sent between devices. Devices can check whether the unique ID associated with the message has already been stored and ignore it if it has. 

(4) When connected to the internet the same transfer system is used but with a central server on the internet.  

