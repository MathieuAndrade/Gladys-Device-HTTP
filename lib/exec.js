module.exports = function exec(params){
    var newState;
    string request;
    
    switch(params.state.value){
      case 0:
      gladys.utils.request(params.request.id);  
      break;

      case 1:
      gladys.utils.request(params.request.id); 
      break;
            
      default:
            if(value != 0 || value != 1){
                console.log("Erreur de données !");
            }
    }
};
