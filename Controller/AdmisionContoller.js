const admissions = require("../Model/Admision");

exports.getData = async (req, res) => {
  try {
    const data = await admissions.find();
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.postData = async (req, res) => {
  try {
    const data = await admissions.create(req.body);
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.putData = async (req, res) => {
  try {
    const data = await admissions.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.deletData = async (req, res) => {
  try {
    const data = await admissions.findByIdAndDelete(req.params.id);
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};
