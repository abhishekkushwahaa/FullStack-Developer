// try: Wrap up the code which can throw the error
// catch: Write the code to do something when error occurs
// finally: it will always executed

try{
  let firstName = "Abhishek"
  console.log(firstName + "" + lastName);
} catch (err){
  console.log(err);
} finally {
  console.log("Important Operations");
}
