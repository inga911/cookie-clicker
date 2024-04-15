const cookie = document.getElementById('cookie');
const totalPoints = document.getElementById('points');
const mainBG = document.getElementById('main-bg');
const colorBG = document.getElementById('bg-color')

const goToShopBtn = document.getElementById('shop-btn');
const shopBox = document.getElementById('shop-box');
const backBtn = document.getElementById('back-btn');

const cookieImg = document.getElementById('coockie')
// const cookieImgUpgrade = document.getElementById('img-upgrade')
// cookieImgUpgrade.style.display = 'none'

console.log(cookie);
//////////////////////////////////////////////// DO NOT SHOW DHOP BBY DEFAULT
shopBox.style.display = 'none';
const openShop = () => shopBox.style.display = shopBox.style.display === 'none' ? 'block' : 'none';
const closeShop = () => shopBox.style.display = shopBox.style.display === 'block' ? 'none' : 'block';

goToShopBtn.onclick = () => openShop();
backBtn.onclick = () => closeShop();

/////////////////////////////////////////////////  DO  NOT SHOW COLORS  BY DEFAULT
colorBG.style.display = 'none'
const openColors = () => colorBG.style.display = 'flex';
const closeColors = () => colorBG.style.display = 'none';


///////////////////////////////////////////////// ADD DISABLED CLASS
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.classList.add('disabled');
});

const doublePoints = document.querySelector('.list-item:nth-of-type(1)');
const changeCookiepoints = document.querySelector('.list-item:nth-of-type(2)')
const cookieSpinPoints = document.querySelector('.list-item:nth-of-type(3)')
const quintuplePoints = document.querySelector('.list-item:nth-of-type(4)')
const changeBackgroundPoints = document.querySelector('.list-item:nth-of-type(5)')



let counter = 0;
let currentUpgrade = null;

//////////////////////////////////////////////////////////////  IF COUNTER > 5 || COUNTER >10 REMOVE CLASS
cookie.addEventListener('click', () => {
    counter++
    totalPoints.innerText = counter;

    if (counter >= 5) {
        doublePoints.classList.remove('disabled')
        changeBackgroundPoints.classList.remove('disabled')
        cookieSpinPoints.classList.remove('disabled')
    }
    if (counter >= 10) {
        changeCookiepoints.classList.remove('disabled')
        quintuplePoints.classList.remove('disabled')
    }
});

////////////////////////////////////////////////////////////  -5 POINT FOR DOUBLE POINTS
doublePoints.addEventListener('click', () => {
    if (counter >= 5) {
        counter -= 5;
        totalPoints.innerText = counter;
    }
    cookie.addEventListener('click', () => {
        if (currentUpgrade === 'doublePoints') {
            counter += 2;
        } else {
            counter += 1;
        }
        totalPoints.innerText = counter;

    });

});

//////////////////////////////////////////////////////////////  -5 POINT FOR quintuplePoints POINTS
quintuplePoints.addEventListener('click', () => {
    if (counter >= 5) {
        counter -= 5;
        totalPoints.innerText = counter;
    }
    cookie.addEventListener('click', () => {
        if (currentUpgrade === 'quintuplePoints') {
            counter += 8;
        } else {
            counter += 1;
        }
        totalPoints.innerText = counter;

    });
});

//////////////////////////////////////////////////////////////  CHANGE COOKIE IMAGE

// const cookieImgUpgrade = document.getElementById('img-upgrade')
// cookieImgUpgrade.style.display = 'none'


changeCookiepoints.addEventListener('click', () => {
    if (counter >= 10) {
        counter -= 10
        totalPoints.innerText = counter;
        const imgUpgrade = document.createElement(`img`)
        imgUpgrade.innerHTML = `   <img
id="img-upgrade"
src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-cookie-monster-face-vector-png-image_6908674.png"
alt=""
/>`
        const cookieImg = document.getElementById('coockie')
        cookieImg.style.display = 'none'

        console.log(imgUpgrade);
    } else {
        event.preventDefault();
        alert('Not enough points')
    }
})







//////////////////////////////////////////////////////////////  CHANGE BACKGROUD COLOR
changeBackgroundPoints.addEventListener('click', () => {
    if (counter >= 5) {
        openColors();
        const colorList = document.querySelectorAll('.color > div')
        colorList.forEach(color => {
            color.addEventListener('click', () => {
                if (counter >= 5) {
                    const computedStyle = window.getComputedStyle(color);
                    const bgColor = computedStyle.backgroundColor;
                    mainBG.style.backgroundColor = bgColor;
                    counter -= 5;
                    totalPoints.innerText = counter;
                } else {
                    alert(`You don't have enough points`);
                }
            });
        });
    }
})





//EVENT  LISTENER OF SELECTED  UPGRADE
cookie.addEventListener('click', () => {
    currentUpgrade = 'cookie'
})
doublePoints.addEventListener('click', () => {
    currentUpgrade = 'doublePoints'
})
quintuplePoints.addEventListener('click', () => {
    currentUpgrade = 'quintuplePoints'
})
// changeCookiepoints.addEventListener('click', () => {
//     currentUpgrade = 'changeCookiepoints'
// })
// cookieSpinPoints.addEventListener('click', () => {
//     currentUpgrade = 'cookieSpinPoints'
// })
changeBackgroundPoints.addEventListener('click', () => {
    currentUpgrade = 'changeBackgroundPoints'
})






























// if (currentUpgrade === 'quintuplePoints' && currentUpgrade === 'doublePoints') {
//     counter = counter + 7
//     totalPoints.innerText = counter;
// }