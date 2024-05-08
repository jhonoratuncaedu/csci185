const lat = 34.035;
const lng = -118.4;
const zoom = 11.4;
const map = L.map("map").setView([lat, lng], zoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 1. Crawl The Boy is at home trolling on the internet wasting his days and he plans to meet up with his friends 
var marker = L.marker([34.042975074517216, -118.55965706188555]).addTo(map);
marker.bindPopup("<b>I. Crawl (The Boys House)</b><br>The Boy, our main character, son to a rich father with whom he has no connections with, spends his days torlling on the internet at home or partying with friends. <br> <img src='https://i.ytimg.com/vi/cE3qP_0z4Cg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEcgTShlMA8=&rs=AOn4CLDwIpmCZbg4d527TcsFyovYvyxT2Q' style='width: 200px; height: auto;'>").openPopup();
//2. Worldstar The Boy attempts to go to a nototrious nightclub which is shot up while he is in the line
var marker = L.marker([34.1009547009901, -118.33589182913074]).addTo(map);
marker.bindPopup("<b>II. Worldstar (The Club)</b><br>The Boy and his friends try to get into a nightclub, when the nightclub gets shot up during a fight. The boy decides they should try to do other things tomorrow instead. <br> <img src='https://i.makeagif.com/media/12-24-2015/utfIfi.gif' style='width: 200px; height: auto;'>").openPopup();
//3. The worst guys The Boy and friends go to the beach to meet some girls 
var marker = L.marker([33.930425117529765, -118.43552828215654]).addTo(map);
marker.bindPopup("<b>III. The Worst Guys (The Beach)</b><br>They Boy and his friends link up with this group of girls that they met over the internet and they spend the day at the beach, which the boy enjoys. <br> <img src='https://s11279.pcdn.co/wp-content/uploads/2013/12/worst-630x355.png' style='width: 200px; height: auto;'> ").openPopup();
//4. Shadows The boy is on his way back to his mansion. he sees the billboard about roscoes wetsuit
var marker = L.marker([33.966938440859685, -118.36821982312455]).addTo(map);
marker.bindPopup("<b>IV. Shadows (On The Way Home)</b><br>The boy is on his way home and sees a billboard that says ''Roscoes Wetsuit'' on it, a symbol that The boy sees many times throught the album, but has no idea what it means. This haunts the boy as he just wishes to understand the intenert and people. <br> <img src='https://dissectpodcast.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-24-at-8.52.50-PM-1024x637.png' style='width: 200px; height: auto;'> ").openPopup();
//5. Oakland The boy takes a trip to oakland hoping to see his ex
var marker = L.marker([37.804363778780898378, -122.27111373232]).addTo(map);
marker.bindPopup("<b>V. Telegraph Ave (A Daytrip to Oakland)</b><br>The boy wishes to reconnect with his ex, so him and his friends decide to travel to Oakland to he can find her. The boy hates road trips, but oh well. <br> <img src='https://dissectpodcast.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-26-at-1.06.05-PM.png' style='width: 200px; height: auto;'> ").openPopup();
//6. Sweatpants The boy finds himself at a nightclub in Oakland 
var marker = L.marker([37.79676576888306, -122.26311092861961]).addTo(map);
marker.bindPopup("<b>VI. Sweatpants (Nightclub In Oakland) </b><br>The boy, after failing to reconnect with his ex, is heartbroken and upset. Him and his friends decide to go to a celebrity nightclub in Oakland where he also hears people talking about the roscoes wetsuit tweet. <br> <img src='https://i.ytimg.com/vi/fbtnbtF1l4g/hqdefault.jpg' style='width: 200px; height: auto;'>").openPopup();
//7. 3005 The boy, failing to connect with his ex in oakland, finds himself at a wedding hall talking about love
var marker = L.marker([37.30802319490629, -121.86234442704114]).addTo(map);
marker.bindPopup("<b>VII. 3005 (A Wedding Hall) </b><br>The boy leaves his friends behind in Oakland to spend tim alone. On the way home He wends up at a wedding venue, he talks to the brides father about the meaning of love in todays world. <br> <img src='https://dissectpodcast.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-09-at-1.43.36-PM-1024x642.png' style='width: 200px; height: auto;'>").openPopup();
//8. The Party The boy's friends throw a party at his rich fathers other mansion 
var marker = L.marker([34.030868594293814, -118.52103194112009]).addTo(map);
marker.bindPopup("<b>VIII. The Party (Father's LA Mansion) </b><br>The boy and his friends all find themselves back in LA and bored, even though he does not want to, the boy's friends peer pressure him into throwing a huge party at his fathers mansion. The boy ends up yelling for everyone to leave, he cant stand these people anymore. <br> <img src='https://miro.medium.com/v2/resize:fit:1400/0*-FsDgJxXLTaPE8e5.jpg' style='width: 200px; height: auto;'> ").openPopup();
//9. No exit The boy, after kicking everyone out of the party, goes to get a burger
var marker = L.marker([34.090054225702744, -118.35248040205407]).addTo(map);
marker.bindPopup("<b>IX. No Exit (Fatburger Burger Chain) </b><br>The Boy decides to go get a burger after having kicked eveyone out of his party. He then decides to drive aorund downtown LA late at night. <br> <img src='https://i.makeagif.com/media/4-19-2015/Wan3Tj.gif' style='width: 200px; height: auto;'>").openPopup();
//10. Flight of the navigator On his way home the boy has an accident and wakes up in the hospital 
var marker = L.marker([34.057378370668594, -118.20697107937248]).addTo(map);
marker.bindPopup("<b>X. Flight Of The Navigator (The hospital) </b><br>The boy wakes up in the hospital with no memory of how he got in. He only remembers driving around. While at the hospital the boy hears his father has passed. <br> <img src='https://i.ytimg.com/vi/XTNH81bY1tg/maxresdefault.jpg' style='width: 200px; height: auto;'>").openPopup();
//11. Zealots of stockholm (Airport) The boy finds out his father is dead, flies to stockholm where he used to live
var marker = L.marker([33.94879095663912, -118.41236559599568]).addTo(map);
marker.bindPopup("<b>XI. Zealots Of Stockholm (LAX) </b><br> The boy flies to stockholm where his father used to live <br> <img src='https://media.nbclosangeles.com/2019/09/nbcla_lax_kobe.png?resize=1200%2C675&quality=85&strip=all' style='width: 200px; height: auto;'>").openPopup();
//11.5. Zealots of stockholm (Stockholm) Finds his fathers ashes and meets up with a girl
var marker = L.marker([59.329738848634285, 18.079190398795575]).addTo(map);
marker.bindPopup("<b>XI [Continued]. Zealots Of Stockholm (Stockholm) </b><br>The boy finds his fathers ashes, mourns his loss, and decides to meet up with a girl he found on the internet <br> <img src=https://i.ytimg.com/vi/WgTRgngrzIE/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGGUgVChGMA8=&rs=AOn4CLCRlywR-J_8FQ70bi-N5URbdz_wYw' style='width: 200px; height: auto;'>").openPopup();
//12. Urn Random Girl dumps the ashes into the ocean, tells the boy to let go 
var marker = L.marker([59.32302762323764, 18.066576130909027]).addTo(map);
marker.bindPopup("<b>XII. Urn (Stockholm Central Bridge) </b><br>The Random Girl takes the boy's fathers ashes and dumps the ashes into the ocean, she tells the boy to let go of his father <br> <img src='https://i.makeagif.com/media/12-24-2015/kcIqfn.gif' style='width: 200px; height: auto;'>").openPopup();
//13. Pink Toes (Airport) The boy meets naomi at the airport, they hit it off and both live in LA
var marker = L.marker([59.6280669570437, 17.93766665968074]).addTo(map);
marker.bindPopup("<b>XIII. Pink Toes (Stockholm Airport) </b><br> That trip was miserable for the boy. However, The boy meets a girl, naomi, at the airport. They hit it off and both happen to live in LA  <br> <img src='https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/3-stockholm-arlanda.jpg' style='width: 200px; height: auto;'>").openPopup();
//13.5. Pink Toes (LA) The boy spends a lot of time with naomi at her house, they really like eachother 
var marker = L.marker([34.03264623064828, -118.68841869788804]).addTo(map);
marker.bindPopup("<b>XIII [Continued]. Pink Toes (Back In LA) </b><br>he boy spends a lot of time with naomi at her malibu house, they really like eachother <br> <img src='https://rapradar.com/wp-content/uploads/2013/10/bed.jpg' style='width: 200px; height: auto;'>").openPopup();
//14. Oldest Computer While at his mansion the boy is confronted by some people. Hes thrown into his pool and dies
var marker = L.marker([34.04381074032379, -118.56118055662624]).addTo(map);
marker.bindPopup("<b>XIV. Earth, The Oldest Computer (Back At The Boy's House) </b><br>While at his house, the boy is trying to look further into roscoes westsuit. This is when he is confronted by some strangers in his own home. He has no idea if they are accociated with is mysterious father or him. He is thrown into his pool and ''dies' ' <br> <img src='https://i0.wp.com/cypheravenue.com/wp-content/uploads/2013/08/cltwr71.jpg?fit=711%2C400&ssl=1' style='width: 200px; height: auto;'>").openPopup();
//15. Biggest Troll The boy is seen making a tweet in a cafe. Was it all just a story? A hollywood act?
var marker = L.marker([34.133447943497025, -118.32224430452912]).addTo(map);
marker.bindPopup("<b>XV. Life, The Biggest Troll (A Cafe Near The Hollywood Sign) </b><br>The boy is seen making a tweet in a cafe after he supposednly died in the last scene. Was it all just a story? Was The Boy just trolling the entire time? A hollywood act? <br> <img src='https://meplustv.files.wordpress.com/2013/12/becausetheinternet_script.jpg' style='width: 200px; height: auto;'>").openPopup();
//16. A welcome sign to the BTI Universe
var marker = L.marker([34, -118.4]).addTo(map);
marker.bindPopup("<b>Welcome to the BTI map!</b><br>Just a silly map depicting all the important locations in The Boys journey as he traverses through the songs in Donald Glover's BECAUSE THE INTERNET album! Try to find all 17 markers! (Some are very far!) <br> <img src='https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif' style='width: 200px; height: auto;'>").openPopup();
