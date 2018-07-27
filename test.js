document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        // Page content
        var blacklist = ["22522-01", "23542-01"];
        var sku_list = '';
        var visible_cards = document.getElementsByClassName('itemOuter');
        for (var i = 0; i < visible_cards.length; i++) {
            sku = visible_cards[i].getElementsByClassName('gridDescriptionDiv')[0].innerText.replace('# ID','').trim();
            if ( blacklist.indexOf(sku) != -1 ) {
                visible_cards[i].getElementsByClassName('gridItemMainDiv')[0].style.backgroundColor = '#c41b1b';
                visible_cards[i].getElementsByClassName('gridImageDiv')[0].getElementsByTagName('img')[0].src = 'http://via.placeholder.com/150x150/c41b1b/ffffff?text=Do+not+sync';
            }
        }
        return sku_list;
    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();'
    }, (results) => {
        // Popup content
        document.getElementById('debug_result').innerHTML = results[0];
    });
});