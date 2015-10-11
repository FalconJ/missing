/* 
 Object of the Streamears JSON
*/
var Streamer = function(channel) {
  var channelTitle, channelGame, channelName, channelLogo, channelOnline, channelUrl;

  /* Setters */

  channelName = channel;

  this.setChannelData = function(channelData, streamerData) {
    channelLogo = channelData.logo;
    channelUrl = channelData.url;
    channelOnline = (streamerData.stream === null) ? false : true;

    if (channelOnline) {
      channelGame = streamerData.stream.channel.game;
      channelTitle = streamerData.stream.channel.status;

      if (channelTitle.length > 20) {
        channelTitle = channelTitle.substring(0, 17);
        channelTitle += "...";
      }
    } else {
      channelTitle = "";
    }
  };

  /* Getters */

  this.getChannelName = function() {
    return channelName;
  };

  this.getChannelLogo = function() {
    if (channelLogo === null) {
      return "https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50";
    } else {
      return channelLogo;
    }
  };

  this.getChannelUrl = function() {
    return channelUrl;
  };

  this.getChannelTitle = function() {
    return channelTitle;
  };

  this.getChannelGame = function() {
    return channelGame;
  };

  this.getChannelStatus = function() {
    if (channelOnline) {
      return "online";
    } else {
      return "offline";
    }
  };

  /* HTML getters */

  this.getChannelNameHTML = function() {
    return '<h4 class="primary-text"> <a href="' + this.getChannelUrl() + '" target="_blank" >' + this.getChannelName() + '</a></h4>';
  };

  this.getChannelLogoHTML = function() {
    return '<img class="img-circle twitch-logo" src="' + this.getChannelLogo() + '"/>';
  };

  this.getChannelTitleHTML = function() {
    return '<h4 class="stream-name"> <a href"' + this.getChannelUrl() + '" target="_blank" >' + this.getChannelTitle() + '</a></h4>';
  };

  /* Work in progress 
			this.getChannelGameHTML = function() {
				return '<p class="stream-name small">' + this.getChannelGame() + '</p>';
			};
			 */

  this.getChannelStatusHTML = function() {
    if (channelOnline) {
      return '<h3><i class="fa fa-play stream-online"></i></h3>';
    } else {
      return '<h3><i class="fa fa-pause stream-offline"></i></h3>';
    }
  };

  /* HTML generator */

  this.insertData = function() {
    $('div.twitch-streamers').html($('div.twitch-streamers').html() +
      '<div class="row twitch-row" chstat="' + this.getChannelStatus() + '" chname="' + this.getChannelName() + '">' +
      '<div class="col-md-1 pagination-centered twitch-pad-top">' + this.getChannelLogoHTML() + '</div>' +
      '<div class="col-md-4 twitch-channel-pad">' + this.getChannelNameHTML() + '</div>' +
      '<div class="col-md-5">' + this.getChannelTitleHTML() + '</div>' +
      '<div class="col-md-1">' + this.getChannelStatusHTML() + '</div>' +
      '</div>');
  };
};

var getJson = function() {
  var api = 'https://api.twitch.tv/kraken/';

  this.getJsonData = function(streamer) {
    //JSON query for channels data
    $.ajax({
      type: 'GET',
      url: api + 'channels/' + streamer.getChannelName(),
      dataType: 'jsonp',
      contentType: 'application/json',
      success: function(channelData) {
        //JSON query for streamer data
        $.ajax({
          type: 'GET',
          url: api + 'streams/' + streamer.getChannelName(),
          dataType: 'jsonp',
          contentType: 'application/json',
          success: function(streamerData) {
            //Sets JSON data to Streamer object
            streamer.setChannelData(channelData, streamerData);
            streamer.insertData();
          }
        });
      }
    });

  };
};

// Function that generates the list of streamers
var loadStreamers = function() {
  // Streamers Array
  var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas","beohoff"];

  streamers.forEach(function(channel) {
    var streamObj = new Streamer(channel);
    var streamJSON = new getJson();

    streamJSON.getJsonData(streamObj);
  });
};

// Search function
var search = function(searchQuery) {
  var selectedTab = $('.active').attr('func');

  if (searchQuery === '') {
    displayStreamers(selectedTab);
  } else {
    $('div.twitch-row').hide();
    if (selectedTab === 'all') {
      $('div[chname="' + searchQuery + '"]').show();
    } else {
      $('div[chname="' + searchQuery + '"]div[chstat="' + selectedTab + '"]').show();
    }
  }
};

// Select which streamers to display
var displayStreamers = function(selectedTab) {
  if (selectedTab === "online") {
    $('div[chstat="online"]').show();
    $('div[chstat="offline"]').hide();
  } else if (selectedTab === "offline") {
    $('div[chstat="online"]').hide();
    $('div[chstat="offline"]').show();
  } else {
    $('div[chstat="online"]').show();
    $('div[chstat="offline"]').show();
  }
};

/* 
			On load
		*/

$(document).ready(function() {
  loadStreamers();

  // Changes the active tab
  $('.twitch-all, .twitch-online, .twitch-offline').click(function() {
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');

    // Search within the list
    search($(".twitch-search-text").val());
  });

  //Refreshes the search function
  $('.twitch-search-text').keyup(function() {
    // Searches within the list
    search($(this).val());
  });
});