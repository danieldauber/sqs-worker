const axios = require("axios");
let url = process.env.URL

exports.handler = async function (event, context) {
  event.Records.forEach(async (record) => {
    const { body, messageAttributes } = record;
    
    console.log(messageAttributes);
    const param = messageAttributes.path.stringValue;

    await axios
      .post(
        `${url}`,
        {
          param,
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
