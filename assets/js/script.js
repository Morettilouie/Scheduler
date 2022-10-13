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

    function clock() {
        // get current hour
        var now = moment().hours();

        $('.time-block').each(function () {
            var schedule = parseInt($(this).attr('id').split('hr')[1]);

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

    // get from local storage
    $('#hr9 .description').val(localStorage.getItem('hr9'));
    $('#hr10 .description').val(localStorage.getItem('hr10'));
    $('#hr11 .description').val(localStorage.getItem('hr11'));
    $('#hr10 .description').val(localStorage.getItem('hr10'));
    $('#hr11 .description').val(localStorage.getItem('hr11'));
    $('#hr12 .description').val(localStorage.getItem('hr12'));
    $('#hr14 .description').val(localStorage.getItem('hr13'));
    $('#hr15 .description').val(localStorage.getItem('hr15'));
    $('#hr16 .description').val(localStorage.getItem('hr16'));

    clock();
})