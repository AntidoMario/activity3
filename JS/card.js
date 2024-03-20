
const card = (titleTwo, para1, para2, para3, btn1, btn2, btn3) => {
    let div = document.createElement("div")
    div.className = "title"
    div.innerHTML = `
                        <hr>
                        <h1>${titleTwo}</h1> 
                        <hr>
                        <h2 style="text-align:center;"><i><strong><q>Hate is a place where a man who<br> can’t stand sadness goes.</q></strong></i></h2>
                        <small><p style="text-align:center; font-family: cursive;"><span>Kentaro Miura</span></p></small>
                        <div class="container">
                        <ul class="card1">
                            <li><h2 class="title1">Berserk </h2></li>
                            <div class="flex-container">
                            <li><img src="images/ber.png" class="img1"></li>
                            <li><div class="sideb">
                            <p>
                                <strong>Genre:</strong>       	
                                                            Dark fantasy<br>
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Epic fantasy<br>
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sword and sorcery  <br>
                              
                                  <br><strong>Written By:</strong>	
                                  Kentaro Miura 
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Kouji Mori <br> <br>

                                  <strong>Illustrated by:</strong>
                                  Kentaro &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Miura 
                                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Studio Gaga

                                   <br> <br> <strong>Published by:</strong>	Hakusensha
                                    <br> <br><strong>English <br>publisher:
                                    </strong> Dark NA: Horse &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Comics
                            </p>
                            </div></li>
                            </div>

                            <li><p class="p2">${para1}</p></li>
                            <li><button class="btn1">${btn1}</button></li>
                        </ul>
                        <ul class="card2">
                            <li><h2 class="title1">King of Wolves</h2></li>
                            <div class="flex-container">
                            <li><img src="images/King.png" class="img2"></li>
                            <li><div class="sideb">
                            <p>
                            <strong>Genre :</strong>       	
                                                        	
                                                        Adventure<br>
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Historical<br>
                          
                              <br><strong>Written By:</strong>	
                              Buronson
                               <br> <br>

                              <strong>Illustrated by:</strong>
                              Kentaro &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Miura 

                               <br> <br> <strong>Published by:</strong>	Hakusensha
                                <br> <br><strong>English <br>publisher	
                                :</strong> Dark &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; NA: Horse &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Comics
                        </p>
                            </div></li>
                            </div>


                            <li><p class="p2">${para2}</p></li>
                            <li><a href="https://en.wikipedia.org/wiki/King_of_Wolves"><button class="btn4">${btn2}</button></a></a></li>
                        </ul>
                        <ul class="card3">
                            <li><h2 class="title1">Giganto Maxia</h2></li>
                            <div class="flex-container">
                            <li><img src="images/gigant.png" class="img3"></li>
                            <li><div class="sideb">
                            <p>
                            <strong>Genre :</strong>       	
                                                        Adventure<br>
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Post-apocalypic<br>
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Science fantasy  <br>
                          
                              <br><strong>Written By:</strong>	
                              Kentaro Miura 
                               <br> <br>

                              <strong>Illustrated by:</strong>
                              Kentaro &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Miura 
                             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Studio Gaga

                               <br> <br> <strong>Published by:</strong>	Hakusensha
                                <br> <br><strong>English <br>publisher	
                                NA:</strong> Dark &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Horse Comics
                        </p>
                            </div></li>
                            </div>


                            <li><p class="p2">${para3}</p></li>
                            <li><a href="https://en.wikipedia.org/wiki/Giganto_Maxia"><button class="btn3">${btn3}</button></a></li>
                        </ul>
                    </div>
                    <hr>
                    <footer>In Loving <i>memoreis </i> of <i>Kentaro Miura</i> Died May 6, 2021 (aged 54) Japan</footer>
                    <footer><small>@All rights goes to <a href="https://en.wikipedia.org/wiki/Kentaro_Miura">Wikipedia</a></small></footer>
                   
    `
    return div
}


export {card}