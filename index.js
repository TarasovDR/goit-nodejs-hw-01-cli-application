const argv = require("yargs").argv;

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const data = await contactsOperations.listContacts();
        console.table(data);
        break;

      case "get":
        const contactById = await contactsOperations.getContactById(id);
        console.table(contactById);
        break;

      case "add":
        const newContact = await contactsOperations.addContact(
          name,
          email,
          phone
        );
        console.table(newContact);
        break;

      // case "remove":
      //   const removeContact = await contactsOperations.removeContact(id);
      //   console.table(removeContact);
      //   break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
};

invokeAction(argv);
