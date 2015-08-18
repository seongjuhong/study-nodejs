-----------------------
Node.js 탄생배경 및 특징
-----------------------
- 자바스크립트는 넷스케이프 웹 브라우저에서 HTML의 DOM(Document Object Model) 객체를 제어하기 위해 개발
- 웹 브라우저 초창기에는 자바스크립트 처리가 매우 느렸음
- 구글이 크롬 웹 브라우저를 개발하면서 함께 개발것이 V8 자바스크립트 엔진(http://code.google.com/p/v8)
- 기존 엔진들은 바이트코드로 변환하거나 인터프리트하여 처리
- V8은 JIT(Just In Time) 컴파일 방식을 사용하여 성능을 획기적으로 개선하였고, 인라인 캐싱 기법으로 최적화
- JIT 컴파일 방식은 자바스크립트를 인터프리트하지 않고 실행 즉시 기계어(x86, ARM 등)로 컴파일
- 2009년 라이언 달이라는 프로그래머가 구글의 V8 자바스크립트 엔진을 웹 브라우저가 아닌 서버로 사용할 수 있도록 만든 것이 Node.js
- 즉, 우리가 흔히 봐왔던 PHP, ASP.NET, JSP 등의 서버 사이드 플랫폼과 동일
- 자바스크립트의 간결함과 V8 자바스크립트 엔진의 월등한 속도 그리고 단일 스레드 Non-bloking I/O로 빠른 성능을 내면서 세계적으로 인기
- npm(Node Packaged Modules)은 Node.js로 만들어진 모듈을 인터넷에서 받아서 설치해주는 패키지 매니저
- npm 때문에 결정적으로 Node.js가 대세가 됨
- npm 자체가 월등히 훌륭해서가 아니고, Node.js 모듈의 개수가 상상을 초월할 만큼 많아 엄청난 생산성 향상을 가져옴
- Node.js의 가장 큰 특징은 단일 스레드 모델과 Non-blocking I/O
- 2개의 스레드로 동작하며 시간이 오래 걸리는 작업은 워커 스레드로 보내버리고 메인 스레드는 코드를 계속 실행
- 워커 스레드에서 작업이 끝나면 결과를 다시 메인 스레드로 보냄
- Node.js의 모듈방식은 CommonJS와 AMD 중 CommonJS을 따름
	- http://d2.naver.com/helloworld/12864
	- http://programmingsummaries.tistory.com/321

-----------------------
실습
-----------------------
주의: nvm을 통해 Node.js(npm) 이 설치되어 있어 VM을 재로그인하면 nvm ls 및 nvm use 0.12.7 을 수행해야 함

[Web 통신]
각 실습의 샘플은 study-nodejs 폴더 밑에 해당번호 폴더에 있음

> 실습1. console
- $ mkdir ~/study-nodejs/1.console && cd $_
- app.js 작성
- $ node app.js

> 실습2. web server
- $ mkdir ~/study-nodejs/2.webserver && cd $_	
- app.js 작성
- $ node app.js
- http://127.0.0.1:3030/ 브라우져 접속

> 실습3. Express(http://expressjs.com/): Node 웹프레임워크
- $ mkdir ~/study-nodejs/3.express && cd $_
- $ npm install express
- app.js 작성
- $ node app.js
- http://127.0.0.1:3030/ or http://127.0.0.1:3030/world.html 브라우져 접속브라우져 접속

> 실습4. EJS(http://www.embeddedjs.com/): 서버에서 자바스크립트로 HTML을 생성하는 JavaScript 템플릿 라이브러리
- $ mkdir ~/study-nodejs/4.ejs && cd $_
- $ npm install -g express-generator
(express-generator(https://www.npmjs.com/package/express-generator): Express application generator(Node Module))
- $ express --ejs
- $ npm install
- $ node bin/www
- http://127.0.0.1:3030/ 브라우져 접속

> 실습5. Jade(http://jade-lang.com/): HTML 문법을 간략화한 Node 템플릿 엔진(가독성을 높여 생성성 향상)
- $ mkdir ~/study-nodejs/5.jade && cd $_
- $ npm install -g express-generator (실습4.에서 전역설치하여 설치 불필요)
- $ express
- $ npm install
- $ node bin/www

[Socket 실시간 통신]
지원하는 방식은 3가지임

1. TCP socket: 기본 내장 net 모듈로 TCP 소켓 통신
2. WebSocket: HTTP 프로토콜을 기반으로 양방향 통신(full-duplex)
- 방화벽 호완 높음
- 웹브라우저 호완 낮음(http://caniuse.com/#feat=websockets)
3. socket.io: WebSocket 등 실시간 통신 기술의 웹 브라우저 호환성 문제를 해결하기 위해 생김
- WebSocket, Flash Socket, AJAX Long Polling, AJAX Multipart Streaming, Forever iframe, JSONP Polling 기술을 모두 포함
- 웹 브라우저의 종류와 버전에 따라 최적화된 기술을 알아서 사용하면 됨
- 개발자는 여러가지 실시간 통신 기술을 신경쓸 필요 없이 일관된 API와 문법을 사용하여 개발


> 실습6. WebSocket
- $ mkdir ~/study-nodejs/6.websocket && cd $_
- $ npm install websocket
- app.js 작성
- $ node app.js
- index.html을 브라우져로 오픈

> 실습7. socket.io
- $ mkdir ~/study-nodejs/7.socketio && cd $_
- $ npm install socket.io
- app.js 작성
- $ node app.js
- index.html을 브라우져로 오픈# study-nodejs