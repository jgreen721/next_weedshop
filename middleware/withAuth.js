const withAuth = (handler) => {
  return async (req, res) => {
    console.log("middleware fired!");

    for (let i in req.body) {
      if (req.body[i] === "") {
        console.log("ERROR IN INPUT Values");
        req.data = { status: 403, msg: "error" };
      }
      if (i === "id") {
        console.log("has ID, FWD n REG user");
        req.data = { msg: "register", status: 200 };
      }
    }
    console.log("LOGIN USER", req.body);
    req.data = { msg: "login", status: 200 };
    return handler(req, res);
  };
};

export default withAuth;
