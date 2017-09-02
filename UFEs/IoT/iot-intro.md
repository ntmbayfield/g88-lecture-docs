theme: Sketchnote, 2
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

![](http://blueapp.io/wp-content/uploads/2015/11/Internet-of-thinsgs.jpg)

---

###Objectives
- Be able to articulate the differences between Arduino & Raspberry Pi
- Be able to blink an LED on your platform of choice
- Be able to articulate the benefits/risks of IoT devices

---

###Why?
Why would we want to start connecting physical machines/electronics to the Internet? Only if the benefits outweigh the costs. Often times they don't. Let's take a look:

[Internet of Useless Things](http://www.internetofuselessthings.io/)
[We Put a Chip in it!](https://weputachipinit.tumblr.com/)

---

###IoT that doesn't suck

[Quadraplegic Driver](http://www.popsci.com/internet-things-project-allows-quadraplegic-driver-to-race)
[Smart Meeting Rooms](http://www.instructables.com/id/Smart-Meeting-Rooms-Intel-IoT/)
Remote monitoring of patient vitals
Devices to monitor pollution and weather
Sensor networks to track ocean and wildlife

---

###Inputs (What can we sense from the real world?)

.|.|.
---|---|---
buttons/knobs/faders|cameras|microphones
joysticks|photosensors|current/voltage
mice/trackballs/touchscreens|distance sensors|conductivity
vibration|motion sensors|Geiger counter
temperature|body heat (IR) sensors|magnetometers
pressure sensors|radar/LIDAR|hall effect
gyros/accelerometers|biometric scanners|gas and flow
altimeter|barcode scanners|barometer

---

###Outputs (How can we affect the real world?)
LEDs, LCD displays, projectors, lasers, speakers, motors/servos, printers, tactile, scent generators, solenoids, power tools :-)

![](http://carolinabowling.com/portals/0/CBC/design-laser-abstract-HD-wallpaper-android.jpg?ver=2016-07-07-122317-000)

---

###Microcontroller or Microcomputer?

Something has to run the logic to tie inputs to outputs, and talk to servers...

---

###Microcomputer: Raspberry Pi 3 (~$35)
  - Boots full Linux (Debian)
  - HDMI video output
  - Largely works as a small standard computer
  - GPIO pins to connect sensors/outputs
  - Expansion boards available
  - Wide choice of programming languages, tools
  - Great support in schools + education + community
  - Low power for a computer (similar to smartphone)

**RPi 3= 1.2 GHz 4-Core CPU, GPU, 1 GB RAM, USB, SD Card, Ethernet+WiFi**

---

![fit](https://www.extremetech.com/wp-content/uploads/2016/02/Pi3BreakoutFeb292016-640x404.png)

---

###Microcontroller: Arduino One (~$25)
  - Code runs "directly on the metal"
  - Typically programmed in C w/ Arduino library
  - Lots of handy connections for sensors/outputs (ADC, PWM)
  - No USB (host), video, audio, or networking by default
  - Simple video, audio, networking can be added with "shields"
  - Lots of shield choices, more than any other board
  - Most mature + widest community, started the hobby trend
  - Sips power, with good coding, could run for a year on 2 AA batteries

**Arduino One= 16MHz 8-bit CPU, 2KB RAM, 32KB Flash**

---

![fit](https://blog.arduino.cc/wp-content/uploads/2012/05/ArduinoUno_R3_Pinouts_600.png)

---

###Comparison
“My Pi is better at talking to people (running a web server). My Arduino is better at talking to machine parts (moving motors).” - some guy on Reddit

RPi is good when you need processing power, language/toolkit flexibility, and lots of internet communications or to provide services. Arduino is much better at talking to lots of sensors and hardware bits.

Don't like the options? There's zillions: [LINK](https://www.slant.co/topics/1629/community/~best-single-board-computers)

Good alternatives: BeagleBone, Espruino, Tessel, Intel Edison

---

###Example IoT Solution: Keycards
How does the keycard swipe system at Galvanize work?

![](https://media1.s-nbcnews.com/j/streams/2013/july/130725/8c8393740-130725-electronic-key-card-3p.nbcnews-ux-2880-1000.jpg)

---

###Consider:
Probably when a new member gets handed a keycard, before doing so it is assigned to that person in a database somewhere.

Probably facilitated by some kind of web app.

When you swipe your card how does it know whether you are authorized or not to unlock the door?

IoT!!!!

---

###Door system is comprised of:
- An RFID (short range) reader
- An RFID card with a unique ID
- Some sort of device that connects to the Internet
- A solenoid or magnetic lock mechanism that can be electronically triggered

When you swipe your card, the microcomputer interrogates the RFID card via the reader to get the ID. It then queries a remote server/database to see if this ID exists in the database and is not disabled. If all is good, the server responds that the swipe is valid, and then with this response info the microcomputer triggers the unlock solenoid mechanism.

---

###Arduino LED Demo
Let's try a simple tutorial for making an LED blink on our Arduino

[https://www.arduino.cc/en/tutorial/blink](https://www.arduino.cc/en/tutorial/blink)

---

###Security in IoT aka A GIGANTIC problem that many overlook
Don't be like all the irresponsible IoT companies out there, opening up vulnerabilities into people's homes and workplaces, and worse yet in public.

[Alarmingly Easy for Hackers to Control Your Hotel Room](http://gizmodo.com/its-alarmingly-easy-for-hackers-to-control-your-hotel-r-1607152834)
[WikiLeaks discloses details of CIA hacking IoT, mobile devices](https://internetofbusiness.com/wikileaks-cia-iot-hacking/)
[This Teen Hacked 150,000 Printers](https://motherboard.vice.com/en_us/article/this-teen-hacked-150000-printers-to-show-how-the-internet-of-things-is-shit)
[When 'Smart Homes' Get Hacked](https://www.forbes.com/sites/kashmirhill/2013/07/26/smart-homes-hack/#23c5eb2ee426)

The ease with which people are hacking smart homes, traffic lights and roadside signs and things is somewhat alarming. Default password issues aside, there are too many instances of insecure IoT traffic (lack of encryption), situations of unsecured ports, backdoors, bugs...

---
###Privacy (#DontBeACreeper)
Backdoors are becoming very common in devices. By definition, these devices "phone home", but with what data? **Ask yourself, given the sensors and inputs to the device, what is possible to monitor?** It has become trivial and cheap to integrate cameras, microphones, and other privacy-compromising sensors. Now it is trivial to connect those sensors to the Internet.

Do you trust these companies who make these products to not sell your data? Consider that if people can make profit with your data, they often will. Laws are very unclear about all this stuff.

---

The danger of IoT applications is that now physical systems are far more vulnerable to being hacked. See Stuxnet.

Don't leave the front door open on your IoT project so others can so easily use it for bad intentions. Most devs mean well, but it's amazing how security and safety can go out the window for startups that are constantly fighting to stay alive and deliver a product ASAP and meet investor demands.

---

###Getting Started Resources: Crackasmackadackalackin
[Dead Simple RPi Setup](https://www.howtogeek.com/173101/how-to-enjoy-dead-simple-raspberry-pi-setup-with-noobs/)
[RPi LED Blink with Node.js](http://www.instructables.com/id/JavaScript-for-IoT-Blinking-LED-on-Raspberry-Pi-Wi/)
[RPi Morse Code LED w/ Node](http://thejackalofjavascript.com/raspberry-pi-node-js-led-emit-morse-code/)

[2 LED Arduino Tutorial](http://www.ladyada.net/learn/arduino/lesson3.html)
[Arduino LED + Button](https://www.youtube.com/watch?v=YWY_Is0L7fE)
Explore the examples built in to the Arduino IDE
