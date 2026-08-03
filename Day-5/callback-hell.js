function login(callback){
    console.log("Order Sucessfull");
    callback();
}
function getProfile(callback){
    console.log("Profile Logining");
    callback();
}
function getOrders(callback){
    console.log("Order Conform");
    callback();
}
function makePayment(callback){
    console.log("Payment Conform");
    callback();
}

login(() =>{

    getProfile(() =>{

        getOrders(() =>{

            makePayment(() => {

                console.log("Order Complted");
            });
        });
    });
});