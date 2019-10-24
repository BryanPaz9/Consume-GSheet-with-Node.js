

function createNewRegister(){
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var employeeId = document.getElementById('employeeId').value;
    var nit = document.getElementById('nit').value;
    var phone = document.getElementById('phone').value;
    var mail = document.getElementById('mail').value;
    var address = document.getElementById('address').value;
    var dpi = document.getElementById('dpi').value;
    var payment = document.getElementById('payment').value;
    var company = document.getElementById('company').value;
    var date = document.getElementById('date').value;
    var account = document.getElementById('account').value;
    

     axios.post('http://localhost:3000/api/addRecord',{
         name: name,
         lastName: lastName,
         employeeId: employeeId,
         nit: nit,
         phone: phone,
         mail: mail,
         address : address,
         dpi: dpi,
         payment: payment,
         company: company,
         date: date,
         account: account
     }).then(function(response){
         console.log(response);
         
     }).catch(function(error){
         console.log(error);
     });
}