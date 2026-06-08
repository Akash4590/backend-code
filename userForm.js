function userForm(req,resp){
resp.write(` <form action = "/submit" method = "post">
         <label>Name:</label>
         <input type="text" name="name" placeholder="Enter your name">
         <br><br>

         <label>Email:</label>
         <input type="email" name="email" placeholder="Enter your email">
         <br><br>

         <button type="submit">Submit</button>
     </form>`);
}
module.exports = userForm;