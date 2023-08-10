projets = [
    [
        [
            "assets/imgPortfolio/53e0d0454f5bac14f1dc8460962e33791c3ad6e04e507441722978d6944fc3_640.jpg"
        ],
        [
            "assets/imgPortfolio/54e0d3405754a809ea898279c02132761022dfe05b567749752f73d1_640.jpg"
        ],
        [
            "assets/imgPortfolio/54e6d5464f52ae14f1dc8460962e33791c3ad6e04e50744172297cdc9e48c3_640.jpg"
        ]
    ],
    [
        [
            "assets/imgPortfolio/53e0d0454f5bac14f1dc8460962e33791c3ad6e04e507441722978d6944fc3_640.jpg"
        ],
        [
            "assets/imgPortfolio/54e0d3405754a809ea898279c02132761022dfe05b567749752f73d1_640.jpg"
        ],
        [
            "assets/imgPortfolio/54e6d5464f52ae14f1dc8460962e33791c3ad6e04e50744172297cdc9e48c3_640.jpg"
        ],
        [
            "assets/imgPortfolio/index-64ce9dd908183987752385.jpeg"
        ]
    ]
]

const btnL = document.querySelectorAll('.btnL');
const btnR = document.querySelectorAll('.btnR');

const img = document.querySelectorAll('.img');

const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal>img');

const nbr = [0,0] ;

for (let i = 0; i < projets.length; i++) {
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