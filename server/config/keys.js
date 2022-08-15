if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// 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
