const restaurants = require("../../models").restaurants;
const user_res = require("../../models").user_res;
const users = require("../../models").users;

exports.createRes = async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    phoneNumber,
    menu,
    imageURL,
    vegLevel,
    address
  } = req.body;
  try {
    await restaurants.create({
      name,
      latitude,
      longitude,
      phoneNumber,
      menu,
      imageURL,
      vegLevel,
      address
    });
    res.status(201).send("ok");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getRes = async (req, res) => {
  const { vegLevel } = req.body;
  try {
    let result = await restaurants.findAll({
      where: {
        vegLevel: vegLevel
      }
    });
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.search = async (req, res) => {
  const { vegLevel, query } = req.body;
  try {
    let rest = await restaurants.findAll({
      where: {
        vegLevel: vegLevel
      }
    });

    if (query.length === 0) {
      throw new Error("단어 입력");
    }

    let queryArr = query.split(" ");
    let filterRest = rest.filter(el => {
      for (let word of queryArr) {
        return el.name.includes(word) || el.menu.includes(word);
      }
    });

    if (filterRest.length === 0) {
      throw new Error("검색 결과 없음");
    }
    res.status(201).send(filterRest);
  } catch (e) {
    if (e.message === "검색 결과 없음") {
      res.status(403).send("검색 결과가 없습니다.");
    } else if (e.message === "단어 입력") {
      res.status(401).send("단어를 입력해주세요.");
    }
  }
};

exports.join = async (req, res) => {
  const { email } = req.body;
  try {
    const data = await user_res.findAll({
      where: {
        user_email: email
      },
      include: [
        {
          model: restaurants,
          required: true
        }
      ]
    });
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
};

exports.createJoin = async (req, res) => {
  const { email, resName } = req.body;

  const rest = await restaurants.findOne({
    where: {
      name: resName
    }
  });

  const state = await user_res.findOne({
    where: {
      res_name: rest.id,
      user_email: email
    }
  });

  try {
    if (!state) {
      const join = await user_res.create({
        user_email: email,
        res_name: rest.id
      });

      res.status(201).send(join);
    } else {
      throw new Error("중복");
    }
  } catch (err) {
    if (err.message === "중복") {
      res.status(400).send(err.message);
    }
    console.log(err.message);
  }
};

exports.delete = async (req, res) => {
  const { email, resName } = req.body;
  const rest = await restaurants.findOne({
    where: {
      name: resName
    }
  });
  try {
    await user_res.destroy({
      where: {
        user_email: email,
        res_name: rest.id
      }
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err.message);
  }
};
