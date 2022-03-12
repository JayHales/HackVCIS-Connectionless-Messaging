# Halo Communication
>Hear and be heard in disaster zones.

by Josh Hales
![HackVCIS 2022 Logo](https://hackvcis.com/img/splash_logo.png "HackVCIS Logo")

------------
## Inspiration
Around the world, as wars are waged and natural disasters strike the most impoverished of areas communicating with loved ones, friends, emergency services and governments become an enormous and extremely expensive effort. For example, with the current conflict in Ukraine Elon Musk sent thousands of Starlink devices into the country for citizens and the government to maintain communication internally and externally. 

But what if a solution could be implemented with the technology which already exists in the affected area. What if the technology was already sat in our pockets?

It was these questions and their respective answers which inspired me to develop this project.

We are very used to using WiFi or cellular signals to connect to the internet to message one another and we are also very used to using Bluetooth to connect our headphones but what if we could combine those two features at a minimal cost.
## What it does
This project involves the use of Low Energy Bluetooth technology to synchronise a global database of user-generated messages across Bluetooth enabled devices across the world. This allows messages to propagate geographically across the globe, into and out of areas of poor or no signal so that the people out and in of the critical zone can maintain critical contact with loved ones and emergency personnel. 

The technology for such an ambitious project was developed by the UK government during the COVID-19 pandemic to track close contacts of positive cases. Devices would share their location when nearby via Bluetooth. This could be reworked to share text messages. 
## How I built it
Unfortunately, due to obvious security issues the technology is not publically available to developers with usage being limited to specific apps developed with Apple and Google respectively, however, I did develop a functioning front end implementation which allows for simulation of certain features to show how such an app would work.
As well as this, I also wrote a technical specification detailing the specific details regarding security and practicality which led the way in the client app.

The app was written in React and packed for the web. This allows everyone to visit it with ease and the similarity of React to React Native would make porting the site to an actual app relatively simple: only the debugger used for simulating events would need to be attached to various system input events.

The site is currently being served on a Linux server through Apache. It can be visited at https://jayhal.es/hackvcis2022
## Challenges I ran into
The most obvious issue was the restriction on available technology. This was overcome through a debugger which allowed me to build a functioning client to show clear a proof of concept.

The second issue I tackled was the idea of security and keeping messages safe on devices. I considered developing a blockchain solution but after some research and testing, I found that this system was too bloated for a realistic use case and instead opted for each user to be given private and public keys. Users would broadcast messages encrypted with the public key of the person they wish to send the message to. This would then mean a client needs only to check whether their key can decrypt any incoming messages and such messages are displayed. Others are then saved and retransmitted later on.
## Accomplishments that I'm proud of
I am particularly proud of my time management. Being in a different time zone to where the competition was organised I ended up with two nights interfering with my hacking. Furthermore, I worked a Saturday job which meant I had to focus hard on ensuring my project got to a finished state.

Furthermore, my React skills developed very quickly given this tight time frame which I feel very proud of.
## What I learnt
I have learnt huge amounts about close proximity wireless technology as well as web deployment of React apps which I had never successfully done before. Managing a large project in terms of documentation and file structures was also another key skill that I feel I have developed over the course of the event
## What's next
The future of Halo Communication remains relatively uncertain. I would love to continue to develop and work on this project, hopefully with some teammates at some point, unfortunately, as I have already stated the technology is somewhat limited to those in official positions.

I could design a system that uses NFC communication and terminals which could be deployed around the world which would work in a similar way but would remove the passive propagation which is the backbone of the system.
![Halo Communication Banner](https://jayhal.es/hackvcis2022/thumbnail.png "Halo Communication Banner")

