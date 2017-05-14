// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
/*function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}
Window.open();
*/
var myArray = [  ' Abhor -hate ' ,
 ' Bigot -narrow-minded; prejudiced person ' ,
 ' Counterfeit -fake; false ' ,
 ' Enfranchise -give voting rights ' ,
 ' Hamper -hinder; obstruct ' ,
 ' Kindle -to start a fire ' ,
 ' Noxious -harmful; poisonous; lethal ' ,
 ' Placid -calm; peaceful ' ,
 ' Remuneration -payment for work done ' ,
 ' Talisman -lucky charm ' ,
 ' Abrasive -rough; coarse; harsh ' ,
 ' Bilk -cheat; defraud ' ,
 ' Covert -hidden; undercover ' ,
 ' Engender -cause ' ,
 ' Hangar -storage area (like garage) for a plane ' ,
 ' Knotty -complex; difficult to solve ' ,
 ' Nuance -something subtle; a fine shade of meaning ' ,
 ' Renown -fame ' ,
 ' Tangent -going off the main subject ' ,
 ' Abasement -humiliation; degradation ' ,
 ' Billowing -swelling; fluttering; waving ' ,
 ' Cower -recoil in fear or servility; shrink away from ' ,
 ' Enhance -improve; make better or clearer ' ,
 ' Harangue -noisy; attacking speech ' ,
 ' Labyrinth -a maze ' ,
 ' Nullify -to counter; make unimportant ' ,
 ' Plaintiff -petitioner (in court of law) ' ,
 ' Replete -full ' ,
 ' Tangible -can be touched ' ,
 ' Abrogate -cancel; deny; repeal ' ,
 ' Blasphemy -speech which offends religious sentiments ' ,
 ' Credible -believable ' ,
 ' Enigma -puzzle; mystery ' ,
 ' Harbingers -indicators; bringers of warnings ' ,
 ' Labyrinthine -complicated; highly convoluted ' ,
 ' Nuzzle -cuddle; snuggle ' ,
 ' Plaudit -statement giving strong praise ' ,
 ' Reprehensible -shameful; very bad ' ,
 ' Tardy -slow; late; overdue; delayed ' ,
 ' Absolution -forgiveness; pardon; release ' ,
 ' Blatant -obvious ' ,
 ' Creditable -praiseworthy ' ,
 ' Ensconce -establish firmly in a position ' ,
 ' Hasten -hurry; accelerate; rush ' ,
 ' Laceration -a cut ' ,
 ' Obdurate -stubborn ' ,
 ' Plausible -can be believed; reasonable ' ,
 ' Reprieve -a respite; postponement of a sentence ' ,
 ' Tawdry -of little value; gaudy ' ,
 ' Abstain -desist; go without; withdraw ' ,
 ' Blighted -damaged; destroyed; ruined ' ,
 ' Credulous -gullible; ready to believe anything ' ,
 ' Enshroud -cover ' ,
 ' Haughtiness -arrogance; pride ' ,
 ' Lachrymose -tearful; sad ' ,
 ' Obfuscate -deliberately make something difficult to understand ' ,
 ' Plethora -an excess ' ,
 ' Repudiate -shun; eschew ' ,
 ' Tedium -boredom ' ,
 ' Abstemious -self denying; refraining from indulging ' ,
 ' Blithe -free-spirited; carefree ' ,
 ' Crepuscular -active at dawn and dusk ' ,
 ' Enunciation -clear pronunciation; accent; articulation ' ,
 ' Headstrong -stubborn; willful ' ,
 ' Lackluster -dull; monotonous; bland ' ,
 ' Objective -unbiased; not subjective ' ,
 ' Pliable -flexible; not stubborn ' ,
 ' Rescind -retract; repeal ' ,
 ' Temper -to moderate; soften ' ,
 ' Abstruse -difficult to understand; obscure ' ,
 ' Blunderbuss -1. ancient weapon (type of gun); 2. a clumsy person ' ,
 ' Cringe -recoil; flinch; shy away ' ,
 ' Envenom -to cause bitterness and bad feeling ' ,
 ' Hedonism -self indulgence; pleasure-seeking ' ,
 ' Laconic -using few words; brief; to the point ' ,
 ' Oblique -indirect; slanting ' ,
 ' Plumage -feathers of a bird ' ,
 ' Resignation -acceptance of fate ' ,
 ' Tenacious -stubborn; resolute; holding firm to a purpose ' ,
 ' Accolade -tribute; honor; praise ' ,
 ' Bolster -support; prop up ' ,
 ' Cryptic -puzzling; enigmatic ' ,
 ' Ephemeral -short-lived ' ,
 ' Hedonist -a pleasure seeker ' ,
 ' Lamentation -expression of regret or sorrow ' ,
 ' Obliterate -destroy; demolish; eradicate ' ,
 ' Plummet -fall suddenly and steeply ' ,
 ' Resolution -determination ' ,
 ' Tentative -not certain ' ,
 ' Acquiesce -to agree to; give in to ' ,
 ' Bombast -arrogant; pompous language ' ,
 ' Curtail -cut short ' ,
 ' Epicure -someone who appreciates good food and drink ' ,
 ' Heed -listen to ' ,
 ' Lampoon -ridicule; spoof ' ,
 ' Oblivious -totally unaware ' ,
 ' Podium -raised platform ' ,
 ' Resonant -echoing ' ,
 ' Tenuous -flimsy; not solid '];  

var rand = myArray[Math.floor(Math.random() * myArray.length)];
//console.log1(myArray.length);
var newWindow = window.open();
newWindow.document.write(rand);

/*
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

 /*
 function getImageUrl(searchTerm, callback, errorCallback) {
  // Google image search - 100 searches per day.
  // https://developers.google.com/image-search/
  var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
    '?v=1.0&q=' + encodeURIComponent(searchTerm);
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    if (!response || !response.responseData || !response.responseData.results ||
        response.responseData.results.length === 0) {
      errorCallback('No response from Google Image search!');
      return;
    }
    var firstResult = response.responseData.results[0];
    // Take the thumbnail instead of the full image to get an approximately
    // consistent image size.
    var imageUrl = firstResult.tbUrl;
    var width = parseInt(firstResult.tbWidth);
    var height = parseInt(firstResult.tbHeight);
    console.assert(
        typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
        'Unexpected respose from the Google Image Search API!');
    callback(imageUrl, width, height);
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    renderStatus('Performing Google Image search for ' + url);

    getImageUrl(url, function(imageUrl, width, height) {

      renderStatus('Search term: ' + url + '\n' +
          'Google image search result: ' + imageUrl);
      var imageResult = document.getElementById('image-result');
      // Explicitly set the width/height to minimize the number of reflows. For
      // a single image, this does not matter, but if you're going to embed
      // multiple external images in your page, then the absence of width/height
      // attributes causes the popup to resize multiple times.
      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    }, function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
  });
});
*/
