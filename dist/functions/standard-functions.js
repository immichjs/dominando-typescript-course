"use strict";
function sendEmail(to, subject = 'Sem assunto', from) {
    console.log({
        to,
        subject,
        from
    });
}
sendEmail('mich@dev.com');
sendEmail('mich@dev.com', 'Hello World');
