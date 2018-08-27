$("#UKI").click(function () {
    var ES = $('.es');
    var UK = $('.uk');
    var IT = $('.it');

    if (UK.css('display') === 'none') {
        UK.css({
            'display': 'inline',
        });
        ES.css({
            'display': 'none',
        });
        IT.css({
            'display': 'none',

        });
    }

});


$("#ESP").click(function () {
    var ES = $('.es');
    var UK = $('.uk');
    var IT = $('.it');

    if (ES.css('display') === 'none') {
        UK.css({
            'display': 'none',
            
        });
        ES.css({
            'display': 'inline',

        });
        IT.css({
            'display': 'none',

        });
    }

});


$("#ITA").click(function () {
    var ES = $('.es');
    var UK = $('.uk');
    var IT = $('.it');

    if (ES.css('display') === 'none') {
        UK.css({
            'display': 'none',

        });
        ES.css({
            'display': 'none',

        });
        IT.css({
            'display': 'inline',
        });
    }

});