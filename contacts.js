// const fs = require("fs").promises;
const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const listContacts = async () => {
  await fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      throw new Error("Cannot read file");
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
};

const getContactById = async (contactId) => {
  await fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      throw new Error("Cannot read file");
    }
    const contacts = JSON.parse(data);

    const contact = contacts.find((item) => item.id === contactId);
    if (!contact) {
      return null;
    }
    console.table(contact);
  });
};

function removeContact(contactId) {
  // ...твой код
}

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  // listContacts,
  getContactById,
  // removeContact,
  // addContact,
};
