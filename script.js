projets = [
    [
        [
            "assets/imgPortfolio/CardBattle1_2.png"
        ],
        [
            "assets/imgPortfolio/CardBattle2_2.png"
        ]
    ],
    [
        [
            "assets/imgPortfolio/hoodie_shop.png"
        ],
        [
            "assets/imgPortfolio/hoodie_shop2.png"
        ]
        
    ],
    [
        [
            "assets/imgPortfolio/lyonvago1_2.png"
        ],
        [
            "assets/imgPortfolio/lyonvago2_2.png"
        ]
    ],
    [
        [
            "assets/imgPortfolio/machine_a_cafe.png"
        ],
        [
            "assets/imgPortfolio/machine_a_cafe2.png"
        ]
    ]
]

const btnL = document.querySelectorAll('.btnL');
const btnR = document.querySelectorAll('.btnR');

const img = document.querySelectorAll('.img');

const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal>img');



const nbr = [] ;

for (let i = 0; i < projets.length; i++) {
    nbr.push(0);
    changeImg(i)
    img[i].src = projets[i][nbr[i]];

    btnL[i].addEventListener('click',()=>{
        nbr[i]--;
        changeImg(i);
    });
    btnR[i].addEventListener('click',()=>{
        nbr[i]++;
        changeImg(i);
    });
}

function changeImg(i){
    if (nbr[i]>projets[i].length-1) {
        nbr[i] = 0;
    }
    if (nbr[i]<0) {
        nbr[i] = projets[i].length-1;
    }
    img[i].src = projets[i][nbr[i]];
}

img.forEach(e => {
    e.addEventListener('click',()=>{
        modal.style.display = 'flex';
        modalImg.src = e.src;
    })
});

modal.addEventListener('click',()=>{
    modal.style.display = 'none';
})