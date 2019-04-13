var users = require("../../models").users;
var db = require("../../models");
const crypto = require("crypto");
const secret = "abcdefg";
var jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await crypto
    .createHmac("sha256", secret)
    .update(password, "utf8")
    .digest("hex");
  try {
    if (!email.includes("@") || email.includes(" ")) {
      res.status(404).send("id 제대로 입력해라");
    } else {
      await users.create({
        name: name,
        email: email,
        password: hash
      });
      res.status(201).send("회원가입 되었습니다.");
    }
  } catch (err) {
    res.status(500).send("계정 중복");
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(password, "utf8")
    .digest("hex");

  try {
    let result = await users.findOne({
      where: {
        email: email
      }
    });
    const { password } = result;
    if (password === hash) {
      var token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 30,
          date: { email: req.body.email }
        },
        secret
      );
      res.status(200).send(token);
    } else {
      res.status(401).send("비밀번호 틀림");
    }
  } catch (err) {
    res.status(402).send("아이디 틀림");
  }
};

exports.pwUpdate = async (req, res) => {
  const { email, password, newPassword, token } = req.body;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(password, "utf8")
    .digest("hex");

  const newHash = crypto
    .createHmac("sha256", secret)
    .update(newPassword, "utf8")
    .digest("hex");
  try {
    await jwt.verify(token, secret);
    let result = await users.update(
      {
        password: newHash
      },
      {
        where: { password: hash, email: email }
      }
    );
    if (result[0] === 1) {
      res.status(201).send("비밀번호가 변경되었습니다.");
    } else {
      res.status(401).send("정보가 다릅니다.");
    }
  } catch (err) {
    res.status(400).send("현재 비밀번호가 다릅니다.");
  }
};

exports.vegLevel = async (req, res) => {
  const { email, vegLevel, token } = req.body;
  try {
    await jwt.verify(token, secret);
    await users.update(
      {
        vegLevel
      },
      {
        where: { email: email }
      }
    );
    res.status(201).send("스타일이 변경되었습니다.");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
