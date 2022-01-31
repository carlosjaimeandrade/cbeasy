const alert_success = document.querySelector('.alert-success')
if(alert_success){
    setTimeout(function(){
        alert_success.remove()
    },5000)
}