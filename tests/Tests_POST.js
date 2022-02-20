module.exports = {
    before: function (browser) {
 
       
         browser.globals.waitForConditionTimeout = 15000
     },
     //El siguiente bloque se comenta debido a que la URL no existe, pongo ejemplo de como sería en caso que exista.
 /*
     'API - POST': function (browser) {
         var apiUrl = 'https://api.facturasimple.uy/api/v1/usuarios/login' 
         var postData = {'email':'demo@cualit.com', 'password': 'facturasimple'}
         browser.apiPost(apiUrl, postData,null, null,function (response) {
             browser.assert.equal(response.statusCode, '200', '200 OK')
             browser.assert.equal(response.body.email, 'demo@cualit.com')
             browser.assert.equal(response.body.password, 'facturasimple')
         })
     },
*/
'API - POST': function (browser) {
    var apiUrl = 'https://reqres.in/api/users'
    var postData = {
    "email": "demo@cualit.com",
    "first_name": "Demo",
    "last_name": "Admin",
    "avatar": ""}
    browser.apiPost(apiUrl, postData, null, null, function (response) {
        browser.assert.equal(response.statusCode, '201', 'Success:True')
        browser.assert.equal(response.body.email, 'demo@cualit.com', 'The email was created successfully')
        browser.assert.equal(response.body.first_name, 'Demo', 'The name was created successfully')
    })
},

'API - GET': function (browser) {
    var apiUrl = 'https://reqres.in/api/users'
    browser.apiGet(apiUrl, function (response) {
        var data = JSON.parse(response.body)
        browser.assert.equal(response.statusCode, '200')
    })
},
 
     after: function (browser) {
         browser.end()
     }
 }