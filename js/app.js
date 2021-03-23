// replace these values with those generated in your TokBox Account
var apiKey = '45828062';
var sessionId = '1_MX40NTgyODA2Mn5-MTYxNjUwMjk4NTM1NH50TE95aFRqNHhtdFFLRkZnLzF3Sk1idHl-UH4';
var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9NmNiMTIzNzYxNTUzYTBjYTE1MzFjZmM5NDU5YTlhNTg1ODY0ZDVhNTpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UWXhOalV3TWprNE5UTTFOSDUwVEU5NWFGUnFOSGh0ZEZGTFJrWm5MekYzU2sxaWRIbC1VSDQmY3JlYXRlX3RpbWU9MTYxNjUwMzAwNCZub25jZT0wLjEyNDk0NTU0NDIzNjU2NTAxJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MTY1ODk0MDQ=';

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here


function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
