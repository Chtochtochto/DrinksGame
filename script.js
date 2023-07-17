'use strict'

// кнопка с подсказкой
let click = 0;
const lol = window.matchMedia('(max-width: 1200px)');

document.querySelector(".question_btn").onclick = function(){
    click = 1;
    if(lol.matches){
        document.querySelector(".prompt_flow").style.zIndex = "4";
        document.querySelector(".prompt").style.marginLeft = "-36px";
    } else{
        document.querySelector(".prompt_flow").style.zIndex = "4";
        document.querySelector(".prompt").style.marginLeft = "0px";
    }
};

document.querySelector(".btn_ex").onclick = function(){
    document.querySelector(".prompt").style.marginLeft = "-420px";
    setTimeout(() => {
        document.querySelector(".prompt_flow").style.zIndex = "-1";
    }, 1000);
};

const question_mark = function(){
    if(click == 0){
        setTimeout(() => {
            document.querySelector(".question_btn").style.backgroundColor = "rgba(179, 227, 186, 1)";
        }, 500);
        setTimeout(() => {
            document.querySelector(".question_btn").style.backgroundColor = "rgba(255, 211, 56, 1)";
            question_mark();
        }, 1000);
    } else{
        document.querySelector(".question_btn").style.backgroundColor = "rgba(179, 227, 186, 1)";
    }
    }

question_mark();
// кнопка с подсказкой

let rand_order = Math.floor(Math.random() * 5 + 1);

let order = [];

if(rand_order == 1){
    document.querySelector(".order_1").removeAttribute("hidden")
    order = ["tea","tea","mint"];
} else if(rand_order == 2){
    document.querySelector(".order_2").removeAttribute("hidden")
    order = ["coffee","coffee","milk"];
} else if(rand_order == 3){
    document.querySelector(".order_3").removeAttribute("hidden")
    order = ["juice","juice","juice"];
} else if(rand_order == 4){
    document.querySelector(".order_4").removeAttribute("hidden")
    order = ["coffee","milk","caramel"];
} else if(rand_order == 5){
    document.querySelector(".order_5").removeAttribute("hidden")
    order = ["cacao","cacao","milk"];
}

let a;
let cook = [];
const check = () => {
    if (cook.length == 3 && JSON.stringify(cook.sort()) !== JSON.stringify(order.sort())){
        setTimeout(() =>{
            document.querySelector(".Ingredients").setAttribute("hidden","hidden");
            document.querySelector(".order_1").setAttribute("hidden","hidden");
            document.querySelector(".order_2").setAttribute("hidden","hidden");
            document.querySelector(".order_3").setAttribute("hidden","hidden");
            document.querySelector(".order_4").setAttribute("hidden","hidden");
            document.querySelector(".order_5").setAttribute("hidden","hidden");
            document.querySelector(".coupon_txt_2").style.display = "flex";
            document.querySelector(".glass_img").setAttribute("hidden","hidden");
            document.querySelector(".wrong_img").removeAttribute("hidden");
            document.querySelector(".refuse").removeAttribute("hidden");
            },1000);
    }
    if (cook.length == 3 && JSON.stringify(cook.sort()) === JSON.stringify(order.sort())){
        setTimeout(() => {
            document.querySelector(".Ingredients").setAttribute("hidden","hidden");
            document.querySelector(".order_1").setAttribute("hidden","hidden");
            document.querySelector(".order_2").setAttribute("hidden","hidden");
            document.querySelector(".order_3").setAttribute("hidden","hidden");
            document.querySelector(".order_4").setAttribute("hidden","hidden");
            document.querySelector(".order_5").setAttribute("hidden","hidden");
            document.querySelector(".glass_img").setAttribute("hidden","hidden");
            document.querySelector(".coupon_txt").style.display = "flex";
            document.querySelector(".coupon_img").removeAttribute("hidden");
            document.querySelector(".Left").removeAttribute("hidden");
            document.querySelector(".Right").removeAttribute("hidden");
            document.querySelector(".confirm").removeAttribute("hidden");
            console.log(cook);
        }, 1000);
    };
}


const kek = function(){
    if(lol.matches && document.querySelector(".background").children[2] != undefined){
        document.querySelector(".background").removeChild(document.querySelector(".rightside"));
        document.querySelector(".center").children[3].insertAdjacentHTML("afterEnd", `<div class="rightside">
        <div class="Ingredients">
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Coffee.png" alt="">
                        <button value="1" id="Ing_btn">КОФЕ</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Tea.png" alt="">
                        <button value="2" id="Ing_btn">ЧАЙ</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Juce.png" alt="">
                        <button value="3" id="Ing_btn">СОК</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Milk.png" alt="">
                        <button value="4" id="Ing_btn">МОЛОКО</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Cacao.png" alt="">
                        <button value="5" id="Ing_btn">КАКАО</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Caramel.png" alt="">
                        <button value="6" id="Ing_btn">КАРАМЕЛЬ</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Soda.png" alt="">
                        <button value="7" id="Ing_btn">ГАЗИРОВКА</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Lemon.png" alt="">
                        <button value="8" id="Ing_btn">ЛИМОН</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Mint.png" alt="">
                        <button value="9" id="Ing_btn">МЯТА</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        )
    } else if(lol.matches == false && document.querySelector(".center").contains(document.querySelector(".rightside")) == true){
        document.querySelector(".center").removeChild(document.querySelector(".rightside"));
        document.querySelector(".background").children[1].insertAdjacentHTML("afterEnd", `<div class="rightside">
        <div class="Ingredients">
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Coffee.png" alt="">
                        <button value="1" id="Ing_btn">КОФЕ</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Tea.png" alt="">
                        <button value="2" id="Ing_btn">ЧАЙ</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Juce.png" alt="">
                        <button value="3" id="Ing_btn">СОК</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Milk.png" alt="">
                        <button value="4" id="Ing_btn">МОЛОКО</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Cacao.png" alt="">
                        <button value="5" id="Ing_btn">КАКАО</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Caramel.png" alt="">
                        <button value="6" id="Ing_btn">КАРАМЕЛЬ</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Soda.png" alt="">
                        <button value="7" id="Ing_btn">ГАЗИРОВКА</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Lemon.png" alt="">
                        <button value="8" id="Ing_btn">ЛИМОН</button>
                    </div>
                </div>
                <div class="ingredient">
                    <div class="img">
                        <img src="img/Mint.png" alt="">
                        <button value="9" id="Ing_btn">МЯТА</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }

}

document.querySelector("body").onmouseover = function(event){
    let button = event.target.closest('button');
    if (!button) return;
    if (!document.querySelector(".Ingredients").contains(button)) return;
    
    a = button.value;


    document.querySelector(`#img_${a}`).style.display = "block";
    document.querySelector(".arrow").style.display = "block";

    const animate = () =>{
        document.querySelector(`#img_${a}`).style.display = "none";
        document.querySelector(`#img_${a}`).style.display = "flex";
        document.querySelector(`#img_${a}`).style.marginTop = "100px";
        setTimeout(
            () => {
                document.querySelector(`#img_${a}`).style.display = "none";
                document.querySelector(`#img_${a}`).style.marginTop = "0px";
                document.querySelectorAll("#Ing_btn").forEach(element => {
                    element.removeAttribute("hidden");
                });
            },
            1000
        );
    }

    button.onclick = function(){
        document.querySelectorAll("#Ing_btn").forEach(element => {
            element.setAttribute("hidden","hidden");
        });
        if(cook.length < 2){
            if(a==1){
                animate();
                cook.push("coffee");
            }else if(a == 2){
                animate();
                cook.push("tea");
            }else if(a == 3){
                animate();
                cook.push("juice");
            }else if(a == 4){
                animate();
                cook.push("milk");
            }else if(a == 5){
                animate();
                cook.push("cacao");
            }else if(a == 6){
                animate();
                cook.push("caramel");
            }else if(a == 7){
                animate();
                cook.push("soda");
            }else if(a == 8){
                animate();
                cook.push("lemon");
            }else if(a == 9){
                animate();
                cook.push("mint");
            }
        }else if(cook.length == 2){
            if(a == 1){
                animate();
                cook.push("coffee");
                check();
            }else if(a == 2){
                animate();
                cook.push("tea");
                check();
            }else if(a == 3){
                animate();
                cook.push("juice");
                check();
            }else if(a == 4){
                animate();
                cook.push("milk");
                check();
            }else if(a == 5){
                animate();
                cook.push("cacao");
                check();
            }else if(a == 6){
                animate();
                cook.push("caramel");
                check();
            }else if(a == 7){
                animate();
                cook.push("soda");
                check();
            }else if(a == 8){
                animate();
                cook.push("lemon");
                check();
            }else if(a == 9){
                animate();
                cook.push("mint");
                check();
            }
        }
    }
};

document.querySelector("body").onmouseout = function(event){
    document.querySelector(".arrow").style.display = "none";
    if(document.querySelector(`#img_${a}`) != null){
        if(document.querySelector(`#img_${a}`).style.display == "block"){
            document.querySelector(`#img_${a}`).style.display = "none";
        }
    }
    let button = event.target.closest('button');
    if (!button) return;
    if (!document.querySelector(".Ingredients").contains(button)) return;

    button.classList.remove("clickable");
}; 



window.onresize = function(){
    kek();
}

kek();


