import * as Types from "./types";
export function requestUser() {
  return {type: Types.REQUEST_USER}
}

export function recieveUser(user, company) {
  return {type: Types.RECIEVE_USER, user, company}
}

export function fetchUser() {
  return function (dispatch) {
    dispatch(requestUser());

    fetch('https://dev-api.shipwell.com/v2/auth/me', {
      headers:{
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b'

      }
    })
      .then(response => {
        return response.json()
      })
      .then(data =>  {
       dispatch(recieveUser(data.user, data.company))
      })
  }
}

export function setTo(address) {
  return {type: Types.SET_TO, address}
}

export function setFrom(address) {
  return {type: Types.SET_FROM, address}
}

export  function valAddress(address,type) {
  return function(dispatch) {
    const data = {
        "formatted_address": address
    }
    fetch("https://dev-api.shipwell.com/v2/locations/addresses/validate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(data)
    })
    .then(respone => respone.json())
    .then(data => {
        const address = data.geocoded_address;
        type === "to" ? dispatch(setTo(address)) : dispatch(setFrom(address));
    })
  }
}