var uid, accessToken, userName, profilePic;

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        uid = response.authResponse.userID;
        accessToken = response.authResponse.accessToken;
        console.log(uid);
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '108422329854188',
        cookie: true,  // enable cookies to allow the server to access 
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
    FB.api('/me', function (response) {
        userName = response.name;
        console.log('Successful login for: ' + response.name);
        console.log(response);
        
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
    FB.api(
    "/" + uid + "/picture", function (response) {
      if (response && !response.error) {
        console.log(response.data.url);
        profilePic = response.data.url;

      }
    }
);
    FB.api("/" + uid + "/friends", function (response) {
        if (response && !response.error) {
            console.log(response);
        } else {
            console.log("Error");
        };
        if (response.summary.total_count < 200) {
            console.log("Sorry you do not have enough friends");
            FB.logout(function (response) {
                console.log("You are now logged out");
            })
        } else {
            $("#Name").text(userName);
            $("#profileInfo").append("<img src="+profilePic+">");
        }
    }
    );
}