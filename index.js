const argv = require("yargs").argv;

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const data = await contactsOperations.listContacts();
        console.table(data);
        break;

      // case "get":
      //   contactsOperations.getContactById();
      //   break;

      // case "add":
      //   contactsOperations.removeContact();
      //   break;

      // case "remove":
      //   contactsOperations.addContact();
      //   break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
};

invokeAction(argv);
// invokeAction("list")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
