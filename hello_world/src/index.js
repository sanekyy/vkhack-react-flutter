import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';

// Init VK App
connect.send('VKWebAppInit', {});

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

function App() {

    return (
        <div> aaa </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));


// <script>
//     if ('serviceWorker' in navigator) {
//     window.addEventListener('flutter-first-frame', function () {
//         navigator.serviceWorker.register('flutter_service_worker.js?v=975256980');
//     })
// }
// </script>
// <script src="../public/main.dart.js" type="application/javascript"/>