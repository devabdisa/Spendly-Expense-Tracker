const User = require("../models/User");
const Expense = require("../models/Expense");
const xlsx = require("xlsx");

// Add Expense Source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;

    // Validation: check for missing required fields
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newExpense = new Expense({
      userId,
      icon: icon || "",
      category,
      amount: Number(amount),
      date: new Date(date),
    });

    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Expense Source
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 }); // sort in DB query
    res.json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Expense Source
exports.deleteExpense = async (req, res) => {
  const userId = req.user.id; // from your authMiddleware

  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId, // ensures the expense belongs to this user
    });

    if (!expense) {
      return res
        .status(404)
        .json({ message: "Expense not found or not authorized" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Download excel
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    //Prepare data for excel
    const data = expense.map((item) => ({
      category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expense");
    xlsx.writeFile(wb, "expense_details.xlsx");
    res.download("expense_details.xlsx");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
