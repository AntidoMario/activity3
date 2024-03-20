import{info} from "./info.js"
import{img} from "./img.js"
import {card} from "./card.js"



const data ={
    title       : "Author",
    para        : "Miura was born on July 11, 1966, in Chiba, Chiba Prefecture, Japan.<sup>[1]</sup> In 1976, at the age of 10, he created his first manga, entitled Miuranger, which was published for his classmates in a school publication; the series ended up spanning 40 volumes.<sup>[2]</sup> In 1977, Miura created his second manga, Ken e no Michi (剣への道, <q>The Way to the Sword</q>), in which he used India ink for the first time. When he was in middle school in 1979, his drawing techniques improved greatly as he started using professional drawing techniques.<sup>[3]</sup>",
    contactBtn  : "MORE INFO",
    myImage     : "Kentaro_Miura.png"
}

const datatwo ={
    titleTwo: "MANGA <i>Written</i> & <i>Illustrated</i>",
    para1 : "Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone swordsman, and Griffith, the leader of a mercenary band called the <q>Band of the Hawk</q>. The series follows Guts' journey seeking revenge on Griffith, who betrayed him and sacrificed his comrades to become a powerful demonic being.",
    btn1    : "MORE INFO",

    para2 : "King of Wolves (Japanese: 王狼, Hepburn: Ōrō) is a Japanese manga series written by Buronson and illustrated by Kentaro Miura. It was serialized in Hakusensha's Monthly Animal House in 1989, with its chapters collected in a single tankōbon volume. A sequel, titled Ōrō Den, was serialized in Monthly Animal House, with its chapters collected in a single tankōbon volume. King of Wolves is written by Buronson and illustrated by Kentaro Miura. It was serialized in Hakusensha's Monthly Animal House in 1989.[3]",
    btn2    : "MORE INFO",
    
    para3: "Giganto Maxia (Japanese: ギガントマキア, Hepburn: Gigantomakia) is a Japanese manga series written and illustrated by Kentaro Miura. It was serialized in Hakusensha's seinen manga magazine Young Animal from November 2013 to March 2014, with its chapters collected in a single tankōbon volume. Written and illustrated by Kentaro Miura, Giganto Maxia was Miura's first completely original work in 24 years since Berserk.[3] ",
    btn3    : "MORE INFO"

}

const {title, para, contactBtn, myImage} = data
const {titleTwo, para1, para2, para3, btn1, btn2, btn3} = datatwo

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))
sectionTwo.append(card(titleTwo, para1, para2, para3, btn1, btn2, btn3))

