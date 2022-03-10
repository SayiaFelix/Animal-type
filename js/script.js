$(document).ready(function() {
    //style input
    $('body').click(function() {
        $('body').css('background-color', 'black')
        $('body').css('color', 'white')
    })



    //select Box
    $("select[name='choose']").change(function() {

        $('#genderSpan').html($(this).val())

    });

    //radio input
    $("input:radio[name='species']").change(function() {
        if ($(this).prop('checked')) {
            $('#speciesSpan').html($(this).val())
        }


    });

    //check box input

    let allChecked = [];
    $('input:checkbox').change(function() {

        let value = $(this).val();
        if ($(this).prop('checked')) {
            allChecked.push(value);

        } else { //this element was unchecked

            let index = allChecked.indexOf(value);
            if (index != -1)
                allChecked.splice(index, 1)
        }

        $('#featureSpan').html('');
        for (let i = 0; i < allChecked.length; i++) {

            $('#featureSpan').append(allChecked[i]);

            if (i < allChecked.length - 1)
                $('#featureSpan').append(', ');
            else
                $('#featureSpan').append(' ');
        }

    });


});