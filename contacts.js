// const fs = require("fs").promises;
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

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

const addContact = async (name, email, phone) => {
  await fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      throw new Error("Cannot read file");
    }
    const contacts = JSON.parse(data);

    const newContact = { id: v4(), name, email, phone };
    contacts.push(newContact);
    console.log("Contact is added!");
    console.table(newContact);

    fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
      if (error) {
        throw new Error("Cannot read file");
      }
    });
  });
};

const removeContact = async (contactId) => {
  await fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      throw new Error("Cannot read file");
    }
    const contacts = JSON.parse(data);

    const contactIdx = contacts.findIndex((item) => item.id === contactId);
    if (contactIdx === -1) {
      return null;
    }
    contacts.splice(contactIdx, 1);
    console.table(contacts);
    fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
      if (error) {
        throw new Error("Cannot read file");
      }
    });
  });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
