'use strict'

class UserController {
  index({ view }) {
    return view.render('accounts/index');
  }

  changePassword({ view }) {
    return view.render('accounts/change-password');
  }
  orders({ view }) {
    return view.render('accounts/orders');
  }
}

module.exports = UserController
