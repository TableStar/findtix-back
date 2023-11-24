const crypto = require("crypto");
module.exports = {
  templateResError: (rc, success, message, error, result) => {
    return {
      rc,
      success,
      message,
      error,
      result,
    };
  },
  templateResSuccess: (success, message, result) => {
    return {
      success,
      message,
      result,
    };
  },
  referralCodeyo: (username) => {
    let referralWord = [];
    for (let i = 0; i < 4; i++) {
      referralWord.push(username[i]);
    }
    const referral = (
      referralWord.join("") +
      "-" +
      crypto.randomBytes(3).toString("hex")
    ).toUpperCase();
    return referral;
  },
  cryptoHex: () => {
    return crypto.randomBytes(3).toString("hex").toUpperCase();
  },
};
