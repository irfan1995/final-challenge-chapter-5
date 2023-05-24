const express = require('express')
const app = express()
const port = 3050
/* mengimport data user berformat json dari folder json/user.json*/
const user = require('./json/user.json')

/* middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* mengatur view engine ejs */
app.set('view engine', 'ejs')

/* fungsi render halaman index */
function index(_, res) {
    return res.render('index');
}

/* fungsi render halaman games */
function games(_, res) {
    return res.render('games');
}

/* fungsi render halaman login */
function loginGame(_, res) {
    return res.render('login');
}

/* - fungsi login menggunakan data static json email & password 
   - ketika login berhasil akan diarahkan ke route "/games" atau halaman games,
     sebaliknya jika gagal diarahkan kembali ke route "/" atau halaman index*/
function login(req, res) {
    const users = user.find((data) => {
        return data.email == req.body.email;
    });
    if (req.body.password == users.password) {
        return res.redirect("/games");
    } else {
       res.redirect("/");
    }
}

/* Route halaman index */
app.get("/", index);

/* Route halaman games */
app.get("/games", games);

/* Route halaman loginGame */
app.get("/loginGame", loginGame);

/* Route mengirim data login */
app.post("/login", login);

/*aplikasi berjalan pada port 3050*/
app.listen(port, () => console.log(`Application listening at port ${port}`))