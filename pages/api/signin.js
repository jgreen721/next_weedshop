import { db } from "../../firebase";
import { setDoc, doc, onSnapshot, collection } from "firebase/firestore";
import withAuth from "../../middleware/withAuth";

async function handler(req, res) {
  console.log("RESPONSE", req.data);
  console.log(Buffer.from(req.data));
  switch (req.data.msg) {
    case "login":
      console.log("HandleLOGIN Fired");
      onSnapshot(collection(db, "weed-smokers"), (snapshot) => {
        let users = snapshot.docs.map((d) => ({ _id: d.id, ...d.data() }));
        console.log("Users", users);
      });
      break;

    case "register":
      console.log("handleRegister FIRED");
      await setDoc(doc(db, "weed-smokers", req.body.id), req.body);

      break;

    default:
      console.log("Error: unknown action");
  }
  console.log("/signin fired!", req.body);
}

export default withAuth(handler);
