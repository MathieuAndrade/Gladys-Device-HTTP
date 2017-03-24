module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.value){
      case 0:
      gladys.utils.request(params.deviceType.id);  
      break;

      case 1:
      gladys.utils.request(params.deviceType.id); 
      break;
            
      default:
            if(value != 0 || value != 1){
                console.log("Erreur de données !");
            }
    }
};
