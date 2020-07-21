const axios = require("axios");

exports.handler = async function (event, context) {
  event.Records.forEach(async (record) => {
    const { body, messageAttributes } = record;

    const path = messageAttributes.path.stringValue;
    const client_id = messageAttributes.cliente_id.stringValue;
    const doc_id = messageAttributes.doc_id.stringValue;
    const token = messageAttributes.token.stringValue;

    console.log(`Attributes: ${path}`);
    console.log(`Attributes: ${client_id}`);
    console.log(`Attributes: ${doc_id}`);
    console.log(`Attributes: ${token}`);

    await axios
      .post(
        path,
        {
          client_id,
          doc_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Message: " + body);
      });
  });
  return {};
};
