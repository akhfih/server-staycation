const mongoose = required("mongoose");
const { objectId } = mongoose.Schema;
const bookingSchema = mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: objectId,
        ref: "Item",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      night: {
        type: String,
        required: true,
      },
    },
  ],
  memberId: {
    type: objectId,
    ref: "Member",
  },
  bankId: {
    type: objectId,
    ref: "Bank",
  },
  proffPayment: {
    type: String,
    required: true,
  },
  bankForm: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
