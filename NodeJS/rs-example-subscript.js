/**
 * NAME: JS script example - subscript
 * SYNOPSIS: Vrací data jako JSON pro použití v subscript
 * DESCRIPTION: Vygeneruje tabulku example dat ve formátu JSON kterou použijeme v nějakém jiném scriptu jako subscript select parameter
 * AUTHOR: RunScript Team
 * VERSION: 1.0.0
 * TAGS: Example "RunScript Team"
 * ID: rs-js-subscript-example
 * ID_KEY: login
 */

var data = [
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
];

console.log("RS-EXPORT-TABLE-START");
console.log(data);
console.log("RS-EXPORT-TABLE-END");
