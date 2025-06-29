# Introduction

---

## What is Internet & How it Started?

- Internet is not WWW (World Wide Web)
- ARPA (Advanced Research Projects Agency) & ARPANET 1969
- To connects American universities and research institutions.

<!--

Cold War Era

- ARPANET used packet switching to send data between computers.
- In 1983, ARPANET transitioned to the TCP/IP protocol suite, which is still used today.
  - TCP/IP stands for Transmission Control Protocol/Internet Protocol.

- The first web browser, WorldWideWeb, was created by Tim Berners-Lee in 1990.
- In 1991, the first website was created by Tim Berners-Lee.
- The World Wide Web became publicly accessible in 1993.

-->

---

## How the Internet Works in 5 Minutes

<!-- Start the vid at 46s -->

<Youtube id="7_LPdttKXPc" width="70%" height="70%" class="m-auto mt-4" />

---

### Sending/Receiving Data

<img src="../assets/images/how-internet-works.png" class="m-auto w-[60%] mt-4" alt="How internet works"/>

---

### Dividing Data Into Packets

<img src="../assets/images/packets.png" class="m-auto w-[60%] mt-4" alt="packets"/>

---

### Routing Packets

<img src="../assets/images/routing-packets.png" class="m-auto w-[60%] mt-4" alt="routing packets"/>

---

## How DNS Request Works

<!-- Start the vid at 45s -->

<Youtube id="72snZctFFtA" width="70%" height="70%" class="m-auto mt-4" />

---

### DNS Lookup Steps for `www.example.com.`

<img src="../assets/images/how-dns-works.png" class="m-auto w-[60%] mt-4" alt="How DNS works"/>

---

### DNS Caching in Windows

Windows stores DNS records to speed up future requests.

Type the following in Windows CMD to get a list of cached DNS records:

```
ipconfig /displaydns
```

<img src="../assets/images/dns-cache.png" class="m-auto w-[70%] mt-4" alt="dns cache"/>

---

You can edit the hosts file to **_override_** a domain name, or add a custom domain to a local IP address.

Any address there takes precedence over DNS lookups.

- Windows hosts file `C:\Windows\System32\drivers\etc\hosts`
- Linux hosts file `/etc/hosts`

---

## Request/Response Life Cycle

<Youtube id="hWyBeEF3CqQ" width="70%" height="70%" class="m-auto mt-4" />

---

<div class="text-2xl mb-3">Steps:</div>

1. User Enters the URL
2. Domain Name System (DNS) Resolution
3. Establishing a Connection
4. Sending the HTTP Request
5. Server Receives and Processes the Request
6. Backend Processing (Optional)
7. Generating the Response
8. Sending the HTTP Response
9. Receiving the Response
10. HTML Parsing and Resource Requests
11. The Rendering Engine
12. GPU Processing and Display

<!--
## TCP/IP

<Youtube id="OTwp3xtd4dg" width="70%" height="70%" class="m-auto mt-4" />
 -->