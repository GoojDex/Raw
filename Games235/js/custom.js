function getGamelist()
{
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
        var item = "";
        $.each(data, function (index, value) {
            item += `<div class='col-md-6 col-lg-4' style="flex:0 0 15.53333%">
                        <a href='${value.link}' class='game-link'>
                            <img src='${value.image}' alt='' class='game-card__cover'></img>
                            <h3 class='game-card__title' style='font-size: 15px;'>
                                ${value.title} </h3>
                        </a>
                    </div>`;
        });
        $("#mainGames .row-list").html(item);
    });
}

function getPartners()
{
    fetch('../partners.json')
    .then(response => response.json())
    .then(data => {
        var item = "";
        $.each(data, function (index, value) {
            item += `<div class="col-5 col-md-3 col-lg-2">
                        <a href="${value.link}" class="image-card main-games235__item" style="visibility: inherit; opacity: 0.5;">
                            <img src="${value.image}">
                        </a>
                    </div>`;
        });
        $(".main-games235__list").html(item);
    });
}
