if (global.JOS && typeof global.JOS.registerVersion == "function") {
  global.JOS.registerVersion(global.JOS.self)("icons")(
    global.hyperupi_icons_version
  )()
};
global.getIcons = function () {
    var os = global.__OS
    var isApp = os
      ? os.toLowerCase() == "ios" || os.toLowerCase() == "android"
      : false
    var extension = isApp ? "" : ".png"
    function getImageHost(key) {
      var imageHosts = {
        imageHost0:
          "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/studiojuspay/images/",
        imageHost1:
          "https://sandbox.assets.juspay.in/hyper/assets/in.juspay.merchants/images/testupi/",
        imageHost7: "https://assets.juspay.in/hyper/images/themes/boxedlayout/",
        imageHost28: "",
      }
      return isApp ? "" : imageHosts[key]
    }
    return JSON.stringify(
      {
      txnHistoryIncomingDeclined:"https://customUrl.com/ownPath/jp_incoming_declined.png",
      txnHistoryIncomingExpired:"https://customUrl.com/ownPath/jp_incoming_declined.png",
      txnHistoryIncomingFailed:"https://customUrl.com/ownPath/jp_incoming_failed.png",
      txnHistoryIncomingPending:"https://customUrl.com/ownPath/jp_incoming_pending.png",
      txnHistoryIncomingSuccess:"https://customUrl.com/ownPath/jp_incoming_success.png",
      txnHistoryOutgoingDeclined:"https://customUrl.com/ownPath/jp_outgoing_declined.png",
      txnHistoryOutgoingExpired:"https://customUrl.com/ownPath/jp_outgoing_declined.png",
      txnHistoryOutgoingFailed:"https://customUrl.com/ownPath/jp_outgoing_failed.png",
      txnHistoryOutgoingPending:"https://customUrl.com/ownPath/jp_outgoing_pending.png",
      txnHistoryOutgoingSuccess:"https://customUrl.com/ownPath/jp_outgoing_success.png",
      // iconsChanged: ["mgmtCopy", "mgmtOptionsPendingMandate", "unselectedRadioButton", "chevronRight", "rupaySymbol", "defBank", "tickSuccess", "searchSpotlight", "brandingBhimUpi", "initials_a","initials_b","initials_c","initials_d","initials_e","initials_f","initials_g","initials_h","initials_i","initials_j","initials_k","initials_l","initials_m","initials_n","initials_o","initials_p","initials_q","initials_r","initials_s","initials_t","initials_u","initials_v","initials_w","initials_x","initials_y","initials_z"],
      iconsChanged: ["all"],
    })
  }
