var todaysDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todaysDate);

$(document).ready(function () {
    $('.save-button').on('click', function () {
        //get values of description
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save in local storage
        localStorage.setItem(time, text);
    })

    function time() {
        // get current hour
        var now = moment().hour();

        $('.time-block').each(function () {
            var schedule = parseInt('id').split('hour')[1];

            // cycle color coordinators
            if (schedule < now) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }
            else if (schedule === now) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }
})
