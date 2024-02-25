import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Products.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
    } else {
      response = await Products.findAll({
        where: {
          userId: "userId",
        },
        include: [
          {
            model: User,
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductsById = (req, res) => {};

export const createProducts = (req, res) => {};

export const updateProducts = (req, res) => {};

export const deleteProducts = (req, res) => {};
