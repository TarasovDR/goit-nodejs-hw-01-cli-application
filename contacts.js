// const fs = require("fs").promises;
const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");
const listContacts = async () => {
  await fs.readFile(contactsPath, "utf-8", (error, data));
  if (error) {
    throw new Error("Cannot read file");
  }
  const contacts = JSON.parse(data);
  console.table(contacts);
};

// const contacts = require("./db/contacts.json");
// const listContacts = async () => contacts;

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
  // getContactById,
  // removeContact,
  // addContact,
};
