
module.exports = (app) => {
  /**
   * @swagger
   * /login:
   *   post:
   *     description: Login to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: Email to use for login.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   */
  app.route('/login').post((req, res) => {
    const { body } = req;
    const { email, password } = body;
    if (email.length > 0 && password.length > 4) {
      res.status(200).json({ message: 'Success', data: body });
    } else {
      res.status(401).json({ message: 'Error' })
    }
  })
}