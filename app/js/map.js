// Функция initMap которая отрисует карту на странице
function initMap() {
    var map;

    // Запишем сразу координаты в переменную
    var coordinates = {lat: 51.3607, lng: 1.0257};

    // Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
    var isDraggable;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isDraggable = false;
    } else {
        isDraggable = true;
    }

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
    // При создании объекта карты необходимо указать его свойства
    // center - определяем точку на которой карта будет центрироваться
    center: coordinates,
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 7,

    // Добавляем свои стили для отображения карты
    //styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}],
    
    // Дополнительные настройки

        // Удалить элементы управления картой
        //disableDefaultUI: true,

        // Запретить увеличение карты по скроллу
        scrollwheel: false,

        // Отключить перетаскивание для смартфонов. Часть 2.
        draggable: isDraggable
        //либо
        //draggable: false

    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: coordinates,

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Whitstable',

    // Укажем свою иконку для маркера
    icon: '../img/marker-grey.png',

    //Анимация маркера
    //animation: google.maps.Animation.BOUNCE


    });
    //==========================================================

    //google.maps.event.addListener(marker, 'click', function() {
    //document.location='http://maps.google.com';
    //});

    //==========================================================

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    //'<img class="" src="./img/visitsoutheastengland.jpg"/>'+
    '<h1 id="firstHeading" class="firstHeading">Whitstable</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Уи́тстабл</b> (англ. Whitstable [ˈwɪtstəbəl] ) — город в графстве Кент Юго-Восточной Англии, входит в состав района Сити-оф-Кентербери. Город расположен на берегу Северного моря на юго-востоке Англии. Население 30 тыс. человек (2001). Город известен в Англии своими устрицами.</p>'+
    //'<iframe src="https://www.youtube.com/embed/xFa2_PVMeDQ" frameborder="0" allowfullscreen></iframe>'+
    '<p><b>MEN WITH VEN "WHITSTABLE"</b> <br> <a href="https://www.youtube.com/watch?v=u2YMcQsDXQE" target="_blank">смотреть видео</a>'+
    '</p>'+
    '</div>'+
    '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    //==========================================================


}