import nodemailer from "nodemailer";

export default (email, nome, amigoSecreto) => {
   const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'cyril.wehner@ethereal.email',
        pass: 'yJH3FJwA3gMA9FWc5k'
    }
});
    const mail = {
        from: "WrsDeveloper <cyril.wehner@ethereal.email>",
        to: email,
        subject: `${nome} Descubra quem você tirou no amigo secreto`,
        text: `Ola ${nome} você tirou ${amigoSecreto}, guarde bem esse segredo`,
    }
    
    return new Promise((resolve, reject) => {
        transporter.sendMail(mail)
            .then(response => {
                transporter.close();
                return resolve(response);
            })
            .catch(error => {
                transporter.close();
                return reject(error);
            });
    })
}