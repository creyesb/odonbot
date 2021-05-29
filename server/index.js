const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false); // con esto se arregla un bug deprecation warning
/*mongoose.connect(
  "mongodb+srv://creyesb:210197@cluster0.jnxtm.mongodb.net/bot?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);*/

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/bot`,
  //`mongodb+srv://creyesb:210197@cluster0.jnxtm.mongodb.net/bot?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("");
      console.log("✨ CONECTADO A LA BD ✨");

      app.listen(port, () => {
        console.log("");
        console.log("####################");
        console.log("##### API REST #####");
        console.log("####################");
        console.log("");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
