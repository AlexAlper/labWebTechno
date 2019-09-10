let footwearList = [
   
    {1: 'Полуботинки мужские для активного отдыха', 2: 'Pierre',  3: '5', 4: '2500'},
    {1: 'Слипоны мужские', 2:"Memory", 3: '3', 4: '1600'},
    {1: 'Кеды мужские', 2: 'Taccardi',  3: '13', 4: '700'},
    {1: 'Мокасины мужские летние', 2:"Taccardi", 3: '6', 4: '1600'},
    {1: 'Туфли мужские', 2:"Fast", 3: '2', 4: '3000'},
    {1: 'Кеды женские', 2:"Taccardi", 3: '6', 4: '1300'},
    {1: 'Слипоны женские', 2:"Memory", 3: '2', 4: '1600'},
    {1: 'Туфли женские', 2:"Buith", 3: '7', 4: '2500'},
    {1: 'Туфли женские премиум', 2:"Buith", 3: '13', 4: '8000'},
    {1: 'Сандали мужские', 2:"Taccardi", 3: '3', 4: '1800'},
    {1: 'Сандали женские', 2:"Taccardi", 3: '2', 4: '1600'}
];

     headdressList = [
   
    {1: 'Шляпа морская женская', 2: 'Pierre',  3: '5', 4: '500'},
    {1: 'Кепка мужская', 2:"Memory", 3: '3', 4: '600'},
    {1: 'Кепка женская', 2: 'Taccardi',  3: '4', 4: '1300'},
    {1: 'Шапка мужская осенняя', 2:"Taccardi", 3: '6', 4: '600'},
    {1: 'Шапка мужская зимняя', 2:"Fast", 3: '2', 4: '300'},
    {1: 'Шапка женская осенняя', 2:"Taccardi", 3: '6', 4: '800'},
    {1: 'Шапка женская зимняя', 2:"Memory", 3: '2', 4: '600'},
    {1: 'Шапка ушанка', 2:"Buith", 3: '7', 4: '500'},
    {1: 'Шлем космонафта', 2:"NASA", 3: '13', 4: '13000'},
    {1: 'Шлем против инопланетян', 2:"UFO", 3: '100500', 4: '100'}
];

    outerwearList = [
   
    {1: 'Куртка мужская', 2: 'Pierre',  3: '5', 4: '500'},
    {1: 'Куртка женская', 2:"Memory", 3: '3', 4: '600'},
    {1: 'Пальто женское', 2: 'Taccardi',  3: '4', 4: '700'},
    {1: 'Пальто мужское', 2:"Taccardi", 3: '13', 4: '600'},
    {1: 'Костюм космонафта', 2:"NASA", 3: '007', 4: '30000'},
    {1: 'Костюм военного', 2:"Tac", 3: '6', 4: '800'},
    {1: 'Накидка против инопланетян', 2:"UFO", 3: '13000', 4: '100'},
    {1: 'Курта помощи человечеству', 2:"UFO", 3: '7', 4: '500'},
    {1: 'Пальто универсальное', 2:"Taccardi", 3: '13', 4: '13000'},
    {1: 'Куртка детская', 2:"Memory", 3: '1000', 4: '1000'}
];
// 1 - название, 2 - производитель, 3 - рейтинг, 4 - цена

let mainBtn = document.querySelector('.main-menu');  
    autorBtn = document.querySelector('.autor'); 
    companyBtn = document.querySelector('.company'); 
    headdressBtn = document.querySelector('.headdress'); 
    outerwearBtn = document.querySelector('.outerwear'); 
    footwearBtn = document.querySelector('.footwear');       
    mainBlock = document.querySelector('.main-block'); 
    


mainBtn.addEventListener('click', function(){
    tmpBlock = document.querySelector('.tmp-block'); 
    mainBlock.removeChild(tmpBlock);
    let div = document.createElement('div');
    div.classList.add('tmp-block');
    div.innerHTML = 'Добрый день! <br> На нашем сайте вы  можете приобрести нужные вам товары по привлекательной цене';
    mainBlock.appendChild(div);
});

autorBtn.addEventListener('click', function(){
    tmpBlock = document.querySelector('.tmp-block'); 
    mainBlock.removeChild(tmpBlock);
    let div = document.createElement('div');
    div.classList.add('tmp-block');
    div.innerHTML = 'Автор данного сайта - Перепечаев Александр';
    mainBlock.appendChild(div);
});

companyBtn.addEventListener('click', function(){
    tmpBlock = document.querySelector('.tmp-block'); 
    mainBlock.removeChild(tmpBlock);
    let div = document.createElement('div');
    div.classList.add('tmp-block');
    div.innerHTML = 'Наша компания самая лучшая в мире';
    mainBlock.appendChild(div);
});

headdressBtn.addEventListener('click', function(){
    tmpBlock = document.querySelector('.tmp-block'); 
    mainBlock.removeChild(tmpBlock);
    let div = document.createElement('div');
    div.classList.add('tmp-block');
    mainBlock.appendChild(div);
    tmpBlock = document.querySelector('.tmp-block'); 
    let divTitel = document.createElement('div');
    divTitel.innerHTML = 'Головные уборы';
    divTitel.classList.add('titel');
    tmpBlock.appendChild(divTitel);

    for(let i = 0; i < headdressList.length; i++){
        
            let div = document.createElement('div');
            div.classList.add('clothes');
        
            div.innerHTML = headdressList[i][1] + '<br>' +headdressList[i][2] + '<br>' + headdressList[i][3] + '<br>' + headdressList[i][4] ;
            
            tmpBlock.appendChild(div);
        }
            
    });

    outerwearBtn.addEventListener('click', function(){
        tmpBlock = document.querySelector('.tmp-block'); 
        mainBlock.removeChild(tmpBlock);
        let div = document.createElement('div');
        div.classList.add('tmp-block');
        mainBlock.appendChild(div);
        tmpBlock = document.querySelector('.tmp-block'); 
        let divTitel = document.createElement('div');
        divTitel.innerHTML = 'Верхняя одежда';
        divTitel.classList.add('titel');
        tmpBlock.appendChild(divTitel);
    
        for(let i = 0; i < outerwearList.length; i++){
            
                let div = document.createElement('div');
                div.classList.add('clothes');
            
                div.innerHTML = outerwearList[i][1] + '<br>' +outerwearList[i][2] + '<br>' + outerwearList[i][3] + '<br>' + outerwearList[i][4] ;
                
                tmpBlock.appendChild(div);
            }
                
        });

footwearBtn.addEventListener('click', function(){
    tmpBlock = document.querySelector('.tmp-block'); 
    mainBlock.removeChild(tmpBlock);
    let div = document.createElement('div');
    div.classList.add('tmp-block');
    mainBlock.appendChild(div);
    tmpBlock = document.querySelector('.tmp-block'); 
    let divTitel = document.createElement('div');
    divTitel.innerHTML = 'Обувь';
    divTitel.classList.add('titel');
    tmpBlock.appendChild(divTitel);

    for(let i = 0; i < footwearList.length; i++){
        
            let div = document.createElement('div');
            div.classList.add('clothes');
        
            div.innerHTML = footwearList[i][1] + '<br>' +footwearList[i][2] + '<br>' + footwearList[i][3] + '<br>' + footwearList[i][4] ;
            
            tmpBlock.appendChild(div);
        }
            
    });