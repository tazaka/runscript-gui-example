/**
 * NAME: JS script example - subscript
 * SYNOPSIS: Returns data in JSON format for use in a sub-script
 * DESCRIPTION: Generates a table of example data in JSON format for use in another script as a select subscript parameter.
 * AUTHOR: RunScript Team
 * VERSION: 1.0.0
 * TAGS: Example "RunScript Team" SubScript
 * ID: rs-js-subscript-example
 * ID_KEY: login
 * FLAGS: visualize_json
 */

var data = [
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" },
  { login: "jana", jmeno: "Jana", email: "jana@email.com", telefon: "345-678-9012" },
  { login: "tomas", jmeno: "Tomáš", email: "tomas@email.com", telefon: "456-789-0123" },
  { login: "eva", jmeno: "Eva", email: "eva@email.com", telefon: "567-890-1234" },
  { login: "lukas", jmeno: "Lukáš", email: "lukas@email.com", telefon: "678-901-2345" },
  { login: "anna", jmeno: "Anna", email: "anna@email.com", telefon: "789-012-3456" },
];

var data2 = [
  { login: "martin", jmeno: "Martin", email: "martin@email.com", telefon: "123-456-7890" },
  { login: "petra", jmeno: "Petra", email: "petra@email.com", telefon: "234-567-8901" }
];

console.log("RS-EXPORT-TABLE-START:moje tabulka");
console.log(data);
console.log("RS-EXPORT-TABLE-END");

console.log("RS-EXPORT-TABLE-START: moje dalsi tabulka");
console.log(data2);
console.log("RS-EXPORT-TABLE-END");
