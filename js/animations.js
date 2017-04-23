$(document).ready(function() {
    // jQuery("time.timeago").timeago();
    var tweetCompose = $('.tweet-compose');
    var tweetControl = $('#tweet-controls');
    var charCountDisp = $('#char-count');

    tweetCompose.on('focus', function() {
        $(this).css({
            transition: 'height .15s ease-in-out',
            height: "5em"
        });
        tweetControl.show();
    });

    // tweetCompose.on('focusout',function(){
    //   $(this).css({height:'2.5em'});
    //   tweetControl.hide();
    // });

    var tweetSubmit = $('#tweet-submit');
    var charsLeft = 140

    tweetCompose.on('keyup', function() {
        charsLeft = 140 - $(this).val().length;
        if (charsLeft <= 10) {
            charCountDisp.css({
                color: 'red'
            });
        } else {
            charCountDisp.css({
                color: '#999'
            });
        }
        if (charsLeft < 0 || charsLeft === 140) {
            tweetSubmit.prop('disabled', true)
        } else {
            tweetSubmit.prop('disabled', false)
        }

        charCountDisp.text(charsLeft);
    });

    var stream = $('#stream');
    var name = $('#profile-summary p').text();
    var username = $('username')
    function addItem() {
        var tweetClone = $('.tweet:first-child').clone();
        var inputText = tweetCompose.val();
        tweetCompose.val('');
        tweetSubmit.attr('disabled',true);
        charsLeft=140;
        charCountDisp.text(charsLeft);

        if (inputText) {
            // tweetClone.find.text(inputText);
            tweetClone.find('.fullname').text(name);
            tweetClone.find('.username').text('@myuser');
            tweetClone.find('.avatar').attr('src','./img/alagoon.jpg');
            tweetClone.find('.tweet-text').text(inputText);
            tweetClone.find('.tweet-text').text(inputText);
            tweetClone.find('.tweet-compose').attr('placeholder','Reply to @myuser');
            // tweetClone.find('.time').prepend('<time class="timeago"></time>');
            tweetClone.find('.time').text('CURRENT TIME');
            tweetClone.find('.num-retweets').text('0');
            tweetClone.find('.num-favorites').text('0');
            tweetClone.find('.users-interact').remove()




            stream.prepend(tweetClone);
        }
    }
    tweetSubmit.on('click', function(){
      addItem()
    });

    tweetCompose.on('keydown', function(event) {
        if (event.which == 13 && charsLeft < 140) {
            addItem();
        };
    });



});
