const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {

        name: form.name.value,

        attendance: form.attendance.value,

        guests: form.guests.value,

        comment: form.comment.value

    };

    console.log(data);

    alert("Спасибо! Мы получили ваш ответ ❤️");

    form.reset();

});