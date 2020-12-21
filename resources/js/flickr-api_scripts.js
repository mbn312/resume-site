var page = 0;


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        makeApiCall();
    }
};

function makeApiCall() {
    page++;
    var url = '';
    var amount = photo_amount.value;
    var api_key = '94057d47691bda416f5236b7d360dfeb';
    var tag = tags.value;

    if(isEmpty(tag)) {
        url = ' https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + api_key + '&per_page=' + amount + '&page=' + page + '&format=json&nojsoncallback=1';
    } else {
        url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + api_key + '&tags=' + tag + '&per_page=' + amount + '&page=' + page + '&format=json&nojsoncallback=1';
    }

        $.ajax({url:url, dataType:"json"}).then(function(data) {
            console.log(data);

            var cards = document.getElementById('images').innerHTML + "<div class='row'>";
            for(i = 0; i < amount; i++) {
                var photo = data.photos.photo[i];
                var image_url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
                cards += `
                <div style="width:20%;">
                    <div class="card">
                        <img class="img-thumbnail" src="${image_url}" alt="flickr pic">
                        <div class="card-body">
                            <h5 class="card-title">${photo.title}</h5>
                        </div>
                    </div>
                </div>`
            }
            cards += "</div>";
            document.getElementById('images').innerHTML = cards;
        });
    page++;
}

function resetPage() {
    document.getElementById('images').innerHTML = "";
    page = 0;
}

function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}