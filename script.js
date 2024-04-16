const cookie = document.getElementById('cookie');
const totalPoints = document.getElementById('points');
const mainBG = document.getElementById('main-bg');
const colorBG = document.getElementById('bg-color')
const goToShopBtn = document.getElementById('shop-btn');
const shopBox = document.getElementById('shop-box');
const backBtn = document.getElementById('back-btn');
const textInfoBG = document.getElementById('text-bg')
const textInfoError = document.getElementById('text-error')
const doublePoints = document.querySelector('.list-item:nth-of-type(1)');
const changeCookiepoints = document.querySelector('.list-item:nth-of-type(2)')
const cookieSpinPoints = document.querySelector('.list-item:nth-of-type(3)')
const quintuplePoints = document.querySelector('.list-item:nth-of-type(4)')
const changeBackgroundPoints = document.querySelector('.list-item:nth-of-type(5)')

cookie.classList.remove('animation')



let points = 0
let addAmount = 1

const updatePoints = () => totalPoints.innerText = points

////////////////////////////////////////////// DO NOT SHOW DHOP BBY DEFAULT
shopBox.style.display = 'none';
const openShop = () => shopBox.style.display = shopBox.style.display === 'none' ? 'block' : 'none';
const closeShop = () => shopBox.style.display = shopBox.style.display === 'block' ? 'none' : 'block';
goToShopBtn.onclick = () => openShop();
backBtn.onclick = () => closeShop();



/////////////////////////////////////////////////  DO  NOT SHOW COLORS  BY DEFAULT
colorBG.style.display = 'none'
const toggleColor = () => {
    colorBG.style.display = colorBG.style.display === 'none' ? 'flex' : 'none';
};
const openColors = () => toggleColor
const closeColors = () => toggleColor


cookie.onclick = () => {
    points += addAmount
    if (points >= 5) {
        doublePoints.classList.remove('disabled')
        changeBackgroundPoints.classList.remove('disabled')
        cookieSpinPoints.classList.remove('disabled')

    }
    if (points >= 10) {
        changeCookiepoints.classList.remove('disabled')
        quintuplePoints.classList.remove('disabled')
    }
    updatePoints()
}


///////////////////////////////////////////////// ADD DISABLED CLASS
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.classList.add('disabled');
});


/////////////////////////////////////////////////////  TEXT ERROR
function textError() {
    textInfoError.innerHTML = `Not enough points <span class="material-symbols-outlined">
    sentiment_dissatisfied
    </span>`
    textInfoError.style.color = '#d72a2a'
    textInfoError.style.textTransform = 'uppercase'
    textInfoError.style.fontWeight = '600'
    textInfoError.style.letterSpacing = '3px'
    textInfoError.style.display = 'flex'
    textInfoError.style.alignItems = 'center'
    textInfoError.style.fontSize = '12px'
    textInfoError.style.width = '100%'
    textInfoError.style.justifyContent = 'center'
}




doublePoints.onclick = () => {
    if (points >= 5) {
        points -= 5
        addAmount = 2
        updatePoints()
    } else {
        updatePoints()

        textError()
    }
}

quintuplePoints.onclick = () => {
    if (points >= 10) {
        points -= 10
        addAmount = 5
        updatePoints()
    } else {
        textError()
    }
}


changeCookiepoints.onclick = () => {
    if (points >= 5) {
        points -= 5
        updatePoints(points);
        document.getElementById('cookie').src = 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-cookie-monster-face-vector-png-image_6908674.png'
    } else {
        event.preventDefault();
        textError()
    }
}



cookieSpinPoints.onclick = () => {
    if (points >= 5) {
        points -= 5;
        updatePoints(points);
        cookie.classList.add('animation')

    } else {
        event.preventDefault();
        textError()
    }
};

changeBackgroundPoints.onclick = () => {
    if (points >= 5) {
        toggleColor();
        const colorList = document.querySelectorAll('.color > div')
        colorList.forEach(color => {
            color.addEventListener('click', () => {
                if (points >= 5) {
                    const computedStyle = window.getComputedStyle(color);
                    const bgColor = computedStyle.backgroundColor;
                    mainBG.style.backgroundColor = bgColor;
                    points -= 5;
                    updatePoints(points);
                } else {
                    textInfoBG.innerHTML = `Not enough points <span class="material-symbols-outlined">
                    sentiment_dissatisfied
                    </span>`
                    textInfoBG.style.color = '#d72a2a'
                    textInfoBG.style.textTransform = 'uppercase'
                    textInfoBG.style.fontWeight = '600'
                    textInfoBG.style.letterSpacing = '3px'
                    textInfoBG.style.display = 'flex'
                    textInfoBG.style.alignItems = 'center'
                    textInfoBG.style.fontSize = '14px'
                }
            });
        });
    }
}






