$('.krz').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');
   
    data.append( 'phone', 		$('[name="num"]', form).val() );
    data.append('products', window.products ? JSON.stringify(window.products):'[]');


   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
           console.log('textStatus') 
        },
      //  $_SESSION['reg_ok'] = true;
        complete: function() {
            
         //  session_start();
          //   if($_SESSION['reg_ok']) {
           //  unset($_SESSION['reg_ok']);
       //      echo "<script>alert('Регистрация успешно пройдена!');</script>";
//}



            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            //$('#land').html('');
         document.getElementById('land').innerHTML = ''   
           $('#basket')[0].reset();
        }
    });

    return false;
});