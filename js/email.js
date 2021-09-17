


emailjs.init("user_GQGHvQ0IZElC8RZVpacH5");
//"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
'input[name=submit]'.click(function () {

    var templateParams = {
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
        name: ('input[name=name]').val()
    };


    emailjs.send('gmail', 'template_vsuan9m', templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });



});


