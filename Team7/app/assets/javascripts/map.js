var runningEndpoint = '/v1/me/sport/activities/1',
    options = {
      method: 'GET',
      success: storeUserActivityDetails
    
    },
    userDetailsObj = {
      activity: '',
      duration: '',
      points: null
    }



window.nikeplusSDKAsyncInit = nikeplusSDKAsyncInit;

NIKEPLUS.api(runningEndpoint, options)


function nikeplusSDKAsyncInit() {
  NIKEPLUS.init({
    client_id: "y9GON6rZDevpl1lAMaxPsICfx8zRV2yt",
    redirect_uri: "http://localhost:3000/authcode_redirect",
    authSuccess: function(authData){}
  });
}

function storeUserActivityDetails(response) {
  userDetailsObj.activity = response.properties.activityId.type;
  userDetailsObj.duration = response.properties.metricSummary.properties.duration.type;
}

function activityToPoints() {
  if(userDetailsObj.duration < 5) {
    userDetailsObj.points = 3;
  } else if(userDetailsObj.duration > 5) {
    userDetailsObj.points = 5;
  }
}


