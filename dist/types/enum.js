"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["Administrator"] = 1] = "Administrator";
    Permission[Permission["User"] = 2] = "User";
    Permission[Permission["Collaborator"] = 3] = "Collaborator";
})(Permission || (Permission = {}));
console.log(Permission.Administrator);
console.log(Permission.User);
console.log(Permission.Collaborator);
console.log(Permission['Administrator']);
console.log(Permission[3]);
