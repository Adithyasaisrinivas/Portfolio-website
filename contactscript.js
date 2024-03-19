    $('#myForm').on('submit', function(event){
        event.preventDefault(); // prevent reload
        
        var formData = new FormData(this);
        formData.append('service_id', 'service_v0tw7po');
        formData.append('template_id', 'template_8ylvyqb');
        formData.append('user_id', 'yg9zFEYmg5js5HZcM');
     
        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
        reset();
    });