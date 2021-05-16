"use strict";
const dialogflow = require("dialogflow");
const mongoose = require("mongoose");
const config = require("../config/keys");
const structjson = require("./structjson");
const Chat = require("../models/chat");
const Diagnostico = require("../models/diagnostico");
/*
const projectID = config.googleProjectID;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};
*/
const sessionsClient = new dialogflow.SessionsClient();
const sessionPath = sessionsClient.sessionPath(
  config.googleProjectID,
  config.dialogFlowSessionID
);

async function textQuery(text, userID, parameters = {}) {
  let sessionPath = sessionsClient.sessionPath(
    config.googleProjectID,
    config.dialogFlowSessionID + userID
  );
  let self = module.exports;
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
    queryParams: {
      payload: {
        data: parameters,
      },
    },
  };
  let responses = await sessionsClient.detectIntent(request);
  responses = await self.handleAction(responses);
  let queryResult = responses[0].queryResult;
  saveMessages(queryResult, userID);

  //console.log(responses); //responses stores query text(sent message) and fullfilmenttext(answer message)

  return responses;
}
async function eventQuery(event, userID, parameters = {}) {
  let self = module.exports;
  let sessionPath = sessionsClient.sessionPath(
    config.googleProjectID,
    config.dialogFlowSessionID + userID
  );
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        name: event,
        parameters: structjson.jsonToStructProto(parameters),
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
  };
  let responses = await sessionsClient.detectIntent(request);
  responses = await self.handleAction(responses, userID);

  return responses;
}
function handleAction(responses, userID) {
  let self = module.exports;

  let queryResult = responses[0].queryResult;

  switch (queryResult.action) {
    case "Diagnosticar.Diagnosticar-yes":
      if (queryResult.allRequiredParamsPresent) {
        self.saveDiagnostico(queryResult.parameters.fields);
      }
      break;
  }

  return responses;
}

async function saveDiagnostico(fields) {
  const diagnostico = new Diagnostico({
    name: fields.name.stringValue,
    email: fields.email.stringValue,
    diagnostico: fields.diagnostico.stringValue,
  });

  try {
    let reg = await diagnostico.save();
    //console.log(reg);
  } catch (err) {
    console.log(err);
  }
}

async function saveMessages(fields, _id) {
  const chat = new Chat({
    user: _id,
    queryText: fields.queryText,
    fullfilmentText: fields.fulfillmentText,
  });
  //console.log(chat);
  try {
    let reg = await chat.save();
    //console.log(reg);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  textQuery,
  eventQuery,
  handleAction,
  saveMessages,
  saveDiagnostico,
};
