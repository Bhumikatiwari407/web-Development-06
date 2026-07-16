import Contact from "../models/contact.model.js";
import Restaurant from "../models/restaurant.model.js"; // adjust path if your folder is models/

export const GetAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find({
      status: "active",
    });

    res.status(200).json({
      success: true,
      data: restaurants,
    });
  } catch (error) {
    next(error);
  }
};

export const ContactUsForm = async (req, res, next) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;
    if (!fullName || !email || !phone || !subject || !message) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const NewContactMessage = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    res
      .status(201)
      .json({
        message: "Thanks for Contacting us! You will hear back from us soon",
      });
  } catch (error) {
    console.log(error.message);
    next();
  }
};