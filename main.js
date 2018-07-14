//Options
const CLIENT_ID='162927971356-97kiid2hfr0tn9pt2b40q25hjsh8r4fh.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

// Authorization scopes required by the API. If using multiple scopes,
// separated them with spaces.
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

// Load the Auth 2 librar
function handleClientLoad(){
    gapi.load('client:auth2', initClient);
}

// Initialize API client Library and set up sign in Listeners
function initClient(){
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(() => {

        //Listen for Sign In state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        //Handle initial sign in State
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;

    });
}

//Update UI sign in State changes
function updateSigninStatus(isSignedIn){
    if(isSignedIn){
        
    } else {

    }
}


