export const handler = async (event: any) => {
  console.log(`Event\n${JSON.stringify(event, null, 4)}`);
  return;

  // const account = JSON.parse(event.body);
  // try {
  //   await dynamodbPutRegisteredAccount(account);

  //   const response = {
  //     statusCode: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  //       'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  //     },
  //     body: JSON.stringify(account),
  //   };
  //   // console.log(`Response\n${JSON.stringify(response, null, 4)}`);

  //   return response;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
};
